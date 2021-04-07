


function tinh(){

let a = Number(document.getElementById("value1").value);
let b = parseInt(document.getElementById("value2").value);

    if(document.getElementById("pheptoan").value == "cong" )
       document.getElementById('xuat').value=(a+b);
    else
        if(document.getElementById("pheptoan").value == "tru")
            document.getElementById('xuat').value=(a-b);
        else
            if(document.getElementById("pheptoan").value == "nhan")
                document.getElementById('xuat').value=(a*b);
            else
                document.getElementById('xuat').value=(a/b);


}
function rs()
{
document.getElementById("value1").value ="";
    document.getElementById("value2").value ="";
    document.getElementById("xuat").value ="";
}