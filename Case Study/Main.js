let tank = new Tank(600, 370, "up");
let enemies = [];
let a = 1;

setTimeout(createEnemy, 2000);

function createEnemy() {
    let pos = [
        [0, 0],
        [1350, 0],
        [0, 530],
        [1350, 530]
    ];
    for (let i = 0; i < 5 * a; i++) {
        let rand = Math.floor(Math.random() * pos.length);
        let enemy = new AutoTank('redDown');
        enemy.x = pos[rand][0];
        enemy.y = pos[rand][1];
        enemies.push(enemy);
    }
}

function randomDirec() {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].direction = enemies[i].getDirection(90);
        let rand = Math.floor(Math.random() * 4);
        if (rand === 1) {
            enemies[i].fire();
        }
    }
    setTimeout(randomDirec, 100);
}

randomDirec();

function randomMove() {
    for (let i = 0; i < enemies.length; i++) {
        if (enemies[i].direction === 'down') enemies[i].moveDown();
        if (enemies[i].direction === 'up') enemies[i].moveUp();
        if (enemies[i].direction === 'left') enemies[i].moveLeft();
        if (enemies[i].direction === 'right') enemies[i].moveRight();
    }
}

function moveAllBullet() {
    for (let i = 0; i < enemies.length; i++) {
        for (let j = 0; j < enemies[i].bulletsOfAutoTank.length; j++) {
            enemies[i].bulletsOfAutoTank[j].moveBullet();
            enemies[i].bulletsOfAutoTank[j].draw();
        }
    }
}

function drawAllEnemy() {
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].reload();
        enemies[i].draw();
    }
}

function checkAllCrash() {
    for (let i = 0; i < tank.bullets.length; i++) {
        for (let j = 0; j < enemies.length; j++) {
            if (checkCrash(tank.bullets[i], enemies[j])) {
                tank.bullets.splice(i, 1);
                enemies[j].id = 'boom';
                enemies[j].draw();
                enemies.splice(j, 1);
                tank.score += 10;
                NextStage();
                break;
            }
        }
    }
}

function NextStage() {
    if (enemies.length <= 0) {
        if (a < 3) {
            a++;
            setTimeout(createEnemy, 1000);
        } else if (a === 3) {
            setTimeout(createBoss, 2000);
        }

    }
}


function checkBulletOfEnemies() {
    for (let i = 0; i < enemies.length; i++) {
        for (let j = 0; j < enemies[i].bulletsOfAutoTank.length; j++) {
            if (checkCrash(enemies[i].bulletsOfAutoTank[j], tank)) {
                enemies[i].bulletsOfAutoTank.splice(j, 1);
                tank.blood -= 10;
                CheckLoser();
                break;
            }
            // enemies[i].bulletsOfAutoTank[j].check();
        }
    }
}

function CheckLoser() {
    if (tank.blood === 0) {
        if (confirm("You Lose, Your Score is " + tank.score)) {
            window.location.href = "StarGame.html";
        } else {
            window.location.href = "StarGame.html";
        }
    }
}




function main() {
    clearAll();

    checkBulletOfAirBoss();
    checkCrashWithAirBoss();
    randomAirBossMove();
    moveBulletOfAirBoss();
    drawAirBoss();


    checkBulletOfBoss()
    checkCrashWithBoss()
    randomBossMove();
    moveBulletOfBoss();
    drawBoss();


    checkAllCrash();
    randomMove();
    tank.drawAllBullet();
    moveAllBullet();
    drawAllEnemy();
    tank.reload();
    tank.draw();
    checkBulletOfEnemies();
    requestAnimationFrame(main);
}

function move() {
    window.addEventListener('keydown', moveTank);
    // window.addEventListener('keyup', moveTank);
    // window.addEventListener('keypress', moveTank);
}

function moveTank(evt) {
    switch (evt.keyCode) {
        case 38:
            tank.moveUp();
            break;
        case 40:
            tank.moveDown();
            break;
        case 37:
            tank.moveLeft();
            break;
        case 39:
            tank.moveRight();
            break;
        case 32:
            tank.fire();
            break;
    }
}

main();
