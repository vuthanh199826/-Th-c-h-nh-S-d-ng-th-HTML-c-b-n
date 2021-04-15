let str1 = prompt("nhập chuỗi thứ nhất");
let str2 = prompt("nhập chuỗi thứ hai");
let array1 = str1.split('');
let array2 = str2.split('');
if(array1.length !== array2.length){
    alert("hai chuỗi không bằng nhau");

}else if(array1.length === array2.length) {

    for(let i=0; i<array1.length; i++){
        if(array1[i]===array2[i]){

        }else {
            alert("hai chuỗi khác nhau");
            break;
        }
    }
}
    alert("hai chuỗi giống nhau");

