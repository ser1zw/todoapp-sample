const deleteTask = function(id) {
    $('<form/>', { action: '/delete/' + id, method: 'POST' })
        .appendTo(document.body)
        .submit();
}
