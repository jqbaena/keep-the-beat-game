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
  this.img.src = 'img/zombieground.png';
  this.img2 = new Image();
  this.img2.src = 'img/spikemonster2.png';
  this.frameCount = 0;
  this.spriteFrames = 0;
  this.countSprites = 0;
  this.spriteIndex = 9;
}

Enemy.prototype.update = function(){
  this.x -= 6;
}

Enemy.prototype.updateFrames = function (){
  this.frameCount ++;
  if(this.frameCount > 5) {
      this.countSprites++;
      this.frameCount = 0;
  }
  if(this.countSprites >= this.spriteIndex) {
      this.countSprites = 0;
  }
}

Enemy.prototype.draw = function(){
    var srcX = 1183/9; 
    if(this.type === 0){
      this.ctx.drawImage(this.img,this.countSprites*srcX, 0, 1183/9, 70, this.x,this.y, 1183/9, 70);
    }else if(this.type === 1){
      this.ctx.drawImage(this.img2, this.x, this.y, 86, 46);
    }
    this.updateFrames();
}

Enemy.prototype.isInCanvas = function(){
  return this.x > -this.width;  
}

