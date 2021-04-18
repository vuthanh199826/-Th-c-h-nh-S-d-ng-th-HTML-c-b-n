function isPrime(number){
    let isprime = true;
    for(let i=2;i<number;i++){
        if(number%i==0){
            isprime = false;
        }
    }
    return isprime;
};

let i = 2;
while (i<10000){
    if(isPrime(i)==true){
        document.write( i + ' ');
    }
    i++
};

