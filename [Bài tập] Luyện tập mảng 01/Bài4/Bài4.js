let array = Array();
let sl = +prompt("nhập số lượng phần tử");
for(let i=0; i<sl;i++){
    array.push(+prompt("nhập phần tử vào đây"));
};
document.write(array+'<br/>');

document.write(array.reverse());