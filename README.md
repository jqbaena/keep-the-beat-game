# KEEP THE BEAT GAME

## Description
Keep the beat is a game that merges different styles of gaming. Platformers, runners and rythm games. The player has to run to try to reach the end of the level, platforms, enemies and other random hazards will put you in trouble.


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
  var self = this
  self.counter
  self.canvas
  self.state
}

Game.prototype.start{
  self.canvas
  self.state
  player = new Player()
  obstacles = new Obstacles();
  self.runLevel()
}

Game.prototype.runLevel(){
  // update
  obstacles.update() 
  player.update()
  // draw
  obstacles.draw()
  player.draw()
}

Game.prototype.update(){
  // control
  start
  reset
  pause
  // loop
  self.runLevel()
}

Game.prototype.pause{
  self.state
}

Game.prototype.reset{
  self.state   
}

Game.prototype.finish{
  self.counter
}

Game.clearAll(){
}

Game.updateAll(){
}

Game.drawAll(){
}
```
###player.js

```
function player(){
  var self = this
  self.x
  self.y
  self.size
  self.speedY
  self.alive
}

Player.prototype.update(){
  var self = this
  self.y
  self.alive  
}

Player.prototype.jump(Obstacle){
  var self = this
  self.y
}

Player.prototype.checkCollision(Obstacle){
  var self = this
  self.size
  self.y
  obstacle.size
}

Player.prototype.isVisible(){
  self.x
}

Player.prototype.draw(){
  self.
}

```
### obstacles.js

```
function Obstacles(){
  var self = this
  self.canvas
  self.x
  self.y
  self.size
  self.speedX
  self.type
}

Obstacles.prototype.isVisible(){
  self.canvas
  self.x
}

Obstacles.prototype.draw(){
}



Obstacles.prototype.update(){
  self.x
  self.speedX
}

``` 

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task
Task definition in order of priority


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
