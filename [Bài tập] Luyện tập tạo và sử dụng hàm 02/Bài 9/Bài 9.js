let array = Array()
function add(arr){
    let sl = +prompt("Nhập số lượng phần tử vào đây");
    for(let i =0; i < sl; i++){
        arr.push(prompt("nhập phần tử vào đây"));
    };
    let count =0;
    let str = prompt("nhập ký tự cần kiểm tra vào đây");
    arr = arr.join().split('');
    for(let i =0; i < arr.length; i++){
        if(str === arr[i]){
            count++;
        }
    }
    return count;
};
alert(add(array));


