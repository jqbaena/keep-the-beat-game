'use strict'

function buildDOM(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.children[0];
}

function main(){

    var splashScreen;
    var gameScreen;
    var startButton;
    var restartButton;
    var gameOver;
    var victoryScreen;
    var state; // 0 Start - 1 Game - 2 Victory - 3 Game over
    
    function buildSplash(){   
        splashScreen = buildDOM(`
          <main>
            <h1>Keep the beat</h1>
            <img id="title" src="img/title.png" width="464" height="85">
            <div class="buttondiv">
                <button class = "button"> <img class="buttonimg" src="img/button.png" width="250" height="100"> </button>
            </div>
          </main>
        `)
        document.body.prepend(splashScreen);
        startButton = document.querySelector('button');
        startButton.addEventListener('click', destroySplash);
    }
    
    function destroySplash() {
        splashScreen.remove();
        startButton.removeEventListener('click', destroySplash);
        buildGameScreen();
    }

    function buildGameScreen() {
        gameScreen = buildDOM(`
          <main>
            <h1>Game</h1>
            <canvas width="1280px" height="580px"></canvas> 
            <div style="display:none;">
            <img id="source" src="img/land.png"
            width="1920" height="1080">
            <img id="source2" src="img/decor.png"
            width="1920" height="1080">
            <img id="source3" src="img/sea.png"
            width="1920" height="1080">
            <img id="source4" src="img/sky.png"
            width="1920" height="1080">
            <img id="source5" src="img/cloud.png"
            width="1920" height="1080">
            </div>  
          </main>
        `);

        document.body.prepend(gameScreen);
        
        var canvasElement = document.querySelector('canvas');

        var game = new Game(canvasElement);
        game.start();
        game.onGameOverCallback(destroyGameScreen);
    }

    buildSplash();

    /*
    setTimeout(function(){ 
        destroyGameScreen();
        buildGameOver();
    }, 10000);
    */
   
    function destroyGameScreen() {
        gameScreen.remove();
        buildGameOver();
    }

    function buildGameOver(){
        gameOver = buildDOM(`
        <main>
          <h1>Game over</h1> 
          <img id="gameover" src="img/Game-Over.png" width="480" height="79">
          <div class="buttondiv">
          <button class="button"> <img class="buttonimg" src="img/retry.png" width="250" height="100"> </button>
          </div>    
        </main>
        `);
        document.body.prepend(gameOver);
        restartButton = document.querySelector('button');
        restartButton.addEventListener('click', destroyGameOver);
    }

    function destroyGameOver(){
        gameOver.remove();
        buildGameScreen();
    }
}
window.addEventListener('load', main);


