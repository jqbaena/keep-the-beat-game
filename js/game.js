'use strict'

function Game(canvasElement) {
    this.player = null;
    this.obstacles = [];
    this.canvasElement = canvasElement;
    this.initialPositionPlayer = {
      x: 120,
      y: this.canvasElement.height - 50
    }
    this.gameIsOver = false;
}

Game.prototype.start = function() {
    this.ctx = this.canvasElement.getContext('2d');
    this.startLoop();
}

Game.prototype.startLoop = function() {

    this.player = new Player(this.canvasElement, this.initialPositionPlayer);

    this.handleKeyUp = function(event){
      if (event.key === " "){
        console.log('jump')
        this.player.jump();
      }
    }.bind(this)
    
    document.addEventListener('keyup', this.handleKeyUp);

    var loop = function() {

      this.clearAll();
      this.updateAll();
      this.drawAll();

      if (!this.gameIsOver) {
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
}

Game.prototype.drawAll = function(){
  this.player.draw();
}

Game.prototype.onGameOverCallback = function(callback) {
  this.gameOverCallback = callback;
}

Game.prototype.finishGame = function() {
  this.gameOverCallback();
}

Game.prototype.updateAll = function() {
  this.player.update();
}