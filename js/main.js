
$(function(){

   $('.audio').toggle(
        function(){
            $('#media')[0].play();
        },
       function(){
           $('#media')[0].pause();
       }
   );

    $('.audio').click(function(){
        $(this).toggleClass('amon');
    });







});
