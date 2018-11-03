'use strict'

function Obstacle(canvasElement) {
  this.height = 20;
  this.width = 80;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
  this.x = Math.floor(Math.random() * 2 * this.canvasElement.width + this.canvasElement.width);
  this.y = Math.floor(Math.random() * this.canvasElement.height);
}

Enemy.prototype.update = function() {
  this.x -= 5;
}

Enemy.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.size, this.size);
}

Enemy.prototype.isInCanvas = function(){
  return this.x >= 0 && this.x <= canvasElement.width;  
}