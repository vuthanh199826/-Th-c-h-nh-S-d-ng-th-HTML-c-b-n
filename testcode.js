let ctx = document.getElementById('mycanvas').getContext('2d');

//Xây Class tank
function Tank(x, y, id) {
    this.bullets = [];
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 70;
    this.speedX = 3;
    this.speedY = 3;
    this.id = id;
    this.draw = function () {
        let img = document.getElementById(this.id);
        ctx.drawImage(img, this.x, this.y, this.width,this.height);
    }

    this.clear = function () {
        ctx.clearRect(this.x, this.y, 70, 70);
    }
    this.moveUp = function () {
        this.clear();
        this.id = "up";
        this.width = 70;
        this.height = 100;
        this.y -= this.speedY;
        this.check();
        this.draw();
    }
    this.moveDown = function () {
        this.clear();
        this.id = "down";
        this.width = 70;
        this.height = 100;
        this.y += this.speedY;
        this.check();
        this.draw();
    }
    this.moveLeft = function () {
        this.clear();
        this.id = "left";
        this.width = 100;
        this.height = 70;
        this.x -= this.speedX;
        this.check();
        this.draw();
    }
    this.moveRight = function () {
        this.clear();
        this.id = "right";
        this.width = 100;
        this.height = 70;
        this.x += this.speedX;
        this.check();
        this.draw();
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
        '<audio src="fire.mp3"></audio>';
        let bull = new Bullet(this.x + 20, this.y + 20);
        this.bullets.push(bull);
        let i = this.bullets.indexOf(bull);
        if (tank.id === "up") {
            tank.bullets[i].speedYoB = -3;
            tank.bullets[i].speedXoB = 0;
            tank.bullets[i].id = "bulletUp";
        } else if (this.id === "down") {
            tank.bullets[i].speedYoB = 3;
            tank.bullets[i].speedXoB = 0;
            tank.bullets[i].id = "bulletDown";
        } else if (this.id === "left") {
            tank.bullets[i].speedYoB = 0;
            tank.bullets[i].speedXoB = -3;
            tank.bullets[i].id = "bulletLeft";
        } else if (this.id === "right") {
            tank.bullets[i].speedYoB = 0;
            tank.bullets[i].speedXoB = 3;
            tank.bullets[i].id = "bulletRight";
        }
    }
    this.drawAllBullet = function () {
        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].draw();
        }
    }
}

// xây class bullet
function Bullet(x, y) {
    this.x = x;
    this.y = y;
    this.speedXoB = 3;
    this.speedYoB = 3;
    this.id = "bulletUp";
    this.draw = function () {
        let imgBullet = document.getElementById(this.id);
        ctx.drawImage(imgBullet, this.x, this.y, 30, 30);
    }
    this.clear = function () {
        ctx.clearRect(this.x, this.y, 30, 30);
    }
    this.moveUpp = function () {
        this.x = this.x + this.speedXoB;
        this.y = this.y + this.speedYoB;
    }
    this.check = function (index) {
        if (this.y < -50 || this.y > 700) {
            tank.bullets.splice(index, 1);
        } else if (this.x < -50 || this.x > 1550) {
            tank.bullets.splice(index, 1);
        } else if (this.x >= tank1.x && this.x <= tank1.x + 70 && this.y >= tank1.y && this.y <= tank1.y + 70) {
            tank.bullets.splice(index, 1);
            roboTank.splice(0, 5);
            // ctx.clearRect(0,0,1500,1500);

        }
    }

}


// Xây hàm nhấn phím
function move() {
    window.addEventListener('keydown', function (evt) {
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
    })
}

let tank = new Tank(600, 370, "up");
let roboTank = [];
let tank1 = new Tank(100, 100, "down");
roboTank.push(tank1);
console.log(roboTank);

function checkCrash(obj1, obj2) {
    let lef1 = obj1.x;
    let right1 = obj1.x + obj1.width;
    let top1 = obj1.y;
    let bottom1 = obj1.y + obj1.height;
    let lef2 = obj2.x;
    let right2 = obj2.x + obj2.width;
    let top2 = obj2.y;
    let bottom2 = obj2.y + obj2.height;
    if (lef1 > right2 || right1 < lef2 || top1 > bottom2 || bottom1 < top2) {
        return false;
    } else {
        return true;
    }

}

function clearAll() {
    ctx.clearRect(0, 0, 1500, 1500);
}

function main() {
    clearAll();

    for (let i = 0; i < tank.bullets.length; i++) {
        tank.bullets[i].moveUpp();
        for (let j = 0; j < roboTank.length; j++) {
            if (checkCrash(tank.bullets[i], roboTank[j])) {
                tank.bullets.splice(i, 1)
                roboTank.splice(j, 1);
            }
        }
    }
    tank.drawAllBullet();
    for (let i = 0; i < roboTank.length; i++) {
        roboTank[i].draw();
    }
    tank.draw();
    requestAnimationFrame(main);
};

main();










