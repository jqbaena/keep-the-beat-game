'use strict'

class Game {
  constructor (canvasElement){
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
    this.sand = document.getElementById('source');
    this.decor = document.getElementById('source2');
    this.sea = document.getElementById('source3');
    this.sky = document.getElementById('source4');
    this.cloud = document.getElementById('source5');
    this.imgX = 0;
    this.imgX2 = this.canvasElement.width;
    this.imgX3 = 0;
    this.imgX4 = this.canvasElement.width;
    this.imgX5 = 0;
    this.imgX6 =  this.canvasElement.width;
    this.imgY = 0;
    this.currentFrame = 0;
    this.audio = new Audio('audio/Queen.mp3');
  }

  start (){
    this.ctx = this.canvasElement.getContext('2d');
    this.startLoop();
  }

  updateFrames() {
    this.currentFrame++;
  }

  startLoop(){

    this.player = new Player(this.canvasElement, this.initialPositionPlayer);

    // console.log(platforms);

    // for(var index in platforms){
    //   this.obstacles.push(new Obstacle(this.canvasElement));
    // }


    for(var i = 0; i < platforms.length; i++){
      this.obstacles.push(new Obstacle(this.canvasElement, platforms[i]));
    }

    for(var i = 0; i < stageOneEnemies.length; i++){
      this.enemies.push(new Enemy(this.canvasElement, stageOneEnemies[i]))
    }

    this.handleKeyUp = function(event){
      if (event.key === " "){
        this.player.jump(this.obstacles);
      }
      else if (event.key === "a" || event.key === "A"){
        this.player.attack();
      }

    }.bind(this)
    
    document.addEventListener('keyup', this.handleKeyUp);
    this.audio.currentTime = 0;
    this.audio.play();

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

  }

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    this.enemies = this.enemies.filter(function(enemy) {
      return enemy.isInCanvas();
    });
  }

  drawAll() {
    this.drawCanvas();
    this.player.draw();
    this.obstacles.forEach(function(item){
      item.draw();
    });
    this.enemies.forEach(function(item){
      item.draw();
    });
  }

  onGameOverCallback (callback) {
    this.gameOverCallback = callback;
  }

  finishGame() {
    this.audio.pause();
    this.gameOverCallback();
  }

  updateAll() {
    this.updateFrames();
    this.obstacles.forEach(function(item){
      item.update();
    });
  
    if(this.player.update(this.obstacles, this.enemies)){
      this.gameIsOver = true;
      this.finishGame();
    }
    this.enemies.forEach(function(item){
      item.update();
    });
    this.updateCanvas();
  }

  checkAllCollisions () {
    this.enemies.forEach( (enemy, index) => {
      if (this.player.collidesWithEnemy(enemy) === 3){
          this.enemies.splice(index, 1);
      }
      else if(this.player.collidesWithEnemy(enemy) === 1){
        this.gameIsOver = true;
          this.finishGame();
      }
    }) 
  }

  updateCanvas () {
    this.imgX -= 2;
    this.imgX2 -= 2;
    this.imgX3 -= 1;
    this.imgX4 -= 1;
    this.imgX5 -= 2.5;
    this.imgX6 -= 2.5;

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
    if(this.imgX5 <= -this.canvasElement.width){
      this.imgX5 = this.canvasElement.width;
    }
    if(this.imgX6 <= -this.canvasElement.width){
      this.imgX6 = this.imgX5+this.canvasElement.width;
    }
  }

  drawCanvas () {
    this.ctx.drawImage(this.sky,0,0, 1920, 1080, this.imgX, this.imgY, 1280, 580);
    this.ctx.drawImage(this.sky,0,0, 1920, 1080, this.imgX2, this.imgY, 1280, 580);
    this.ctx.drawImage(this.cloud,0,0, 1920, 1080, this.imgX3, this.imgY, 1280, 580);
    this.ctx.drawImage(this.cloud,0,0, 1920, 1080, this.imgX4, this.imgY, 1280, 580);
    this.ctx.drawImage(this.sea,0,0, 1920, 1080, this.imgX, this.imgY, 1280, 580);
    this.ctx.drawImage(this.sea,0,0, 1920, 1080, this.imgX2, this.imgY, 1280, 580);
    this.ctx.drawImage(this.sand,0,0, 1920, 1080, this.imgX5, this.imgY, 1280, 580);
    this.ctx.drawImage(this.sand,0,0, 1920, 1080, this.imgX6, this.imgY, 1280, 580);
    this.ctx.drawImage(this.decor,0,0, 1920, 1080, this.imgX5, this.imgY, 1280, 580);
    this.ctx.drawImage(this.decor,0,0, 1920, 1080, this.imgX6, this.imgY, 1280, 580);
  }
}
