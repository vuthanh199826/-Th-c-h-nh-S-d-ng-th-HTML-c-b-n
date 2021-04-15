let obj = null;
obj = document.getElementById('but');

function init() {
    obj = document.getElementById('but');
    obj.style.position = 'relative';
    obj.style.left = '500px';
}

function click() {
    alert(obj.style.left)
    obj.style.left = parseInt(obj.style.left) + 20 + 'px';
}

window.onload = init();