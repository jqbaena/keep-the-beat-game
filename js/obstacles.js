'use strict'

function Obstacle(canvasElement, obstacleData) {
  this.height = obstacleData.height;
  this.width = obstacleData.width;
  this.speedX = 5;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
  /*this.x = Math.floor(Math.random() * this.canvasElement.width + this.canvasElement.width);
  this.y = Math.floor(Math.random() * this.canvasElement.height - this.height);*/
  this.x = obstacleData.x;
  this.y = obstacleData.y;
  this.type = 0;
  this.img = new Image();
  this.img.src = 'img/pad.png';
}

Obstacle.prototype.update = function(){
  this.x -= this.speedX;
  // if(this.x < -this.width){
  //   this.x = this.canvasElement.width + 50;
  //   this.y = Math.floor(Math.random() * this.canvasElement.height/3 + 2*this.canvasElement.height/3);
  // } 
}

Obstacle.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, 209, 56);
}

