$(document).ready(function() {
	$('.item').hover(function() {
		$(this).css("cursor", "pointer");
		$(this).addClass('item-transform');
    }, function() {
        $(this).removeClass('item-transform');
    });

	$("#login").click(function() {
		$("#modal-container").show();
	})
	$(".footer").click(function() {
		$("#modal-container").hide();
	})
	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	})
	$("#more, #2013, #2012, #2011, #2010").click(function() {
		$("#modal-container-2").show();
	})
	$(".footer").click(function() {
		$("#modal-container-2").hide();
	})
	$("#modal-overlay-2").click(function() {
		$("#modal-container-2").hide();		
	})

	$("#sp15").click(function() {
		$("#sp15pic-container").show();
		$(".sp15pic").show();
		$("#fa14pic-container").css('display', 'None');	
		$(".fa14pic").css('display', 'None');
		$("#sp14pic-container").css('display', 'None');	
		$(".sp14pic").css('display', 'None');
	});

	$("#fa14").click(function() {
		$("#fa14pic-container").show();
		$(".fa14pic").show();
		$("#sp15pic-container").css('display', 'None');		
		$(".sp15pic").css('display', 'None');
		$("#sp14pic-container").css('display', 'None');	
		$(".sp14pic").css('display', 'None');
	});
	$("#sp14").click(function() {
		$("#sp14pic-container").show();
		$(".sp14pic").show();
		$("#sp15pic-container").css('display', 'None');		
		$(".sp15pic").css('display', 'None');
		$("#fa14pic-container").css('display', 'None');	
		$(".fa14pic").css('display', 'None');
	});	
});

