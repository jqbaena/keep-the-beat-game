'use strict'

function Player(canvasElement, initialPosition) {
    this.x = initialPosition.x;
    this.y = initialPosition.y;
    this.size = 50;
    this.speedY = -20;
    this.jumping = false;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');
}

Player.prototype.jump = function() {
    this.jumping = true;
}

Player.prototype.update = function(){
    if(this.jumping) {
        this.speedY += 1;
        this.y += this.speedY;
        if (this.y + this.size >= this.canvasElement.height){
            this.jumping = false;
            this.speedY = -20;
            this.y = this.canvasElement.height - this.size;
        }
    }
}

Player.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.size, this.size)
}