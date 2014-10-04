$(document).ready(function(){

  $('.random-button').click(function(){
    var random_integer = Math.floor(Math.random()*5);
    console.log(random_integer);
    
    $('.technicolor').css('background-color', 'red');
  });

});
