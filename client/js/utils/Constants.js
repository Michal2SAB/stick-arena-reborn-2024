class Constants {
  static get SPEED() {
    return 2.4; // 1.4
  }

  static get STICK_FIGURE_HEAD_RADIUS() {
    return 17;
  }

  static get TO_RADIANS() {
    return Math.PI / 180;
  }

  // later set spawns based on where they are in map data
  static get PLAYER_SPAWN_POINTS() {
    return [   
      { x: 550, y: 100 }, { x: 1250, y: 150 }, // 
      { x: 1550, y: 900 }, { x: 150, y: 950 }
    ];
  }

  static get LEFT_MOUSE_BUTTON() {
    return 0;
  }

  static spacebar = false;
  static leftclick = false;
  static shooting = false;

  static get DEBUG() {
    return false;
  }

  static get TILEMAP() {
    return "0C0003 0W1003 0W0003 0W2003 0W3003 0W4003 0W0003 0W5003 0C0103 0C0003 0W1003 0W2003 0C0103 0C0003 0K3003 0K4003 0W4013 0W8003 0W7003 0K2003 0W2003 0K1013 0K0013 0C0103 0C0003 0W4003 0W1013 0C0103 0C0003 0B0003 0B1003 0W0003 0B2003 0B3013 0C0103 0W0303 0F2006 0F0000 0F3000 0F0210 0F4000 0F0200 0F5006 0W0103 0W0303 0F2006 0F3000 0W0323 0W0303 0K8006 0K9006 0T2000 0T0010 0T0200 0K7006 0T3000 0K6016 0K5016 0W0113 0W0303 0F4000 0F2016 0E1103 0E2313 0B4006 0B5006 0T0200 0B6000 0B7018 0W0103 0W2303 0F0000 0F1030 0F1220 0F0000 0F0000 0F1030 0F0000 0E1103 0E1313 0F1010 0F0200 0W0103 0V1303 0T0230 0L0107 0L1004 0L2004 0T0010 0T0220 0P0004 0P1306 0T0230 0W0103 0W3303 0F0200 0F1000 0F6000 0T0200 0T0010 0T0020 0T0200 0T0010 0T0200 0W0103 0W0303 0F0210 0F0210 0X0208 0X1004 0X2308 0F1030 0F1020 0F0000 0F0200 0F0200 0F0020 0W9103 0W0303 0T0210 0L3107 0L4004 0L5004 0T0020 0T0000 0P2004 0P3306 0T0220 0W8103 0W0313 0F1000 0F0230 0E1113 0E0303 0T0220 0T0000 0T0030 0T0200 0T0010 0W3103 0W8123 0F1220 0F0200 0X3105 0X4004 0X5305 0F0200 0F0010 0E0323 0E1303 0F0010 0F1010 0W0103 0W6303 0T0000 0T0000 0T0000 0T0000 0T0000 0T0000 0P4006 0P5008 0T0010 0W8113 0W9303 0F0210 0F0020 0W0103 0C0303 0W0203 0W0203 0W0203 0W0203 0W0203 0C0203 0W8303 0F0010 0F1010 0Y0105 0Y1004 0Y2305 0F0200 0F1000 0V1103 0W6303 0F1000 0F0020 0W0103 0W0303 0T0010 0T0000 0T0220 0T0010 0T0200 0T0000 0T0220 0T0000 0T0220 0W0103 0W0313 0F0020 0F1010 0W6103 0C0003 0W3003 0W1003 0V0003 0V0013 0W1013 0C0103 0W0303 0F0210 0F0200 0Y3105 0Y4004 0Y5305 0F0000 0F0200 0E1103 0E1313 0F0030 0F1200 0W0103 0C0303 0E1213 0T0200 0E0203 0W0203 0V1203 0W0203 0E0213 0T0000 0E1203 0C0203 0W0303 0F1030 0F0220 0W0103 0W0303 0R0210 0R4006 0R0130 0R0120 0R4016 0W0103 0W2303 0F0200 0F1020 0F0020 0F0200 0F0010 0F1230 0F0210 0F0000 0F0000 0F1200 0F0030 0I0203 0W0003 0E1003 0F7000 0E1013 0W3003 0W0003 0W9003 0E1003 0F7000 0E3013 0W1003 0I0103 0F0000 0F0000 0V1103 0W9303 0R0130 0R0200 0R0100 0R0130 0R0220 0W0103 0W0303 0F0010 0F0010 0F1000 0F0010 0F0000 0F0220 0F0000 0E1113 0E1303 0F0000 0F0210 0F1000 0F0200 0F0000 0F1210 0F0000 0F1230 0F0000 0F0000 0F1230 0F0000 0F8017 0F2006 0F0000 0F1210 0F0000 0E1103 0E4313 0R0110 0R0200 0R0200 0R0120 0R8110 0W2113 0C0303 0W0203 0W6203 0E1213 0F0000 0E5203 0W0203 0W0203 0C0203 0C0303 0W0203 0V1203 0E5213 0F0000 0E1203 0W6203 0W0203 0W0203 0I0003 0F0230 0F1200 0F0000 0F1200 0F0000 0F1200 0F1010 0F0000 0F6000 0R0230 0R0000 0R0130 0R0210 0R0310 0R0330 0W0103 0C0003 0W5003 0W0003 0E3003 0F1000 0E4013 0W3003 0W0003 0J0013 0Q0003 0W0003 0W9003 0E1003 0F0000 0E3013 0W3003 0W1013 0C0103 0W0303 0F1210 0F1000 0F0010 0F1220 0F0020 0F1220 0F1010 0F0020 0F6000 0R0230 0R0000 0R0130 0R0210 0R0330 0R0210 0V4103 0W0303 0F5006 0F1230 0F8007 0F0200 0F0000 0F0000 0J2116 0J1223 0Q1003 0Q2308 0F1000 0F0010 0F0000 0F8017 0F0020 0F2010 0W0103 0W3303 0F1020 0F1230 0F1010 0F0020 0F1000 0F1220 0F0000 0F1000 0E1113 0E0303 0R0020 0R0220 0R0130 0R0220 0R4336 0W1113 0W9303 0F0010 0F1000 0F0010 0F0000 0F0010 0F0000 0J4013 0J3013 0Q3003 0Q4003 0F1000 0F0010 0F1230 0F0020 0F0220 0F0030 0W0103 0W0303 0F1000 0F1200 0F0000 0F0010 0F0220 0F0000 0F5206 0F0000 0W0103 0W0303 0R0210 0R0030 0R0230 0R0110 0R5336 0V7003 0W2303 0F0210 0F0010 0F0200 0F1200 0F0200 0F0000 0F0200 0F0220 0F0200 0F0200 0F0010 0F0010 0F1210 0F0000 0F0020 0F0010 0W0103 0C0303 0W0203 0V1203 0E1213 0F7200 0E1203 0W6203 0W5203 0W0203 0C0203 0W7303 0R0200 0R0200 0R0120 0R0000 0R5326 0V7023 0W0303 0Q5208 0Q4303 0F0000 0F0000 0F1220 0F0020 0J6217 0F1210 0F0030 0Q6207 0F1200 0F1220 0F0220 0F0000 0J4113 0J5206 0W6103 0C0003 0W1003 0W5003 0E1003 0R0110 0E0013 0W8003 0W7003 0W1013 0C0103 0W8303 0R0200 0G0305 0R0200 0R0100 0R7110 0W4113 0Q0303 0Q1303 0Q3303 0F0200 0F0210 0F0000 0J2118 0J1013 0F0020 0F1200 0Q1233 0Q2308 0F1020 0F1030 0F0000 0J3113 0J1113 0J0113 0W0303 0R4006 0R1006 0R0000 0R0130 0R0100 0R0000 0R0110 0R4016 0W0103 0W0303 0G1105 0G2305 0R0000 0R0210 0R5106 0V7003 0J0313 0J1313 0J3313 0F0000 0F0000 0F1220 0J4013 0J3013 0F0000 0F1020 0Q3003 0Q4003 0F1000 0F0000 0F0000 0Q3103 0Q1103 0Q0103 0V2223 0R3306 0R0200 0R0120 0R0310 0R0210 0R0300 0R0000 0R2106 0V2003 0G3003 0G4004 0G5305 0R0110 0R0320 0R6116 0V8003 0W6303 0J5006 0J4313 0F0200 0F1010 0F0000 0Q4203 0Q3203 0F0230 0F0020 0J3213 0J4213 0F1020 0F0200 0F0210 0Q4103 0Q5006 0W0103 0V3223 0R2306 0R0230 0R0300 0R0210 0R0330 0R0330 0R0200 0R2116 0V2023 0W1133 0R4316 0R0100 0R0110 0R0120 0R6106 0V8023 0W0303 0F0030 0F0200 0F0000 0F0020 0F0000 0Q2108 0Q1033 0F0020 0F0200 0J1213 0J2316 0F0200 0F0000 0F1000 0F0000 0F1210 0E1103 0E5313 0R0310 0R0300 0R0200 0R0300 0R0300 0R0120 0R0110 0R0210 0V0103 0V7223 0R5316 0R0120 0R0120 0R0220 0R5326 0V7023 0W4303 0F0210 0F1010 0F0000 0F1000 0F0030 0F1000 0Q6007 0F1000 0F0010 0J6017 0F1220 0F1220 0F1210 0F1200 0F1200 0F0010 0F6000 0R0100 0R0320 0R0230 0R0110 0R0310 0R0310 0R0230 0R0200 0R0120 0V0323 0V8203 0R6316 0R0300 0R0200 0R0100 0R8110 0W2113 0W0303 0F0000 0F0010 0F0000 0F1200 0F0200 0F0000 0F1000 0F0010 0F0200 0F1230 0F1010 0F1010 0F1210 0F0030 0F0210 0F0000 0F6000 0R0100 0R0130 0R0010 0R0310 0D0106 0D1004 0D2306 0R0130 0R2106 0V2003 0V7203 0R5306 0R0100 0R0130 0R0010 0R0010 0W7113 0W0303 0J3213 0J4213 0F0010 0F1200 0F1020 0F0000 0Q4203 0Q3203 0J3213 0J4213 0F0000 0F1020 0F1010 0F0000 0J4203 0J3203 0E1113 0E5303 0R0200 0R0320 0R0120 0D3108 0D4005 0D5008 0R0130 0R3106 0V3003 0V1303 0R0100 0R0220 0R0010 0R0300 0R0220 0W7103 0W0303 0J1213 0J2316 0F0000 0F1010 0F0230 0F0000 0Q2108 0Q1203 0J1023 0J2316 0F0000 0F1030 0F1210 0F0000 0J2106 0J1033 0W0103 0W0303 0R0200 0R0110 0R0220 0R0110 0R0230 0R0220 0R0230 0R0000 0W0103 0W0303 0R0100 0R0030 0R0100 0R0030 0R0030 0W0103 0C0303 0J0213 0W2203 0W0203 0V4203 0W0203 0W2203 0W0203 0Q0203 0J0213 0W4203 0W0203 0W7203 0W8203 0W4203 0W9203 0J0203 0C0203 0C0303 0V4203 0W0203 0W2203 0V1203 0W0203 0V1203 0W4203 0W0203 0C0203 0C0303 0V5203 0V6203 0V6213 0V5213 0V1203 0C0203".split(" ");
  }

  static rotationKeys = {0: 0, 1: 90, 2: 180, 3: 270}
  static tileSize = 50;
  static tiles = {};

  static colTransforms = {

    "5": {
      rotations: {
        "0": { x: -1, y: -1, width: 52, height: 38,
        flips: {
          "1": { x: -1, y: -1, width: 52, height: 38 },
          "2": { x: -1, y: 13, width: 52, height: 38 },
          "3": { x: -1, y: 13, width: 52, height: 38 }
        }},

        "1": { x: 13, y: -1, width: 38, height: 52,
        flips: {
          "1": { x: -1, y: -1, width: 38, height: 52 },
          "2": { x: 13, y: -1, width: 38, height: 52 },
          "3": { x: -1, y: -1, width: 38, height: 52 }
        }},

        "2": { x: -1, y: 13, width: 52, height: 38,
        flips: {
          "1": { x: -1, y: 13, width: 52, height: 38 },
          "2": { x: -1, y: -1, width: 52, height: 38 },
          "3": { x: -1, y: -1, width: 52, height: 38 }
        }},

        "3": { x: -1, y: -1, width: 38, height: 52,
        flips: {
          "1": { x: 13, y: -1, width: 38, height: 52 },
          "2": { x: -1, y: -1, width: 38, height: 52 },
          "3": { x: 13, y: -1, width: 38, height: 52 }
        }}
      },
    },

    "6": {
      rotations: {
        "0": { x: -1, y: -1, width: 52, height: 26,
        flips: {
          "1": { x: -1, y: -1, width: 52, height: 26 },
          "2": { x: -1, y: 25, width: 52, height: 26 },
          "3": { x: -1, y: 25, width: 52, height: 26 }
        }},

        "1": { x: 25, y: -1, width: 26, height: 52,
        flips: {
          "1": { x: 25, y: -1, width: 26, height: 52 },
          "2": { x: -1, y: -1, width: 26, height: 52 },
          "3": { x: -1, y: -1, width: 26, height: 52 }
        }},

        "2": { x: -1, y: 25, width: 52, height: 26,
        flips: {
          "1": { x: -1, y: 25, width: 52, height: 26 },
          "2": { x: -1, y: -1, width: 52, height: 26 },
          "3": { x: -1, y: -1, width: 52, height: 26 }
        }},

        "3": { x: -1, y: -1, width: 26, height: 52,
        flips: {
          "1": { x: -1, y: -1, width: 26, height: 52 },
          "2": { x: 25, y: -1, width: 26, height: 52 },
          "3": { x: 25, y: -1, width: 26, height: 52 }
        }}
      },
    },

    "7": {
      rotations: {
        "0": { x: -1, y: -1, width: 52, height: 13,
        flips: {
          "1": { x: -1, y: -1, width: 52, height: 13 },
          "2": { x: -1, y: 38, width: 52, height: 13 },
          "3": { x: -1, y: 38, width: 52, height: 13 }
        }},

        "1": { x: 38, y: -1, width: 13, height: 52,
        flips: {
          "1": { x: 38, y: -1, width: 13, height: 52 },
          "2": { x: 38, y: -1, width: 13, height: 52 },
          "3": { x: -1, y: -1, width: 13, height: 52 }
        }},

        "2": { x: -1, y: 38, width: 52, height: 13,
        flips: {
          "1": { x: -1, y: 38, width: 52, height: 13 },
          "2": { x: -1, y: -1, width: 52, height: 13 },
          "3": { x: -1, y: 38, width: 52, height: 13 }
        }},

        "3": { x: -1, y: -1, width: 13, height: 52,
        flips: {
          "1": { x: -1, y: -1, width: 13, height: 52 },
          "2": { x: 38, y: -1, width: 13, height: 52 },
          "3": { x: 38, y: -1, width: 13, height: 52 }
        }}
      },
    },

    "8": {
      rotations: {
        "0": { x: -1, y: -1, width: 26, height: 26,
        flips: {
          "1": { x: 25, y: -1, width: 26, height: 26 },
          "2": { x: -1, y: 25, width: 26, height: 26 },
          "3": { x: 25, y: 25, width: 26, height: 26 }
        }},

        "1": { x: 25, y: -1, width: 26, height: 26,
        flips: {
          "1": { x: 25, y: 25, width: 26, height: 26 },
          "2": { x: -1, y: -1, width: 26, height: 26 },
          "3": { x: -1, y: 25, width: 26, height: 26 }
        }},

        "2": { x: 25, y: 25, width: 26, height: 26,
        flips: {
          "1": { x: -1, y: 25, width: 26, height: 26 },
          "2": { x: 25, y: -1, width: 26, height: 26 },
          "3": { x: -1, y: -1, width: 26, height: 26 }
        }},

        "3": { x: -1, y: 25, width: 26, height: 26,
        flips: {
          "1": { x: 25, y: 25, width: 26, height: 26 },
          "2": { x: 25, y: 25, width: 26, height: 26 },
          "3": { x: 25, y: -1, width: 26, height: 26 }
        }}
      },
    },

    "9": { // fix type 3 flips, should flip both X and Y
      Lfirst: {

        rotations: {
          "0": { x: -1, y: -1, width: 52, height: 26,
          flips: {
            "1": { x: -1, y: -1, width: 52, height: 26 },
            "2": { x: -1, y: 25, width: 52, height: 26 },
            "3": { x: -1, y: -1, width: 52, height: 26 }
          }},

          "1": { x: 25, y: 25, width: 26, height: 52,
          flips: {
            "1": { x: -1, y: -1, width: 26, height: 52 },
            "2": { x: 25, y: -1, width: 26, height: 52 },
            "3": { x: -1, y: -1, width: 26, height: 52 }
          }},

          "2": { x: -1, y: 25, width: 52, height: 26,
          flips: {
            "1": { x: -1, y: 25, width: 52, height: 26 },
            "2": { x: -1, y: -1, width: 52, height: 26 },
            "3": { x: -1, y: 25, width: 52, height: 26 }
          }},

          "3": { x: -1, y: 25, width: 52, height: 26, 
          flips: {
            "1": { x: -1, y: 25, width: 52, height: 26 },
            "2": { x: -1, y: -1, width: 52, height: 26 },
            "3": { x: -1, y: 25, width: 52, height: 26 }
          }}
        },
      },

      Lsecond: {
        
        rotations: {
          "0": { x: -1, y: -1, width: 26, height: 52,
          flips: {
            "1": { x: 25, y: -1, width: 26, height: 52 },
            "2": { x: -1, y: -1, width: 26, height: 52 },
            "3": { x: 25, y: -1, width: 26, height: 52 }
          }},

          "1": { x: -1, y: -1, width: 52, height: 26,
          flips: {
            "1": { x: -1, y: -1, width: 52, height: 26 },
            "2": { x: -1, y: 25, width: 52, height: 26 },
            "3": { x: -1, y: -1, width: 52, height: 26 }
          }},

          "2": { x: 25, y: -1, width: 26, height: 52,
          flips: {
            "1": { x: -1, y: -1, width: 26, height: 52 },
            "2": { x: 25, y: -1, width: 26, height: 52 },
            "3": { x: -1, y: -1, width: 26, height: 52 }
          }},
          "3": { x: -1, y: -1, width: 26, height: 52,
          flips: {
            "1": { x: 25, y: -1, width: 26, height: 52 },
            "2": { x: -1, y: -1, width: 26, height: 52 },
            "3": { x: 25, y: -1, width: 26, height: 52 }
          }}
        },
      }
    }
  }

  static get SPRITE_DEFINITIONS() {
    return {
      "leaderboard": {
        spritesheetUrl: "sprites/windows/leaderboard.png",
        width: 315,
        height: 197,
        spriteCenter: { x: 275, y: 200 }
      },
      "glock-shoot": {
        spritesheetUrl: "sprites/glock/glock-shoot.png",
        width: 61,
        height: 502,
        fps: 34,
        numberOfFrames: 20,
        spriteCenter: { x: 34, y: 486 },
        isShootingAnimation: true,
        hitboxOffsets: {
          topLeft: { x: 25, y: 0 },
          topRight: { x: 50, y: 0 },
          bottomLeft: { x: 25, y: 449 },
          bottomRight: { x: 50, y: 449 }
        }
      },
      "glock-stance": {
        spritesheetUrl: "sprites/glock/glock-stance.png",
        width: 41,
        height: 27,
        fps: 40,
        numberOfFrames: 40,
        spriteCenter: { x: 19, y: 13 }, // 19 13
        hitboxOffsets: {
          topLeft: { x: 25, y: 0 },
          topRight: { x: 50, y: 0 },
          bottomLeft: { x: 25, y: 449 },
          bottomRight: { x: 50, y: 449 }
        }
      },
      "ak-stance": {
        spritesheetUrl: "sprites/ak-idle/ak-idle.png",
        width: 30,
        height: 62,
        fps: 40,
        numberOfFrames: 40,
        spriteCenter: { x: 15, y: 41 }, // 19 13
        hitboxOffsets: {
          topLeft: { x: 25, y: 0 },
          topRight: { x: 50, y: 0 },
          bottomLeft: { x: 25, y: 449 },
          bottomRight: { x: 50, y: 449 }
        }
      },
      "ak-walk": {
        spritesheetUrl: "sprites/ak-move/ak-move.png",
        width: 41,
        height: 35,
        fps: 41,
        numberOfFrames: 18,
        spriteCenter: { x: 13, y: 21 }
      },
      "glock-walk": {
        spritesheetUrl: "sprites/glock/glock-walk.png",
        width: 41,
        height: 35,
        fps: 41,
        numberOfFrames: 18,
        spriteCenter: { x: 13, y: 21 }
      },
      "glock-hitsplat": {
        spritesheetUrl: "sprites/glock/glock-hitsplat.png",
        width: 57,
        height: 64,
        fps: 12,
        numberOfFrames: 12,
        spriteCenter: { x: 28, y: 36 }
      },
      "death": {
        spritesheetUrl: "sprites/player/death.png",
        width: 110,
        height: 80,
        fps: 36,
        numberOfFrames: 64,
        spriteCenter: { x: 21, y: 21 }
      },
      "death-soul": {
        spritesheetUrl: "sprites/player/death-soul.png",
        width: 122,
        height: 160,
        fps: 25,
        numberOfFrames: 58,
        spriteCenter: { x: 28, y: 36 }
      },
      "legs-walking": {
        spritesheetUrl: "sprites/player/legs-walking.png",
        width: 14,
        height: 54,
        fps: 35,
        numberOfFrames: 35,
        spriteCenter: { x: 7, y: 27 } // 7, 27
      },
      "heartbeat-healthy": {
        spritesheetUrl: "sprites/player/heartbeat-healthy.png",
        width: 27,
        height: 22,
        fps: 28,
        numberOfFrames: 28,
        spriteCenter: {
          x: 13,
          y: 11
        }
      },

      "heartbeat-impacted": {
        spritesheetUrl: "sprites/player/heartbeat-impacted.png",
        width: 27,
        height: 36,
        fps: 36,
        numberOfFrames: 36,
        spriteCenter: {
          x: 13,
          y: 22
        }
      },
      "heartbeat-critical": {
        spritesheetUrl: "sprites/player/heartbeat-critical.png",
        width: 35,
        height: 36,
        fps: 64,
        numberOfFrames: 64,
        spriteCenter: {
          x: 17,
          y: 20
        }
      }
    };
  }
}
