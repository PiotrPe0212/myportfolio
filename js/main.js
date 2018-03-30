document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () { myFunction() };
  });
  
  function myFunction() {
    var navbar = document.getElementById("navi");
  
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 80) {
      navbar.style.backgroundColor = "rgba(91,117,127, 0.6)";
    }
    else {
      navbar.style.backgroundColor = "transparent";
    }
  }