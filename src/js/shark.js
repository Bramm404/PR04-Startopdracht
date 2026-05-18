import {Resources, ResourceLoader } from "./resources.js";
import {Actor, randomInRange, Vector} from 'excalibur'

export class Shark extends Actor {
    speed = 100;
    constructor() {
        super();
        console.log('shork shork');
    }

    onInitialize(){
        this.graphics.use(Resources.Shark.toSprite());
        this.pos = new Vector(-200,randomInRange(0,720))
        this.vel = new Vector(randomInRange(1,500), randomInRange(-10,10))
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
        this.vel = new Vector(this.speed, randomInRange(-10,10))
        e.target.graphics.flipHorizontal = false;
        this.speed = this.speed+10;
        console.log(this.speed)
        }
    }


}