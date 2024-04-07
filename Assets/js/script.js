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
    }, 500); // Adjust duration as needed
  });

