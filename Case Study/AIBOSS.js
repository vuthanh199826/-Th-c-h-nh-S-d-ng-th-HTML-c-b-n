function AutoBoss(id) {
    this.blood = 500;
    this.x = Math.round(Math.random() * (1000 - 100) + 100);
    this.y = Math.round(Math.random() * (400 - 100) + 100);
    this.id = id;
    this.bulletsOfBoss = [];
    this.width = 170;
    this.height = 170;
    this.speedX = 3;
    this.speedY = 3;
    this.direction = 'down';
    this.reloadCount = 10;
    this.count = 0;
    this.canFire = true;

    this.draw = function () {
        let image = document.getElementById(this.id);
        ctx.drawImage(image, this.x, this.y, this.width, this.height);
    }
    this.drawBlood = function () {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y - 20, 170, 10);
        ctx.fillStyle = "rgb(164,10,10)";
        ctx.fillRect(this.x, this.y - 20, this.blood * 170 / 500, 10);
    }

    this.moveUp = function () {
        this.id = 'BlueUp';
        this.check();
        this.y = this.y - this.speedY;
    }
    this.moveDown = function () {
        this.id = 'BlueDown';
        this.check();
        this.y = this.y + this.speedY;
    }
    this.moveLeft = function () {
        this.id = 'BlueLeft';
        this.check();
        this.x = this.x - this.speedX;
    }
    this.moveRight = function () {
        this.id = 'BlueRight';
        this.check();
        this.x = this.x + this.speedX;
    }
    this.check = function () {
        if (this.x > 1280) {
            this.direction = 'left';
        } else if (this.x < 0) {
            this.direction = 'right';
        } else if (this.y > 530) {
            this.direction = 'up';
        } else if (this.y < 0) {
            this.direction = 'down';
        }
    }

    this.getDirectionOfBoss = function (num) {
        let dirs = ['up', 'down', 'left', 'right', 'topright', 'topleft', 'botright', 'botleft'];
        let current = this.direction;
        let all = new Array(num).fill(current);
        let diff = 100 - all.length;
        for (let i = 0; i < diff; i++) {
            let rand = Math.floor(Math.random() * dirs.length);
            all.push(dirs[rand]);
        }
        let randDir = Math.floor(Math.random() * all.length);
        return all[randDir];
    }
    this.fire = function () {
        if (!this.canFire) return;
        let bullet = new Bullet(this.x + 35, this.y + 35, this.direction);
        this.bulletsOfBoss.push(bullet);
        this.count = 0;
        this.canFire = false;
    }
    this.reload = function () {
        this.count++;
        if (this.count >= this.reloadCount) {
            this.canFire = true;
        }
    }

}

let boss = [];

function createBoss() {
    let pos = [
        [100, 100],
        [1000, 100],
        [100, 400],
        [1000, 400]
    ];
    for (let i = 0; i < 1; i++) {
        let rand = Math.floor(Math.random() * pos.length);
        let boss1 = new AutoBoss('BlueDown');
        boss1.x = pos[rand][0];
        boss1.y = pos[rand][1];
        boss.push(boss1);
    }

}


function drawBoss() {
    for (let i = 0; i < boss.length; i++) {
        boss[i].reload();
        boss[i].draw();
        boss[i].drawBlood();
    }
}

function randomDirecOfBoss() {
    for (let i = 0; i < boss.length; i++) {
        boss[i].direction = boss[i].getDirectionOfBoss(95);
        let rand = Math.floor(Math.random() * 4);
        if (rand === 1) {
            boss[i].fire();
        }
    }
    setTimeout(randomDirecOfBoss, 10);
}

randomDirecOfBoss();

function randomBossMove() {
    for (let i = 0; i < boss.length; i++) {
        if (boss[i].direction === 'down') boss[i].moveDown();
        if (boss[i].direction === 'up') boss[i].moveUp();
        if (boss[i].direction === 'left') boss[i].moveLeft();
        if (boss[i].direction === 'right') boss[i].moveRight();

        if (boss[i].direction === 'topleft') boss[i].moveDown();
        if (boss[i].direction === 'topright') boss[i].moveUp();
        if (boss[i].direction === 'botleft') boss[i].moveLeft();
        if (boss[i].direction === 'botright') boss[i].moveRight();
    }
}

function moveBulletOfBoss() {
    for (let i = 0; i < boss.length; i++) {
        for (let j = 0; j < boss[i].bulletsOfBoss.length; j++) {
            boss[i].bulletsOfBoss[j].moveBullet();
            boss[i].bulletsOfBoss[j].draw();
        }
    }
}

function checkCrashWithBoss() {
    for (let i = 0; i < tank.bullets.length; i++) {
        for (let j = 0; j < boss.length; j++) {
            if (checkCrash(tank.bullets[i], boss[j])) {
                tank.bullets.splice(i, 1);
                if(tank.power<5) {
                    boss[j].blood -= 10;
                }else if(tank.power>=5){
                    boss[j].blood -= 100;
                }
                if (boss[j].blood === 0) {
                    boss.splice(j, 1);
                    tank.score += 100;
                }
                NextStage2();
                break;
            }
        }
    }
}

function checkBulletOfBoss() {
    for (let i = 0; i < boss.length; i++) {
        for (let j = 0; j < boss[i].bulletsOfBoss.length; j++) {
            if (checkCrash(boss[i].bulletsOfBoss[j], tank)) {
                boss[i].bulletsOfBoss.splice(j, 1);
                tank.blood -= 10;
                CheckLoser();
                break;
            }
            // boss[j].bulletsOfBoss[j].check();
        }
    }
}

function NextStage2() {
    if (boss.length === 0) {
        setTimeout(createAirBoss, 2000);
    }
}







