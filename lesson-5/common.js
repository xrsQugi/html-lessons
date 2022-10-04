$(function() {
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");

        if($(this).hasClass('is-active')){
            $('.menu').slideDown(300);
            $('.bar').slideDown(300);
        }
        else{
            $('.menu').slideUp(300);
            $('.bar').slideUp(300);
        }
    });
});