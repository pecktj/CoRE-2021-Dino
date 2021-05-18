const number = 1;
const bnumber = 3;
var timer = 0;
var check = 100;
let players = [];
let blocks = [];
let doors = [];
var score = 0;
var checks = 0;
var far = 65;
var close = 27;
let jump = false;
let p = 0;
let img;
let imgC;
let imgF;
let imgD;
let imgComp;
let imgDrinks;
let imghall;
let imgDoor;
let imgx = [];
let adjust = 0;
let b = new block(1);
let explode = 260;
let lose = false;
let doorTimer = 0;
let doorCheck = 100;

function preload() {
 img = loadImage('corebot.png');
 imgx[0] = loadImage('xld11.png');
 imgx[1] = loadImage('xld12.png');
 imgx[2] = loadImage('xld13.png');
 imgx[3] = loadImage('xld14.png');
 imgx[4] = loadImage('xld15.png');
 imgC = loadImage('Chair.png');
 imgF = loadImage('Fridge.png');
 imgD = loadImage('ChairDouble.png');
 imgComp = loadImage('comp.png');
 imgDrinks = loadImage('Drinks.png');
 imghall = loadImage('hall.png');
 imgDoor = loadImage('door.png');
}
//let b = new block(1);

function setup() {
  //console.log(img);
  createCanvas(1900, 700);
  for(let i = 0; i < number; i++) {
      players[i]=new player(250,551);
  }
  for(let i = 0; i < number; i++) {
      blocks[i]=new block(1);
  }
  for(let i = 0; i < number; i++) {
      doors[i]=new Door(1);
  }
    rBack();
}


function draw() {
  adjust = b.getv()
  console.log(adjust);
  rBack();
  if (jump==true && lose == false){
    image(imgx[Math.floor(p/2)], explode, 570);
    explode = explode + adjust;
    p++;
  }
  for(let door of doors) {
      door.show();
  }
  for(let player of players) {
      player.show();
  }
  if(timer == check){
    blocks.push(new block(Math.floor(Math.random() * 5)+1 ));
    timer =0;
    check = Math.floor((Math.random() * far)+close );
    check = check - Math.floor((score/100) *3 );
  }
  if(doorTimer == doorCheck){
    doors.push(new Door(1));
    doorTimer = 0;
  }
  if(checks == 4){
    score++;
    checks
    checks = 0;
  }
  for(let block of blocks) {
      block.show();
  }
  for(let block of blocks) {
      if(block.offScreen()==true){
       blocks.shift();
      }
  }
  for(let door of doors) {
      if(door.offScreen()==true){
       doors.shift();
      }
  }
  timer++;
  checks++;
  doorTimer++;
  fill(0);
  textSize(50);
//  text('Timer: ' + timer, 250, 50);

  for(let player of players) {
    for(let block of blocks) {
        if(block.collide(player)==true){
          player.mutL(true);
          lose = true;
        //  players.shift()
          timer = 100;
          checks = 100;
            for(let block of blocks) {
              block.mutv(0);
            }
            for(let door of doors) {
                door.mutv(0);
            }
        }
    }
  }
  if(p==10){
    explode = 260;
    p=0;
    jump=false;
  }
}

function rBack(){
  background(255);
  image(imghall, 0, 350);
  stroke(0);
  line(0, 600, 1900, 600);
  frameRate(60);
  fill(0);
  rect(0,600,1900, 250);
  rect(0,0,1900, 350);
  fill(255);
  textSize(50);
  text('Distance ' + score, 0, 50);
  for(let i = 0; i < number; i++) {
      players[i].update();
  }
  for(let block of blocks) {
      block.update();
      block.mutv((score/100*(-1*1.5)-8.78));
  }
  for(let door of doors) {
      door.update();
      door.mutv((score/100*(-1*1.5)-8.78));
  }
  b.update();
  b.mutv((score/100*(-1*1.5)-8.78));
}

function keyPressed() {
  if (keyCode == 32) {
    for(let player of players) {
        player.jump();
        jump =true;
    }
  }
}
