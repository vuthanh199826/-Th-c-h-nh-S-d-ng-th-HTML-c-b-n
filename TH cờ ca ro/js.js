
let board = [];
let max = +prompt("nhập số ô muốn chơi (ex: 9x9)",15);
let turn = 1;

for (let i = 0; i < max; i++) {
    board.push([]);
    for (let j=0;j<max;j++){
        board[i].push(' ');
    }
}

document.write("<table border='1'>");
for(let i =0; i<max; i++){
    document.write("<tr>");
    for(let j=0; j<max; j++){
        document.write('<td onclick="change(this)" style="width: 25px;height: 25px;text-align: center">');
        document.write(board[i][j]);
        document.write('</td>');
    }
    document.write("</tr>");
}
document.write('</table>');

function change(td){
    if(td.innerHTML===' '){
        if(turn === 1){
            td.innerHTML = "X";
            turn = 0
        }else {
            td.innerHTML = "O";
            turn = 1
        }
    }
}
// let board = [];
// let max = 10;
// let turn = 'X';
// for( let i = 0; i< max; i++){
//     board.push([]);
//     for(let j =0; j<max; j++){
//         board[i].push(" ");
//     }
// }
// //---------------------------------------------------------------------------------------------
// document.write('<table border="1" >');
//
// for(let i = 0; i < board.length; i++){
//     document.write('<tr>');
//     for(let j=0; j < board[i].length; j++){
//         document.write('<td onclick="clicki()" style="width: 20px;height: 20px" id=' + i + j +' >');
//         document.write(board[i][j]);
//         document.write('</td>');
//     }
//     document.write('</tr>')
// }
// document.write('</table>');
//
// function clicki(i, j){
//     document.getElementById('' + i + j ).innerHTML = turn;
// }
// board[i][j]=turn;
// if(turn==='x'){
//     turn ='0';
// }else {
//     turn ='x';
// }





