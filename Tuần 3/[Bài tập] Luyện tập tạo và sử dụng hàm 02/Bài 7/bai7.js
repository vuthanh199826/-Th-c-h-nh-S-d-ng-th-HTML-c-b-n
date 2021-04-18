function change() {
    let x = arguments[0];
    arguments[0] = arguments[1];
    arguments[1] = x;
    document.(arguments[0], arguments[1]);
};
change(prompt("nhập a:"),prompt("nhập b:"));
