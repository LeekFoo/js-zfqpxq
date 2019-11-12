AOS.init({
    offset: 300,
    duration: 1000,
    once: true,
});

var options = {
    responsive: true,
    title: {
        display: true,
        text: 'フロントエンド'
    },
    legend: {
        display: false
    },
    scale: {
        angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: 1,
            suggestedMax: 5
        }
    }
};

$( document ).ready(function() {
    // initialize
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('.modal').modal();

    // ページトップへ戻るボタン
    var pagetop = $('.scroll_button');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); 
        return false;
    });

    // スクロールアニメーション
    $('a[href^="#"]').click(function() {
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var offset = href == "#" ? 0 : $("nav").height();
        var position = target.offset().top - offset;
        $('body,html').animate({scrollTop:position}, speed, 'easeInCubic');
    });


    $('.modal-trigger').click(function() {
        var targetName = $(this).attr('data-target');
        $('#' + targetName + ' .modal_images').slick();
    });
});