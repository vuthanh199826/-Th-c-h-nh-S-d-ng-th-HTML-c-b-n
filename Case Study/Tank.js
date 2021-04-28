let ctx = document.getElementById('mycanvas').getContext('2d');
function clearAll() {
    ctx.clearRect(0, 0, 1500, 1500);
}

//Xây Class tank

function Tank(x, y, id) {
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
    this.reloadCount = 30;
    this.count = 0;
    this.canFire = true;
    this.draw = function () {
        let img = document.getElementById(this.id);
        ctx.drawImage(img, this.x, this.y, 70, 70);
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
        // '<audio src="fire.mp3"></audio>';
        if(!this.canFire) return;
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
        if(this.count >= this.reloadCount){
            this.canFire = true;
        }
    }
}












