import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, randomInRange } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

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

        for (let imageSource of Object.values(Resources)) {
            console.log(imageSource._resource.path)
            if(imageSource._resource.path === 'images/water.jpg') {
                const background = new Actor();
                background.graphics.use(imageSource.toSprite())
                background.pos = new Vector(640, 360)
                background.z = -1
                this.add(background)
            } else {
                for(let i = 0; i< 100; i++) {
            const sprite = new Actor();
            sprite.graphics.use(imageSource.toSprite())
            sprite.pos = new Vector(Math.random()*1280, Math.random()*720)
            sprite.vel = new Vector(randomInRange(-1000, 1000) +5, randomInRange(-100, 100) + 10)
            sprite.events.on("exitviewport", (e) => this.fishLeft(e))
            this.add(sprite)
                }

            }

        }

        // const background = new Actor();
        // background.graphics.use(Resources.Ugh.toSprite())
        // background.pos = new Vector(640, 360)
        // this.add(background)


        // const fish = new Actor()
        // fish.graphics.use(Resources.Fish.toSprite())
        // fish.pos = new Vector(500, 300)
        // fish.vel = new Vector(400, 250)
        // fish.events.on("exitviewport", (e) => this.fishLeft(e))
        // this.add(fish)
    }

    fishLeft(e) {
        e.target.pos = new Vector(randomInRange(-200, 1350), (Math.random()*600))
        e.target.vel = new Vector(randomInRange(-1000, 1000)+50, randomInRange(-500, 500)+50)
    }
}

new Game()
