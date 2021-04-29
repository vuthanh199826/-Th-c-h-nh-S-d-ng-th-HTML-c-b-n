function AutoTank(id){
    this.star = [];
    this.x = Math.round(Math.random()*(1200-100)+100);
    this.y = Math.round(Math.random()*(500-100)+100);
    this.id = id;
    this.bulletsOfAutoTank = [];
    this.width = 70;
    this.height = 70;
    this.speedX = 3;
    this.speedY = 3;
    this.direction = 'down';
    this.reloadCount = 10;
    this.count = 0;
    this.canFire = true;
    this.hasStar = Math.floor(Math.random()*3) === 1;

    this.draw = function (){
        let img = document.getElementById(this.id);
        ctx.drawImage(img,this.x,this.y,this.width,this.height);
    }

    this.moveUp = function (){
        this.id = 'redUp';
        this.check();
        this.y = this.y - this.speedY;
    }
    this.moveDown = function (){
        this.id = 'redDown';
        this.check();
        this.y = this.y + this.speedY;
    }
    this.moveLeft = function () {
       this.id = 'redLeft';
       this.check();
        this.x = this.x - this.speedX;
    }
    this.moveRight = function (){
        this.id = 'redRight';
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

    this.getDirection = function (num) {
        let dirs= ['up','down','left','right'];
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
        let bullet = new Bullet(this.x + 20, this.y+20,this.direction);
        this.bulletsOfAutoTank.push(bullet);
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