class Camera {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.tileSize = 50;
  }
  
  setPos(player) {
    // Calculate the maximum allowed positions for the camera
    const maxCameraX = gameSettings.mapWidth * this.tileSize * scaleFactor - canvas.width;
    const maxCameraY = gameSettings.mapHeight * this.tileSize * scaleFactor - canvas.height;

    // Calculate the desired camera position centered around the player
    const desiredX = (player.x * scaleFactor) - canvas.width / 2;
    const desiredY = (player.y * scaleFactor) - canvas.height / 2;

    // Clamp the camera position to ensure it stays within the map boundaries
    this.x = Math.max(0, Math.min(desiredX, maxCameraX));
    this.y = Math.max(0, Math.min(desiredY, maxCameraY));
  }
}

const camera = new Camera();
