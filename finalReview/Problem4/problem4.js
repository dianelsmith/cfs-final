/*
Problem 4: Functions

Write two functions, getUserInput and setOutput.

Do NOT modify the document ready function.
*/

$(document).ready(function() {
  
    $('#add').on('click', function() {
        var one = parseInt(getUserInput('.input1'));
        var two = parseInt(getUserInput('.input2'));

        var output = one + two;

        setOutput('.output1', one);
        setOutput('.output2', two);
        setOutput('#output', output);
    });
});

/*
Write the getUserInput function here

Its should only accept 1 parameter, a css selector for the input element
It should return the value in the input field
*/

function getUserInput(selector) {
    /// <param name="selector" type="string">The css selector</param>
    return $(selector).val();
}


/*
Write the setOutput function here

It should accept a two parameters, the css selector and the text used to set
*/

function setOutput(selector, output) {
    /// <param name="selector" type="string">The css selector</param>
    /// <param name="output" type="var">The text to output</param>
    return $(selector).text(output);
}
