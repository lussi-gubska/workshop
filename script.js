
var audioplayer = document.querySelector("audio");
var soundButton = document.querySelector("#sound img");
    sound = "off";
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

// 

var startBlock = document.querySelector("#start");
var countlifes = 5;
var score = document.querySelector("#score span")
var gameBlock = document.querySelector("#game");
var gamerSkin = "skin_1";
var gamer = document.querySelector("#player");
var startButton = document.querySelector("#startgame");
    startButton.onclick = function () {
    startGame();
}
function startGame() {
    startBlock.style.display = "none";
    gameBlock.style.display = "block";
    gamer.className = gamerSkin;
    createLifes();
    createEnemy();
}
// уменшения жизней, если враг пролетел
function die() { 
    countlifes = countlifes - 1;
    if (countlifes <= 0) { 
        endGame();   
    }
    createLifes();
}
function createLifes() { 
    if (countlifes !=0 ) { 
    let lifesBlock = document.querySelector("#lifes");
    lifesBlock.innerHTML = "";
    let count = 0;
    while (count < countlifes) { 
        let span = document.createElement("span");
        lifesBlock.appendChild(span);
        count = count + 1;
    }
    }
    }


function createEnemy() { 
    let enemy = document.createElement("div");
    enemy.className = "enemy " + typeEnemy();
    enemy.style.top = random(100, document.querySelector("#app").clientHeight - 150) + "px";
    gameBlock.appendChild(enemy);
    moveEnemy(enemy);

}

function typeEnemy() { 
    if (random(1, 2) == 1) {
        return "type-1";
    } else { 
        return "type-2";
    }
}
function moveEnemy(enemy) {
    let timerID = setInterval(function () {
        enemy.style.left = enemy.offsetLeft - 10 + "px";
        if (enemy.offsetLeft < -100) {
            enemy.remove();
            createEnemy();
            die();
            clearInterval(timerID);
            
            }
        }, 100);
    }

    

// GAME START


document.onkeydown = function (event) {
    if (event.keyCode == 87) { 
        if (gamer.offsetTop > 50) { 
            gamer.style.top = gamer.offsetTop - 20 + "px";
        }

    } 
    if (event.keyCode == 83) { 
        if (gamer.offsetTop < document.querySelector("#app").clientHeight - 200) { 
            gamer.style.top = gamer.offsetTop + 40 + "px";
        }

    }
        if (event.keyCode == 32) {
            createBullet();
        }
    }


function createBullet() { 
    var bullet = document.createElement("div");
    bullet.className = "bullet";
    bullet.style.top = gamer.offsetTop + 140 + "px";
    gameBlock.appendChild(bullet);
    moveBullet(bullet);
}

function moveBullet(bullet) { 
    // bullet = document.querySelector(".bullet")
      let timerID = setInterval(function () {
        bullet.style.left = bullet.offsetLeft + 50 + "px";  
        if (bullet.offsetLeft > document.querySelector("body").clientWidth) { 
            bullet.remove();
            clearInterval(timerID);
          }
          isBoom(bullet);
          
    }, 10);
}
// попадание по врагу
// function isBoom(bullet) { 
//     let enemy = document.querySelector(".enemy");
    
//     if (bullet.offsetTop > enemy.offsetTop &&
//         bullet.offsetTop < enemy.offsetTop + enemy.clientHeight &&
//         bullet.offsetLeft > enemy.offsetLeft) { 
//         createBoom(bullet.offsetTop, bullet.offsetLeft);
//         score.innerText = Number(score.innerText) + 1;
//         bullet.remove();
//         enemy.remove();
//         createEnemy();
//     }
// }
function isBoom(bullet) { 
    if (countlifes !=0 ) {

    let enemy = document.querySelector(".enemy");
    
    if (bullet.offsetTop > enemy.offsetTop &&
        bullet.offsetTop < enemy.offsetTop + enemy.clientHeight &&
        bullet.offsetLeft > enemy.offsetLeft) { 
        createBoom(bullet.offsetTop, bullet.offsetLeft);
        score.innerText = Number(score.innerText) + 1;
        bullet.remove();
        enemy.remove();
        createEnemy();
    }
}
 }
function createBoom(top, left) { 
    let boom = document.createElement("div");
    boom.className = "boom";
    boom.style.top = top - 100 + "px";
    boom.style.left = left - 100 + "px";
    gameBlock.appendChild(boom);
    setTimeout(function () { 
        boom.remove();
    }, 100);

}

function endGame() { 
    let scoreBlock = document.querySelector("#end h3 span");
    scoreBlock.innerText = score.innerText;

    gameBlock.innerHTML = "";
    let endBlock = document.querySelector("#end");
    endBlock.style.display = "block";

    let restartButton = document.querySelector("#end button");
    restartButton.onclick = restart;
   
    
}

function restart() { 
    location.reload();
} 
function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var selectSkin1 = document.querySelector("#skin_1");
selectSkin1.onclick = function () { 
    selectSkin1.className = "selected";
    selectSkin2.className = "";
    gamerSkin = "skin_1";
}

var selectSkin2 = document.querySelector("#skin_2");
selectSkin2.onclick = function () {
    selectSkin2.className = "selected";
    selectSkin1.className = "";
    gamerSkin = "skin_2";
}