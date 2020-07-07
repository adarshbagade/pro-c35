var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
 // database = firebase.database();
  form = new Form();
 
}


function draw(){
background("white");


form.display();
  
}
