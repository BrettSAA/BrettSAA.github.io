// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $('#first').click(updateFirst);
// function updateFirst(){
// 	$('#bigimage').attr('src','img/1.jpg')
// }

// $('#second').click(updateSecond);
// function updateSecond(){
// 	$('#bigimage').attr('src','img/2.jpg')
// }	


// $('#third').click(updateThird);
// function updateThird(){
// 	$('#bigimage').attr('src','img/3.jpg')
// }	


// $('#fourth').click(updateFourth);
// function updateFourth(){
// 	$('#bigimage').attr('src','img/4.jpg')
// }

$('.thumb').click(changeImage);

function changeImage () {
	console.log(this)
	var newImage = $(this).attr('src');

	$('#bigimage').attr('src', newImage);
}




