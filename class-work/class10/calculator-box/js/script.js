var total = 0;



// click on #a10
//ad 10 to 'total;
// output updated 'total' to #out
// if I click on #a10 than add 10 and update the total

$('#a10').click(add10);
function add10() {
	total = total + 10

	$('#out').html(total); 
}

$('#a20').click(add20);
function add20() {
	total = total + 20

	$('#out').html(total); 
} 

$('#a30').click(add30);
function add30() {
	total = total + 30

	$('#out').html(total); 
}

$('#red').click(red);
function red() {
	$('#out').css('background','red');
}

$('#blue').click(blue);
function blue() {
	$('#out').css('background','blue');
}

$('#n10').click(minus10);
function minus10() {
	total = total - 10

	$('#out').html(total); 
}

$('#n20').click(minus20);
function minus20() {
	total = total - 20

	$('#out').html(total); 
}

$('#n30').click(minus30);
function minus30() {
	total = total - 30

	$('#out').html(total); 
}



$('#out').click(out);
function out() {
	total = 0

	$('#out').html(total);
	$('#out').css('background','white');
}
	








