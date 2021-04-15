let i = 10;
let f = 20.5;
let b =true;
let s = "hà nội";



document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s)
document.write('<br/>')


let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area)
document.write('<br/>')

let sothunhat = prompt('nhập số thứ nhất');
let sothuhai = prompt("nhập số thứ 2");

if(sothunhat%sothuhai==0)
    alert("số thứ nhất là bội của số thứ hai");
else
    alert("số thứ nhất không phải bội của số thứ 2");