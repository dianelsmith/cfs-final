/*
Problem 2:

jQuery has been imported for you.

A client has contacted you because they've written terrible JavaScript.
Repair their code! There are 10 bugs in the code. Make a short description of what you've fixed.

1.  need $(document). rather than document.
2.  document.ready(function() // missing the open and close parentheses after function.
3.  $('nav .ul li') ul is a tag, so no period
4.  css property missing comma after 'list-style-type'
5.  css property missing quotes around square
6.  p is a tag, so no leading period
7.  p is not jQuery-fied, need $('p')
8.  text is a method, so need () -- .text().split
9.  split needs a separator, so split(' ') rather than split( )
10. length is a property of the array, not a method, 
    so removed the () -- length rather than length()

11. class .count within .output is the text to update,
    so changed to $('.output .count') -- logic error
*/

//document.ready(function {
//    $('nav .ul li').css('list-style-type' square);

//    $('.output').text('.p'.text.split( ).length());
//});

$(document).ready(function() {
    $('nav ul li').css('list-style-type', 'square');

    $('.output .count').text($('p').text().split(' ').length);
});

