let array = Array();
let sl = +prompt("nhập số lượng phần tử vào đây");
for(let i =0 ; i<sl; i++){
    array.push(+prompt("nhập phần tử vào đây"));
};
let v = + prompt("nhập phần tử muốn kiểm tra");
for(let i =0; i<array.length;i++){
    if(array[i]===v){
        array.splice(i,1);
    }
}
document.write(array);

