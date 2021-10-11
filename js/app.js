$(document).ready(function(){
    $('.eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev('.see_pass').attr('type', 'text');
        }else{
            $(this).prev('.see_pass').attr('type', 'password');
        }
    });
});