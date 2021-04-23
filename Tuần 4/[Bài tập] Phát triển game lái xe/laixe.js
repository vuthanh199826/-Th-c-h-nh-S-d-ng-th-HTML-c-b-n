var ctx = document.getElementById("mycanvas").getContext("2d");
function Car(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.speedX = 10;
    this.speedY = 10;
    // this.bullets = [];
    this.draw = function () {
        let image = document.getElementById(this.id);
        ctx.drawImage(image, this.x, this.y, 150, 150);
        this.check();
    }
    this.movedown = function () {
        this.y += this.speedY;
    }
    this.moveup = function () {
        this.y -= this.speedY;
    }
    this.moveleft = function () {
        this.x -= this.speedX
    }
    this.moveright = function () {
        this.x += this.speedX;
    }
    this.check = function () {
        if (this.x > 1050) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = 1050;
        } else if (this.y > 500) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = 500;
        }
    }
    // this.fire = function (){
    //     let bullet = new Ball(this.x+75, this.y+75);
    //     this.bullets.push(bullet);
    // }
    // this.update = function (){
    //     for (let i = 0; i < this.bullets.length; i++) {
    //         this.bullets[i].move();
    //         this.bullets[i].draw();
    //     }
    // }
}
var finalx = 100;
var finaly = 100;
var car = new Car("imgd", finalx, finaly);
car.draw();

function init() {
    window.addEventListener('keydown', function (evt) {
        switch (evt.keyCode) {
            case 38:
                car.id = "imgu";
                car.moveup();
                car.draw();
                break;
            case 40:
                car.id = "imgd";
                car.movedown();
                car.draw();
                break;
            case 37:
                car.id = "imgl";
                car.moveleft();
                car.draw();
                break;
            case 39:
                car.id = "imgr";
                car.moveright();
                car.draw();
                console.log(finalx);
                break;
            case 13:
                car.fire();
                break;
        }
    })
}
// function Ball(x, y) {
//     this.radius = 10;
//     this.speedX = 3;
//     this.speedY = 3 ;
//     this.cx = x;
//     this.cy = y;
//     this.draw = function () {
//         ctx.beginPath();
//         ctx.fillStyle = "red";
//         ctx.arc(this.cx, this.cy, this.radius, 0, 2 * Math.PI);
//         ctx.fill();
//     }
//     this.move = function () {
//         if(car.id ==="imgl"){
//             this.cx = this.cx - this.speedX;
//             this.cy = this.cy;
//         }else if(car.id ==="imgr") {
//             this.cx = this.cx + this.speedX;
//             this.cy = this.cy ;
//         }else if(car.id ==="imgu"){
//             this.cx = this.cx;
//             this.cy = this.cy - this.speedY;
//         }else if(car.id ==="imgd"){
//             this.cx = this.cx;
//             this.cy = this.cy + this.speedY;
//         }
//     }
// }
// var finalBallX = finalx + 75;
// var finalBallY = finaly + 75;
// var ball = new Ball(finalBallX, finalBallY);
//
// // function fire() {
// //
// //     ball.move();
// //     ball.draw();
// // }
function clearScreen() {
    ctx.clearRect(0, 0, 1200, 1200);
}
function main() {
    clearScreen();
    car.draw();
}
setInterval(main, 1);


