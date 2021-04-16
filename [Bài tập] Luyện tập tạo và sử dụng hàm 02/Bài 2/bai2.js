function tinhs(r) {
    let s = 3.14 * r * r;
    return s;
};

function tinhc(r) {
    let c = 3.14 * r;
    return c;
};

let s = tinhs(prompt("nhập bán kính để tính diện tích"));
alert("diện tích là " + s);
let c = tinhc(prompt("nhập bán kính để tính chu vi"));
alert("chu vi là " + c);