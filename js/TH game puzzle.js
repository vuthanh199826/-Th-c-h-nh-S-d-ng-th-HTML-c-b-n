    let a11 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part1x1.jpg";
    let a12 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part2x1.jpg";
    let a13 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part3x1.jpg";
    let a14 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part4x1.jpg";
    let a15 = "https://demo.codegym.vn/8/puzzlegame/img/panda_swap_part5x1.jpg";

    let a21 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part1x1.jpg";
    let a22 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part2x1.jpg";
    let a23 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part3x1.jpg";
    let a24 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part4x1.jpg";
    let a25 = "https://demo.codegym.vn/8/puzzlegame/img/funny-cat1_part5x1.jpg";

    let a31 = "https://demo.codegym.vn/8/puzzlegame/img/monkey_part1x1.jpg";
    let a32 = "https://demo.codegym.vn/8/puzzlegame/img/monkey_part2x1.jpg";
    let a33 = "https://demo.codegym.vn/8/puzzlegame/img/monkey_part3x1.jpg";
    let a34 = "https://demo.codegym.vn/8/puzzlegame/img/monkey_part4x1.jpg";
    let a35 = "https://demo.codegym.vn/8/puzzlegame/img/monkey_part5x1.jpg";




function change1()
{
   let chan = document.getElementById('1');
    if(chan.src == a11){
        chan.src = a21;
    }else if (chan.src==a21) {
        chan.src = a31;
    }else{
        chan.src = a11;
    };
    win();

};
    function change2()
    {
        let chan = document.getElementById('2');
        if(chan.src == a12){
            chan.src = a22;
        }else if (chan.src==a22) {
            chan.src = a32;
        }else {
            chan.src = a12;
        };
      win();
    };
    function change3()
    {
        let chan = document.getElementById('3');
        if(chan.src == a13){
            chan.src = a23;
        }else if (chan.src==a23) {
            chan.src = a33;
        }else {
            chan.src = a13;
        };
       win();
    };
    function change4()
    {
        let chan = document.getElementById('4');
        if(chan.src == a14){
            chan.src = a24;
        }else if (chan.src==a24) {
            chan.src = a34;
        }else {
            chan.src = a14;
        };
       win();
    };
    function change5()
    {
        let chan = document.getElementById('5');
        if(chan.src == a15){
            chan.src = a25;
        }else if (chan.src==a25) {
            chan.src = a35;
        }else {
            chan.src = a15;
        };
       win();
    };


    function win(){
        if(
        document.getElementById('1').src==a11 &&
        document.getElementById('2').src==a12 &&
        document.getElementById('3').src==a13 &&
        document.getElementById('4').src==a14 &&
        document.getElementById('5').src==a15 ||
            document.getElementById('1').src==a21 &&
            document.getElementById('2').src==a22 &&
            document.getElementById('3').src==a23 &&
            document.getElementById('4').src==a24 &&
            document.getElementById('5').src==a25 ||
                document.getElementById('1').src==a31 &&
                document.getElementById('2').src==a32 &&
                document.getElementById('3').src==a33 &&
                document.getElementById('4').src==a34 &&
                document.getElementById('5').src==a35

        ){
            document.getElementById('di').style.backgroundColor='red';
            document.getElementById('h').innerText="You Win"
        }else {
            document.getElementById('di').style.backgroundColor='white';
            document.getElementById('h').innerText="";
        }
    }
