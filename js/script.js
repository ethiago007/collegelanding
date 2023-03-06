$(document).ready(function(){
    $('.hamburger').click(function(){
      $('ul').toggleClass('show')
    })
    $('.menu-toggle').click(function() {
  
        $('.site-nav').toggleClass('site-nav--open', 500);
        $(this).toggleClass('open');
        
      });
  })