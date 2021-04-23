function Swithbutton(Electriclamp){
    this.status = false;
    this.lamp = Electriclamp;
    this.switchButton = function (Electriclamp){
        if(this.status===true){
            Electriclamp.turnOn() ;
        }else {
            Electriclamp.turnOff() ;
        }
    }
    this.connectElectriclamp = function (Electriclamp){
        return Electriclamp.status;
    }
    this.switchOn = function (){
        this.status = true;
    }
    this.switchOff = function (){
        this.status = false;
    }
}
function Electriclam(){
    this.status = false;
    this.turnOn = function (){
        this.status = true;
    }
    this.turnOff = function (){
        this.status = false;
    }
}
let lamp = new Electriclam();
let button = new Swithbutton(lamp);