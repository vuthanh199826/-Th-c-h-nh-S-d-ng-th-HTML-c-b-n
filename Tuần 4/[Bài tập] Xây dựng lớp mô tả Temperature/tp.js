function Temperature(c){
    this.c=c;
    this.cTof=function (){
        let f = (this.c*1.8)+32;
        return f;
    }
    this.cTok = function (){
        let k = this.c + 273.15;
        return k;
    }
}

let temp = new Temperature(25);
document.write(temp.c+'<br/>');
document.write(temp.cTof()+'<br/>');
document.write(temp.cTok()+'<br/>');
