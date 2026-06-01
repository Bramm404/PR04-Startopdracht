import {Font, Label, Vector} from "excalibur";


export class Score extends Label {
    
    score = 0;

    constructor(engine){
        super( {
            text: 'Score: 0 /br Health: 0' ,
            pos: new Vector(engine.drawWidth/2, 25),
            font: new Font({ size: 30 }),
        })
    }

    incScore(){
        this.score++
        this.text = `Score: ${this.score}`;
    }

    decScore(){
        this.score--
        this.text = `Score: ${this.score}`;
    }

}
