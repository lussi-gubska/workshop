// //выбрать элемент и назначить ей переменную
// //переменная start, элемент кнопка
// var start = document.querySelector("button");

// // меняем цвет кнопки на зеленый
// start.style.backgroundColor = "green";
// // изменяем размер кнопки
// start.style.height = "100px";
// start.style.width = "200px";

// //выводим в консоль информацию о переменной
// console.dir(start);

//выбрали блок жизней и поместили в переменую lifes
var lifes = document.querySelector("#lifes");
var countlifes = 5;
for (var i = 0; i < countlifes; i = i + 1) { 
    var li = document.createElement("li");
    lifes.appendChild(li);
}

var score = document.querySelector("#score");
    score.style.color = "yellow";

var audioplayer = document.querySelector("audio");
// player.play();

// playButton = document.querySelector("#play");
// pauseButton = document.querySelector("#pause");

// playButton.onclick = function () {
//     player.play();
// }
// pauseButton.onclick = function () {
//     player.pause();
// }
/*
1. в index добавить две кнопки
 - первая кнопка выбирает в плеере первую мелодию
 - вторая кнопка выбирает вторую мелодию
 2. Сделаьт смену мелодий при нажатии на кнопки из пункта 1
*/
// var one = document.querySelector("#onemelody");
// var two = document.querySelector("#twomelody");

// var oneButton = document.querySelector("#buttonone");


// oneButton.onclick = function () {
//     two.pause();
//     one.play();
// }
// var twoButton = document.querySelector("#buttontwo")
// twoButton.onclick = function () {
//     one.pause();
//     two.play();
//  }
// пременной присваиваем кнопку
var startButton = document.querySelector("#startgame");
// переменной присваиваем стартовый блок
var startBlock = document.querySelector("#start");
// переменной присваиваем игровой блок
var gameBlock = document.querySelector("#game");
// при клике на кнопку стартовый блок пропопадет, и появляется игровой блок
startButton.onclick = function () {
    startGame();
}

// переменной присваиваем sound (картинка с проигривателем)
var soundButton = document.querySelector("#sound img");
sound = "off"; //"on"
// при клике на кнопку sound меняем картинку и включаем/выключаем музыку
soundButton.onclick = function () {
    if (sound == "on") {
        soundButton.src = "images/mute_sound.png"
        sound = "off"
        audioplayer.pause();
    } else { 
        soundButton.src = "images/sound_on.png"
        sound = "on"
        audioplayer.play();
    }
}
// GAME START

// выбираем игрока
var gamer = document.querySelector("#player");
// нажатие клавиш
// w двигает вниз
document.onkeydown = function (event) { 
    if (event.keyCode == 87 && gamer.offsetTop >= 55) { 
        gamer.style.top = gamer.offsetTop - 10 + "px";
       }
    // s  двигает вверх
   if (event.keyCode == 83 && gamer.offsetTop <= 500) { 
       gamer.style.top = gamer.offsetTop + 30 + "px";
    } 
}  
// создаем функцию старта игры
function startGame() {
    startBlock.style.display = "none";
    gameBlock.style.display = "block";
    
    // createEnemy();
    createEnemyTwo();
   
}
// Работа с врагами
// создание 1 врага

position = 400;
function createEnemyTwo() {
    let enemyTwo = document.createElement("div");
        enemyTwo.className = "enemy type-2";
    enemyTwo.style.top = position + "px";
    position = position - 10;
    gameBlock.appendChild(enemyTwo);
    moveEnemy(enemyTwo);
}
function moveEnemy(enemyTwo) { 
    let timerID = setInterval(function () {
        enemyTwo.style.left = enemyTwo.offsetLeft - 10 + "px";
        console.dir(enemyTwo.offsetLeft);
        if (enemyTwo.offsetLeft < -100) { 
            enemyTwo.remove();
            createEnemyTwo();
            // остановить таймер (движение врага)
            clearInterval(timerID);
        }
    }, 10);
}

position = 100;
function createEnemy() {
    let enemy = document.createElement("div");
        enemy.className = "enemy type-1";
    enemy.style.top = position + "px";
    position = position + 10;
    gameBlock.appendChild(enemy);
    moveEnemy(enemy);
}
// создаем функцию движения врагов
function moveEnemy(enemy) { 
    let timerID = setInterval(function () {
        enemy.style.left = enemy.offsetLeft - 10 + "px";
        console.dir(enemy.offsetLeft);
        if (enemy.offsetLeft < -100) { 
            enemy.remove();
            createEnemy();
            // остановить таймер (движение врага)
            clearInterval(timerID);
        }
    }, 10);
}

// function createBullet() {
//     bullet.style.className = "bullet";
//     position = 10;
//     gameBlock.appendChild(bullet);
//     moveBullet();

// }
    // выбираем врага 1
//    var enemy1 = document.querySelector(".enemy.type-1");
//     moveEnemy(enemy1);    
//     // выбираем врага 2
//     var enemy2 = document.querySelector(".enemy.type-2");
//         moveEnemy(enemy2);

// создаем функцию движения врагов
// function moveEnemy(enemy) { 
//     let timerID = setInterval(function () {
//         enemy.style.left = enemy.offsetLeft - 10 + "px";
//         console.dir(enemy.offsetLeft);
//         if (enemy.offsetLeft < -100) { 
//             enemy.remove();
//             createEnemy();
//             // остановить таймер (движение врага)
//             clearInterval(timerID);
//         }
//     }, 10);
// }
// движенирпе пули
// var bullet = document.querySelector(".bullet");
//     moveBullet(bullet);
//     function moveBullet(bullet) { 
//       let timerID = setInterval(function () {
//         bullet.style.left = bullet.offsetLeft + 10 + "px";  
//         if (bullet.offsetLeft > 1000) { 
//             bullet.remove();
//             createBullet();
//             clearInterval(timerID);
//         }
//     }, 10);
// }


// меняем позициоинрование игрока
 


    // if (gamer.offsetTop < "55") {
    //     gamer.style.top = gamer.offsetTop + 10 + "px";
    // }

  
// if (gamer.offseTop == 50 + "px") { 
//     console.dir(player);
// }

// timer = 1;
// setInterval(function () {
//     console.dir("прошла" + timer + "секуда"); 
//     timer = timer + 1;
// },1000)


