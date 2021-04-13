// ---------------------------------------------Bài1
//
// let sothunhat = 1;
// document.write(sothunhat+'<br/>');
// let sothuhai = 1;
// document.write(sothuhai+'<br/>');
// let sothuba;
// for(let i = 0; i<10;i++){
//     sothuba = sothunhat + sothuhai;
//     sothunhat = sothuhai;
//     sothuhai = sothuba;
//     document.write(sothuba+'<br/>');
// }

//------------------------------------------------bài2

// while (true) {
//     let n = +prompt("nhập n vào đây");
//     if(n==0){
//         break;
//     }else {
//         let tich = 1;
//         for (; n > 0; n--) {
//             tich = tich * n;
//         }
//         alert(tich);
//     }
// }


////----------------------Bài3

// let i;
// let j;
// for(i = 0; i<5; i++){
//     for(j=0;j<=i;j++){
//         document.write("*");
//     }document.write('<br/>');
// }

// let i;
// let j;
// for(i=5;i>0;i--){
//     for(j=0;j<i;j++){
//         document.write("*");
//     }
// document.write("<br/>");
// }


for (i = 5; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
        document.write('&nbsp;&nbsp;');
    }
    for (k = 5; k >= i; k--) {
        document.write('*');
    }
    document.write('<br/>');
}
document.write('<br/>');
//
//
//
// for (i = 5; i >= 1; i--) {
//     for (j = 5; j >= i; j--) {
//         document.write('&nbsp;&nbsp;');
//     }
//     for (k = 1; k <= i; k++) {
//         document.write('*');
//     }
//     document.write('<br/>');
// }
// document.write('<br/>');




//
// let i;
// let j;
// for(i=0;i<5;i++){
//
//     for(j=0;j<10;j++){
//        if(i==0 || i==4 ||j==0 || j==9){
//            document.write("*");
//        }else {
//            document.write('&nbsp;&nbsp;')
//        }
//     }
//     document.write("<br/>");
// }

//
while (true) {
    let sotienbandau = +prompt("nhập số tiền gửi");
    let tienlai;
    let laixuat = +prompt("Nhập lãi xuất");
    let sothang = +prompt("nhập số tháng");
    let sotiencoduoc;
    if(sotienbandau == 0){
        break;
    }else {
        for (let i = 1; i <= sothang; i++) {
            tienlai = laixuat * sotienbandau
            sotiencoduoc = sotienbandau + tienlai;
            sotienbandau = sotiencoduoc;

        }
        alert(sotiencoduoc);
    }
}

