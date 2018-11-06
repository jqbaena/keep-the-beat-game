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
    var gameOver;
    var victoryScreen;
    var state; // 0 Start - 1 Game - 2 Victory - 3 Game over
    
    function buildSplash(){   
        splashScreen = buildDOM(`
          <main>
            <h1>Keep the beat</h1>
            <button>Start</button>
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
    }

    function buildGameOver(){
        gameOver = buildDOM(`
        <main>
          <h1>Game over</h1> 
        </main>
        `);
        document.body.prepend(gameOver);
    }

}

window.addEventListener('load', main);


