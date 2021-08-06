$(function (){

  //네비게이션
  // $('.opengnb').toggle(function(){
  //   $(this).addClass('on');
  //   // $('.header_cont').addClass('on');
  // }, function(){
  //   $(this).removeClass('on');
  //   $('.header_cont').removeClass('on')
  // });
  $('.opengnb').toggle(function(){
    $(this).addClass('on');
    $('#header').css({
      "background-color": "rgba(255,255,255,1)",
      "border-bottom": "1px solid"
    });
    $('#logo img:nth-child(1)').removeClass('on');
    $('#logo img:nth-child(2)').addClass('on');
    $('.opengnb span').css({"background-color":"#000"})
    $('.util li a').css({"color":"#000"})
  }, function(){
    $(this).removeClass('on');
    $('.sub_menu').removeClass('on');
    $('#logo img:nth-child(2)').removeClass('on');
    $('#logo img:nth-child(1)').addClass('on');
    $('.opengnb span').css({"background-color":"#fff"});
    $('#header').css({
      "background-color": "rgba(255,255,255,0)",
      "transition": "linear .1s",
      "transition-delay": ".1s",
      "border": "none"
    });
    $('.util li a').css({"color":"#fff"})
  });
});
$(function(){
  $('.header_cont').hide();
  $('.opengnb').click(function(){
    $('.header_cont').slideToggle(100);
  });
});

//메뉴바
$(function(){
  $('.ol a').hover(function() {
    $('.sub_1').addClass('on');
    $('.sub_1').siblings('.on').removeClass('on');
    $('.sub_menu').addClass('on');
  });
  $('.ed a').hover(function() {
    $('.sub_3').addClass('on');
    $('.sub_3').siblings('.on').removeClass('on');
    $('.sub_menu').addClass('on');
  });
  $('.cl a').hover(function() {
    $('.sub_4').addClass('on');
    $('.sub_4').siblings('.on').removeClass('on');
    $('.sub_menu').addClass('on');
  });
  $('.se a').hover(function() {
    $('.sub_6').addClass('on');
    $('.sub_6').siblings('.on').removeClass('on');
    $('.sub_menu').addClass('on');
  });
});

//회사정보
$(function(){
  $('.company_info dd').hide();
  $('.company_info button').click(function(){
    $('.info_button').toggleClass('on');
    $('.company_info dd').slideToggle(400);
  });
});

//new button
$(document).ready(function() {
  $(".nc_bt1").live('click', function() {
      $('.nc_menu1').addClass('on');
      $('.nc_menu2').removeClass('on');
  });
});
$(document).ready(function() {
  $(".nc_bt").live('click', function() {
      $('.nc_menu2').addClass('on');
      $('.nc_menu1').removeClass('on');
  });
});


/* 스크롤 감지 */
var lastScrollTop = 0,

    delta = 15;

  $(window).scroll(function(event) {

    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if ((st > lastScrollTop) && (lastScrollTop > 50)) {

      $("#header").css({

        "transition": "background-color 0.2s",
        "background-color": "rgba(255,255,255,1)",
        "box-shadow" : "0 5px 20px rgba(0, 0, 0, 0.8)"

      });
      $('#logo img:nth-child(1)').removeClass('on');
      $('#logo img:nth-child(2)').addClass('on');
      $('.opengnb span').css({"background-color":"#000"})
      $('.tnb li a').css({"color":"#000"})

    } else if((st<lastScrollTop) && (lastScrollTop < 50)) {

      $("#header").css({

        "top": "0",
        "transition": "background-color 0.2s",
        "background-color": "rgba(255, 255, 255, 0)",
        "box-shadow" : "0 5px 20px rgba(0, 0, 0, 0)"
      });
      $('#logo img:nth-child(2)').removeClass('on');
      $('#logo img:nth-child(1)').addClass('on');
      $('.opengnb span').css({"background-color":"#fff"})
      $('.tnb li a').css({"color":"#fff"})

    }

    lastScrollTop = st;

  });