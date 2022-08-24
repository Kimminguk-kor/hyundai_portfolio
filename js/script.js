$(function () {
  let showBanner = 0;

  function fadeBanner() {
    $(".web>li").eq(showBanner).stop().fadeIn(500).siblings().fadeOut(500);
    $(".mobile>li").eq(showBanner).stop().fadeIn(500).siblings().fadeOut(500);
    $(".middleContents .middleText")
      .eq(showBanner)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".pager>li")
      .eq(showBanner)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  $(".pager>li").click(function () {
    showBanner = $(this).index();
    fadeBanner();
  });
  $(".rightArr").click(function () {
    if (showBanner < 3) {
      showBanner++;
    } else {
      showBanner = 0;
    }
    fadeBanner();
  });
  $(".leftArr").click(function () {
    if (showBanner > 0) {
      showBanner--;
    } else {
      showBanner = 3;
    }
    fadeBanner();
  });

  var timer = setInterval(autoBanner, 5000);
     function autoBanner(){
          $(".rightArr").trigger("click");
     }

     $(".pager").on({
      "mouseenter": function(){
           clearInterval(timer)
      },
      "mouseleave": function(){
           timer = setInterval(function(){
                $(".rightArr").trigger("click")
           },5000)
      }
 })

  let secondOnepageBanner = 0;

  function secondOnepage() {
    $(".secondWeb>li")
      .eq(secondOnepageBanner)
      .stop()
      .fadeIn(500)
      .siblings()
      .fadeOut(500);
      $(".secondMobile>li")
      .eq(secondOnepageBanner)
      .stop()
      .fadeIn(500)
      .siblings()
      .fadeOut(500);
    $(".secondContent>.secondSubBox")
      .eq(secondOnepageBanner)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  $(".subBox>a").click(function () {
    secondOnepageBanner = $(this).index();
    secondOnepage();
  });

  let firthEventBannerCount = 0;

  function firthEventBanner() {
    $(".container>.eventBox")
      .eq(firthEventBannerCount)
      .addClass("active")
      .siblings()
      .removeClass("active");
    $(".eventPager>li")
      .eq(firthEventBannerCount)
      .addClass("active")
      .siblings()
      .removeClass("active");
  }
  $(".eventPager>li").click(function () {
    firthEventBannerCount = $(this).index();
    firthEventBanner();
  });
  $(".eventRightArr").click(function () {
    if (firthEventBannerCount < 2) {
      firthEventBannerCount++;
    } else {
      firthEventBannerCount = 0;
    }
    firthEventBanner();
  });
  $(".eventLeftArr").click(function () {
    if (firthEventBannerCount > 0) {
      firthEventBannerCount--;
    } else {
      firthEventBannerCount = 2;
    }
    firthEventBanner();
  });

  // eventCard01 display:none
  function cardDisplay() {
    $(".eventBox>.card02").hover(
      function () {
        $(".card01").css("opacity", "0");
      },
      function () {
        $(".card01").css("opacity", "1");
      }
    );
  }
  cardDisplay();

  // fifthPage mainBox selectOption

  let mapCount = 0;

  function selectOption() {
    $(".mainBox>li").eq(mapCount)
      .addClass("active").siblings()
      .removeClass("active");
    $(".mapBox .classBox")
      .eq(mapCount).addClass("active")
      .siblings().removeClass("active");
  }
  $(".mainBox>li").click(function () {
    mapCount = $(this).index();
    selectOption();
  });
  
  $(".hamBox>a").click(function(){
    $(this).toggleClass("active");
  })

  $(".hamBox").click(function () {
    if ($("#nav>.navMenu").css("display") == "none") {
      $("#nav>.navMenu").show(); //display :none 일떄
    } else {
      $("#nav>.navMenu").hide(); //display :block 일떄
    }
  });


  $(window).resize(function () {
    if (window.innerWidth > 1280) {
      $("#nav>.navMenu").css("display", "block");
    } else {
      $("#nav>.navMenu").css("display", "none");
    }
  });
});
