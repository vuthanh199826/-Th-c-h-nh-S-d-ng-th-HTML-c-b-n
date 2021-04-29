function FinalBoss(id){
    this.blood = 2000;
    this.x = Math.round(Math.random()*(1000-100)+100);
    this.y = Math.round(Math.random()*(400-100)+100);
    this.id = id;
    this.bulletsOfFinalBoss = [];
    this.width = 130;
    this.height = 130;
    this.speedX = 6;
    this.speedY = 6;
    this.direction = 'down';
    this.reloadCount = 50;
    this.count = 0;
    this.canFire = true;

    this.draw = function (){
        let image = document.getElementById(this.id);
        ctx.drawImage(image,this.x,this.y,this.width,this.height);
    }
    this.drawBlood = function (){
        // ctx.fillStyle = 'white';
        // ctx.fillRect(this.x, this.y - 20,  130 , 10);
        // ctx.fillStyle = "rgb(164,10,10)";
        // ctx.fillRect(this.x, this.y - 20, this.blood * 130 / 1000, 10);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0,  1350 , 5);
        ctx.fillStyle = "rgb(164,10,10)";
        ctx.fillRect(0, 0, this.blood * 1350 / 1000, 5);
    }

    this.moveUp = function (){
        this.id = 'newAirUp';
        this.check();
        this.y = this.y - this.speedY;
    }
    this.moveDown = function (){
        this.id = 'newAirDown';
        this.check();
        this.y = this.y + this.speedY;
    }
    this.moveLeft = function () {
        this.id = 'newAirLeft';
        this.check();
        this.x = this.x - this.speedX;
    }
    this.moveRight = function (){
        this.id = 'newAirRight';
        this.check();
        this.x = this.x + this.speedX;
    }
    this.moveTopRight = function (){
        this.id = 'newAirTopRight';
        this.check();
        this.x = this.x + this.speedX;
        this.y = this.y - this.speedY
    }
    this.moveTopLeft = function (){
        this.id = 'newAirTopLeft';
        this.check();
        this.x = this.x - this.speedX*0.7 ;
        this.y = this.y - this.speedY*0.7;
    }
    this.moveBotRight = function (){
        this.id = 'newAirBotRight';
        this.check();
        this.x = this.x + this.speedX*0.7;
        this.y = this.y + this.speedY*0.7;
    }
    this.moveBotLeft = function (){
        this.id = 'newAirBotLeft';
        this.check();
        this.x = this.x - this.speedX*0.7;
        this.y = this.y + this.speedY*0.7;
    }
    this.check = function () {
        if (this.x > 1280) {
            this.direction = 'left';
        } else if (this.x < 20) {
            this.direction = 'right';
        } else if (this.y > 500) {
            this.direction = 'up';
        } else if (this.y < 20) {
            this.direction = 'down';
        }
    }

    this.getDirectionOfFinalBoss = function (num) {
        let dirs= ['up','down','left','right','topright','topleft','botright','botleft'];
        let current = this.direction;
        let all = new Array(num).fill(current);
        let diff = 100 - all.length;
        for (let i = 0; i < diff; i++) {
            let rand = Math.floor(Math.random()*dirs.length);
            all.push(dirs[rand]);
        }
        let randDir = Math.floor(Math.random()*all.length);
        return all[randDir];
    }
    this.fire = function () {
        if(!this.canFire) return;
        let bullet1 = new Bullet(this.x + 50, this.y+50,"topleft");this.bulletsOfFinalBoss.push(bullet1);
        let bullet2 = new Bullet(this.x + 50, this.y+50,'topright');this.bulletsOfFinalBoss.push(bullet2);
        let bullet3 = new Bullet(this.x + 50, this.y+50,'botleft');this.bulletsOfFinalBoss.push(bullet3);
        let bullet4 = new Bullet(this.x + 50, this.y+50,'botright');this.bulletsOfFinalBoss.push(bullet4);
        // let bullet5 = new Bullet(this.x + 50, this.y+50,"left");this.bulletsOfFinalBoss.push(bullet5);
        // let bullet6 = new Bullet(this.x + 50, this.y+50,'right');this.bulletsOfFinalBoss.push(bullet6);
        // let bullet7 = new Bullet(this.x + 50, this.y+50,'up');this.bulletsOfFinalBoss.push(bullet7);
        // let bullet8 = new Bullet(this.x + 50, this.y+50,'down');this.bulletsOfFinalBoss.push(bullet8);

        let bullet = new Bullet(this.x + 50, this.y+50,this.direction);
        bullet.speedXoB = 10;
        bullet.speedYoB = 10;

        this.bulletsOfFinalBoss.push(bullet);
        this.count = 0;
        this.canFire = false;
    }
    this.reload = function () {
        this.count++;
        if(this.count >= this.reloadCount){
            this.canFire = true;
        }
    }
}

let finalboss = [];

function createFinalBoss() {
    let pos = [
        [1250, 20],
        [1150, 20],
        [20, 20],
        [30, 100]
    ];
    for (let i = 0; i < 1; i++) {
        let rand = Math.floor(Math.random() * pos.length);
        let air = new FinalBoss('newAirDown');
        air.x = pos[rand][0];
        air.y = pos[rand][1];
        finalboss.push(air);
    }

}




function drawFinalBoss(){
    for (let i = 0; i < finalboss.length; i++) {
        finalboss[i].reload();
        finalboss[i].draw();
        finalboss[i].drawBlood();
    }
}
function randomDirecOfFinalBoss() {
    for (let i = 0; i < finalboss.length; i++) {
        finalboss[i].direction = finalboss[i].getDirectionOfFinalBoss(98);
        let rand = Math.floor(Math.random() * 4);
        if (rand === 1||rand ===2 ) {
            finalboss[i].fire();
        }
    }
    setTimeout(randomDirecOfFinalBoss, 10);
}
randomDirecOfFinalBoss();

function randomFinalBossMove() {
    for (let i = 0; i < finalboss.length; i++) {
        if (finalboss[i].direction === 'down') finalboss[i].moveDown();
        if (finalboss[i].direction === 'up') finalboss[i].moveUp();
        if (finalboss[i].direction === 'left') finalboss[i].moveLeft();
        if (finalboss[i].direction === 'right') finalboss[i].moveRight();

        if (finalboss[i].direction === 'topleft') finalboss[i].moveTopLeft();
        if (finalboss[i].direction === 'topright') finalboss[i].moveTopRight();
        if (finalboss[i].direction === 'botleft') finalboss[i].moveBotLeft();
        if (finalboss[i].direction === 'botright') finalboss[i].moveBotRight();
    }
}

function moveBulletOfFinalBoss() {
    for (let i = 0; i < finalboss.length; i++) {
        for (let j = 0; j < finalboss[i].bulletsOfFinalBoss.length; j++) {
            finalboss[i].bulletsOfFinalBoss[j].moveBullet();
            finalboss[i].bulletsOfFinalBoss[j].draw();
        }
    }
}

function checkCrashWithFinalBoss() {
    for (let i = 0; i < tank.bullets.length; i++) {
        for (let j = 0; j < finalboss.length; j++) {
            if (checkCrash(tank.bullets[i], finalboss[j])) {
                tank.bullets.splice(i, 1);
                finalboss[j].blood -=100;
                if(finalboss[j].blood<=0){
                    finalboss.splice(j,1);
                    tank.score += 100;
                }
                // NextStage();
                break;
            }
        }
    }
}

function checkBulletOfFinalBoss() {
    for (let i = 0; i < finalboss.length; i++) {
        for (let j = 0; j < finalboss[i].bulletsOfFinalBoss.length; j++) {
            if (checkCrash(finalboss[i].bulletsOfFinalBoss[j], tank)) {
                finalboss[i].bulletsOfFinalBoss.splice(j, 1);
                tank.blood -= 10;
                CheckLoser();
                break;
            }
        }
    }
}


