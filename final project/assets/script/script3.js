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
	$("#more, #sp14, #2013, #2012, #2011, #2010").click(function() {
		$("#modal-container-2").show();
	})
	$(".footer").click(function() {
		$("#modal-container-2").hide();
	})
	$("#modal-overlay-2").click(function() {
		$("#modal-container-2").hide();		
	})

	$("#sp15").click(function() {
		$("#spring-date-container").show();	
		$("#spring-GM-container").show();
		$(".spr15").show();
		$("#fall-GM-container").css('display', 'None');	
		$(".fal14").css('display', 'None');
		$("#fall-date-container").css('display', 'None');	
	});
	$("#fa14").click(function() {
		$("#fall-date-container").show();	
		$("#fall-GM-container").show();
		$(".fal14").show();
		$("#spring-GM-container").css('display', 'None');	
		$(".spr15").css('display', 'None');
		$("#spring-date-container").css('display', 'None');		
	});
	// $("#fa14").click(function() {
	// 	$("#fa14pic-container").show();
	// 	$(".fa14pic").show();
	// 	$("#sp15pic-container").css('display', 'None');		
	// 	$(".sp15pic").css('display', 'None');
	// 	$("#sp14pic-container").css('display', 'None');	
	// 	$(".sp14pic").css('display', 'None');
	// });

	// $("#sp14").click(function() {
	// 	$("#sp14pic-container").show();
	// 	$(".sp14pic").show();
	// 	$("#sp15pic-container").css('display', 'None');		
	// 	$(".sp15pic").css('display', 'None');
	// 	$("#fa14pic-container").css('display', 'None');	
	// 	$(".fa14pic").css('display', 'None');
	// });	
});
