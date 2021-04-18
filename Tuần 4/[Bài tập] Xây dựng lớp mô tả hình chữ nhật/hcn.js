function Rectangle(length,width){
    this.length = length;
    this.width = width;
    this.peripheral=function (){
       peripheral = (this.length + this.width)*2;
       return peripheral;
    }
    this.area=function (){
        area = this.length*this.width;
        return area;
    }
    this.display=function (){
        var x = Math.random()*100;
        var y = Math.random()*100;
        var ctx = document.getElementById('mycanvas').getContext("2d");
        ctx.fillStyle="rgb(20,150,170)";
        ctx.fillRect(x,y,this.length,this.width);
    }
}

var retangle = new Rectangle(100,50)

retangle.display();
alert(retangle.peripheral()+" and "+ retangle.area());
