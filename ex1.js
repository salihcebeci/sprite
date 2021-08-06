var spr;

function setup() {
  var canvas= createCanvas(600, 600);
  spr = createSprite(300, 300, 30, 30);
  spr.shapeColor = color(255);
  var img = loadImage("https://codepo8.github.io/canvas-images-and-pixels/img/horse.png");
  spr.addImage(img);
  spr.scale=1;

}

function  draw() {
	background(50, 50, 50);
  drawSprites();
}
