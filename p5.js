function setup() {
    createCanvas(1200, 550);
    particles = [];
    howMany = 10;
    for (i = 0; i < howMany; i++){
        particles.push(new ParticleYellow)
    }
  }

let width = 15;
let height = 15;
let xPos = 50;
let yPos = 50;

multipler = 0.0005

function draw() {
    background(220);
    fill(255,204,9)
    for(let i = 0; i<particles.length; i++){
        for(let j = 0; j<particles.length; j++){
            if (particles[j] == particles[i]) {continue};
            force = createVector()
            particles[i].acceleration = createVector(particles[i].position - particles[j].position) * 0.001
            particles[i].velocity += (particles[i].acceleration * 1)
            particles[i].position.add(particles[i].velocity)
            // particles[i].position += (particles[i].velocity)
        }
        
        // ellipse(particles[i].xPos, particles[i].yPos, particles[i].width, particles[i].height)
        ellipse(particles[i].position.x, particles[i].position.y, particles[i].width, particles[i].height)
        console.log(particles[i].position)
    }
  }

class ParticleYellow{
    constructor(){
        // this.xPos = getRandom()
        // this.yPos = getRandom()
        this.width = width;
        this.height = height

        this.position = createVector(getRandom(), getRandom())
        this.acceleration = createVector(0,0);
        this.velocity = createVector(0,0);

    }
}

const getRandom = () => {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    min = 10
    max = 400
    return Math.floor(Math.random() * (max - min + 1) + min);
}