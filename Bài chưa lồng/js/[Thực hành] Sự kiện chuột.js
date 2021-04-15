
// khai báo biến đối tượng và gán cho nó
let obj = null;
obj = document.getElementById("img");
//xây dựng hàm khởi tạo giá trị ban đầu
function init(){
    obj = document.getElementById("img");
    // thuộc tính CSS position relative là thuộc tính cố định
    obj.style.position = 'relative';
    obj.style.left = '500px';
    obj.style.top = '200px'

};
function movedown(){
    obj.style.top = parseInt(obj.style.top) + 10 + 'px';
};
function moveup()
{
obj.style.top = parseInt(obj.style.top) - 10 + 'px';
};
function moveleft ()
{
    obj.style.left = parseInt(obj.style.left) - 10 + 'px';
}
//khi window chạy thì khởi tạo giá trị ban đầu
window.onload = init();













// let obj = null;
// obj = document.getElementById("igm");
//   function init(){
//       obj = document.getElementById("img");
//       obj.style.position= 'relative'
//       obj.style.left = '0px'
//   }
  function moveright(){
      obj.style.left = parseInt(obj.style.left) + 10 + 'px'
  }
//   window.onload = init();


