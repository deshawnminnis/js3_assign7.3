// Script example of using a function to increment a value using closure //

function counter() {
    var count = 0;
    return function() {
        return ++count;
    };

};
var incrementCounter = counter();

function onButtonClick() {
    var countClicked = incrementCounter();
    document.getElementById('clickcount').innerHTML = "You clicked me " + countClicked + " time(s) ..!";
}