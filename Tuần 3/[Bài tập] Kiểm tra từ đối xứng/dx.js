// function check(str) {
//     let arr = str.split('');
//     for (let i = 0, j = arr.length - 1; i <= arr.length / 2, j >= arr.length / 2; i++, j--) {
//         if (arr[i] !== arr[j]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// alert(check("hhhhooohhhh"))

let string = prompt('Enter a word');
let str = string.split("");
alert(isPalindrome(str));
function isPalindrome(s) {
    if (s.length <= 1)
        return true;
    if (s[0] != s[s.length - 1])
        return false;
    s.pop();
    s.shift();
    return isPalindrome(s);
}


