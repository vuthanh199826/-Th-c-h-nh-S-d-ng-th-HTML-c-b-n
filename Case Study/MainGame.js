let tank = new Tank(600, 370, "up");
let over = false;
// setTimeout(createEnemy, 2000);
// createBoss();
// createAirBoss();
createFinalBoss();

function main() {
    if (over) return;
    clearAll();
    // Air Boss
    checkBulletOfAirBoss();
    checkCrashWithAirBoss();
    randomAirBossMove();
    moveBulletOfAirBoss();
    drawAirBoss();

    // Tank Boss
    checkBulletOfBoss()
    checkCrashWithBoss()
    randomBossMove();
    moveBulletOfBoss();
    drawBoss();

    // Tank enemies
    checkBulletOfEnemies();
    checkAllCrash();
    randomMove();
    displayAllStar();
    checkCrashWithStar();
    moveAllBullet();
    drawAllEnemy();

    //Check crash with all
    checkCrashWithAllEnemie();
    // Player
    tank.drawAllBullet();
    tank.reload();
    tank.drawBlood();
    tank.draw();

    // final boss
    checkBulletOfFinalBoss();
    checkCrashWithFinalBoss();
    randomFinalBossMove();
    moveBulletOfFinalBoss();
    drawFinalBoss();


    requestAnimationFrame(main);
}

main();

// Xây hàm điều khiển nhân vật

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
            tank.firePlus();
            break;
    }
}

function move() {
    window.addEventListener('keydown', moveTank);
}
