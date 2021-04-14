let str = prompt();
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lower = 'abcdefghijklmnopqrstuvwxyz';
let kq = [];
for(let x=0; x<str.length; x++ ){
    if(upper.indexOf(str[x])!== -1){
        kq.push(str[x].toLowerCase())
    }else if(lower.indexOf(str[x])!==-1){
        kq.push(str[x].toUpperCase())
    }else {
        kq.push(str[x]);
    }
}
document.write(kq.join());