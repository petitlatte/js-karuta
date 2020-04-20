//FADE IN OUT CONTAINERS
$(document).ready(function(){

$('#button-start').click(function(e){    
    $('.conA').fadeOut('slow', function(){
        $('.conB').fadeIn('slow');
    });
});


});