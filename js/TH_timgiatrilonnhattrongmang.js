let array = [1,2,3,4,5,6];
let max = array[0];
let index = 0;
for(let i=1;i<array.length;i++){
    if(array[i]>max){
        max = array[i];
        index = i;
    }
}
document.write(max + ' ' +index);
