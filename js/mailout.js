$(document).ready(function() {

    $('#myContactForm').submit(function(event) {

        $.ajax({
            type        : 'POST',
            url         : 'https://geometrics.io/mailout',
            data        : $('#myContactForm').serialize(),
            dataType    : 'json',
            encode      : true
        })
        .done(function(data) {
            console.log(data);
            $('#contactThankYou').show();
            $('#myContactForm').hide();

        })
         .fail(function() {
            alert( "error" );
         });

        event.preventDefault();
    });

});
