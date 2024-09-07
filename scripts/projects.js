$(document).ready( function() {
	
	setIframeWidths();
	
	initializeEventHandlers();
});

function initializeEventHandlers() {
	$(window).on('resize', (event) => {
		setIframeWidths();
	});
}



function setIframeWidths() {
	let width = $('.iframe_container').width();
	$('.iframe_container').height(width*3/4);
	$('.iframe_container iframe').height(width*3/4).css('margin', '0px');
}