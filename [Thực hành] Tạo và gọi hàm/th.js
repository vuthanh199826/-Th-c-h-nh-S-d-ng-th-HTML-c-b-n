// function processConfirm(answer) {
//     let kq = '';
//     if (answer) {
//         kq = "1";
//     } else {
//         kq = "2";
//     }
//     return kq;
// }
//
// let confirmAnswer = confirm("Are you ok?");
// alert(confirmAnswer)
// let theAnswer = processConfirm(confirmAnswer);
// alert(theAnswer);
let arr = [1,2,3,4,5];
let max;
function max1(){
     max = arr[0];
    for(let i=0;i<5;i++){
        if(arr[i]>max){
            max = a[i];
        }
    }return max;
};

document.write(max1());