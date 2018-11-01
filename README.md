# KEEP THE BEAT GAME

## Description
Keep the beat is a game that merges different styles of gaming. Platformers, runners and rythm games. The player has to try to reach the end of the level, platforms, enemies and other random hazards will put you in trouble.


## MVP (CANVAS)
The MVP version is a simple one, the player jumps the platforms.


## Backlog
- Game design
- Sprites
- Music


## Data structure
### game.js

```
function Game(){
  this.counter
  this.canvas
  this.state
}

Game.prototype.start{
  buildDom()
  this.canvas
  this.state
  player = new Player()
  obstacles = new Obstacles();
  this.startLoop()
}

Game.prototype.startLoop(){
  ctx 
  // loop{
    // update
    this.updateAll()
    // clear
    this.clearAll()
    // draw
    this.drawAll()
  }

  requestAnimationFrame(loop);
}

Game.prototype.finish(){
  this.counter
}
Game.clearAll()
Game.drawAll()

```
### player.js

```
function player(){
  this.x
  this.y
  this.size
  this.speedY
  this.alive
}

Player.prototype.update(){
  this.y
  this.alive  
}

Player.prototype.jump(Obstacle){
  this.y
}

Player.prototype.checkCollision(Obstacle){
  this.size
  this.y
}

Player.prototype.draw(){
}

```
### obstacles.js

```
function Obstacles(){
  this.canvas
  this.x
  this.y
  this.size
  this.speedX
  this.type
}

Obstacles.prototype.isInScreen(){
  this.canvas
  this.x
}

Obstacles.prototype.draw(){
}

Obstacles.prototype.update(){
  this.x
  this.speedX
}

``` 

## States y States Transitions

Definition of the different states and their transition (transition functions)

- splashScreen
      - buildSplash
      - event listener
- gameScreen: 
      - destroySplash
      - create the game
- gameoverScreen
      - destroyGameScreen 
      - build GameOver
- winScreen
      - destroyGameScreen
      - build winScreen


## Task

- create javascript file
- create the main   


## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
