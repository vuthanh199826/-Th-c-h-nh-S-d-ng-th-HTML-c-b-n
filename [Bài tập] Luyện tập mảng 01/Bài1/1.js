let array = Array();
let sl = +prompt("nhập số lượng phần tử trong mảng");

for(let i=0;i<sl;i++){
    array.push(+prompt("nhập phần tử thứ " + i));
};

document.write("danh sách các số lớn hơn 10: ")
let count = 0;
for(let i =0; i< array.length;i++){
    if(array[i]>=10){
        document.write(array[i]+ ' ');
        count++
    }
}
document.write("<br/>");
document.write("có tổng cộng "+ count + " lớn hơn hoặc bằng 10");