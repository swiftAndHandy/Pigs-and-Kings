const canvas = document.getElementById('gameArea');
const c = canvas.getContext('2d');

const tileSize = 64;
const screenRatio = [16, 9]

canvas.width = 64 * screenRatio[0];
canvas.height = 64 * screenRatio[1];

const player = new Player();