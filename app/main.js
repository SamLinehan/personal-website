$(document).ready(function(){
  rotateHamburger();
})

function rotateHamburger(){
  $('.hamburger').click(function(){
    $(this).rotate();
  })
}
