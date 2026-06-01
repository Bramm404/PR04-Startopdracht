import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange, Timer, CollisionType, Label, Font } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
import { Shark } from './shark.js'
import { Bubbles } from './bubble.js'
import { Mine } from './mine.js'
import { Score } from './score.js'

export class Game extends Engine {

    scoreLabel
    score = 0;

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 90,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    spawnFish() {
            const fish = new Fish();
            this.add(fish);

            if(Math.random()>0.80){
                const mine = new Mine();
                this.add(mine);
            }
    }

    startGame() {
        console.log("start de game!")

        const background = new Actor();
        background.graphics.use(Resources.Water.toSprite())
        background.pos = new Vector(640, 360)
        this.add(background)

        this.scoreLabel = new Score(this)
        this.add(this.scoreLabel)


        for(let i = 0; i<20; i++){
            this.spawnFish();
        }

        

        const shark = new Shark();
        this.add(shark);

        shark.on('collisionstart', (event) => {
        if(event.other.owner instanceof Fish) {
            event.other.owner.graphics.use(Resources.Bone.toSprite());
            event.other.owner.vel = new Vector(0, -50);
            event.other.owner.body.collisionType = CollisionType.PreventCollision
            event.other.owner.actions.delay(5000).callMethod(() => event.other.owner.kill(), this.spawnFish());
            this.score++;
        }   
        if(event.other.owner instanceof Mine) {
            this.score--
            shark.health--
            shark.pos.y += 150

            if(shark.health === 0) {
            shark.graphics.flipVertical = true;
            shark.isDying = true;
            shark.vel = new Vector(0, -150);
            shark.body.collisionType = CollisionType.PreventCollision
            shark.actions.delay(5000).callMethod(() => shark.kill());
            }


        }

        this.scoreLabel.text = 
`Score: ${this.score} 
Health: ${shark.health}`
        })

        for(let i = 0; i < randomInRange(2,10); i++) {
            const bubble = new Bubbles();
            this.add(bubble);
        }

    }


}

new Game()


