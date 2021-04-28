function Tank( x, y) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.direction = 'left';
    this.image = new Image();
    this.img = ['Car_Left','Car_Right','Car_Up','Car_Down'];
    this.image.src = this.img[0]+'.png';
    this.draw = function (canvas) {
        let ctx = canvas.getContext('2d');
        ctx.drawImage(this.image, this.x, this.y, 150, 150);
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

    this.move = function () {
        switch (this.direction) {
            case "left":
                this.image.src = this.img[0]+'.png';
                this.x  -= this.speed;
                break;
            case "right":
                this.image.src = this.img[1]+'.png';
                this.x  += this.speed;
                break;
            case "up":
                this.image.src = this.img[2]+'.png';
                this.y  -= this.speed;
                break;
            case "down":
                this.image.src = this.img[3]+'.png';
                this.y  += this.speed;
                break;
        }
    }
}

