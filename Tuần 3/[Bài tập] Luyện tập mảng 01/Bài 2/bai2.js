let array = Array();
let sl = +prompt("nhập số lượng phần tử");
for(let i =0; i<sl;i++) {
    array.push(+prompt('nhập phần tử vào đây'));
};
let max = array[0];
for(let i = 1; i<array.length;i++){
 if(array[i]>max){
     max = array[i];
 }
}
document.write("max = " + max + " founded at " + array.indexOf(max));