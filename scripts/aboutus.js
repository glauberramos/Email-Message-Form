$().ready(function() {
	$("#about-us-form").validate();
	
	$(".input-field input").focus(function () {
		$(this).css("background-image","url('text-background.png')");
	});
	
	$(".input-field input").focusout(function() {
		$(this).css("background-image","");
	});
	
	$(".input-field textarea").focus(function () {
	$(this).css("background-image","url('text-background.png')");
	});
	
	$(".input-field textarea").focusout(function() {
		$(this).css("background-image","");
	});
});