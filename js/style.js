$(document).ready(function(){

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
    $(window).resize(function(){
        $('body').css('--fullHeight', window.innerHeight + 'px');
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
}

// 메인 페이지
function mainPage(){
    var mainSlide = new Swiper(".mainSlide", {
        pagination: {
            el: ".swiper-pagination",
        },
    });
}