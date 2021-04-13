function check(num){
    if(num < 2){
        return false;
    }
    for(let i=2 ;i<num ;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
};
let sum = 0;
let number = 0;
let count =0;
let sl = +prompt("nhập số lần vào đây");
while (count < sl){

    if(check(number)==true){
        document.write(number);
        document.write("<br/>");
        count++;
        sum += number;
    }
    number++;
}
document.write("tổng là")
document.write(sum);
