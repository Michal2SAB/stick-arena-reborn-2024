function mouseMoveHandler(event) {
  if (playerManager.mainPlayer.isRespawning) return;

  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const playerX = playerManager.mainPlayer.body.x * scaleFactor - camera.x;
  const playerY = playerManager.mainPlayer.body.y * scaleFactor - camera.y;

  const spriteRotation = Math.atan2(mouseY - playerY, mouseX - playerX) + (90 * Constants.TO_RADIANS);
  playerManager.mainPlayer.body.setRotation(spriteRotation);
}

function onMouseDown(event) {
  if (event.button !== Constants.LEFT_MOUSE_BUTTON) return;
  if (!playerManager.mainPlayer.canShoot || playerManager.mainPlayer.isRespawning) return;
  Constants.leftclick = true;
  Constants.shooting = true;

  //playerManager.mainPlayer.shoot(directionX, directionY);
}

function onMouseUp(event) {
  if (event.button !== Constants.LEFT_MOUSE_BUTTON) return;
  Constants.leftclick = false;
  
  if(!Constants.spacebar) {
    Constants.shooting = false;
  }

  //playerManager.mainPlayer.shoot(directionX, directionY);
}
