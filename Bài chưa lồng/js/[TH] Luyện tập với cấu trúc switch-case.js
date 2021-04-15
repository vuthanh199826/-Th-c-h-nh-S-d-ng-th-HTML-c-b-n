// ------------------------------------- bài 1: ---------------------------------------------
// function fun() {
//
//     let browser = document.getElementById("inp").value;
//
//     switch (browser) {
//         case 'edge':
//             alert("bạn có edge!");
//         case 'chrome':
//         case 'firefox':
//         case 'safari':
//         case 'opera':
//             alert('ok, tôi cũng hỗ trợ bạn');
//             break;
//         default:
//             alert('tôi hy vọng rằng page này ok');
//     }
// }
// -----------------------------------------bài 2:--------------------------------------------
// let a = prompt('a?', '');
// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }
//--------------------------------bài3----------------------------------------------------------
// let a =parseInt(prompt("nhập a vào đây", ''));
//
// switch (a>0){
//     case (true) :
//         alert("a lớn hơn 0");
//         break;
//     case (false):
//         alert("a nhở hơn 0");
//         break;
//     default:
//         alert("other");
// };
let a = +prompt("nhập a:","");
switch (true) {
    case a > 0:
        alert("a>0");
        break;
    case a == 0:
        alert("a==0");
        break;
    default:
        alert("a<0");
        break;
}
