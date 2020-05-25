
$(document).ready(function(){


//CARD ARRAYS 
 var Yomifuda = new Array("img/cards/001.png","img/cards/002.png","img/cards/003.png", "img/cards/004.png", "img/cards/005.png");





//RANDOMIZE CARDS

function choosePic() {
     var randomNum = Math.floor(Math.random() * Yomifuda.length);
     document.getElementById("Q-card").src = Yomifuda[randomNum];

};





// IF CORRECT DISPLAY CORRECT OR ELSE INCORRECT





//FADE IN OUT CONTAINERS
$('#button-start').click(function(e){    
    $('.conA').fadeOut('slow', function(){
        $('.conB').fadeIn('slow');
    });
});




choosePic();

});

//test