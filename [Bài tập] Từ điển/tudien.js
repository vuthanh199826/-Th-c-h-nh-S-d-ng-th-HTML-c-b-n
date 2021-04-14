
function search() {
    let array1 = Array('one','two','three','four','five');
    let array2 = Array('một','hai','ba','bốn','năm');
    let founded = false;
    let str = document.getElementById('inp').value;

    for (let i = 0; i < array1.length; i++) {
        if (str === array1[i]) {
            document.getElementById('out').value = array2[i];
            founded = true;
            break;
        }
    }
    if (founded == false) {
        document.getElementById('out').value = "Không tìm thấy";
    }

}
function lammoi(){
    document.getElementById('inp').value="";
}
