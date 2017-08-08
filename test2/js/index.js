$(document).ready(function() {
  
  //Must be a smarter way to do this
  //Maybe create an array or object of each page/link
  //and have the events happen to each one
  
  $('#page-one').css('opacity', 1);
  
  $('#nav-one').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-one').fadeTo(500, 1);  
  });
  $('#nav-two').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-two').fadeTo(500, 1);  
  });
  $('#nav-three').click(function() {
    $('.page').fadeTo(500, 0);
    $('#page-three').fadeTo(500, 1);
  });
});