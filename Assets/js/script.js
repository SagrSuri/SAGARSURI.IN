// script.js

window.onload = function() {
    // Get elements to animate
    var elementsToAnimate = document.querySelectorAll('.animate');

    // Add the "animated" class to each element
    elementsToAnimate.forEach(function(element) {
        element.classList.add('animated');
    });
};
