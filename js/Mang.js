// let st1 =0; document.write(st1 + ' ');
// let st2 =1; document.write(st2 + ' ');
// let st3;
// let count =2;
// let sl = +prompt("nhập số lượng");
// while (count < sl){
//     st3 = st1 + st2;
//     document.write(st3 + " ");
//     st1 = st2;
//     st2 = st3;
//     count++;
// }

// let x =0;
// let array = Array();
// function add(){
//     array[x] = document.getElementById('inp').value;
//     alert("element"+ array[x]+'added at' + x);
//     x++;
//     document.getElementById('inp').value = '';
// }
// function display(){
//     let e = '<hr/>';
//     for(let i=0;i<array.length;i++){
//         e += 'element ' + i + '=' + array[i] +"<br/>";
//     }
//     document.getElementById('kq').innerHTML=e;
// }


let array = Array()
function add(){
    array.push(document.getElementById('inp').value);
    document.getElementById('inp').value = " ";
}

function display(){
    let e = "<hr/>";
    for(let i = 0; i<array.length;i++){
        e = e + array[i] + "<br/>"
    }
    document.getElementById('kq').innerHTML = e;

}

