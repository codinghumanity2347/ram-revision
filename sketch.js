//STEP 1: 
var database;
var databaseVALUE;

function setup() {
    //2nd step
    createCanvas(800, 400);

}

function draw() {
    background(255, 255, 255);

    drawSprites();
    textSize(30);
    fill("black");
    text("VALUE=" + databaseVALUE, 100, 100);
}