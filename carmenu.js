$(function(){
    let menuBanner01 = 0;

    function menuFadeBanner(){
        $(".bannerBox01>div").eq(menuBanner01).stop().fadeIn(500)
        .siblings().fadeOut(500);
        $(".pagerWrap01>.pagerText01").eq(menuBanner01).addClass("active")
        .siblings().removeClass("active");
        // web버전 mobile버전
        $(".secondImg>.web>div").eq(menuBanner01).addClass("active")
        .siblings().removeClass("active");
        $(".secondImg>.mobile>div").eq(menuBanner01).addClass("active")
        .siblings().removeClass("active");
    }
    $(".pager01>div").click(function(){
        menuBanner01 = $(this).index();
        menuFadeBanner();
    })
    $(".rightArr01").click(function(){
        if(menuBanner01 < 2){
            menuBanner01++;
        } else {
            menuBanner01 = 0;
        }
        menuFadeBanner();
    })
    $(".leftArr01").click(function(){
        if(menuBanner01 > 0){
            menuBanner01--;
        } else {
            menuBanner01 = 2;
        }
        menuFadeBanner();
    })

    let menuBanner02 = 0;

    function menuFadeBanner02(){
        $(".bannerBox02>div").eq(menuBanner02).stop().fadeIn(500)
        .siblings().fadeOut(500);
        $(".pagerWrap02>.pagerText02").eq(menuBanner02).addClass("active")
        .siblings().removeClass("active");
        // web버전 mobile버전
        $(".secondImg>.webMove>div").eq(menuBanner02).addClass("active")
        .siblings().removeClass("active");
        $(".secondImg>.mobileMove>div").eq(menuBanner02).addClass("active")
        .siblings().removeClass("active");
    }
    $(".pager02>div").click(function(){
        menuBanner02 = $(this).index();
        menuFadeBanner02();
    })
    $(".rightArr02").click(function(){
        if(menuBanner02 < 3){
            menuBanner02++;
        } else {
            menuBanner02 = 0;
        }
        menuFadeBanner02();
    })
    $(".leftArr02").click(function(){
        if(menuBanner02 > 0){
            menuBanner02--;
        } else {
            menuBanner02 = 3;
        }
        menuFadeBanne02();
    })

    let menuBanner03 = 0;

    function menuFadeBanner03(){
        $(".bannerBox03>div").eq(menuBanner03).stop().fadeIn(500)
        .siblings().fadeOut(500);
        $(".pagerWrap03>.pagerText03").eq(menuBanner03).addClass("active")
        .siblings().removeClass("active");
        // web버전 mobile버전
        $(".secondImg>.mobileMove02>div").eq(menuBanner03).addClass("active")
        .siblings().removeClass("active");
        $(".secondImg>.webMove02>div").eq(menuBanner03).addClass("active")
        .siblings().removeClass("active");
    }
    $(".pager03>div").click(function(){
        menuBanner03 = $(this).index();
        menuFadeBanner03();
    })
    $(".rightArr03").click(function(){
        if(menuBanner03 < 3){
            menuBanner03++;
        } else {
            menuBanner03 = 0;
        }
        menuFadeBanner03();
    })
    $(".leftArr03").click(function(){
        if(menuBanner03 > 0){
            menuBanner03--;
        } else {
            menuBanner03 = 3;
        }
        menuFadeBanne03();
    })
})