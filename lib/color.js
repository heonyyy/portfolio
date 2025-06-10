
$(window).on("scroll", function () {
    const section = $(".section-04");
    const sectionTop = section.offset().top;
    const sectionHeight = section.outerHeight();
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    // 화면 중앙 기준, 섹션이 절반 이상 보이면 true
    const triggerPoint = scrollTop + windowHeight / 2;
    const isVisible = triggerPoint >= sectionTop && triggerPoint <= sectionTop + sectionHeight;

    if (isVisible) {
        $("body").css("background-color", "#000");
        $(".web_design, .item-title, .item-desc").css("color", "#fff");
    } else {
        $("body").css("background-color", "#fff");
        $(".web_design, .item-title, .item-desc").css("color", "#000");
    }
});

