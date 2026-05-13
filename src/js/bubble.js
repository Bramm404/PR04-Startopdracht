import {Resources, ResourceLoader } from "./resources.js";
import {Actor, randomInRange, Vector} from 'excalibur'

export class Bubbles extends Actor {
    constructor(){
        super();
        console.log('blomp')
    }

    onInitialize(){
        this.graphics.use(Resources.Bubble.toSprite());
        this.pos = new Vector(randomInRange(0,1280), 800)
        this.vel = new Vector(0, randomInRange(-100, -25));
        this.on('exitviewport', (e) => this.newBubbles(e))
    }

    newBubbles(e) {
        e.target.pos = new Vector(randomInRange(0,1280), 800)        
        e.target.vel = new Vector(0, randomInRange(-100, -25));
    }
}