let str ="Hello my friend";
let array = str.split('');
let count = 0;
function abc() {
    document.getElementById('inp').value = " ";
    let kq = [];
    if (count < array.length) {
        count++;
    } else {
        count = 0;
    }
for(let i = 0; i<count; i++){
    kq.push(array[i]);
}
document.getElementById('inp').value = kq.join("");
}