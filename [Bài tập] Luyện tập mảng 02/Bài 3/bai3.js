
let str = prompt("nhập chuỗi vào đây");
let array = str.split("");
let count = 0;
for(let i = 0; i<array.length; i++){
    if(array[i]>=0){
        count++
    }
};
document.write(count);
