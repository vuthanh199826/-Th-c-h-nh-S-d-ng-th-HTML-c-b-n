let array1 = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
for(let i =0; i<array1.length; i++){
    document.write("row " + i + '<br/>');
    for(let j =0; j<array1[i].length;j++){
        document.write(array1[i][j] + '<br/>');
    }
}
