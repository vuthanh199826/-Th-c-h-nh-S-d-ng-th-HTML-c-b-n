function xem(){

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
        case '8':
            bai8();
            break;
        case '9':
            bai9();
            break;
        case '10':
            bai10();
            break;
        case '11':
            bai11();
            break;
        case '12':
            bai12();
            break;
        default:
            alert("nhập số bài [ 1 - 12 ]");
    }
};
function bai1(){
  let a = +prompt("nhập số độ C vào đây");
  alert(a + ' độ C = ' + ((a*1.8)+32) + " độ F");
};

function bai2(){

  let a_met = +prompt("nhập số mét vào đây");
  alert(a_met + " mét bằng " + (a_met*3.28) + " feet");
};

function bai3(){
  let a = +prompt("nhập cạnh a của hình vuông vào đây");
  alert("diện tích hình vuông có cạnh bằng " + a + " là " + (a*4) + " mét")
};

function bai4(){
    let a = +prompt("nhập cạnh a:");
    let b = +prompt("nhập cạnh b:");
    alert("diện tích hình chữ nhật cạnh " + a + " và " + b + " là " + (a*b)  );
};

function bai5(){
  let a = +prompt("nhập cạnh góc vuông a vào đây")  ;
    let b = +prompt("nhập cạnh góc vuông b vào đây")  ;
    alert("diện tích tam giác vuông là: " + (a*b));
};

function bai6(){
  let a = +prompt("Nhập a vào đây:");
    let b = +prompt("Nhập b vào đây:");
    if(a==0 && b==0){
        alert("Phương trình có vô số nghiêmh");
    }else if(a==0 && b!=0){
        alert("Phương trình vô nghiệm");
    }else {
        alert("phương trình có nghiệm duy nhất là " + (-b/a));
    }
};

function bai7(){
    let a = +prompt("nhập a:");
    let b = +prompt("nhập b:");
    let c = +prompt("nhập c:");
    let delta = b*b - 4*a*c;
    if(delta < 0){
        alert("phương trình vô nghiệm");
    }else if(delta==0){
        alert("phương trình có nghiệm kép là: " + (-b)/2*a);
    }else
        alert("phương trình có hai nghiệm phân biệt là " + (-b + Math.sqrt(delta))/2*a + " và " + (-b - Math.sqrt(delta))/2*a);
};

function bai8(){
  let tuoi = parseInt(prompt("nhập số tuổi của bạn")) ;
  if(tuoi > 120){
      alert("bạn không thể sống lâu thế được, nhập lại");
  }else if(tuoi < 0){
      alert("tuổi của bạn làm sao âm được ???");
  }else {
      alert("bạn sinh năm " + (2021-tuoi) + " phải không :)))");
  }
};

function bai9(){
    let a = +prompt("nhập cạnh a");
    let b = +prompt("nhập cạnh b");
    let c = +prompt("nhập cạnh c");
    if(
        a>0 && b>0 && c>0 &&
        (a+b)>c && (b+c)>a && (a+c)>b
    ){
        alert("đây là 3 cạnh một tam giác");
    }else {
        alert("đây không phải 3 cạnh một tam giác");
    }
};

function bai10(){
    let num = +prompt("nhập số điện của bạn vào đây:");
    let sotien;
    if(num > 200){
        sotien = (num - 200)*3000 + 50*2500 + 50*2000 + 100*1000;
        alert(sotien);
    }else if(num > 150 && num <= 200){
        sotien = (num - 150)*2500 + 50*2000 + 100*1000;
        alert(sotien);
    }else if(num > 100 && num <= 150){
        sotien = (num - 100)*2000 + 100*1000;
        alert(sotien);
    }else {
        sotien = num*1000;
        alert(sotien);
    }
};

function bai11(){
// e không biết khoản thuế :)))
let thunhaptinhthue = +prompt("thu nhập tính thuế:");
let thuexuat = +prompt(" thuế xuất");
let TNCN = thunhaptinhthue * thuexuat;
alert(TNCN);

};

function bai12(){

    let so_tien_gui = +prompt("nhập số tiền gửi");
    let so_ky = + prompt("nhập sô năm bạn muốn gửi");
    let lai_xuat = 0.07;
    let so_tien_lai = so_tien_gui * Math.pow( 1 + lai_xuat,so_ky);
    alert(so_tien_lai);
};
