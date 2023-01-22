var dot1 = document.getElementById(dot1);
var dot2 = document.getElementById(dot2);
var dot3 = document.getElementById(dot3);

setTimeout(function load(){
    document.location.href = "/Menu/menuScreen.html"
}, 8500)

setTimeout(move, 1)

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 75);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}