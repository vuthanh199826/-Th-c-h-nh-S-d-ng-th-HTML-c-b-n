let array = [-1,-2,0,1,5,6,7,8];
let num = +prompt("nhập số");
for(let i=0; i<array.length;i++) {
    if(num==array[i]){
        alert("tìm thấy tại vị trí "+ i);
        break;
    }
}


