$(function () {
	$('#rootwizard').bootstrapWizard({
		onTabShow: function (tab, navigation, index) {
			var $total = navigation.find('li').length;
			var $current = index + 1;
			var $percent = ($current / $total) * 100;
			$('#rootwizard .progressbar').css({
				width: $percent + '%'
			});
		}
	});	
	$('#rootwizard .finish').click(function () {
	    $('#success-modal').modal();
	});

	// add remove functionality
	$(document).on('click', '.multipleInputsWrapper .cloneComponent', function(){
		$(this).parents(".elementWrapper").clone().appendTo( ".multipleInputsWrapper" );
		var getOffsetTop = $(this).parents(".elementWrapper").next().offset().top - 200;
		$("html, body").animate({ scrollTop: getOffsetTop }, 600);
	})
	$(document).on('click', '.multipleInputsWrapper .removeComponent', function(){
		var getLength = $(this).parents(".multipleInputsWrapper").find(".elementWrapper").length
		if(getLength > 1){
			$(this).parents(".elementWrapper").remove();
			var getSiblingOffset = $(this).parents(".elementWrapper").next().offset().top + 200;
			$("html, body").animate({ scrollTop: getSiblingOffset }, 600);
		}
	})

	// add remove functionality ends

	// inherit add remove functionality
	$(document).on('click', '.inheritAddRemoveWrap .cloneBtn', function(){
		$(this).parents(".contentWrapper").clone().appendTo( ".inheritAddRemoveWrap" );
	})
	$(document).on('click', '.inheritAddRemoveWrap .removeBtn', function(){
		var getLength = $(this).parents(".inheritAddRemoveWrap").find(".contentWrapper").length
		if(getLength > 1){
			$(this).parents(".contentWrapper").remove();
		}
	})

	// inherit add remove functionality ends
	// timeline add remove functionality
	$(document).on('click', '.timeLineWrapper .addTimeline', function(){
		$(this).parents(".timeline-label").siblings(".timelineContent").find(".timeline:first-child").clone().appendTo( ".timelineContent" );
	})
	$(document).on('click', '.timeLineWrapper .removeTimeline', function(){
		var getLength = $(this).parents(".timeline-label").siblings(".timelineContent").find(".timeline").length
		if(getLength > 1){
			$(this).parents(".timeline-label").siblings(".timelineContent").find(".timeline:last-child").remove();
		}
	})
	// timeline add remove functionality ends
	// Days Schedule add remove functionality
	$(document).on('click', '.timeLineWrapper .addDaySchedule', function(){
		$(this).parents(".timeline-item").clone().appendTo( ".timeline" );
	})
	$(document).on('click', '.timeLineWrapper .removeDaySchedule', function(){
		var getLength = $(this).parents(".timeline").find(".timeline-item").length
		if(getLength > 1){
			$(this).parents(".timeline-item").remove();
		}
	})
	// Days Schedule add remove functionality ends
	$('.modal').modal({
	    backdrop: 'static',
	    keyboard: false
	})
});