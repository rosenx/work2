export default {
  /*
   * units
   * ppf: pixels per frame
   * fpa: frames per action
   */
  settings: {
    bgSpeed: 8, // ppf
    birdSpeed: 7.2, // ppf
    birdSpawnRate: 240, // fpa
    birdWingsRate: 15, // fpa
    cactiSpawnRate: 50, // fpa
    cloudSpawnRate: 200, // fpa
    cloudSpeed: 2, // ppf
    dinoGravity: 0.5, // ppf
    dinoLegsRate: 6, // fpa
    dinoLift: 10, // ppf
    scoreIncreaseRate: 6, // fpa
  },
  sprites: {
    birdUp: { h: 52, w: 84, x: 708, y: 31 },
    birdDown: { h: 60, w: 84, x: 708, y: 85 },
    cactus: { h: 92, w: 46, x: 70, y: 31 },
    cactusDouble: { h: 66, w: 64, x: 118, y: 31 },
    cactusDoubleB: { h: 92, w: 80, x: 184, y: 31 },
    cactusTriple: { h: 66, w: 82, x: 266, y: 31 },
    cloud: { h: 28, w: 92, x: 794, y: 31 },
    dino: { h: 86, w: 80, x: 350, y: 31 },
    dinoDuckLeftLeg: { h: 52, w: 110, x: 596, y: 31 },
    dinoDuckRightLeg: { h: 52, w: 110, x: 596, y: 85 },
    dinoLeftLeg: { h: 86, w: 80, x: 432, y: 31 },
    dinoRightLeg: { h: 86, w: 80, x: 514, y: 31 },
    ground: { h: 28, w: 2400, x: 0, y: 2 },
    replayIcon: { h: 60, w: 68, x: 0, y: 31 },
  },
}
