let arrsp = ['sp0', 'sp1', 'sp2', 'sp3', 'sp4', 'sp5', 'sp6', 'sp7', 'sp8', 'sp9'];
function display(arr) {
    let data = " ";
    data += '<table style="position: relative;left: 50px"  border="1">';
    for (let i = 0; i < arr.length; i++) {
        data += '<tr>';
        data += ("<td style='width: 600px;height: 30px;font-size: 20px;background: lightslategray'>");
        data += arr[i];
        data += "<button onclick='edit("+ i +")' style='position: relative;left: 400px;background-color: green' type='button'>Edit</button>";
        data += "<button onclick='remove(" + i + ")' style='position: relative;float: right;background-color: lawngreen;font: bold' type='button'>DELETE</button>"
        data += "</td>";
    }
    data += '</tr>';
    data += '</table>';
    document.getElementById('p').innerHTML = data;
}
function add(){
arrsp.push(document.getElementById('inp').value);
document.getElementById('inp').value = " ";
display(arrsp);
}
function edit(index){
document.getElementById('showform').innerHTML = '<input  type="text" id="inp1" value = " '+ arrsp[index] +' ">' + '<button onclick="save('+ index +')" type="button">Save</button>'

}
function remove(i) {
    arrsp.splice(i, 1);
    display(arrsp);
}
function save(index){
    arrsp[index]= document.getElementById('inp1').value;
    document.getElementById('showform').innerHTML = " "
    display(arrsp);
}
display(arrsp);
