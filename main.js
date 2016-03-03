$(document).ready(function(){
  navHover();
});

function navHover(){
  var navHeadings = document.getElementsByClassName("hoverLink");
  $(navHeadings).hover(function(){
      $(this).addClass("headLink");
    }, function(){
      $(this).removeClass("headLink");
  })
}
