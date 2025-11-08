$(function() {
    // スクロールイベント
    $(window).scroll(function() {
        // スクロール量を取得
        const scroll = $(window).scrollTop();
        // 画面の高さを取得
        const windowHeight = $(window).height();

        $(".box").each(function() {
        // それぞれの.boxまでの高さを取得
        const boxHeight = $(this).offset().top;
        // 条件式に合致する場合はis-activeを付与
        if(scroll + windowHeight > boxHeight) {
            $(this).addClass("is-active");
            }
        });
    });
});

$(function () {
    const $pageTop = $(".pagetop");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $pageTop.fadeIn(300).css('display', 'flex');
        } else {
            $pageTop.fadeOut(300);
        }
    });
    $pageTop.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});
