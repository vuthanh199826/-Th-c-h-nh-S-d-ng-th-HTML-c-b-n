function findmin() {
    let min = arguments[0];
    if (min < arguments[1] && min < arguments[2]) {
        return min;
    }else if(arguments[1]<arguments[2]){
        min = arguments[1];
        return min;
    }else {
        min = arguments[2];
        return min;
    }
};

let a = findmin(-8,2,3);
alert(a);