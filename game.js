function player1() {
  $('#player1_race .active').next().addClass( "active" );
  $('#player1_race .active').first().removeClass( "active" );

  setTimeout(function() {
    if ($("#win1").hasClass('active')) {
      alert("Hello! Player 1 wins!!");
    };
  }, 200);

}

function player2() {
  $('#player2_race .active').next().addClass( "active" );
  $('#player2_race .active').first().removeClass( "active" );

  setTimeout(function() {
    if ($("#win2").hasClass('active')) {
      alert("Hello! Player 2 wins!!");
    };
  }, 200);
}

$("#myButton1").on("click", function(event) {
 player1()
});



$("#myButton2").on("click", function(event) {
 player2()
});



$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Display the ASCII code of the key pressed
    console.log(event.keyCode);
    if (event.keyCode === 81) {
      player1();
    } else if (event.keyCode === 39) {
        player2();
      };
  });

});




$("#Reload").on("click", function(event) {
 location.reload();
});
