const deleteTask = function(id) {
    $('<form/>', { action: '/delete/' + id, method: 'POST' })
        .appendTo(document.body)
        .submit();
}

$(document).ready(function() {
    const dateTimeFormat = 'YYYY/MM/DD HH:mm'
    $('#deadline').daterangepicker({
		singleDatePicker : true,
		autoUpdateInput : false,
		showDropdowns : true,
		startDate : moment(),
		locale : {
			format : dateTimeFormat
		},
		timePicker : true,
		timePicker24Hour : true,
		timePickerSeconds : false,
	}, function(start, end, label) {
		$('#deadline').val(start.format(dateTimeFormat))
	});

    $('#deadline').attr('placeholder', dateTimeFormat)
})