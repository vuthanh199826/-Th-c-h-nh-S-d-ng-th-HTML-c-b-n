let stars = [];
let limited = 1;

function Star(x,y){
    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = 50;
    this.draw = function (){
        let img = document.getElementById('star');
        ctx.drawImage(img,this.x,this.y,this.width,this.height)
    }
}

function checkStar(obj){
    if(stars.length <= limited) {
        if (obj.hasStar) {
            let star = new Star(obj.x, obj.y);
            stars.push(star);
        }
    }
}

function displayAllStar() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].draw();
    }
}

function clearStar() {
    if(stars.length>0) {
        stars.shift();
    }
setTimeout(clearStar,30000);
}
clearStar()


function checkCrashWithStar(){
    for (let i = 0; i < stars.length; i++) {
        if(checkCrash(stars[i],tank)){
            if(tank.power <= 5) {
                tank.power++
            }else if(tank.power > 5){
                tank.blood++
            }
            stars.splice(i,1);
        }
    }
}










