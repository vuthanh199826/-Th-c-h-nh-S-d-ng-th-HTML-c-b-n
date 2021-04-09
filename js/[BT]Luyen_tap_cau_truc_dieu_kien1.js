function xem1(){

    let a = document.getElementById("inp").value;

    switch (a) {

        case '1':
            bai1();
            break;
        case "2":
            bai2();
            break;
        case "3":
            bai3();
            break;
        case "4":
            bai4();
            break;
        case "5":
            bai5();
            break;
        case "6":
            bai6();
            break;
        case "7":
            bai7();
            break;
        default:
            alert("nhập số bài [ 1 - 7 ]");
    }
}
function bai1()
{
  let a = +prompt("nhap a vao day")  ;
    let b = +prompt("nhap b vao day");
    if(a%b==0){
        alert(a + " chia hết cho " + b);
    }else{
        alert(a + " không chia hết cho " + b);
    }
};
function bai2(){
  let a = +prompt("nhập năm sinh của bạn vào đây");
  let tuoi = 2021 - a;
  if(tuoi > 15){
  alert("tuổi của bạn là " + tuoi + " , bạn đã đủ điều kiện vào lớp 10");
  }else {
      alert("tuổi của bạn là " + a + " bạn không đủ điều kiện vào lớp 10");
  }
};
function bai3(){
    let a = + prompt("nhập số nguyên bất kỳ vào đây: ");
    if(a>0){
        alert(a + " lớn hơn 0");
    }else {
        alert(a + " nhỏ hơn 0")
    }
};
function bai4(){
    let a = +prompt("nhập số thứ nhất vào đây");
    let b = +prompt("nhập số thứ hai vào đây");
    let c = +prompt("nhập số thứ ba vào đây");
    if(a>b && a>c){
        alert(a + " là giá trị lớn nhất");
    }else if(b>c) {
        alert(b + " là giá trị lớn nhất");
    }else {
        alert(c + " là giá trị lớn nhất");
    }
};
function bai5(){
    let diemkt = +prompt("nhập điểm kiểm tra vào đây:");
    let diemthigiuaky = +prompt("nhập điểm thi giữa kỳ vào đây");
    let diemthicuoiky = +prompt("nhập điểm thi cuối kỳ");
    let diemtrungbinh = (diemkt + diemthigiuaky + diemthicuoiky)/3;
    if(diemtrungbinh >= 8 ){
        alert("điểm trung bình " + diemtrungbinh + " , học lực giỏi");
    }else if(diemtrungbinh >=6.5 ){
        alert("điểm trung bình " + diemtrungbinh + " , học lực khá");
    }else if(diemtrungbinh >= 5) {
        alert("điểm trung bình " + diemtrungbinh + " , học lực trung bình");
    }else {
        alert("điểm trung bình " + diemtrungbinh + " , học lực yếu");
    }
};

function bai6(){
    let sl = +prompt("nhập số lượng sản phẩm bán được vào đây");
    let com = 50000*sl;
    if(sl>10){
        com = com + (5/100)*com;
        alert(com);
    }else {
        alert(com);
    }
};
function bai7(){
    let a = +prompt("nhập số phút đã gọi:")
    if (a>100 ){
        alert("tiền cước là:" + (a*1000)*95/100);
    }else {
        alert(a*1000);
    }
}

