document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () { myFunction() };
  });
  
  function myFunction() {
    var navbar = document.getElementById("navi");
  
    if (window.pageYOffset >= 80) {
      navbar.style.backgroundColor = "rgba(123,144,153, 0.8)";
      navbar.style.boxShadow = "0px 1px 3px #000";
    }
    else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.boxShadow = "none";
    }
  }

  var init = function() {
    var carousel = document.getElementById('carousel'),
        navButtons = document.getElementsByClassName('button'),
        icon = document.getElementsByClassName('tech-icon'),
        bar = document.querySelectorAll('.a, .b, .c, .d, .e'),
        desc = document.getElementsByClassName('desc'),
        panelCount = carousel.children.length,
        transformProp = Modernizr.prefixed('transform'),
        transformProp1 = Modernizr.prefixed('transform'),
        theta = 0,
        pos = 0,
        alpha = 0,
        beta = 0,
        // transformValue = 'rotateY(' + alpha + 'deg) translateZ( 253px ) scale(1)';
        skillValue=['100%','70%','40%','70%','40%','70%','10%','40%'];

        for(var i =0; i<panelCount; i++){
          icon[i].style[transformProp]= 'rotateY(' + alpha + 'deg) translateZ( 253px ) scale(1)';
          alpha+=45;
        }
        
        onNavButtonClick = function( event ){
          var increment = parseInt( event.target.getAttribute('value') );
          theta += ( 360 / panelCount ) * increment * -1;
          carousel.style[ transformProp ] = 'translateZ( -253px ) rotateY(' + theta + 'deg)';
          pos+= increment;
          if(pos == 8){
            pos=  0;
            alpha = 0;
          }
          else if(pos < 0){
            pos=panelCount-1;
            alpha = 315;
          }
          var descValue = 10;
          for(var i = 0; i < 4; i++){
          if( skillValue[pos] == descValue + '%'){
            desc[i].style.color = '#fff';
            desc[i].style.fontWeight = 'bold';
            desc[i].style.textShadow = '0 0 5px black';
          }
          else{
            desc[i].style.color = '';
            desc[i].style.fontWeight = '';
            desc[i].style.textShadow = '';
          }
          descValue+=30;
          console.log('${descValue}%');
        }
          for(var i=0; i<5; i++){
          bar[i].style.width=skillValue[pos];
          }
          var trans = window.getComputedStyle(icon[1], null).getPropertyValue('transform');
          trans[trans.length-2]=2;
          

          for( var j=0; j < panelCount; j++){
           
            if(j==pos){
              icon[j].style[transformProp] ='rotateY(' + beta + 'deg) translateZ( 253px ) scale(1.4)';
          }
          else{ 
            icon[j].style[transformProp] = 'rotateY(' + beta + 'deg) translateZ( 253px ) scale(1)';
        }
        
        beta+=45;
          }
          beta=0;
          

        };

    for (var i=0; i < 2; i++) {
      navButtons[i].addEventListener( 'click', onNavButtonClick, false);
    
    }

  };

  window.addEventListener( 'DOMContentLoaded', init, false);
  
  function naviBar(){
    var x = document.getElementById("nav-list");
    console.log(x);
    if (x.className === "nav-list") {
        x.className += " responsive";
    } else {
        x.className = "nav-list";
    }
  }
document.getElementById('nav-bar').addEventListener('click', naviBar);
