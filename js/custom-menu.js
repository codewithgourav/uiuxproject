jQuery(document).ready(function($){

  $("#mobnav").click(function(){
    $('body').addClass('noscroll');
    $('#cross').show();
    $('#mobnav').hide();
    $("header nav").animate({'left' : '0'});
  });

  $("#cross").click(function(){
    $('body').removeClass('noscroll');
    $('#cross').hide();
    $('#mobnav').show();
    $("header nav").animate({'left' : '-100%'});
  });

  // submenu
  $(document).on('click','#top li .down-icon',function(){
    $(this).prev().slideToggle(); 
  });

  // Remove svg from menu
  $('#top li.menu-item-has-children a svg').remove();
  $('#top li.menu-item-has-children').append('<span class="down-icon"></span>');


}); 