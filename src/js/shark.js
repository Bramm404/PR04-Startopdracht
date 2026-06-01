import {Resources, ResourceLoader } from "./resources.js";
import {Actor, randomInRange, Vector, Keys} from 'excalibur'

export class Shark extends Actor {
    speed = 500;
    health = 3;
    isDying = false;
    constructor() {
        super({width: Resources.Shark.width, height: Resources.Shark.height});
        console.log('shork shork');
    }

    onInitialize(){
        this.graphics.use(Resources.Shark.toSprite());
        this.pos = new Vector(randomInRange(0, 1280),randomInRange(0,720))
        this.events.on('exitviewport', (e)=> this.sharkLeft(e))



    }

    sharkLeft(e) {
        if(e.target.vel.x > 0) {
            e.target.pos = new Vector(1480, randomInRange(0,720))
            e.target.vel = new Vector(-this.speed, randomInRange(-10,10))
            e.target.graphics.flipHorizontal = true;
            this.speed = this.speed+10;
            console.log(this.speed)
        }

        else {
        this.pos = new Vector(-200,randomInRange(0,720))
        e.target.graphics.flipHorizontal = false;
        this.speed = this.speed+10;
        console.log(this.speed)
        }
    }


    onPostUpdate(engine){

        if(this.isDying) return

        let xspeed = 0
        let yspeed = 0

        if(engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed  = -250
        }
        if(engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 250
        }
        if(engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -250
        }
        if(engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 250;
        }

        if(engine.input.keyboard.wasPressed(Keys.Space)) {
            
            this.body.applyLinearImpulse(new Vector (10 * xspeed, 0))
        }
        
        if(xspeed < 0){
            this.graphics.flipHorizontal = true;
        } else if (xspeed > 0) {
            this.graphics.flipHorizontal = false;
        }

        this.vel = new Vector(xspeed,yspeed)
        
            


    }

}