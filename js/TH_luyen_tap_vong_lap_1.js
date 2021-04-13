//----------------------------------------- Bài 1
// let i = 0;
// while (i<100){
//     document.write(i + '<br/>');
//     i++
//     if(i == 100){
//         alert("Hoàn thành");
//     }
// }

//----------------------------------bài 2

// let num = 0;
// while (num > 100 || num < 20 ) {
//     num = +prompt("nhập nhiệt độ hiện tại");
//      if(num>100){
//          alert("giảm nhiệt độ");
//      }else if(num<20) {
//          alert("tăng nhiệt độ")
//      }
// }

//-------------------------------bài 3

// let i;
// let sothunhat = 0;
// let sothuhai = 1;
// let sum;
// for(i =0; i<20 ; i++){
//     sum = sothunhat + sothuhai;
//     sothunhat = sothuhai;
//     sothuhai = sum;
//     document.write(sum+'<br/>')
// }
//

//------------------------------bài4
// let i;
// let sothunhat = 0;
// let sothuhai = 1;
// let sum;
// for(i =0; i<20 ; i++){
//     sum = sothunhat + sothuhai;
//     sothunhat = sothuhai;
//     sothuhai = sum;
//     if(sum%5==0){
//         document.write(sum);
//         break;
//     }}
///////--------------------------bài5

// let i;
// let sothunhat = 0;
// let sothuhai =1 ;
// let sothuba;
// let sum = 0;
// for(i =0; i<20; i++){
//     sothuba = sothunhat + sothuhai;
//     sum = sum + sothuba;
//     sothunhat = sothuhai;
//     sothuhai = sothuba;
//
//
// }
// document.write(sum);

////-------------------------bài6
//
// let i;
// let boi7;
// let sum=0;
// for(i=1;i<=30;i++){
//     boi7 = i*7;
//     sum = sum + boi7;
// //     document.write(boi7+'<br/>');
// }
// document.write(sum);

//-------------------bai7
//  let i;
//  for (i=1;i<100;i++){
//      if(i%3==0){
//          document.write("Fizz"+ '<br/>');
//      }else if(i%5==0){
//          document.write("Buzz"+ '<br/>');
//      }else if(i%3==0 && i%5==0){
//          document.write("FIZZBUZZ"+ '<br/>');
//      }else {
//          document.write(i+ '<br/>');
//      }
//  }



//--------------------------bài8
function doanso() {
    let time = +prompt("bạn muốn đoán mấy lần???")
    let min = +prompt("Nhập giá trị min",0);
    let max = +prompt("nhập giá trị max",0);
//Math.ceil : làm tròn
    let autonum = Math.ceil(Math.random() * (max - min) + min);
    for (let i = 0; i < time; i++) {
        let num = +prompt("bạn đoán là số bao nhiêu",0);
        if (num == autonum) {
            alert("đoán đúng rồi!!");
            break;
        } else if (num > autonum) {
            alert("sai rồi, nhỏ hơn");
        } else {
            alert("sai rồi, lớn hơn");
        }
    }
}





