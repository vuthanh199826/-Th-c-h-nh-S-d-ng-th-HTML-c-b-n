let str = prompt("nhập chuỗi");
let array = str.split('');
let count = 0;
for(let i=0;i<array.length;i++){
    if(parseInt(array[i])<0){
        count++;
    }
}
document.write('có tổng cộng '+ count + ' số nguyên âm trong chuỗi');



// let str = prompt("nhập chuỗi vào đây");
// let array = str.split('');
// let count = 0;
// for(let i =0; i < array.length; i++ ){
//     if(parseInt( array[i]) >= 0 ){
//         count++
//     }
// };
// document.write('<br/>');
// document.write("chuỗi có " + count + " phần tử số");
//


