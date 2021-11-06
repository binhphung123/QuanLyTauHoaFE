// $(document).ready(function(){
//     $('.eye').click(function(){
//         $(this).toggleClass('open');
//         $(this).children('i').toggleClass('fa-eye-slash fa-eye');
//         if($(this).hasClass('open')){
//             $(this).prev('.see_pass').attr('type', 'text');
//         }else{
//             $(this).prev('.see_pass').attr('type', 'password');
//         }
//     });
// });


//Thêm class .active khi click vào 1 mục nào đó trên main-menu
$(document).ready(function(){
    $('#main_menu>li.bg-active').click(function(){
        $('#main_menu>li.bg-active').removeClass("active");
        $(this).toggleClass("active");               
    });
});