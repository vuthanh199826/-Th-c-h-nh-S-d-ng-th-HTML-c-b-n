let weight = parseInt(prompt("nhập số cân nặng của bạn vào đây (kg)"));
let height = parseInt(prompt("nhập chiều cao của bạn vao đây (m)"))
let bmi = weight/(height^2);
if (bmi<18.5)
    alert("Underweight");
else if(bmi<25)
    alert("Normal");
else if(bmi<30)
    alert("Overweight");
else
    alert("Obese");
