// Plan:
  // Create fixed navbar
  // Navbar appears only the user scrolls up

var beforeScroll = 0;
var afterScroll;
var $navbar = $('.navbar');

// find current position
$(window).on("scroll", function(){
  
  // Calculate updated scroll position
  afterScroll = $(this).scrollTop();
      
  // Compare before and after scroll
  
  // if scrolling is quick and less then -10
  if (beforeScroll < afterScroll) {
    // user is scrolling down
    $navbar.removeClass('slideDown').addClass('slideUp');
  } else if (beforeScroll > afterScroll) {
    // user is scrolling up
    $navbar.removeClass('slideUp').addClass('slideDown');
  }
    

  // Reset beforeScroll to afterScroll position
  
  beforeScroll = afterScroll;
  
});


// Navigation open menu on handle
$('.handle').on('click', function(){
  $('nav ul').toggleClass('showing');
});