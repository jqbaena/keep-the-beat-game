'use strict'

function Player(canvasElement, initialPosition){
    this.x = initialPosition.x;
    this.y = initialPosition.y;
    this.initialX = initialPosition.x;
    this.height = 80;
    this.width = 40
    this.speedY = -20;
    this.speedY2 = 0;
    this.speedX = 1;
    this.jumping = false;
    this.canvasElement = canvasElement;
    this.ctx = this.canvasElement.getContext('2d');
    this.img = new Image();
    this.img.src = '';
}
Player.prototype.jump = function(obstacles){
    var collisionResult = this.checkCollision(obstacles);
    var sliding = collisionResult.type === 1;

    if(sliding || (this.y + this.height >= this.canvasElement.height)){
        this.jumping = true;
        if(sliding){this.speedY2 = 0;}
    }
}
Player.prototype.checkCollision = function(obstacles){

    var typeIndex = {
        type: 0,
        index: 0
    };

    obstacles.forEach(function(obstacle,index){
        var insideWidth = ((this.x + this.width > obstacle.x) && this.x < (obstacle.x + obstacle.width));
        var aboveTop = ((this.y + this.height) === obstacle.y) || ((this.y + this.height) < obstacle.y + obstacle.height) 
        && ((this.y + this.height) > obstacle.y);
        var topBottom = this.y === obstacle.y + obstacle.height || (this.y < (obstacle.y + obstacle.height) && this.y > obstacle.y);
    
        var rightLeft = (this.x + this.width >= obstacle.x) && (this.x < obstacle.x) &&
         ((this.y + this.height <= obstacle.y + obstacle.height && this.y + this.height > obstacle.y) || 
         (this.y > obstacle.y && this.y  < (obstacle.y + obstacle.height)) ||
         (this.y > obstacle.y && this.y + this.height < obstacle.y + obstacle.height));

        if(rightLeft){ // type 3 - colisiona la parte derecha del jugador con la parte izq de la plataforma
            typeIndex.type = 3;
            typeIndex.index = index;
        }else if(insideWidth && aboveTop){ // type 1 - el jugador salta encima de la plataforma
            typeIndex.type = 1;
            typeIndex.index = index;
        }else if(insideWidth && topBottom){ // type 2 - el jugador golpea por debajo de la plataforma
            typeIndex.type = 2;
            typeIndex.index = index;
        }
    }.bind(this));

    return typeIndex;
}
Player.prototype.collidesWithEnemy = function(enemy){

    var type = 0;

    var insideWidth = ((this.x + this.width >= enemy.x) && this.x < (enemy.x + enemy.width));
    var aboveTop = ((this.y + this.height) === enemy.y) || ((this.y + this.height) < enemy.y + enemy.height) 
    && ((this.y + this.height) > enemy.y);
    var topBottom = this.y === enemy.y + enemy.height || (this.y < (enemy.y + enemy.height) && this.y > enemy.y);
    var insideHeight =  this.y > enemy.y && ((this.y + this.height) < enemy.y + this.height) || // dentro 
                        ((this.y + this.height) >= enemy.y && (this.y + this.height) <= (enemy.y + enemy.height)) ||
                        (this.y < (enemy.y + enemy.height))&& (this.y >= enemy.y);

    if(insideWidth && aboveTop && enemy.type !== 0 && enemy.type !== 1){
        type = 2;
    }
    else if(insideWidth && (topBottom || insideHeight)){
        type = 1;
    }
    return type;
}
Player.prototype.update = function(obstacles, enemies){
    // retorna un par de valores tipo de colision y indice del bloque con el que colisiona
    // TIPO 1: caer encima de una plataforma
    // TIPO 2: golpear por debajo de una plataforma
    // TIPO 3: ser arrastrado por una plataforma

    var collisionResult = this.checkCollision(obstacles);

    // logica de salto
    if (this.jumping){
        // acelera - desacelera
        this.speedY += 1;
        this.y += this.speedY;
        // el jugador ha saltado a una plataforma
        if (collisionResult.type === 1 && this.speedY > 0){
            this.jumping = false;
            this.speedY = -20;
            this.y = obstacles[collisionResult.index].y - this.height;
            this.speedY2 = 0;
        }
        // el jugador golpea la plataforma por debajo
        else if(collisionResult.type === 2){
            this.jumping = false;
            this.speedY = -20;
            this.speedY2 = 0;
            this.y = obstacles[collisionResult.index].y + obstacles[collisionResult.index].height;
        // el jugador ha tocado el suelo
        }
        else if (this.y + this.height >= this.canvasElement.height){
            this.jumping = false;
            this.speedY = -20;
            this.y = this.canvasElement.height - this.height;
            this.speedY2 = 0;
        }
    }
    
    // hace caer al jugador cuando sale de la plataforma 
    // hace caer al jugador cuando choca contra la parte de abajo de la plataforma
        /*no salto*/      /*no colisiono*/                     /*no toco el suelo*/                         /* he tocado el techo*/     
    if(!this.jumping && collisionResult.type === 0 && (this.y !== this.canvasElement.height - this.height) || collisionResult.type === 2){    
        if (collisionResult.type === 2){
            this.jumping = false;
            this.speedY2 = 0;
        }
        if (this.y + this.height >= this.canvasElement.height){
            this.speedY2 = 0;
            this.speedY = -20;
            this.y = this.canvasElement.height - this.height;      
        }
        this.speedY2 += 1;
        this.y += this.speedY2;
    }

    // una plataforma empuja el player
    if(collisionResult.type === 3){
        this.x = obstacles[collisionResult.index].x - this.width;
    // tengo que salir de la colision para poder volver al sitio inicial
    }else if( this.x < this.initialX){
        this.x += 1;
    // si vuelvo a la posicion inicial 
    }else{
        this.speedX = 0;
    }  
    // reseteo de gravedad

    if (collisionResult.type === 1)
    {
        this.speedY2 = 0;
    }

    return (this.x < -this.width) || (this.collidesWithEnemy(enemies) === 1);
}
Player.prototype.draw = function() {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
}


