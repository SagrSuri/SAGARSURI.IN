// script.js

window.onload = function() {
    // Get elements to animate
    var elementsToAnimate = document.querySelectorAll('.animate');

    // Add the "animated" class to each element
    elementsToAnimate.forEach(function(element) {
        element.classList.add('animated');
    });
};


// written by me

// Function to generate a random color
function randomColor() {
    // Generating random values for RGB (red, green, blue) channels
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    
    // Constructing the hexadecimal color code
    const colorCode = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
    
    return colorCode;
}

// Adding event listener for click on the button
document.getElementById("changeColorBtn").addEventListener("click", function() {
    // Change the background color of the button to a random color
    this.style.backgroundColor = randomColor();
});

// for cursor

document.addEventListener('click', function(event) {
    var point = document.createElement('div');
    point.classList.add('point');
    point.style.left = event.clientX + 'px';
    point.style.top = event.clientY + 'px';
    document.body.appendChild(point);

    // Remove the point after the animation
    setTimeout(function() {
      point.style.transform = 'scale(2)';
      setTimeout(function() {
        point.style.opacity = '0';
        setTimeout(function() {
          point.remove();
        }, 300);
      }, 300);
    }, 10);
  });