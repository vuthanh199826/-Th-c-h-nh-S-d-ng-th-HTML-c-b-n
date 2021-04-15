document.write("bài1: Viết chương trình nhập điểm cho sinh viên và tính điểm tổng và trung bình");
document.write('<br/>');
let vatly = parseInt(prompt('nhập điểm vật lý của bạn vào đây:'));
let hoahoc = parseInt(prompt('nhập điểm hóa học của bạn vào đây:'));
let sinhhoc = parseInt(prompt('nhập điểm sinh học của bạn vào đây:'));
document.write("tổng điểm của bạn là: "+ (vatly+hoahoc+sinhhoc));
document.write('<br/>');
document.write("điểm trung bình của bạn là: "+ ((vatly+hoahoc+sinhhoc)/3));
document.write('<br/>');

///////////////////////////////////////////////////////////////////////////////////////////////////////


document.write("bài 2: Viết chương trình chuyển từ độ C sang độ F với công thức C/5 = (F-32)/9");
document.write('<br/>');
let inputC=parseInt(prompt("nhập độ C  (Celsius) vào đây: "));
let f = ((9*inputC)/5)+32;
document.write(inputC + " độ C bằng " + f + " độ F");

////////////////////////////////////////////////////////////////////////////////////////////

document.write("bài 3: Viết chương trình tính diện tích hình tròn");
document.write('<br/>');
let r = parseInt(prompt("nhập bán kính vào đây: "));
let pi = 3.14;
document.write("diện tích hình tròn là: "+ (pi*r*r));
document.write("chu vi hình tròn là: "+ (2*pi*r));

//////////////////////////////////////////////////////////////////////////////////////////









