
var selected = 0;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function closeOtherDiv() {
    document.getElementById(selected).style.display = "none";
}
function setSelected(id) {
    selected = id;
}
var sidenav= document.getElementById("mySidenav");
window.onclick = function(event) {
    if (event.target == sidenav) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
  }

  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
  if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
  } else {
  navbar.classList.remove("sticky");
  }
  }