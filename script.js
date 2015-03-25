$(document).ready(function(){
	$('li').mouseover(function(){
		$(this).css("text-decoration","underline");
	});
	$('li').mouseleave(function(){
		$(this).css("text-decoration","none");
	});
})