$('#burger').click(showMenu);

function showMenu () {
	$('#mobile-nav').slideToggle(300)
}

$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())

    if ($(window).width() >= 950) {
      $('#mobile-nav').hide();
    }
	})
})

$(document).ready(function(){
  $('.button2').click(function(){
    $('#modal').fadeToggle( "slow" );
    
  });
    
});







