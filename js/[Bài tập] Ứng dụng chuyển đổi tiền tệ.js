function test() {
    let input = document.getElementById("nhap").value;
    let a = document.getElementById("benA").value;
    let b = document.getElementById("benB").value;

    //
     if(input < 0 )
         alert("mệnh giá phải lớn hơn 0, nhập lại");
     else
     if (a == "VND" && b == "USD")
         document.getElementById("xuat").value=input*(1/23000);
     else
         if (a == "USD" && b == "VND")
             document.getElementById("xuat").value = input * 23000;
        else
             document.getElementById("xuat").value = input ;
}

