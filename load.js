$(function(){

  //함수 정의
  function move(){
    var $container = $('#progressArea');
    var $bar = $('#bar');
    var $lbl = $('#label');

    var w = parseInt($lbl.text());
    var play = setInterval(status, 20);
    var duration1 = 500; //시간1
    var duration2 = 1000; //시간2

    //모션 실행 함수
    function status(){
      if(w<100){
        w++;
        $bar.css({width:w+'%'});
        $lbl.text(w+'%');
      } else{
        clearInterval(play);//setInterval 해제

        /* ********************************************************
                2단계 : 페이지 전환 모션
                $container : 슬라이드 아웃(jQuery Easing)
                $bar : 페이드 아웃 
        ************************************************************/
       $bar.delay(duration1).animate({
         opacity: 0,
         height: 0
       }, duration2, function(){
         $container.animate({
           top:'-100%',
           display: 'none'
         },duration1);
       });
        
      }
    }
  }
  move();
  
});