function check() {
    if (arguments[0] >= 0) {
        return true;
    } else {
        return false;
    }
}
alert(check(prompt("nhập số vào đây có phải nguyên dương không")));