function AirBoss(id){
    this.blood = 100;
    this.x = Math.round(Math.random()*(1000-100)+100);
    this.y = Math.round(Math.random()*(400-100)+100);
    this.id = id;
    this.bulletsOfAir = [];
    this.width = 270;
    this.height = 270;
    this.speedX = 6;
    this.speedY = 6;
    this.direction = 'down';
    this.reloadCount = 10;
    this.count = 0;
    this.canFire = true;

    this.draw = function (){
        let image = document.getElementById(this.id);
        ctx.drawImage(image,this.x,this.y,this.width,this.height);
    }

    this.moveUp = function (){
        this.id = 'airUp';
        this.check();
        this.y = this.y - this.speedY;
    }
    this.moveDown = function (){
        this.id = 'airDown';
        this.check();
        this.y = this.y + this.speedY;
    }
    this.moveLeft = function () {
        this.id = 'airLeft';
        this.check();
        this.x = this.x - this.speedX;
    }
    this.moveRight = function (){
        this.id = 'airRight';
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

    this.getDirectionOfAirBoss = function (num) {
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
        let bullet = new Bullet(this.x + 120, this.y+120,this.direction);
        bullet.speedXoB = 10;
        bullet.speedYoB = 10;
        this.bulletsOfAir.push(bullet);
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

let airboss = [];

function createAirBoss() {
    let pos = [
        [600, 100],
        [500, 100],
        [100, 100],
        [300, 100]
    ];
    for (let i = 0; i < 1; i++) {
        let rand = Math.floor(Math.random() * pos.length);
        let air = new AirBoss('airDown');
        air.x = pos[rand][0];
        air.y = pos[rand][1];
        airboss.push(air);
    }

}




function drawAirBoss(){
    for (let i = 0; i < airboss.length; i++) {
        airboss[i].reload();
        airboss[i].draw();
    }
}
function randomDirecOfAirBoss() {
    for (let i = 0; i < airboss.length; i++) {
        airboss[i].direction = airboss[i].getDirectionOfAirBoss(98);
        let rand = Math.floor(Math.random() * 4);
        if (rand === 1) {
            airboss[i].fire();
        }
    }
    setTimeout(randomDirecOfAirBoss, 10);
}
randomDirecOfAirBoss();

function randomAirBossMove() {
    for (let i = 0; i < airboss.length; i++) {
        if (airboss[i].direction === 'down') airboss[i].moveDown();
        if (airboss[i].direction === 'up') airboss[i].moveUp();
        if (airboss[i].direction === 'left') airboss[i].moveLeft();
        if (airboss[i].direction === 'right') airboss[i].moveRight();

        if (airboss[i].direction === 'topleft') airboss[i].moveDown();
        if (airboss[i].direction === 'topright') airboss[i].moveUp();
        if (airboss[i].direction === 'botleft') airboss[i].moveLeft();
        if (airboss[i].direction === 'botright') airboss[i].moveRight();
    }
}

function moveBulletOfAirBoss() {
    for (let i = 0; i < airboss.length; i++) {
        for (let j = 0; j < airboss[i].bulletsOfAir.length; j++) {
            airboss[i].bulletsOfAir[j].moveBullet();
            airboss[i].bulletsOfAir[j].draw();
        }
    }
}

function checkCrashWithAirBoss() {
    for (let i = 0; i < tank.bullets.length; i++) {
        for (let j = 0; j < airboss.length; j++) {
            if (checkCrash(tank.bullets[i], airboss[j])) {
                tank.bullets.splice(i, 1);
                airboss[j].blood --;
                if(airboss[j].blood===0){
                    airboss.splice(j,1);
                    tank.score += 100;
                }
                // NextStage();
                break;
            }
        }
    }
}

function checkBulletOfAirBoss() {
    for (let i = 0; i < airboss.length; i++) {
        for (let j = 0; j < airboss[i].bulletsOfAir.length; j++) {
            if (checkCrash(airboss[i].bulletsOfAir[j], tank)) {
                airboss[i].bulletsOfAir.splice(j, 1);
                tank.blood -= 10;
                CheckLoser();
                break;
            }
        }
    }
}


