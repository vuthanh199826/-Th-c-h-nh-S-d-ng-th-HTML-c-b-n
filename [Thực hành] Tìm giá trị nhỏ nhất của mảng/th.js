let arr1 = [3, 5, 1, 8, -3, 7, 8];
// let arr2: [7, 12, 6, 9, 20, 56, 89];
// let arr3: [];
// let arr4: [0, 0, 0, 0, 0, 0];

function minfind(arr){
    let min = arr[0];
    for(var i =1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    let locate = arr.indexOf(min);
    // return locate;
    return min;
};
function minfindat(arr){
    let min = arr[0];
    for(var i =1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    let locate = arr.indexOf(min);
    return locate;
    // return min;
};
let min = minfind(arr1);
 let locate = minfindat(arr1);
 alert("phần tử min là "+ min + "tại vị trí thứ "+locate);

