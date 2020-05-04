

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var cs1,cs2,cs3;


function setup() {
  createCanvas(800,400);
 

}

function draw() {
background(250,250,250);

cs1=rect(50,280,80,100)
cs2=rect(30,380,100,30)
cs3=rect(130,300,100,30)

drawSprites();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}