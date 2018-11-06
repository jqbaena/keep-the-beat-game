'use strict'

function Game(canvasElement) {
    this.player = null;
    this.obstacles = [];
    this.enemies = [];
    this.canvasElement = canvasElement;
    this.initialPositionPlayer = {
      x: 240,
      y: this.canvasElement.height - 50
    }
    this.gameIsOver = false;
    this.obstaclesIndex = 0;
    this.ctx = this.canvasElement.getContext("2d");
    this.img = document.getElementById('source');
    this.img2 = document.getElementById('source2');
    this.img3 = document.getElementById('source3');
    this.img4 = document.getElementById('source4');
    this.img5 = document.getElementById('source5');
    this.imgX = 0;
    this.imgX2 = this.canvasElement.width;
    this.imgX3 = 0;
    this.imgX4 = this.canvasElement.width;
    this.imgY = 0;
}

Game.prototype.start = function() {
    this.ctx = this.canvasElement.getContext('2d');
    this.startLoop();
}
Game.prototype.startLoop = function(){

    this.player = new Player(this.canvasElement, this.initialPositionPlayer);

    // console.log(platforms);

    // for(var index in platforms){
    //   this.obstacles.push(new Obstacle(this.canvasElement));
    // }

    this.obstacles.push(new Obstacle(this.canvasElement, platforms[this.obstaclesIndex]));
    this.obstaclesIndex++;

    this.obstacles.push(new Obstacle(this.canvasElement, platforms[this.obstaclesIndex]));
    this.obstaclesIndex++;

    this.obstacles.push(new Obstacle(this.canvasElement, platforms[this.obstaclesIndex]));
    this.obstaclesIndex++;

    this.obstacles.push(new Obstacle(this.canvasElement, platforms[this.obstaclesIndex]));
    this.obstaclesIndex++;

    
    for(var i = 0; i < stageOneEnemies.length; i++){
      this.enemies.push(new Enemy(this.canvasElement, stageOneEnemies[i]))
    }

    this.handleKeyUp = function(event){
      if (event.key === " "){
        this.player.jump(this.obstacles);
      }
    }.bind(this)
    
    document.addEventListener('keyup', this.handleKeyUp);

    var loop = function(){
      this.clearAll();
      this.updateAll();
      this.checkAllCollisions();
      this.drawAll();

      if (!this.gameIsOver){
        requestAnimationFrame(loop);
      }
    }.bind(this);

    loop();

    /*this.obstacles.push(new Enemy(this.canvasElement));*/
 

    /*var loop = function() {
  
      if (Math.random() > 0.97) {
        this.enemies.push(new Enemy(this.canvasElement));
      }
  
      this.checkAllCollisions();
      this.updateAll();
      this.clearAll();
      this.drawAll();
  
      if (!this.gameIsOver) {
        requestAnimationFrame(loop);
      }
  
    }.bind(this);
  
    loop();*/
}
Game.prototype.clearAll = function(){
  this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);

  this.enemies = this.enemies.filter(function(enemy) {
    return enemy.isInCanvas();
  });
}
Game.prototype.drawAll = function(){
  this.drawCanvas();
  this.obstacles.forEach(function(item){
    item.draw();
  });
  this.player.draw();
  this.enemies.forEach(function(item){
    item.draw();
  });
 
}
Game.prototype.onGameOverCallback = function(callback) {
  this.gameOverCallback = callback;
}
Game.prototype.finishGame = function(){
  this.gameOverCallback();
}
Game.prototype.updateAll = function(){
  this.obstacles.forEach(function(item){
    item.update();
  });
  this.player.update(this.obstacles, this.enemies);
  this.enemies.forEach(function(item){
    item.update();
  });
  this.updateCanvas();
}
Game.prototype.checkAllCollisions = function() {
  this.enemies.forEach(function(enemy, index){
    if (this.player.collidesWithEnemy(enemy)) {
        this.enemies.splice(index, 1);
        console.log("true");
    }
  }.bind(this)); 
}

Game.prototype.updateCanvas = function() {
    this.imgX-=2;
    this.imgX2-=2;
    this.imgX3-=1;
    this.imgX4-=1;
    if(this.imgX <= -this.canvasElement.width){
      this.imgX = this.canvasElement.width;
    }
    if(this.imgX2 <= -this.canvasElement.width){
      this.imgX2 = this.canvasElement.width;
    }
    if(this.imgX3 <= -this.canvasElement.width){
      this.imgX3 = this.canvasElement.width;
    }
    if(this.imgX4 <= -this.canvasElement.width){
      this.imgX4 = this.canvasElement.width;
    }
}

Game.prototype.drawCanvas = function(){
    this.ctx.drawImage(this.img4,0,0, 1920, 1080, this.imgX, this.imgY, 1280, 580);
    this.ctx.drawImage(this.img4,0,0, 1920, 1080, this.imgX2, this.imgY, 1280, 580);
    this.ctx.drawImage(this.img5,0,0, 1920, 1080, this.imgX3, this.imgY, 1280, 580);
    this.ctx.drawImage(this.img5,0,0, 1920, 1080, this.imgX4, this.imgY, 1280, 580);
    this.ctx.drawImage(this.img3,0,0, 1920, 1080, this.imgX, this.imgY, 1280, 580);
    this.ctx.drawImage(this.img3,0,0, 1920, 1080, this.imgX2, this.imgY, 1280, 580);
    this.ctx.drawImage(this.img,0,0, 1920, 1080, this.imgX, this.imgY, 1280, 580);
    this.ctx.drawImage(this.img,0,0, 1920, 1080, this.imgX2, this.imgY, 1280, 580);
    this.ctx.drawImage(this.img2,0,0, 1920, 1080, this.imgX, this.imgY, 1280, 580);
    this.ctx.drawImage(this.img2,0,0, 1920, 1080, this.imgX2, this.imgY, 1280, 580);
}
