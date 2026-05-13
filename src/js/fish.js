import {Resources, ResourceLoader } from "./resources.js";
import {Actor, randomInRange, Vector} from 'excalibur'

export class Fish extends Actor {

    constructor(){
        super();
        console.log('blub')
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Fish.toSprite());
        this.pos = new Vector(640,360);
        this.vel = new Vector(randomInRange(-1250, 50) + 50, randomInRange(-20,20));
        
        this.graphics.flipHorizontal = this.vel > 0;

        this.events.on('exitviewport', (e) => this.fishLeft(e));

        
    }
    fishLeft(e) {
            e.target.pos = new Vector(680,360);
            let vx = 0;
    
            while(vx === 0) {
                vx = randomInRange(-100,100)
            }
    
            e.target.vel = new Vector(vx, randomInRange(-5,5));
                e.target.flipHorizontal = e.target.vel > 0;
            
    
        }



}