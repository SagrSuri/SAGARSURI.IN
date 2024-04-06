// For Dark Mode
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark');
  }
// PAGE LOADING ANIMATION 
document.addEventListener("DOMContentLoaded", function () {
    // Show loading animation when the page starts loading
    document.getElementById("loading").style.display = "block";

    // Hide loading animation after 2-3 seconds (adjust as needed)
    setTimeout(function () {
      document.getElementById("loading").style.display = "none";
      // Show content after loading animation completes
      document.getElementById("content").style.display = "block";
    }, 2000); // Adjust duration as needed
  });


  // ADDING TOGGEL BUTTON OF DARK MODE.
  'use strict'

const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}