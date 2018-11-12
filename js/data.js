const canvasWidth = 1280;
const canvasHeight = 580;

const platforms = [

  // PRIMERA PLATAFORMA
  {
    width: 220,
    height: 56,
    x: canvasWidth * 2 + 200,
    y: canvasHeight - 100
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 2 + 420,
    y: canvasHeight - 100
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 2 + 640,
    y: canvasHeight - 100
  },
  // SEGUNDAS PLATAFORMAS
  {
    width: 220,
    height: 56,
    x: canvasWidth * 2 + 800,
    y: canvasHeight - 200
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 2 + 1020,
    y: canvasHeight - 200
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 2 + 1240,
    y: canvasHeight - 200
  },
  // TERCERAS PLATAFORMAS
  {
    width: 220,
    height: 56,
    x: canvasWidth * 2 + 1240 + 220,
    y: canvasHeight - 300
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 2 + 1240 + 220 + 220,
    y: canvasHeight - 300
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 2 + 1240 + 220 + 220 + 220,
    y: canvasHeight - 300
  },

  // CUARTA OLEADA
  {
    width: 220,
    height: 56,
    x: canvasWidth * 5 - 100 - 100,
    y: canvasHeight - 100,
    type: 0
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 5 + 220 - 100 - 100,
    y: canvasHeight - 156,
    type: 0
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 5 + 440 - 100 - 100,
    y: canvasHeight - 212,
    type: 0
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 5 + 660 - 100 - 100,
    y: canvasHeight - 268,
    type: 0
  },

  // QUINTA OLEADA

  {
    width: 220,
    height: 56,
    x: canvasWidth * 11,
    y: canvasHeight - 100,
    type: 0
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 11,
    y: canvasHeight - 156,
    type: 0
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 11,
    y: canvasHeight - 212,
    type: 0
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 11,
    y: canvasHeight - 268,
    type: 0
  },
  {
    width: 220,
    height: 56,
    x: canvasWidth * 11,
    y: canvasHeight - 268,
    type: 0
  }

];

const stageOneEnemies = [

  // PRIMERA OLEADA
  {
    width: 130,
    height: 62,
    x: canvasWidth * 5 - 100,
    y: canvasHeight - 67,
    type: 0
  },
  {
    width: 130,
    height: 62,
    x: canvasWidth * 5 + 700,
    y: canvasHeight - 67,
    type: 0
  },
  {
    width: 130,
    height: 62,
    x: canvasWidth * 7 - 100,
    y: canvasHeight - 67,
    type: 0
  },
  {
    width: 130,
    height: 62,
    x: canvasWidth * 7 + 700,
    y: canvasHeight - 67,
    type: 0
  },
  {
    width: 130,
    height: 62,
    x: canvasWidth * 8 - 100,
    y: canvasHeight - 67,
    type: 0
  },
  {
    width: 130,
    height: 62,
    x: canvasWidth * 9 + 700,
    y: canvasHeight - 67,
    type: 0
  },
  {
    width: 130,
    height: 62,
    x: canvasWidth * 10,
    y: canvasHeight - 67,
    type: 0
  },
  {
    width: 130,
    height: 62,
    x: canvasWidth * 11,
    y: canvasHeight - 67,
    type: 0
  }
];
