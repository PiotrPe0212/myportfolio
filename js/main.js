document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () { myFunction() };
  });
  
 myFunction = (e) =>{
    var navbar = document.getElementById("navi");
  if(window.pageYOffset <= 80){
    navbar.style.display = "flex";
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow = "none";
  }
    else if (window.pageYOffset >= 80 && this.oldScroll > this.scrollY) {
      navbar.style.display = "flex";
      navbar.style.backgroundColor = "rgb(42, 42, 46)";
      navbar.style.boxShadow = "0px 1px 3px #000";
    }
    else if(window.pageYOffset >= 80 && this.oldScroll < this.scrollY){
      navbar.style.display = "none";
    }
    this.oldScroll = this.scrollY;
  }

  