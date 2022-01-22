$(document).ready(function(){
    $(".btn3").css("background-color","white");
    $(".hamburg-icon").click(function(){
        $(this).removeClass('hamburg-icon');
        $(this).addClass('cross-icon');
    });
$(".cross-icon").click(function(){
    $(this).removeClass('cross-icon');
    $(this).addClass('hamburg-icon');
}); 
$(".buttons span").click(function(){
    $(".buttons span").css("background-color","inherit");
    $(this).css("background-color","white");
});

})






















