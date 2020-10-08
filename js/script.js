$(function(){
        /******** HEADER MENU NAV *******/

            var headerHeight = 96;
            $('.scroll-btn').click(function(){
                    var speed = 1000;
                    var href = $(this).attr('href');
                    var target = $(href === "#" || href === "" ? 'html' : href);
                    var position = target.offset().top-headerHeight;
                    $('html,body').animate({
                            'scrollTop': position
                    }, 500, "swing");
                    $('.navbar-collapse').removeClass('show');//スマホでバーガーメニュー内のアイテムクリックするとバーガーメニューが閉じる指定
                    return false;

              });
                /********* FOOTER TO TOP***********/
                var topBtn=$('#pageTop');
                topBtn.hide();
                $('.sticky-right').hide();
                $(window).scroll(function(){
                  if($(this).scrollTop()>80){
                    topBtn.fadeIn();
                    $('.sticky-right').fadeIn();
                  }else{
                    topBtn.fadeOut();
                    $('.sticky-right').fadeOut();
                  } 
                });
                topBtn.click(function(){
                  $('body,html').animate({
                  scrollTop: 0},500);
                  return false;
                });

});