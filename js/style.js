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
    $('.mainPage').length && mainPage();

    // 회사소개 페이지
    $('.aboutUsPage').length && aboutUs();
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

    // 모바일, 테블릿 메뉴
    $('header > div button').click(function(){
        $('header > div nav').toggleClass('active');
    })

    $('header > div nav').click(function(){
        $(this).removeClass('active')
    })

    $('header > div nav ul').click(function(e){
        e.stopPropagation();
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
    })
}


// 회사소개 페이지
function aboutUs(){
    $('.textScroll > div > *').each(function(i){
        if(($('.textScroll').height() - $(window).height()) / $('.textScroll > div > *').length * i < $('.textScroll')[0].getBoundingClientRect().y * -1){
            $(this).addClass('active')
        }else{
            $(this).removeClass('active')
        }
    })
    $(window).scroll(function(){
        if($('.textScroll')[0].getBoundingClientRect().y <= 0 && $(window).height() - $('.textScroll').height() < $('.textScroll')[0].getBoundingClientRect().y){
            $('.textScroll > div > *').each(function(i){
                if(($('.textScroll').height() - $(window).height()) / $('.textScroll > div > *').length * i < $('.textScroll')[0].getBoundingClientRect().y * -1){
                    $(this).addClass('active')
                }else{
                    $(this).removeClass('active')
                }
            })
        }
    })
}