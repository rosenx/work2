import config from '../config.js'
import Actor from './Actor.js'

export default class Dino extends Actor {
  constructor(spriteImage) {
    super(spriteImage)
    this.isDucking = false
    this.legFrames = 0
    this.legShowing = 'Left'
    this.sprite = `dino${this.legShowing}Leg`
    this.vVelocity = null
    this.baseY = 0
    this.relativeY = 0
  }

  get y() {
    return this.baseY - this.height + this.relativeY
  }

  set y(value) {
    this.baseY = value
  }

  reset() {
    this.isDucking = false
    this.legFrames = 0
    this.legShowing = 'Left'
    this.sprite = `dino${this.legShowing}Leg`
    this.vVelocity = null
    this.relativeY = 0
  }

  jump() {
    if (this.relativeY === 0) {
      this.vVelocity = -config.settings.dinoLift
    }
  }

  duck(value) {
    this.isDucking = Boolean(value)
  }

  nextFrame() {
    if (this.vVelocity !== null) {
      // use gravity to gradually decrease vVelocity
      this.vVelocity += config.settings.dinoGravity
      this.relativeY += this.vVelocity
    }

    // stop falling once back down to the ground
    if (this.relativeY > 0) {
      this.vVelocity = null
      this.relativeY = 0
    }

    this.determineSprite()
  }

  determineSprite() {
    if (this.relativeY < 0) {
      // in the air stiff
      this.sprite = 'dino'
    } else {
      // on the ground running
      if (this.legFrames >= config.settings.dinoLegsRate) {
        this.legShowing = this.legShowing === 'Left' ? 'Right' : 'Left'
        this.legFrames = 0
      }

      if (this.isDucking) {
        this.sprite = `dinoDuck${this.legShowing}Leg`
      } else {
        this.sprite = `dino${this.legShowing}Leg`
      }

      this.legFrames++
    }
  }
}
