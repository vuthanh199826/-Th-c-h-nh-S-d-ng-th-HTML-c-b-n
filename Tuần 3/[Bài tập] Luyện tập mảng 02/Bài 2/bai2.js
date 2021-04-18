let array = Array();
let sl = prompt("nhập số lượng phần tử vào đây");
for(let i =0; i<sl; i++){
    array.push(prompt("nhập phần tử vào đây"));
};
document.write(array);

document.write("<br/>");

array  = array.reverse();

array = array.join("");

document.write(array);

document.write("<br/>");

