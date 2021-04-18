// function Circle(x,y,radius){
//     this.x = x;
//     this.y = y;
//     this.radius=radius;
// }
// function createCircle(){
//     var ctx = document.getElementById('mycanvas').getContext("2d");
//     var radius = Math.floor(Math.random()*80);
//     var circle = new Circle(500,500,radius);
//     ctx.beginPath();
//     ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
//     ctx.fill();
// }
//
// createCircle();
//----------------------------------------------------------------------------------------------
// function Circle(x,y,radius){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
// function getRandomHex(){
//     return Math.floor(Math.random()*255);
// }
// function getRandomColor(){
//     var red = getRandomHex();
//     var blue = getRandomHex();
//     var green = getRandomHex();
//     return "rgb("+red+","+blue+","+green+")";
// }
// function createCircle(){
//     var ctx = document.getElementById("mycanvas").getContext("2d");
//     var radius = Math.floor(Math.random()*80);
//     var color = getRandomColor();
//     var circle = new Circle(500,500,radius);
//     ctx.beginPath();
//     ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
//     ctx.fillStyle = color;
//     ctx.fill();
// }
// createCircle();
//------------------------------------------------------------
// function Circle(x,y,radius){
//     this.x=x;
//     this.y=y;
//     this.radius=radius;
// }
// function getRandomHex(){
//     return Math.floor(Math.random()*255)
// }
// function getRandomColor(){
//     var red = getRandomHex();
//     var green = getRandomHex();
//     var blue = getRandomHex();
//     return "rgb("+red+","+green+","+blue+")";
// }
// function createCircle(){
//     var ctx = document.getElementById('mycanvas').getContext("2d");
//     var radius = Math.floor(Math.random()*80);
//     var color = getRandomColor();
//     var x = Math.random()*window.innerWidth;
//     var y = Math.random()*window.innerHeight;
//     var circle = new Circle(x,y,radius);
//     ctx.beginPath();
//     ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
//     ctx.fillStyle =color;
//     ctx.fill();
// }
//
// let x = 0;
// while (x<100){
//     createCircle();
//     x++
// } ----------------------------------------------------------------------------------
function Circle(x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function getRandomHex(){
    return Math.floor(Math.random()*255)
}
function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb("+red+","+green+","+blue+")";
}
 function createCircle(){
    var ctx = document.getElementById("mycanvas").getContext("2d");
    var color = getRandomColor();
    var x = Math.random()*innerWidth;
    var y = Math.random()*innerHeight;
    var radius = Math.floor(Math.random()*8) ;
    var circle = new Circle(x,y,radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y,circle.radius,0,2*Math.PI);
    ctx.fillStyle = color
    ctx.fill();
 }
function createMultiCircle(x){
    var begin = 0;
    while (begin<x){
        createCircle()
        begin++
    }
}

createMultiCircle(10000);