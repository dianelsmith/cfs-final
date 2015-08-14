/*
Problem 3:

The html contains a left div, and a right div.
When the user clicks the ball, it should go to the other div

Suggestion: Maybe use jQuery.delegate?

If you're stumped, try getting something to log to the console
if the ball is clicked, THEN worry about moving the ball div.
*/

var ball;

$(document).ready(function () {

    $('body').on('click', '.ball', function (event) {
        event.preventDefault();

        if ($(this).parent().attr('id') === 'left') {
            // move the ball to the right div
            $('#left').empty();
            $('#right').append(ball.clone(true));
        } else {
            // move the ball to the left div
            $('#right').empty();
            $('#left').append(ball.clone(true));
        }
    });

    ball = $('.ball').detach();
    $('#left').append(ball.clone(true));

});