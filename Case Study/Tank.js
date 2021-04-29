let ctx = document.getElementById('mycanvas').getContext('2d');

function clearAll() {
    ctx.clearRect(0, 0, 1500, 1500);
}

//Xây Class tank

function Tank(x, y, id) {
    this.power = 3;
    this.blood = 100;
    this.score = 0;
    this.bullets = [];
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 70;
    this.speedX = 15;
    this.speedY = 15;
    this.id = id;
    this.reloadCount = 20;
    this.count = 0;
    this.canFire = true;
    this.dif = 20;
    this.draw = function () {
        let img = document.getElementById(this.id);
        ctx.drawImage(img, this.x, this.y, 70, 70);
    }
    this.drawBlood = function () {
        ctx.fillStyle = 'white';
        ctx.fillRect(this.x, this.y - 15,70,10);
        if (this.blood > 70) {
            ctx.fillStyle = "rgb(104,195,10)";
        } else if (this.blood > 30) {
            ctx.fillStyle = "rgb(208,109,25)";
        } else {
            ctx.fillStyle = "rgb(164,10,10)";
        }
        ctx.fillRect(this.x, this.y -15, this.blood * 70 / 100, 10);
    }
    this.moveUp = function () {
        this.id = "up";
        this.y -= this.speedY;
        this.check();
    }
    this.moveDown = function () {
        this.id = "down";
        this.y += this.speedY;
        this.check();
    }
    this.moveLeft = function () {
        this.id = "left";
        this.x -= this.speedX;
        this.check();
    }
    this.moveRight = function () {
        this.id = "right";
        this.x += this.speedX;
        this.check();
    }
    this.check = function () {
        if (this.x > 1280) {
            this.x = 1280;
        } else if (this.x < 0) {
            this.x = 0;
        } else if (this.y > 530) {
            this.y = 530;
        } else if (this.y < 0) {
            this.y = 0;
        }
    }

    this.fire = function () {

        if (!this.canFire) return;
        let bull = new Bullet(this.x + 20, this.y + 20, this.id);
        bull.speedXoB = 5;
        bull.speedYoB = 5;
        this.bullets.push(bull);
        this.count = 0;
        this.canFire = false;
    }
    this.drawAllBullet = function () {
        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].moveBullet();
            this.bullets[i].draw();
        }
    }

    this.reload = function () {
        this.count++;
        if (this.count >= this.reloadCount) {
            this.canFire = true;
        }
    }
    this.firePlus = function () {
        // '<audio src="fire.mp3"></audio>';
        document.getElementById('fire').play();
        if (!this.canFire) return;
        let bull = new BulletPlus(this.x + this.dif, this.y + this.dif, this.id);
        bull.speedXoB = 5;
        bull.speedYoB = 5;
        if(this.power>=10){
            bull.speedXoB = 10;
            bull.speedYoB = 10;
        }
        if(this.power>=5){
            this.reloadCount = 10;
        }
        this.bullets.push(bull);
        this.count = 0;
        this.canFire = false;
    }
}












