$(document).ready(function(){
	
	$("#menu").click(function(){
		if($(window).width() < 875){
			$("#navbtns").toggle()
		}
	});
	
	
	$(window).resize(function() {onResize();});
	setTimeout( function() { onResize(); },25);
});

function onResize() {
	if($(window).width() >= 875){
			$("#navbtns").css("display", "");
	}
}