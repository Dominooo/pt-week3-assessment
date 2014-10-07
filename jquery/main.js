$(document).ready(function(){
  $('.random-button').click(function(){
    var random_integer = Math.floor(Math.random()*4);
    console.log(random_integer);
    if (random_integer === 0){
      $('.technicolor').css('background-color', 'red');
    }
    if (random_integer === 1){
      $('.technicolor').css('background-color', 'blue');
    }
    if (random_integer === 2){
      $('.technicolor').css('background-color', 'green');
    }
    if (random_integer === 3){
      $('.technicolor').css('background-color', 'yellow');
    }
  });
});
