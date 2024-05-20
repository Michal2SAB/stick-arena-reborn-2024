# stick-arena-reborn
A HTML5 remake of the Flash game Stick Arena - Improved by Michal2SAB

## Demo 

Previously: ![Multiplayer](https://user-images.githubusercontent.com/52111974/210186327-da458981-d3d4-469b-9de0-df20070fba4a.gif)

Now: 

![NewMultiplayer](https://github.com/Michal2SAB/stick-arena-reborn-2024/blob/3bcdee896ef2e99d03ae3f5f96d9ebc4775c28c8/demo-ezgif.com-video-to-gif-converter.gif?raw=true)

## Roadmap (Updated)

- [x] Initial HTML5 Canvas setup
- [x] Initial multiplayer setup
- [ ] Make the game logic server-sided
- [ ] Setup MySQL DB
- [ ] Login / registration system
- [ ] Views
  - [ ] Login screen
  - [ ] Lobby
  - [ ] Profile
  - [ ] Shop
  - [ ] Map Editor
  - [ ] Game room
- [ ] Sounds
  - [ ] An option to mute / unmute the sounds
- [ ] Gameplay
  - [x] Larger maps
    - [ ] Add all the other maps
  - [x] Camera follows the player
    - [x] Zoom in
- [ ] Combat system
  - [ ] Picking up weapons from the ground
  - [ ] Allow player to keep walking against walls
  - [ ] Add crouching movement speed with "V" key
  - [ ] Add actual weapons speeds from SA
  - [ ] Add original shooting and punching collisions
  - [x] Collision detection
    - Needs a lot of improvement
  - [x] Hitpoints
    - [ ] More death animations & correct rotations
  - [ ] Weapon: Fists
  - [x] Weapon: Glock
  - [ ] Weapon: Bat
  - [ ] Weapon: AK-47
  - [ ] Weapon: Shotgun
  - [ ] Weapon: Sledgehammer
  - [ ] Weapon: Katana
  - [ ] Weapon: Laser Sword
  - [ ] Weapon: Chainsaw
  - [ ] Weapon: Tesla Helmet
  - [ ] Weapon: Chaingun
  - [ ] Weapon: Flamethrower
  - [ ] Weapon: Rail Gun
- [ ] Game logic
  - [ ] Room creation
  - [ ] 5 minute timer for the room
  - [ ] Quick Play support
    - This will likely mean that there needs to be support for unregistered users
  - [ ] Player disconnections in the middle of a game
    - Ideally there should be a system in place to discourage this from happening
- [ ] Creds
- [ ] Cosmetic: Spinners
- [ ] Cosmetic: Pets
- [ ] Cosmetic: Shop to buy spinners and pets with creds

## Copyright
The assets used in this project belong to XGenStudios. This project is for educational purposes only.

The original project was started by WuggyRS here: https://github.com/WuggyRS/stick-arena-reborn and slightly improved by Michal2SAB here: https://github.com/Michal2SAB/stick-arena-reborn-2024

# Changelog

## [2024-03-16]

### Changed
- Added more sprites (the rest of SA weapons, attacks etc)
- Brought back the old HP Bar (dirty, needs a different approach in future)
- Added leaderboard display in-game with "shift" key (testing only, not implemented correctly, only the box)

## [2024-03-15]

### Added
- Added 9 SA collision types in Constants.js and Game.js. Need some better handling and improved collision detection against the players head (rectangle).
- Added white collision tiles on top of map tiles in Game.js to see how the collisions should be (according to the map data) vs how they're actually implemented during the map drawing

## [2024-03-06]

### Changed
- Constants.js and Game.js: Now automatically checking for each map tile rotations, flips and collisions (2 types).
- Added the rest of missing stick arena map tiles (minus the animated ones, they are static for now)
- Any map from sa can be loaded, have to adjust map size manually in Constants.js and probably Game.js too.

## [2024-03-05]

### Added
- Player.js, Constants.js and /sprites/: Added glock walking animation. Change animation transition method entirely in future, remove blinking (restoring to previous animation)

### Fixed
- Mouse.js: Resolved issue with mouse cursor rotation and shooting at map edges.

### Changed
- Camera.js: Updated to prevent camera from escaping the edges of the map.
- Game.js: Updated drawMap() to set and store custom map size in Constants.gameSettings.
- Index.html: Changed size of the canvas, reverting back to the classic (ballistick) dimensions.
