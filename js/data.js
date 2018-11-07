// var platform1 = {
//     width: 300,
//     heigth: 200,
//     x: 500,
//     y: 500,
//     /*
//     compound: false,
//     object: {
//         width: 0,
//         heigth: 0,
//         x: 0,
//         y: 0,
//     }*/
// };

// var platform2 = {
//     width: 600,
//     heigth: 200,
//     x: 1000,
//     y: 500,
// };

// var platform3 = {
//     width: 300,
//     heigth: 200,
//     x: 1500,
//     y: 700,
// };

// var platform4 = {
//     width: 600,
//     heigth: 200,
//     x: 1000,
//     y: 300,
// };

var canvasWidth = 1280;
var canvasHeight = 580;

var platforms = [
    {
        width: 500,
        height: 100,
        x: 300,
        y: 400,
        /*
        compound: false,
        object: {
            width: 0,
            heigth: 0,
            x: 0,
            y: 0,
        }*/
    },
    {
        width: 300,
        height: 50,
        x: 1400,
        y: canvasHeight - 50,
    },
    {
        width: 800,
        height: 100,
        x: 3000,
        y: 100,
    },
    {
        width: 800,
        height: 100,
        x: 3000,
        y: 400,
    }

];

var stageOneEnemies = [
    {
        width: 86,
        height: 46,
        x: 400,
        y: 300,
        type:0
        /*
        compound: false,
        object: {
            width: 0,
            heigth: 0,
            x: 0,
            y: 0,
        }*/
    },
    {
        width: 86,
        height: 46,
        x: 1000,
        y: canvasHeight - 46,
        type:1
    },
    {
        width: 86,
        height: 46,
        x: 3300,
        y: 300,
        type:1
    },
    {
        width: 86,
        height: 46,
        x: 3600,
        y: 300,
        type:0
    },
    {
        width: 86,
        height: 46,
        x: 2400,
        y: canvasHeight - 46,
        type:0
    }
];