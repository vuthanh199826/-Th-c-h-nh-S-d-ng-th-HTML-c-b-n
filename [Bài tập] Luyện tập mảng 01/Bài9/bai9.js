let array1 = Array();
let array2 =Array();
let sl = +prompt("nhập số lượng phần tử");
for(let i =0; i<sl;i++){
    array1.push(+prompt());
};
for(let i =0; i<sl;i++){
    array2.push(+prompt());
};

let array3 = array1.concat(array2);
document.write(array3);

