class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health = 100;
    this.canMove = true;
    this.canShoot = true;
    this.isRespawning = false;
    this.isMainPlayer = false;
    this.previousPosition = { x: -1, y: -1, rotation: -1 };
    this.showLeaderboard = false;

    this.body = new GameObjectBuilder()
      .withSpritesheetName("glock-stance")
      .withX(x)
      .withY(y)
      .build();

    this.legs = new GameObjectBuilder()
      .withSpritesheetName("legs-walking")
      .withX(x)
      .withY(y)
      .withIsVisible(false)
      .withRepeatTimes(1)
      .build();

    this.hitsplat = new GameObjectBuilder()
      .withSpritesheetName("glock-hitsplat")
      .withX(x)
      .withY(y)
      .withIsVisible(false)
      .withRepeatTimes(1)
      .build();

    this.deathSoul = new GameObjectBuilder()
      .withSpritesheetName("death-soul")
      .withX(x)
      .withY(y)
      .withIsVisible(false)
      .withRepeatTimes(1)
      .build();

    this.body.addEventListener("animationcomplete", (data) => {
      const animationName = data.name;

      if (animationName === "death") {
        this.health = 100;
        this.isRespawning = false;
        this.canShoot = true;
        this.canMove = true;
        this.deathSoul.isVisible = false;

        if (this.isMainPlayer) {
          this.healthbarHeart.swapSpritesheet("heartbeat-healthy");
          this.respawn();
        }
      } else if (animationName === "glock-shoot") {
        this.canShoot = true;
      }

      this.body.resetAnimation();
    })

    this.legs.addEventListener("animationcomplete", () => {
      this.canMove = true;
      this.legs.isVisible = false;
      this.legs.resetAnimationRepeat(1);
    });

    this.hitsplat.addEventListener("animationcomplete", () => {
      this.hitsplat.isVisible = false;
    });

    this.body.addEventListener("shotsfired", this.checkCollision.bind(this));
  }

  checkCollision(data) {
    if (!this.isMainPlayer) return;

    const playerPos = data.playerPos;
    const rotation = this.body.rotation;
    const transformedPoint = Physics.calculateTransformedPoint(
      playerPos.x, playerPos.y, this.body.spritesheetData.spriteCenter, rotation
    );
    const playerX = transformedPoint.x;
    const playerY = transformedPoint.y;
    const hitboxOffsets = this.body.spritesheetData.hitboxOffsets;

    const hitboxRegion = {
      topLeft: {
        x: playerX + hitboxOffsets.topLeft.x, y: playerY + hitboxOffsets.topLeft.y
      },
      topRight: {
        x: playerX + hitboxOffsets.topRight.x, y: playerY + hitboxOffsets.topRight.y
      },
      bottomLeft: {
        x: playerX + hitboxOffsets.bottomLeft.x, y: playerY + hitboxOffsets.bottomLeft.y
      },
      bottomRight: {
        x: playerX + hitboxOffsets.bottomRight.x, y: playerY + hitboxOffsets.bottomRight.y
      }
    };

    // Transform the coordinates to account for rotation
    for (const coordinate in hitboxRegion) {
      const expectedPoint = hitboxRegion[coordinate];
      const xyTest = Physics.rotatePoint(playerX, playerY, expectedPoint.x, expectedPoint.y, rotation);

      hitboxRegion[coordinate].x = xyTest.x;
      hitboxRegion[coordinate].y = xyTest.y;
    }

    const otherPlayers = playerManager.getPlayers();
    for (const playerId in otherPlayers) {
      const otherPlayer = otherPlayers[playerId];
      if (otherPlayer.isMainPlayer) continue;
      if (otherPlayer.isRespawning) continue;
      if (Physics.checkForObstacles(playerPos, otherPlayer.getPosition())) continue;
      if (Physics.isCircleCollidingRect(otherPlayer.getPosition(), hitboxRegion)) {
        socketManager.emit("playerHit", { playerId: playerId });
      }
    }
  }

  setPosition(x, y, rotation) {
    this.body.setPosition(x, y);
    if (rotation) {
      this.body.setRotation(rotation);
    }
  }

  getPosition() {
    return {
      x: this.body.x,
      y: this.body.y,
      rotation: this.body.rotation
    }
  }

  isPositionChanged(currentPosition) {
    return currentPosition.x !== this.previousPosition.x
      || currentPosition.y !== this.previousPosition.y
      || currentPosition.rotation !== this.previousPosition.rotation;
  }

  playWalkingAnim(legRotation = 0) {
    this.legs.isVisible = true;
    this.canMove = false;
    this.legs.setPosition(this.body.x, this.body.y);
    this.legs.setRotation(legRotation * Constants.TO_RADIANS);

    if (!this.canMove && this.body.spritesheetData.spritesheetName === "glock-stance") {
      this.body.swapSpritesheet("glock-walk", 1);
    }
  }

  move(speedX, speedY = null, legRotation = 0) {
    this.action = "walk";
    let newTileX;
    let newTileY;

    this.x = this.body.x;
    this.y = this.body.y;

    if (speedX != null) {
      newTileX = Math.floor((this.x + speedX) / 50);
    } else {
      newTileX = Math.floor(this.x / 50);
    }

    if (speedY != null) {
      newTileY = Math.floor((this.y + speedY) / 50);
    } else {
      newTileY = Math.floor(this.y / 50);
    }

    if(this.getObstacles(newTileX, newTileY, speedX, speedY)) {
      speedX = 0;
      speedY = 0;
    }

    if (speedX != null) {
      this.body.setVelocityX(speedX);
    }

    if (speedY != null) {
      this.body.setVelocityY(speedY);
    }

    this.playWalkingAnim(legRotation);

    if (this.isMainPlayer) {
      socketManager.emit("playedWalkingAnimation", { rotation: legRotation });
    }
  }

  shoot() {
    if(this.canShoot) {
      if (this.isMainPlayer) {
        socketManager.emit("playedShoot");
      }

      this.body.swapSpritesheet("glock-shoot", 1);
      this.canShoot = false;
    }
  }

  death() {
    this.health = -97;
    this.body.swapSpritesheet("death", 1);
    this.isRespawning = true;
    this.canShoot = false;
    this.canMove = false;

    this.deathSoul.setPosition(this.body.x, this.body.y);
    this.deathSoul.resetAnimationRepeat(1);
    this.deathSoul.isVisible = true;
  }

  respawn() {
    const randomIndex = Math.floor(Math.random() * Constants.PLAYER_SPAWN_POINTS.length);
    const { x, y } = Constants.PLAYER_SPAWN_POINTS[randomIndex];

    this.body.setPosition(x, y);

    socketManager.emit("playerMoved", { x: x, y: y, isRespawning: true });
  }

  showHitsplat() {
    this.hitsplat.isVisible = true;
    this.hitsplat.setPosition(this.body.x, this.body.y);
    this.hitsplat.resetAnimationRepeat(1);
    this.health -= 20 + 19.4;

    if (this.isMainPlayer) {
      if (this.health >= 75 && this.healthbarHeart.spritesheetData.spritesheetName !== "heartbeat-healthy") {
        this.healthbarHeart.swapSpritesheet("heartbeat-healthy");
      } else if (this.health > 20 && this.healthbarHeart.spritesheetData.spritesheetName !== "heartbeat-impacted") {
        this.healthbarHeart.swapSpritesheet("heartbeat-impacted");
      } else if (this.health <= 20 && this.healthbarHeart.spritesheetData.spritesheetName !== "heartbeat-critical") {
        this.healthbarHeart.swapSpritesheet("heartbeat-critical");
      }
    }
  }

  update() {
    this.legs.update();
    this.body.update();
    this.hitsplat.update();
    this.deathSoul.update();

    if (this.isMainPlayer) {
      this.healthbarHeart.update();
    }

    const currentPosition = this.getPosition();
    if (this.isPositionChanged(currentPosition) && this.isMainPlayer) {
      socketManager.emit("playerMovement", currentPosition);
      this.previousPosition = currentPosition;
    }
  }

  draw(ctx) {
    // If the player can't move then that means they're in motion
    if (!this.canMove) {
      this.legs.draw(ctx);
    }
    this.body.draw(ctx);
    this.hitsplat.draw(ctx);
    if (this.isRespawning) {
      this.deathSoul.draw(ctx);
    }
  }

  getObstacles(newTileX, newTileY, speedX, speedY) {
    const tileName = Constants.TILEMAP[newTileY * gameSettings.mapWidth + newTileX]; // 35 aka the map height

    const rotation = tileName[3]; // Get rotation value for this tile
    const flip = tileName[4];
    let collision = tileName[5];

    let collisionShape = null;

    // Check if the player is moving towards the edges of the map
    const isAtEdge = newTileX === 0 || newTileX === gameSettings.mapWidth - 1 || newTileY === 0 || newTileY === gameSettings.mapHeight - 1;

    // If the player is moving towards the edges, set collision to 4
    collision = isAtEdge ? 4 : Constants.TILEMAP[newTileY * gameSettings.mapWidth + newTileX][5];

    switch (parseInt(collision)) {
      case 0:
      case 1:
      case 2:
        // The entire tile is walkable
        collisionShape = null; // No need to define a collision shape for walkable tiles
        break;
      case 3:
      case 4:
        // The entire tile is an obstacle
        collisionShape = { x: -1, y: -1, width: 52, height: 52 };
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        if (parseInt(flip) > 0) {
          collisionShape = Constants.colTransforms[collision].rotations[rotation].flips[flip];
          console.log("col: " + collision)
          console.log("rotation: " + rotation)
          console.log("flip: " + flip)
          console.log(collisionShape)
          
        } else {
          collisionShape = Constants.colTransforms[collision].rotations[rotation];
        }
        break;
      case 9:
        if (parseInt(flip) > 0) {
          collisionShape = [];
          console.log(collision)
          collisionShape.push(Constants.colTransforms[collision].Lfirst.rotations[rotation].flips[flip]);
          collisionShape.push(Constants.colTransforms[collision].Lsecond.rotations[rotation].flips[flip]);
        } else {
          console.log(collision)
          collisionShape = [];
          collisionShape.push(Constants.colTransforms[collision].Lfirst.rotations[rotation]);
          collisionShape.push(Constants.colTransforms[collision].Lsecond.rotations[rotation]);
        }
        break
    }

    // Check for collision only if collision shape is defined
    if (collisionShape != null && !Array.isArray(collisionShape)) {
      // Calculate the player's local position within the tile
      const localPlayerX = (this.x + (speedX || 0)) % 50;
      const localPlayerY = (this.y + (speedY || 0)) % 50;

      // Calculate the center of the circular area (head radius)
      const playerCenterX = localPlayerX + Constants.STICK_FIGURE_HEAD_RADIUS;
      const playerCenterY = localPlayerY + Constants.STICK_FIGURE_HEAD_RADIUS;

      // Calculate the closest point on the rectangle to the circle
      const closestX = this.clamp(playerCenterX, collisionShape.x, collisionShape.x + collisionShape.width);
      const closestY = this.clamp(playerCenterY, collisionShape.y, collisionShape.y + collisionShape.height);

      // Calculate the distance between the circle's center and the closest point
      const distanceX = playerCenterX - closestX;
      const distanceY = playerCenterY - closestY;

      // Check if the distance is less than or equal to the circle's radius
      if ((distanceX * distanceX + distanceY * distanceY) <= (Constants.STICK_FIGURE_HEAD_RADIUS * Constants.STICK_FIGURE_HEAD_RADIUS)) {
          // Collision detected, player cannot move
          return true;
      }
    } else if (collisionShape != null && collisionShape instanceof Array) {
      for (let shape of collisionShape) {
        console.log(collisionShape)
        console.log(rotation)
        console.log(flip)
        // Calculate the player's local position within the tile
        const localPlayerX = (this.x + (speedX || 0)) % 50;
        const localPlayerY = (this.y + (speedY || 0)) % 50;

        // Calculate the center of the circular area (head radius)
        const playerCenterX = localPlayerX + Constants.STICK_FIGURE_HEAD_RADIUS;
        const playerCenterY = localPlayerY + Constants.STICK_FIGURE_HEAD_RADIUS;

        // Calculate the closest point on the rectangle to the circle
        const closestX = this.clamp(playerCenterX, shape.x, shape.x + shape.width);
        const closestY = this.clamp(playerCenterY, shape.y, shape.y + shape.height);

        // Calculate the distance between the circle's center and the closest point
        const distanceX = playerCenterX - closestX;
        const distanceY = playerCenterY - closestY;

        // Check if the distance is less than or equal to the circle's radius
        if ((distanceX * distanceX + distanceY * distanceY) <= (Constants.STICK_FIGURE_HEAD_RADIUS * Constants.STICK_FIGURE_HEAD_RADIUS)) {
            // Collision detected, player cannot move
            return true;
        }
      }
    }
  }

  clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
  }
}