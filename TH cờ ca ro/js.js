let board = [];
let max = 10;
let turn = 'X';
for( let i = 0; i< max; i++){
    board.push([]);
    for(let j =0; j<max; j++){
        board[i].push(" ");
    }
}
//---------------------------------------------------------------------------------------------
document.write('<table border="1" >');

for(let i = 0; i < board.length; i++){
    document.write('<tr>');
    for(let j=0; j < board[i].length; j++){
        document.write('<td onclick="clicki()" style="width: 20px;height: 20px" id=' + i + j +' >');
        document.write(board[i][j]);
        document.write('</td>');
    }
    document.write('</tr>')
}
document.write('</table>');

function clicki(i, j){
    document.getElementById('' + i + j ).innerHTML = turn;
}
board[i][j]=turn;
if(turn==='x'){
    turn ='0';
}else {
    turn ='x';
}
