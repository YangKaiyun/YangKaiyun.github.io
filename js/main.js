
$(function(){

   $('.audio').toggle(
        function(){
            $('#media')[0].pause();
        },
       function(){
           $('#media')[0].play();
       }
   );

    $('.audio').click(function(){
        $(this).toggleClass('amon');
    });







});
