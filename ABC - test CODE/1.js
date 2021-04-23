// var a = document.getElementById("mycanvas").height = 1000;
// var b = document.getElementById("mycanvas").width = 1000;
// var ctx = document.getElementById("mycanvas").getContext('2d');
// var x = 100, y = 250;
//
// function draw() {
//     // ctx.beginPath();
//     // ctx.arc(x, y, 20, 0, 2 * Math.PI);
//     // ctx.fillStyle = 'rgb(146,38,38)';
//     // ctx.fill();
//     ctx.fillStyle = "rgb(0,0,0)";
//     ctx.fillRect(x, y, 100, 100);
//
//     ctx.fillStyle = "rgba(255,255,255,0.4)";
//     ctx.fillRect(0, 0, a, b);
//     x += 2;
//     // requestAnimationFrame(draw);
// }
var ctx = document.getElementById("mycanvas").getContext("2d");
function Ball() {
    this.radius = 20;
    this.speedX = 1;
    this.speedY = 1;
    this.cx = Math.floor(Math.random() * 500);
    this.cy = Math.floor(Math.random() * 500);
    this.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = "rgb(120,131,200)";
        ctx.arc(this.cx, this.cy, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    this.move = function () {
        this.cx += this.speedX;
        this.cy += this.speedY;
    }
    this.check = function (){
        if(this.cx >= 680 || this.cx <= 20){
            this.speedX = - this.speedX;
        }
        if(this.cy >=480 || this.cy <=20){
            this.speedY = - this.speedY;
        }
    }
}
// function Rectangle(){
//     ctx.fillStyle = "rgb(200,150,0)";
//     ctx.rect()
// }
let balls = [];
for (let i = 0; i < 30; i++) {
    let ball = new Ball();
    balls.push(ball);
}


function move1() {
    ctx.clearRect(0, 0, 1600, 900);
    // ball.draw();
    // ball1.draw();
    // ball2.draw()
    // ball.check();
    // ball1.check();
    // ball2.check();
    // ball.move();
    // ball1.move();
    // ball2.move();
    for (let i = 0; i < balls.length; i++) {
        balls[i].move();
        balls[i].check();
        balls[i].draw();
    }
}
setInterval(move1, 1);


