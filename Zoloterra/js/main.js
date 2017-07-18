// Headroom.js
// https://github.com/WickyNilliams/headroom.js
var myElement = document.querySelector("header");

var headroom  = new Headroom(myElement, {
  "offset": 220,
  "tolerance": {
    up: 0,
    down: 0
  },
  "classes": {
    "initial": "header--fixed",
    "pinned": "slideDown",
    "unpinned": "slideUp",
    "top": "top",
    "notTop" : "not-top",
  }
});

headroom.init();

// When the page is at the top, remove the slideDown class.
window.addEventListener('scroll', function() {
  if (window.pageYOffset === 0) {
    myElement.classList.remove('slideDown')
  }
})
