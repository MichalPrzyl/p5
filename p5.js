function setup() {
    createCanvas(1200, 550);
    particles = [];
    howMany = 5;
    for (i = 0; i < howMany; i++){
        particles.push(new ParticleYellow)
    }
  }

let width = 15;
let height = 15;
let xPos = 50;
let yPos = 50;

multipler = 0.00001

function draw() {
    background(220);
    fill(255,204,9)
    for(let i = 0; i<particles.length; i++){
        for(let j = 0; j<particles.length; j++){
            if (particles[j] == particles[i]) {continue};

            forceX = (particles[j].x - particles[i].x)
            forceY = (particles[j].y - particles[i].y)
            
            particles[i].accelerationX = forceX * multipler
            particles[i].accelerationY = forceY * multipler

            particles[i].velocityX += particles[i].accelerationX
            particles[i].velocityY += particles[i].accelerationY

            particles[i].x += particles[i].velocityX
            particles[i].y += particles[i].velocityY

        } 
        // ellipse(particles[i].position.x, particles[i].position.y, particles[i].width, particles[i].height)
        ellipse(particles[i].x, particles[i].y, particles[i].width, particles[i].height)
    }
  }

class ParticleYellow{
    constructor(){
        // this.xPos = getRandom()
        // this.yPos = getRandom()
        this.width = width;
        this.height = height

        this.x = getRandom()
        this.y = getRandom()
        this.accelerationX = 0;
        this.accelerationY = 0;
        this.velocityX = 0
        this.velocityY = 0
    }
}

const getRandom = () => {
    min = 50
    max = 300
    return Math.floor(Math.random() * (max - min + 1) + min);
}