import {Resources, ResourceLoader } from "./resources.js";
import {Actor, randomInRange, Vector} from 'excalibur'

export class Mine extends Actor {

    constructor(){
        super({width: Resources.Mine.width, height: Resources.Mine.height})
    }

    onInitialize(engine){
        this.graphics.use(Resources.Mine.toSprite())
        this.pos = new Vector(Math.random()*engine.drawWidth, Math.random()*engine.drawHeight);
    }

}