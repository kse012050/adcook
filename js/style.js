$(document).ready(function(){

    $(window).scroll(function(){
        $(this).scrollTop() > 0 ? $('header').addClass('active') : $('header').removeClass('active');
    })

    // 스타일 인덱스
    $('[data-styleIdx]').length && styleIdx();

    // 메인 페이지
    mainPage();
})

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