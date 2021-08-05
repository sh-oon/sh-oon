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
  }, function(){
    $(this).removeClass('on');
    $('.sub_menu').removeClass('on');
  });
});
$(function(){
  $('.header_cont').hide();
  $('.opengnb').click(function(){
    $('.header_cont').slideToggle(100);
  });
});

$(function(){
  $(this).addClass('on');
    $('#header').css({
      "background-color": "rgba(255,255,255,1)",
      "border-bottom": "1px solid"
    });
    $('#logo img:nth-child(1)').removeClass('on');
    $('#logo img:nth-child(2)').addClass('on');
    $('.opengnb span').css({"background-color":"#000"})
})


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


/* 옷 종류별 정렬 */
$(function(){
  $("button.cb").click(function(){
    $(".nc_main li").not("li.cb").css("display","none");
    $("li.cb").css("display","block");
  });
  $("button.jj").click(function(){
    $(".nc_main li").not("li.jj").css("display","none");
    $("li.jj").css("display","block");
  });
  $("button.ts").click(function(){
    $(".nc_main li").not("li.ts").css("display","none");
    $("li.ts").css("display","block");
  });
  $("button.sh").click(function(){
    $(".nc_main li").not("li.sh").css("display","none");
    $("li.sh").css("display","block");
  });
  $("button.kn").click(function(){
    $(".nc_main li").not("li.kn").css("display","none");
    $("li.kn").css("display","block");
  });
  $("button.si").click(function(){
    $(".nc_main li").not("li.si").css("display","none");
    $("li.si").css("display","block");
  });
  $("button.ps").click(function(){
    $(".nc_main li").not("li.ps").css("display","none");
    $("li.ps").css("display","block");
  });
  $("button.dr").click(function(){
    $(".nc_main li").not("li.dr").css("display","none");
    $("li.dr").css("display","block");
  });
  $("button.bag").click(function(){
    $(".nc_main li").not("li.bag").css("display","none");
    $("li.bag").css("display","block");
  });
  $("button.cap").click(function(){
    $(".nc_main li").not("li.cap").css("display","none");
    $("li.cap").css("display","block");
  });
  $("button.jew").click(function(){
    $(".nc_main li").not("li.jew").css("display","none");
    $("li.jew").css("display","block");
  });
  $("button.soc").click(function(){
    $(".nc_main li").not("li.soc").css("display","none");
    $("li.soc").css("display","block");
  });
  $("button.acc").click(function(){
    $(".nc_main li").not("li.acc").css("display","none");
    $("li.acc").css("display","block");
  });
});


$(function () {
  $('.slider-pro').sliderPro({
    width: 1000,
    height: 600,
    arrows: true,
    buttons: false,
    slideDistance: 0,
    waitForLayers: true,
    autoplay: true,
    thumbnailWidth: 1000,
    thumbnailHeight: 600,
    imageScaleMode: 'contain',
    autoScaleLayers: true,
    breakpoints: {
      1000: {
        width: 400,
        height: 565,
        arrows: false,
        thumbnailWidth: 1000,
        thumbnailHeight: 600
      }
    }
  });
});

$(function () {
  $('.main_modal').hide();
});
function closePopUp() {
  $('.main_modal').hide();
};

$(function () {
  $('.open1').click(function(){
    $('.s1').show();
  });
  $('.open2').click(function(){
    $('.s2').show();
  });
  $('.open3').click(function(){
    $('.s3').show();
  });
  $('.open4').click(function(){
    $('.s4').show();
  });
})