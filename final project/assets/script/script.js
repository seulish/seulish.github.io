$(document).ready(function() {
	$("#login").click(function() {
		$("#modal-container").show();
	})
	$(".footer").click(function() {
		$("#modal-container").hide();
	})
	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	})
	
});