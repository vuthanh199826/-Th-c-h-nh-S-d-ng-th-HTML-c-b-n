function check( ){

    if (!isNaN( (arguments[0]))){
        return true;
    }else {
        return false;
    }
}
alert(check(prompt()))