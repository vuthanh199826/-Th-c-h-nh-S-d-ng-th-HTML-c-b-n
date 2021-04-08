/// tạo hàm các phím

function up(){
    let obj = document.getElementById('img');
    obj.style.top = parseInt(obj.style.top) - 20 + 'px';
};
function down(){
    let obj = document.getElementById("img");
    obj.style.top = parseInt(obj.style.top) + 20 + 'px';
};
function left(){
    let obj = document.getElementById("img");
    obj.style.left = parseInt(obj.style.left) - 20 + 'px';
};
function right(){
    let obj = document.getElementById('img');
    obj.style.left = parseInt(obj.style.left) + 20 + 'px';
};
// xây hàm nhận phím
function moveselection(evt)
{
  switch (evt.keyCode){
      case 37:
          left();
          break;
      case 38:
          up();
          break;
      case 39:
          right();
          break;
      case 40:
          down();
          break;}

};
//// xây hàm nhấn phím
function press(){
  window.addEventListener('keydown',moveselection)
};
// xây hàm khởi tạo pess vào thẻ body

