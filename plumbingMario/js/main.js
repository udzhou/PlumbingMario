var K_UP = 38;
var K_DOWN = 40;
var K_RIGHT = 39;
var K_LEFT = 37;

var K_SPACE = 32;
var K_TAB = 9;
var K_ENTER = 13;
var K_CTRL = 17;
var K_ALT = 18;

var K_0 = 48;
var K_1 = 49;
var K_2 = 50;
var K_3 = 51;
var K_4 = 52;
var K_5 = 53;
var K_6 = 54;
var K_7 = 55;
var K_8 = 56;
var K_9 = 57;
var K_A = 65;
var K_B = 66;
var K_C = 67;
var K_D = 68;
var K_E = 69;
var K_F = 70;
var K_G = 71;
var K_H = 72;
var K_I = 73;
var K_J = 74;
var K_K = 75;
var K_L = 76;
var K_M = 77;
var K_N = 78;
var K_O = 79;
var K_P = 80;
var K_Q = 81;
var K_R = 82;
var K_S = 83;
var K_T = 84;
var K_U = 85;
var K_V = 86;
var K_W = 87;
var K_X = 88;
var K_Y = 89;
var K_Z = 90;

var STATE_INIT = 1;
var STATE_PLAY = 2;
var STATE_STAGE_INIT = 3;
var STATE_GAMEOVER = 4;
var STATE_SELECT = 5;
var STATE_GAMESTART = 6;

var imgStart = new Image();
imgStart.src = "img/select.png";
var imgMario = new Image();
imgMario.src = "img/mario.png";
var imgApple = new Image();
imgApple.src = "img/apple.png";

var player1 = new Player();
var player2 = new Player();
var fruitApple = new Fruit();
var playerNum = 1;
var level = 1;
var canvasWidth = 0, canvasHeight = 0;
var gameState = STATE_GAMESTART;
var gameStart = new GameStart();
var gameSelect = new GameSelect();
var stageStart = new StageStart();

function GameStart() {

}

GameStart.prototype.draw = function() {
    gameState = STATE_SELECT;
}
function GameSelect() {
    this.num = 1;
}

GameSelect.prototype.draw = function() {
    context.drawImage(imgStart, 0, 0, canvasWidth, canvasHeight);
    switch(this.num) {
        case 1:
            context.drawImage(imgMario, canvasWidth / 6, 11 * canvasHeight / 36, canvasWidth / 9, canvasHeight / 9);
            break;
        case 2:
            context.drawImage(imgMario, canvasWidth / 6, 16 * canvasHeight / 36, canvasWidth / 9, canvasHeight / 9);
            break;
        case 3:
            context.drawImage(imgMario, canvasWidth / 6, 22 * canvasHeight / 36, canvasWidth / 9, canvasHeight / 9);
            break;
    }
}
GameSelect.prototype.next = function(n) {
    context.clearRect(canvasWidth / 6, 11 * canvasHeight / 36, canvasWidth / 9, 15 * canvasHeight / 36);
    if (n == 1) {
        if (this.num == 3) {
            this.num = 1;
        } else {
            this.num++;
        }

    } else {
        if (this.num == 1) {
            this.num = 3;
        } else {
            this.num--;
        }
    }
    switch(this.num) {
        case 1:
            context.drawImage(imgMario, canvasWidth / 6, 11 * canvasHeight / 36, canvasWidth / 9, canvasHeight / 9);
            break;
        case 2:
            context.drawImage(imgMario, canvasWidth / 6, 16 * canvasHeight / 36, canvasWidth / 9, canvasHeight / 9);
            break;
        case 3:
            context.drawImage(imgMario, canvasWidth / 6, 22 * canvasHeight / 36, canvasWidth / 9, canvasHeight / 9);
            break;
    }

}
function StageStart() {

}

StageStart.prototype.draw = function() {

    gameState = STATE_PLAY;
};

StageStart.prototype.init = function() {

};

function Player() {
    this.x = 0;
    this.y = 0;
}

function Fruit() {
    this.x = 5;
    this.y = 0;
}

function initGame() {
    player1.x = canvasWidth / 4;
    player1.y = 10 * canvasHeight / 11;
    fruitApple.y = canvasHeight / 10;
    level = 1;
    initStage();
}

function initStage() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    stageStart.init();
    gameState = STATE_STAGE_INIT;
}

function draw() {
    context.clearRect(fruitApple.x - 5, fruitApple.y, canvasWidth / 24, canvasHeight / 18);

    context.fillStyle = "rgb(138,43,226)";
    context.fillRect(0, 3 * canvasHeight / 4, 3 * canvasWidth / 8, canvasHeight / 11);
    context.fillRect(15 * canvasWidth / 32, 3 * canvasHeight / 4 - canvasHeight / 12, canvasWidth / 18, canvasHeight / 11);
    context.fillRect(5 * canvasWidth / 8, 3 * canvasHeight / 4, 3 * canvasWidth / 8, canvasHeight / 11);

    context.fillRect(0, canvasHeight / 2, canvasWidth / 8, canvasHeight / 11);
    context.fillRect(canvasWidth / 4, canvasHeight / 2 - canvasHeight / 11, canvasWidth / 2, canvasHeight / 11);
    context.fillRect(7 * canvasWidth / 8, canvasHeight / 2, canvasWidth / 8, canvasHeight / 11);

    context.fillRect(0, canvasHeight / 4 - canvasHeight / 11, 3 * canvasWidth / 8, canvasHeight / 11);
    context.fillRect(5 * canvasWidth / 8, canvasHeight / 4 - canvasHeight / 11, 3 * canvasWidth / 8, canvasHeight / 11);

    context.drawImage(imgMario, player1.x, player1.y, canvasWidth / 16, canvasHeight / 11);
    context.drawImage(imgApple, fruitApple.x, fruitApple.y, canvasWidth / 24, canvasHeight / 18);
    fruitApple.x += 5;
    if (fruitApple.x > canvasWidth) {
        fruitApple.x = 0;
    }

}

function updata() {

}

function updatePosition() {
    player1.x *= canvas.width() / canvasWidth;
    player1.y *= canvas.height() / canvasHeight;
    fruitApple.y *= canvas.height() / canvasHeight;
    fruitApple.x *= canvas.width() / canvasWidth;
}

function gameOver() {

}

function loop() {
    switch (gameState) {
        case STATE_PLAY:
            draw();
            updata();
            break;

        case STATE_INIT:
            initGame();
            break;

        case STATE_STAGE_INIT:
            stageStart.draw();
            break;

        case STATE_GAMEOVER:
            gameOver();
            break;

        case STATE_SELECT:
            gameSelect.draw();
            break;

        case STATE_GAMESTART:
            gameStart.draw();
            break;
    }
}

function main() {
    canvas = $("#plumbingMario");
    context = canvas.get(0).getContext("2d");
    $(window).resize(resizeCanvas);
    function resizeCanvas() {
        canvas.attr("width", $(window).get(0).innerWidth);
        canvas.attr("height", $(window).get(0).innerHeight);
        updatePosition();
        canvasWidth = canvas.width();
        canvasHeight = canvas.height();
    };
    resizeCanvas();
    setInterval("loop()", 25);

}

function playerMove(e) {
    context.clearRect(player1.x, player1.y, canvasWidth / 16, canvasHeight / 11);
    switch(e) {
        case K_LEFT:
            player1.x -= 10;
            break;
        case K_RIGHT:
            player1.x += 10;
            break;
        case K_SPACE:
            player1.y -= 5 * canvasHeight / 16;
            //player1.y-=4*canvasHeight / 16;
            break;
    }
}

onkeydown = function(e) {
    if (e.keyCode == K_UP && gameState == STATE_SELECT) {
        gameSelect.next(-1);
    }
    if (e.keyCode == K_DOWN && gameState == STATE_SELECT) {
        gameSelect.next(1);
    }
    if (e.keyCode == K_ENTER && gameState == STATE_SELECT) {
        if (gameSelect.num == 1) {
            playerNum = 1;
        } else if (gameSelect.num == 2) {
            playerNum = 2;
        } else {
            playerNum = 2;
        }

        gameState = STATE_INIT;
    }
    if (e.keyCode == K_LEFT && gameState == STATE_PLAY) {
        playerMove(K_LEFT);
    }
    if (e.keyCode == K_RIGHT && gameState == STATE_PLAY) {
        playerMove(K_RIGHT);
    }
    if (e.keyCode == K_SPACE && gameState == STATE_PLAY) {
        playerMove(K_SPACE);
    }
}

