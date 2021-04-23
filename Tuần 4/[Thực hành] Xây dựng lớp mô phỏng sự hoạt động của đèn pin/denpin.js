function Battery (energy){
    this.energy = energy;
    this.setEnergy = function (energy){
        this.energy =energy;
    }
    this.getEnergy = function (){
        return this.energy;
    }
    this.decreaseEnergy = function (){
        if(this.energy>0){
            this.energy--;
        }
    }
}
function Flashlamp (){
    this.status = false;
    this.setBattery = function (battery){
        this.battery = battery;
    }
    this.getBatteryInfo = function (){
        return this.battery.getEnergy()
    }
    this.light = function (){
        if(this.status){
            alert("lightning");
        }else {
            alert("not Lightning");
        }
    }
    this.turnOn = function (){
        this.status = true;
    }
    this.turnOff = function (){
        this.status = false;
    }
}

let battery = new Battery();
battery.setEnergy(100);
let flash = new Flashlamp();
flash.setBattery(100);

flash.turnOn();

flash.light();

