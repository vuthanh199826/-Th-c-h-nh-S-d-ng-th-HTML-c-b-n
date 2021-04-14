let b = document.getElementById("carogame");
let array = [];
let data = " " ;
    for(let i =0; i<5;i++){
        array[i] =  Array(0,0,0,0,0);
    }
    for (let i=0;i<5;i++){
        data += '<br/>';
        for (let j =0;j<5;j++){
            data += array[i][j] + '&nbsp;&nbsp';
        }
    }
    data += "<br/><button type='button' onclick='changeValue()'>"
    b.innerHTML = data;

    function changeValue(){
        let positionX = +prompt("nhập X");
        let positionY = +prompt("nhập Y");
        data = '';
        array[positionX][positionY] = 'x';
        for(let i =0;i<5;i++){
            data += '<br/>';
            for(let j =0; j<5;j++){
                data += array[i][j] + "&nbsp&nbsp"
            }
        }
        data += "<br/><button type='button' onclick='changeValue()'>";
        b.innerHTML="<hr/>"+ data
    }