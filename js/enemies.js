
'use strict'

function Enemy(canvasElement, enemieData){
  this.width = enemieData.width;
  this.height = enemieData.height;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
  this.x = enemieData.x;
  this.y = enemieData.y;
}

Enemy.prototype.update = function(){
  this.x -= 5;
}

Enemy.prototype.draw = function(){
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.closePath();
}

Enemy.prototype.isInCanvas = function(){
  return this.x > -this.width;  
}