let array = Array();
let sl = +prompt("nhập số phần tử mảng");
for(let i =0; i<sl;i++){
    array.push(+prompt("nhập phần tử vào đây"));
};

let sum = 0;
let max = array[0];
for(let i =1; i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
    sum += array[i];
}
document.write("sum = "+sum+'<br/>');
document.write("giá trị trung bình" + sum/array.length);