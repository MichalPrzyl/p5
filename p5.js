function setup() {
    createCanvas(1200, 550);
    particles = [];
    howMany = 2;
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
            
            vec = createVector((particles[i].position.x - particles[j].position.x), (particles[i].position.y - particles[j].position.y))
            force = vec.div(vec.mag())
            particles[i].acceleration.add(vec)
            particles[i].velocity.add(particles[i].acceleration.mult(0.01))
            particles[i].position.sub(particles[i].velocity)
            if (particles[i].velocity > -0.80 && particles[i].velocity < 0.03) particles[i].acceleration = 0;
            // line(particles[j].position.x, particles[j].position.y, particles[i].position.x, particles[i].position.y)
        }
        
        ellipse(particles[i].position.x, particles[i].position.y, particles[i].width, particles[i].height)
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
    min = 10
    max = 600
    return Math.floor(Math.random() * (max - min + 1) + min);
}