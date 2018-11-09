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

    // PRIMERA PLATAFORMA
    
    {
        width: 220,
        height: 56,
        x: 4200,
        y: canvasHeight - 100
        /*
        compound: false,
        object: {
            width: 0,
            heigth: 0,
            x: 0,
            y: 0,
        }*/
    },
    /*
    compound: false,
    object: {
        width: 0,
        heigth: 0,
        x: 0,
        y: 0,
    }*/

    {
        width: 220,
        height: 56,
        x: 5918 + 209 + 209,
        y: canvasHeight - 100
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
        width: 220,
        height: 56,
        x: 5918 + 209 + 209 + 209,
        y: canvasHeight - 100
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
        width: 220,
        height: 56,
        x: 5918 + 209 + 209 + 209,
        y: canvasHeight - 100
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
        width: 220,
        height: 56,
        x: 2900,
        y: canvasHeight - 100
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
        width: 220,
        height: 56,
        x: 4500,
        y: canvasHeight - 100
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
        width: 220,
        height: 56,
        x: 4500,
        y: canvasHeight - 100
        /*
        compound: false,
        object: {
            width: 0,
            heigth: 0,
            x: 0,
            y: 0,
        }*/
    },

    // SEGUNDA PLATAFORMA
    {
        width: 209,
        height: 56,
        x: 4709,
        y: canvasHeight - 200,
    },

    // TERCERA PLATAFORMA
    {
        width: 209,
        height: 56,
        x: 4918,
        y: canvasHeight - 200,
    },
    {
        width: 209,
        height: 56,
        x: 4918 + 209,
        y: canvasHeight - 200,
    },
    {
        width: 209,
        height: 56,
        x: 4918 + 209 + 209,
        y: canvasHeight - 200,
    },
    {
        width: 209,
        height: 56,
        x: 4918 + 209 + 209 + 209,
        y: canvasHeight - 200,
    },
];

var stageOneEnemies = [

    // PRIMERA OLEADA
    {
        width: 130,
        height: 62,
        x: 3900,
        y: canvasHeight - 67,
        type:0
    },
    // SEGUNDA OLEADA
    {
        width: 130,
        height: 62,
        x: 4500,
        y: canvasHeight - 67,
        type:0
    },
    {
        width: 130,
        height: 62,
        x: 5200,
        y: canvasHeight - 67,
        type:0
    }
];