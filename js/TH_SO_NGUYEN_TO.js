let num = +prompt("nhập số");



    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            alert("đây không phải số nguyên tố");
            break;
        } else {
            alert("đây là số nguyên tố");
            break;
        }
    }
