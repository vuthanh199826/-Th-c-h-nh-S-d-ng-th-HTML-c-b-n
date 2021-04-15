let userName = prompt("Who's there?", '');
if (userName == 'Admin') {
    alert("hello my friend")
} else if (userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}