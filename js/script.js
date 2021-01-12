$(function () {

    // ibg
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    ibg();
    // /ibg

    // burger
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.header__nav').slideToggle();
        $('body').toggleClass('lock');
    });
    // /burger
});