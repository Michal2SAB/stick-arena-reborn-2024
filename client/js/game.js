const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let scaleFactor = Math.min(canvas.width / 550, canvas.height / 400);

let tilemap = Constants.TILEMAP;

//let tiles = {};
const collisionData = [];

const gameSettings = {
  mapWidth: 0,
  mapHeight: 0
};


function drawMap() {
  const tileSize = Constants.tileSize;
  gameSettings.mapWidth = 35; // 35
  gameSettings.mapHeight = 24; // 24

  const startX = Math.max(0, Math.floor(camera.x / (tileSize * scaleFactor)));
  const startY = Math.max(0, Math.floor(camera.y / (tileSize * scaleFactor)));

  const endX = Math.min(gameSettings.mapWidth, startX + Math.ceil(canvas.width / (tileSize * scaleFactor)) + 1);
  const endY = Math.min(gameSettings.mapHeight, startY + Math.ceil(canvas.height / (tileSize * scaleFactor)) + 1);

  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      let index = y * gameSettings.mapWidth + x;
      const tile = tilemap[index];
      const rotation = parseInt(tile[3]); // Get rotation value for this tile
      const flip = parseInt(tile[4]);

      // Apply rotation transformation
      ctx.save(); // Save the current canvas state
      ctx.translate((x + 0.5) * tileSize * scaleFactor, (y + 0.5) * tileSize * scaleFactor); // Translate to the center of the tile
      ctx.rotate(Constants.rotationKeys[rotation] * Math.PI / 180); // Rotate by the specified angle (converted to radians)

      // Apply flip transformation
      var xScale = 1;
      var yScale = 1;
      if (flip == 1 || flip == 3) {
        xScale = -1;
      }
      if (flip == 2 || flip == 3) {
        yScale = -1;
      }
      ctx.scale(xScale, yScale);

      try {
        const tileData = Constants.tiles[tile];
        ctx.drawImage(tileData.image, -0.5 * tileSize * scaleFactor, -0.5 * tileSize * scaleFactor, tileSize * scaleFactor, tileSize * scaleFactor); // Draw the rotated image

        // Set global alpha for the mask
        ctx.globalAlpha = 0.5; // Set the desired alpha value (adjust as needed)

        ctx.drawImage(tileData.mask, -0.5 * tileSize * scaleFactor, -0.5 * tileSize * scaleFactor, tileData.mask.width, tileData.mask.height); // Draw the mask
      } catch (error) {
          console.error(`Failed to draw tile at (${x}, ${y}):`, error);
          console.log("Responsible tile:", tile);
      }
      // Reset global alpha to 1 for other drawings
      ctx.globalAlpha = 1;

      ctx.restore(); // Restore the canvas state
    }
  }
}

function drawHealthBar() {
  const health = playerManager.mainPlayer.health + 96;

  let x = 53;
  let y = 20;
  const width = 197;
  let height = 9;

  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  playerManager.mainPlayer.healthbarHeart.draw(ctx);
  const healthbar = new Image();
  const healthbarRed = new Image();
  healthbar.src = 'sprites/player/healthbar.png';
  healthbarRed.src = 'sprites/player/healthbarRed.png'

  ctx.drawImage(healthbar, 50, 17, 204, 15);

  // Calculate the clipping region for healthbarRed
  const clipWidth = Math.min(health, width);

  // Clipping the canvas to restrict the visible area for healthbarRed
  ctx.beginPath();
  ctx.rect(x, y, clipWidth, height);
  ctx.clip();

  ctx.drawImage(healthbarRed, x, y, health, height);

  ctx.restore()
}

function drawLeaderBoard() {
  const leaderboardWidth = 315;
  const leaderboardHeight = 197;

  // Calculate the position to center the leaderboard on the canvas
  const canvasCenterX = canvas.width / 2;
  const canvasCenterY = canvas.height / 2;
  const leaderboardX = canvasCenterX - (leaderboardWidth / 2);
  const leaderboardY = canvasCenterY - (leaderboardHeight / 2);

  ctx.save();
  // Apply global alpha only for the leaderboard drawing
  if (!playerManager.mainPlayer.showLeaderboard) {
    ctx.globalAlpha = 0;
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  const leaderBoard = new Image();
  leaderBoard.src = 'sprites/windows/leaderboard.png';

  ctx.drawImage(leaderBoard, leaderboardX, leaderboardY, leaderboardWidth, leaderboardHeight);

  ctx.restore();
}

// Function to draw the button
function drawSettings() {
  const imageSrc = settingsBtn.isClicked ? settingsBtn.clickImage : (settingsBtn.isHovered ? settingsBtn.hoverImage : settingsBtn.defaultImage);

  const buttonImage = new Image();
  buttonImage.src = imageSrc;

  ctx.drawImage(buttonImage, button.x, button.y, button.width, button.height);
}

function drawHUD() {
  drawHealthBar();
  drawLeaderBoard();
}

function update() {
  playerManager.updatePlayers();
}

function draw() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(-camera.x, -camera.y);
  ctx.scale(scaleFactor, scaleFactor);

  drawMap();
  playerManager.drawPlayers(ctx);
  drawHUD();
}

function loop() {
  update();
  draw();
  handlePlayerMovement();
  checkAndShoot();
  requestAnimationFrame(loop);
}

// Assuming you have an array of tilemap objects where each object contains the tile information including rotation and collision type

// Load tiles function
function loadTiles() {
  for (const tileIndex in tilemap) {
    const rawTile = tilemap[tileIndex].substring(0, 3);
    const rotation = tilemap[tileIndex][3]; // Get rotation value for this tile
    const collision = tilemap[tileIndex].charAt(tilemap[tileIndex].length - 1);
    const tileImg = new Image();
    tileImg.src = `sprites/maps/tiles/${rawTile}.png`;

    const maskImg = new Image();
    maskImg.src = `sprites/maps/collisions/${collision}.png`; // Assuming mask images are named accordingly

    // Store tile and mask images along with their properties
    Constants.tiles[tilemap[tileIndex]] = {
      image: tileImg,
      mask: maskImg,
      rotation: rotation, // Store rotation for later use
      maskInfo: {} // Placeholder for mask properties
    };

    // Calculate rotated width and height of the mask
    const tileData = Constants.tiles[tilemap[tileIndex]];
    const rotatedWidth = maskImg.width * Math.abs(Math.cos(rotation * Math.PI / 180)) + maskImg.height * Math.abs(Math.sin(rotation * Math.PI / 180));
    const rotatedHeight = maskImg.height * Math.abs(Math.cos(rotation * Math.PI / 180)) + maskImg.width * Math.abs(Math.sin(rotation * Math.PI / 180));

    // Calculate rotated position (x, y) of the mask image
    const xCenter = 0; // Assuming mask is centered around its origin
    const yCenter = 0; // Assuming mask is centered around its origin
    const rotatedX = xCenter * Math.cos(rotation * Math.PI / 180) - yCenter * Math.sin(rotation * Math.PI / 180);
    const rotatedY = xCenter * Math.sin(rotation * Math.PI / 180) + yCenter * Math.cos(rotation * Math.PI / 180);

    // Store mask properties after rotation
    tileData.maskInfo.x = rotatedX;
    tileData.maskInfo.y = rotatedY;
    tileData.maskInfo.width = rotatedWidth;
    tileData.maskInfo.height = rotatedHeight;
  }
}

document.addEventListener("keydown", handleKeyPress, false);
document.addEventListener("keyup", handleKeyRelease, false);
document.addEventListener("blur", handleBlur)
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("mousedown", onMouseDown);
document.addEventListener("mouseup", onMouseUp, false);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === "width" || mutation.attributeName === "height") {
      scaleFactor = Math.min(canvas.width / 550, canvas.height / 400);
    }
  });
});

observer.observe(canvas, { attributes: true });

playerManager.createMainPlayer();

loadTiles();
loop();
