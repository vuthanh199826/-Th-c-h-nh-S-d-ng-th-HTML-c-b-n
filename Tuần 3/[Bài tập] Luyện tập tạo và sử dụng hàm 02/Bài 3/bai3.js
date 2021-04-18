function giaithuacheck() {
    let gt = 1;
    for (let i = 1; i <= arguments[0]; i++) {
        gt *= i;
    }
    return gt;
};
let giaithua = giaithuacheck(5);
alert(giaithua);