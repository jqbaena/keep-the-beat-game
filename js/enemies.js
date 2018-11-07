'use strict'

function Enemy(canvasElement, enemieData){
  this.width = enemieData.width;
  this.height = enemieData.height;
  this.canvasElement = canvasElement;
  this.ctx = this.canvasElement.getContext('2d');
  this.x = enemieData.x;
  this.y = enemieData.y;
  // TYPE 1 = erizo
  // TYPE 2 = 
  // TYPE 3 =
  this.type = enemieData.type;
  this.img = new Image();
  this.img.src = 'img/spikemonster.png';
  this.img2 = new Image();
  this.img2.src = 'img/spikemonster2.png';
}

Enemy.prototype.update = function(){
  this.x -= 5;
}

Enemy.prototype.draw = function(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    if(this.type === 0){
      this.ctx.drawImage(this.img, this.x, this.y, 86, 46);
    }else if(this.type === 1){
      this.ctx.drawImage(this.img2, this.x, this.y, 86, 46);
    }
}

Enemy.prototype.isInCanvas = function(){
  return this.x > -this.width;  
}