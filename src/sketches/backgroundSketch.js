const p5SizingDefaults = (p5, setup) => {
    const width = () => window.innerWidth
    const height = () => window.innerHeight

    p5.setup = function(){
        p5.createCanvas(width(), height())


        p5.frameRate(30);

        if(setup) {
            setup()
        }
    }

    p5.windowResized = function(){
        p5.resizeCanvas(width(), height())
    }
}

const backgroundSketch = (p5) => {
    const setup = () => {
        
    }

    p5SizingDefaults(p5, setup)

    p5.draw = function(){
        p5.background('#fae')
        p5.noStroke()
    }
}

export default backgroundSketch