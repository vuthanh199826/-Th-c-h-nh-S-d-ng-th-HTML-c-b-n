function Mobile(id,name){
    this.st = false;
    this.battery = 100;
    this.id = id;
    this.name = name;
    this.message = [] ;
    this.setMessage = function (message){
        if(this.st === true){
        this.message.push(message);
        this.battery -- ;
        }else if(this.st === false) {
            alert("chưa bật máy");
        }
    }
    this.getMessage = function (){
        this.battery --;
        if(this.st === true) {
            return this.message;

        }else if(this.st === false) {
            alert("chưa bật máy");
        }
    }
    this.sendMessage = function (message, mobile){
        this.battery --;
        if(this.st === true) {
            mobile.setMessage(message);
        }else if(this.st === false) {
            alert("chưa bật máy");
        }
    }
    this.numSt = function (){
        this.st = !this.st;
    }
}
var mobile1 = new Mobile(1,1);
var mobile2 = new Mobile(2,2);
mobile2.numSt();
mobile1.numSt();
alert(mobile2.st);
alert(mobile1.st);
mobile2.sendMessage("hello",mobile1);
document.write(mobile1.getMessage())
// document.write(mobile1.battery);
// document.write(mobile2.battery);



