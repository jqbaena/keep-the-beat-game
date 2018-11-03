'use strict'

function Player(canvasElement, initialPosition) {
    this.x = initialPosition.x;
    this.y = initialPosition.y;
    this.initialX = initialPosition.x;
    this.size = 50;
    this.speedY = -20;
    this.speedY2 = 0;
    this.speedX = 1;
    this.jumping = false;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');
}

Player.prototype.jump = function(obstacle) {
    if(this.checkCollision(obstacle) || this.y + this.size >= this.canvasElement.height){
        this.jumping = true;
    }
}

Player.prototype.checkCollision = function(obstacle){
    var insideWidth = ((this.x + this.size > obstacle.x) && this.x < (obstacle.x + obstacle.width));
    var aboveTop = ((this.y + this.size) === obstacle.y) || ((this.y + this.size) < obstacle.y + obstacle.height) 
    && ((this.y + this.size) > obstacle.y);
    var topBottom = this.y === obstacle.y + obstacle.height || (this.y < (obstacle.y + obstacle.height) && this.y > obstacle.y);

    var rightLeft = (this.x + this.size >= obstacle.x) && (this.x < obstacle.x) &&
     ((this.y + this.size < obstacle.y + obstacle.height && this.y + this.size > obstacle.y) || 
     (this.y > obstacle.y && this.y  < obstacle.y + obstacle.height) ||
     (this.y > obstacle.y && this.y + this.height < obstacle.y + obstacle.height));

    var type = 0;

    if(rightLeft){
        type = 3;
    }
    else if(insideWidth && aboveTop){
        type = 1;
    }else if(insideWidth && topBottom){
        type = 2;
    }
    return type;
}

Player.prototype.update = function(obstacle){

    if(this.jumping){
        this.speedY += 1;
        this.y += this.speedY;

        if(this.checkCollision(obstacle) === 1){
            this.jumping = false;
            this.speedY = -20;
            this.y = obstacle.y - this.size;   
        } else if(this.checkCollision(obstacle) === 2){
            this.jumping = false;
            this.speedY = -20;
        } else if (this.y + this.size >= this.canvasElement.height){
            this.jumping = false;
            this.speedY = -20;
            this.y = this.canvasElement.height - this.size;
        } 
    }

    if(!this.jumping && !this.checkCollision(obstacle) && (this.y !== this.canvasElement.height - this.size) || this.checkCollision(obstacle) === 2) { 
        this.speedY2 += 1;
        this.y += this.speedY2;
        if (this.y + this.size >= this.canvasElement.height){
            this.speedY2 = 0;
            this.y = this.canvasElement.height - this.size;
        }
    }

    if(this.checkCollision(obstacle) === 3){
        this.x = obstacle.x - this.size;
    }
    else if( this.x < this.initialX){
        this.x += 1;
    }else{
        this.speedX = 0;
    }
}

Player.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
}

