const KEYS = {
  W: "w",
  A: "a",
  S: "s",
  D: "d",
  ARROW_UP: "arrowup",
  ARROW_LEFT: "arrowleft",
  ARROW_DOWN: "arrowdown",
  ARROW_RIGHT: "arrowright",
  SPACE: " ",
  SHIFT: "shift",
  TAB: "tab"
};

let keys = {
  [KEYS.W]: false,
  [KEYS.A]: false,
  [KEYS.S]: false,
  [KEYS.D]: false
};

function handleKeyPress(event) {
  const pressedKey = event.key.toLowerCase();
  switch (pressedKey) {
    case KEYS.W:
    case KEYS.ARROW_UP:
      keys[KEYS.W] = true;
      break;
    case KEYS.A:
    case KEYS.ARROW_LEFT:
      keys[KEYS.A] = true;
      break;
    case KEYS.S:
    case KEYS.ARROW_DOWN:
      keys[KEYS.S] = true;
      break;
    case KEYS.D:
    case KEYS.ARROW_RIGHT:
      keys[KEYS.D] = true;
      break;
    case KEYS.TAB:
      event.preventDefault();
    case KEYS.SPACE:
      Constants.spacebar = true;
      Constants.shooting = true;
      break;
    case KEYS.SHIFT:
      playerManager.mainPlayer.showLeaderboard = true;
      break;
  }
  // Prevent default behavior for all keys to avoid interference with browser shortcuts
  event.preventDefault();
}

function handleKeyRelease(event) {
  const releasedKey = event.key.toLowerCase();
  switch (releasedKey) {
    case KEYS.W:
    case KEYS.ARROW_UP:
      keys[KEYS.W] = false;
      break;
    case KEYS.A:
    case KEYS.ARROW_LEFT:
      keys[KEYS.A] = false;
      break;
    case KEYS.S:
    case KEYS.ARROW_DOWN:
      keys[KEYS.S] = false;
      break;
    case KEYS.D:
    case KEYS.ARROW_RIGHT:
      keys[KEYS.D] = false;
      break;
    case KEYS.SPACE:
      Constants.spacebar = false;
      if(!Constants.leftclick) {
        Constants.shooting = false;
      }
    case KEYS.SHIFT:
      playerManager.mainPlayer.showLeaderboard = false;
      break;
  }
}

function handleBlur() {
  keys = {
    [KEYS.W]: false,
    [KEYS.A]: false,
    [KEYS.S]: false,
    [KEYS.D]: false
  };
}

function handlePlayerMovement() {
  if (playerManager.mainPlayer.isRespawning) return;

  const { w, a, s, d } = keys;

  if (w && d) {
    playerManager.mainPlayer.move(Constants.SPEED / 1.25, -Constants.SPEED / 1.25, 45);
  } else if (w && a) {
    playerManager.mainPlayer.move(-Constants.SPEED / 1.25, -Constants.SPEED / 1.25, 135);
  } else if (s && d) {
    playerManager.mainPlayer.move(Constants.SPEED / 1.25, Constants.SPEED / 1.25, -45);
  } else if (s && a) {
    playerManager.mainPlayer.move(-Constants.SPEED / 1.25, Constants.SPEED / 1.25, -315);
  } else if (w) {
    playerManager.mainPlayer.move(null, -Constants.SPEED, 0);
  } else if (a) {
    playerManager.mainPlayer.move(-Constants.SPEED, null, 90);
  } else if (s) {
    playerManager.mainPlayer.move(null, Constants.SPEED, 0);
  } else if (d) {
    playerManager.mainPlayer.move(Constants.SPEED, null, 90);
  } else {
    playerManager.mainPlayer.action = "stance";
  }
}

// Function to handle shooting action
function checkAndShoot() {
  if (Constants.shooting) {
    if(!playerManager.mainPlayer.canShoot | !playerManager.mainPlayer.isRespawning) {
      playerManager.mainPlayer.action = "shoot";
      playerManager.mainPlayer.shoot();
    }
  }
}