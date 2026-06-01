import {Resources, ResourceLoader } from "./resources.js";
import {Actor, randomInRange, Vector, Keys} from 'excalibur'

export class Fish extends Actor {

    constructor(){
        super({width: Resources.Fish.width, height: Resources.Fish.height});
        console.log('blub')
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Fish.toSprite());
        this.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720));
        this.vel = new Vector(randomInRange(-200, 200), randomInRange(-200,200));
        
        this.graphics.flipHorizontal = this.vel > 0;

        this.events.on('exitviewport', (e) => this.fishLeft(e));

        
    }
    fishLeft(e) {
            e.target.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720));
            let vx = 0;
    
            while(vx === 0) {
                vx = randomInRange(-100,100)
            }
    
            e.target.vel = new Vector(vx, randomInRange(-5,5));
                e.target.flipHorizontal = e.target.vel > 0;
            
    
        }



}