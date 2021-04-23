let arrsp = [];

function display(arr) {
    let str = " ";
    str += '<table cellspacing="0" width="50%" style="text-align: center">';
    let bg = 'https://media.giphy.com/media/jaOXKCxtBPLieRLI0c/giphy.gif'
    str += '<tr style="color: white;background: url(' + bg + ')  ">' + '<td>Ma San Pham</td><td>Ten San Pham</td><td>Gia Ban</td></tr>';
    for (let i = 0; i < arr.length; i++) {
        let a;
        if (i % 2 === 0) {
            a = "lightslategray";
        } else {
            a = "cornsilk";
        }
        str += '<tr style="background-color:' + a + '">';
        str += '<td>' + arr[i][0] + '</td>';
        str += '<td>' + arr[i][1] + '</td>';
        str += '<td>' + arr[i][2] + '</td>';
        str += '<td><button style="background-color: springgreen" onclick="edit(' + i + ')" id="edit" type="button">Edit</button></td>';
        str += '<td><button style="background-color: springgreen" onclick="remove(' + i + ')" id="delete" type="button">Delete</button></td>';
        str += '<tr>';
    }
    str += '</table>';
    document.getElementById("display").innerHTML = str;
}

function add() {
    let a = prompt("nhập mã sản phẩm vào đây");
    if (a === "") {
        alert("Vui lòng nhập đầy đủ thông tin")
        return add();
    }
    let b = prompt("nhập tên sản phẩm vào đây");
    if (b === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return add();
    }
    let c = prompt("nhập giá sản phẩm vào đây");
    if (c === "") {
        alert("Vui lòng nhập đầy đủ thông tin");
        return add();
    }
    arrsp.push([a, b, c]);
    display(arrsp);
}

function remove(i) {
    let a = confirm("Bạn có chắc muốn xóa ?");
    if (a === true) {
        arrsp.splice(i, 1);
        display(arrsp);
    }
}

function edit(i) {
    let a = prompt("Ma San Pham", arrsp[i][0]);
    let b = prompt("Ten San Pham", arrsp[i][1]);
    let c = prompt("Gia Ban", arrsp[i][2]);
    arrsp[i][0] = a;
    arrsp[i][1] = b;
    arrsp[i][2] = c;
    display(arrsp);
}

