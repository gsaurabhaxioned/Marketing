$(document).ready(function(){
    $(".hamburg-icon").click(function(){
        $(this).removeClass('hamburg-icon');
        $(this).addClass('cross-icon');
    });
$(".cross-icon").click(function(){
    $(this).removeClass('cross-icon');
    $(this).addClass('hamburg-icon');
});
})






















