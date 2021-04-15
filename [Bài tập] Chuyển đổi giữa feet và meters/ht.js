function footToMeter(foot){
    let meter = foot*0.035;
    return meter;
}
function  meterToFoot(meter){
    let foot = 3.279*meter;
    return foot;
}
let meter = footToMeter(+prompt("nhập số foot vào đây"));
alert(meter);
let foot = meterToFoot(+prompt("nhập số meter vào đây"));
alert(foot);