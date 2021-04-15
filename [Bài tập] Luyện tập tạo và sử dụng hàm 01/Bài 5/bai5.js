let array1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let array2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];

function check(str) {
    for (let i = 0; i < array1.length; i++) {
        if (str === array1[i]) {
            return array2[i];
        }
    }
    return "Không có ngôi sao này!";
};

let chomsao = check(prompt("nhập tên ngôi sao vào đây:"))
alert(chomsao);
