let num = prompt("nhập");
let str = num.toString();
let kq =  [str[0]];

for(let x = 1; x < str.length; x++){
    if((str[x - 1]%2===0)&&(str[x]%2===0)){
        kq.push('-',str[x]);
    }else {
        kq.push(str[x]);
    }
}
document.write(kq.join(''));