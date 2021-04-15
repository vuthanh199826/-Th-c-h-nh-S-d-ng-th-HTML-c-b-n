//
// ------------------------------------------bài 1 ------------------------
//
// let a = +prompt("nhập a:","");
// let b = +prompt("nhập b","");
// result = ((a+b)<4)?'below':"over";
// alert(result);

//-------------------------------------bài 2-----------------------------
let message;
 let login = prompt("nhập mess vào đây","");

    result = (login == 'Employee') ?
    message ='Hello' :
    (login == 'Director') ?
       message = 'Greetings' :
        (login == '') ?
            message ='No login' :
            message ='None';
alert(result);