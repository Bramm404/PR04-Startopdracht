import { ImageSource, Sound, Resource, Loader, Gif } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Water: new ImageSource('images/water.jpg'),
    Fish: new ImageSource('images/fish.png'),
    Shark: new ImageSource('images/shark.png'),
    Bone: new ImageSource('images/bones.png'),
    Bubble: new ImageSource('images/bubble.png'),
    Mine: new ImageSource('images/mine.png')

}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }