// Kalinova — minimal, dependency-free JS. No tracking.
(function () {
  "use strict";
  // Mobile nav toggle (accessible: manages aria-expanded).
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close the menu after following an in-page link (mobile).
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }
  // Current year in the footer.
  var y = document.getElementById("year");
  if (y) { y.textContent = new Date().getFullYear(); }
})();
