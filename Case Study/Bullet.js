// Xây class Bullet

function Bullet(x, y, dir) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.speedXoB = 3;
    this.speedYoB = 3;
    this.id = "bulletUp";
    this.direction = dir;
    this.draw = function () {
        let imgBullet = document.getElementById(this.id);
        ctx.drawImage(imgBullet, this.x, this.y, this.width, this.height);
    }

    this.check = function (index) {
        if (this.y < -50 || this.y > 700) {
            tank.bullets.splice(index, 1);
        } else if (this.x < -50 || this.x > 1550) {
            tank.bullets.splice(index, 1);
        }
    }


    this.moveBullet = function () {
        switch (this.direction) {
            case 'up':
                this.id = 'bulletUp';
                this.y -= this.speedYoB;

                break;
            case 'down':
                this.id = 'bulletDown';
                this.y += this.speedYoB;

                break;
            case 'left':
                this.id = 'bulletLeft';
                this.x -= this.speedYoB;

                break;
            case 'right':
                this.id = 'bulletRight';
                this.x += this.speedYoB;

                break;
            case 'topright':
                this.id = 'bulletTopRight';
                this.y -= this.speedYoB;
                this.x += this.speedXoB;

                break;
            case 'topleft':
                this.id = 'bulletTopLeft';
                this.y -= this.speedYoB;
                this.x -= this.speedXoB;

                break;
            case 'botright':
                this.id = 'bulletBotRight';
                this.x += this.speedXoB;
                this.y += this.speedYoB;

                break;
            case 'botleft':
                this.id = 'bulletBotLeft';
                this.x -= this.speedXoB;
                this.y += this.speedYoB;

                break;
        }
    }

}


function BulletPlus(x, y, dir) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.speedXoB = 3;
    this.speedYoB = 3;
    this.id = "bulletUp";
    this.direction = dir;
    this.draw = function () {
        let imgBullet = document.getElementById(this.id);
        ctx.drawImage(imgBullet, this.x, this.y, this.width, this.height);
    }

    this.check = function (index) {
        if (this.y < -50 || this.y > 700) {
            tank.bullets.splice(index, 1);
        } else if (this.x < -50 || this.x > 1550) {
            tank.bullets.splice(index, 1);
        }
    }

    this.update = function () {
        tank.dif = 10;
        this.width = 50;
        this.height = 50;
    }

    this.moveBullet = function () {
        switch (this.direction) {
            case 'up':
                if (tank.power >= 5) {
                    this.id = 'bulletPowerUp';
                    this.update();
                } else {
                    this.id = 'bulletUp';
                }
                this.y -= this.speedYoB;
                break;
            case 'down':
                if (tank.power >= 5) {
                    this.id = 'bulletPowerDown';
                    this.update();
                } else {
                    this.id = 'bulletDown';
                }
                this.y += this.speedYoB;
                break;
            case 'left':
                if (tank.power >= 5) {
                    this.id = 'bulletPowerLeft';
                    this.update();
                } else {
                    this.id = 'bulletLeft';
                }
                this.x -= this.speedYoB;
                break;
            case 'right':
                if (tank.power >= 5) {
                    this.id = 'bulletPowerRight';
                    this.update();
                } else {
                    this.id = 'bulletRight';
                }
                this.x += this.speedYoB;
                break;
            case 'topright':
                this.id = 'bulletTopRight';
                this.y -= this.speedYoB;
                this.x += this.speedXoB;
                break;
            case 'topleft':
                this.id = 'bulletTopLeft';
                this.y -= this.speedYoB;
                this.x -= this.speedXoB;
                break;
            case 'botright':
                this.id = 'bulletBotRight';
                this.x += this.speedXoB;
                this.y += this.speedYoB;
                break;
            case 'botleft':
                this.id = 'bulletBotLeft';
                this.x -= this.speedXoB;
                this.y += this.speedYoB;
                break;
        }
    }

}

