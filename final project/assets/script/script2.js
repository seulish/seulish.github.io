$(document).ready(function(){
	$('.item').hover(function() {
		$(this).css("cursor", "pointer");
		$(this).addClass('item-transform');
    }, function() {
        $(this).removeClass('item-transform');
    });
});

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

$(document).ready(function () {
	$("#sp15").click(function() {
		$("#sp15pic-container").show();
		$(".sp15pic").show();
		$("#fa14pic-container").css('display', 'None');	
		$(".fa14pic").css('display', 'None');
	})
})

$(document).ready(function () {
	$("#fa14").click(function() {
		$("#fa14pic-container").show();
		$(".fa14pic").show();
		$("#sp15pic-container").css('display', 'None');		
		$(".sp15pic").css('display', 'None');
	})

})
// $(document).ready(function() {
// 	$(".nav-caption").hover(function() {
// 		if ($('.hover').hasClass('hover-active')) {
// 			$('.hover').removeClass('hover-active');
// 			setTimeout(function(){
// 				$('.hover').hide();
// 			}, 200);
// 		} else {
// 			$('.hover').show();
// 			setTimeout(function(){
// 				$('.hover').addClass('hover-active');
// 			}, 0);
// 		}
// 	});
// });


// $(document).ready(function() {
// 	$(".nav-caption").hover(function() {
// 		$('.hover').show();
// 		$('.hover').addClass('hover-active');
// 	});
// });
// $(document).ready(function() {
// 	$('<img />'), {
// 		.attr('src', '../final project/assets/img/bb')
//    		.appendTo('#mylist')
// 	}  	
// }

// var $container = $('#photo-container');
// // initialize
// $container.masonry({
//   columnWidth: 200,
//   itemSelector: '.item'
// });

// var msnry = $container.data('masonry');