let screen = document.getElementById('inp');
function p1(value) {
    screen.value += value;

}
function clr()
{
    screen.value='';
}
function calculate(){
  screen.value = eval(screen.value);
};