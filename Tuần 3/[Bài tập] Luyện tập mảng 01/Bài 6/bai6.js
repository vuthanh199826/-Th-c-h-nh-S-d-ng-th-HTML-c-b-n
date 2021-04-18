let array = Array(1,2,3,4,5,6,7,8,9,10);
let v = +prompt("nhập số ngẫu nhiên");
let founded = false;
for(let i=0; i<array.length;i++){
    if(array[i]===v){
        alert(v + " có trong mảng");
        founded = true;
    }
};
if(founded==false){
    alert("không tìm thấy");
}

