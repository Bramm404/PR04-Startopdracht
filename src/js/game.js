import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Shark } from './shark.js'
import { Bubbles } from './bubble.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 90,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")

        const bubble = new Actor();
        bubble.graphics.use(Resources.Bubble.toSprite());
        bubble.pos = new Vector(580,1000);
        bubble.vel = new Vector(0, -25); 
        this.add(bubble)   

        const background = new Actor();
        background.graphics.use(Resources.Water.toSprite())
        background.pos = new Vector(640, 360)
        this.add(background)
        
        const fish = new Fish();
        this.add(fish);

        const shark = new Shark();
        this.add(shark);

        for(let i = 0; i < randomInRange(2,10); i++) {
            const bubble = new Bubbles();
            this.add(bubble);
        }

    }


}

new Game()
