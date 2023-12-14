$(document).ready(function(){
    // 나중에 삭제
    $('[type="submit"]').click(function(){
        // window.location.href = './inquiry-complete.html'
        
        window.location.assign("./inquiry-complete.html");
    })

    // 공통 스타일
    commonStyle();

    // 스타일 인덱스
    $('[data-styleIdx]').length && styleIdx();

    // 메인 페이지
    mainPage();
})

// 공통 스타일
function commonStyle(){
    // 해더 배경
    $(window).scroll(function(){
        $(this).scrollTop() > 0 ? $('header').addClass('active') : $('header').removeClass('active');
    })

    // 풀 세로 사이즈
    $('body').css('--fullHeight', window.innerHeight + 'px');
    $('body').css('--fullWidth', window.innerWidth + 'px');
    let scrollWidth;
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        scrollWidth = '0'
    } else {
        scrollWidth = '17'
    }
    $('body').css('--scrollWidth', scrollWidth + 'px');
    $(window).resize(function(){
        $('body').css('--fullHeight', window.innerHeight + 'px');
        $('body').css('--fullWidth', window.innerWidth + 'px');
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            scrollWidth = '0'
        } else {
            scrollWidth = '17'
        }
        $('body').css('--scrollWidth', scrollWidth + 'px');
    })
}

// 스타일 인덱스
function styleIdx(){
    $('[data-styleIdx]').each(function(){
        $(this).css('--idxTotal', $(this).children().length)
        $(this).children().each(function(i){
            $(this).css('--styleIdx', i)
        })
    })

    $(window).scroll(function(){
        $('[data-scrollPosition]').each(function(){
            $(this)[0].getBoundingClientRect().y < 0 ? $(this).addClass('active') : $(this).removeClass('active');
        })
    })
}

// 메인 페이지
function mainPage(){
    var mainSlide = new Swiper(".mainSlide", {
        pagination: {
            el: ".swiper-pagination",
        },
    });

    $(window).scroll(function(){
        if($('.serviceScroll')[0].getBoundingClientRect().y <= 0 && $(window).height() - $('.serviceScroll').height() < $('.serviceScroll')[0].getBoundingClientRect().y){
            $('.serviceScroll ul li').each(function(i){
                if(($('.serviceScroll').height() - $(window).height()) / $('.serviceScroll ul li').length * i < $('.serviceScroll')[0].getBoundingClientRect().y * -1){
                    $(this).addClass('active')
                    $('.serviceScroll > div ol li').eq(i).addClass('active');
                }else{
                    $(this).removeClass('active')
                    $('.serviceScroll > div ol li').eq(i).removeClass('active');
                }
            })
        }

        //     && $('.serviceTest ul').stop().css('top', test)
            // $('.serviceTest div').css('top', Math.abs($('.serviceTest')[0].getBoundingClientRect().y))
    })
}