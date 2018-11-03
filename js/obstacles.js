'use strict'

function Obstacle(canvasElement) {
  this.height = 120;
  this.width = 320;
  this.speedX = 5;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
  /*this.x = Math.floor(Math.random() * this.canvasElement.width + this.canvasElement.width);
  this.y = Math.floor(Math.random() * this.canvasElement.height - this.height);*/
  this.x = this.canvasElement.width + 50;
  this.y = Math.floor(Math.random() * this.canvasElement.height/3 + 2*this.canvasElement.height/3);
}

Obstacle.prototype.update = function(){
  this.x -= this.speedX;
  if(this.x < -this.width){
    this.x = this.canvasElement.width + 50;
    this.y = Math.floor(Math.random() * this.canvasElement.height/3 + 2*this.canvasElement.height/3);
  } 
}

Obstacle.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Obstacle.prototype.isInCanvas = function(){
  return this.x >= 0 && this.x <= this.canvasElement.width;  
}