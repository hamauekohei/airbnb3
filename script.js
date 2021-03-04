$('.header-logo').on('click',function(){
  $('.click-nav').slideToggle(200);
  $('.fa-angle-down').toggleClass('click');
  $('.fa-rocket').toggleClass('click');
  $('body').toggleClass('noscroll');
});