// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var myHeader = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = myHeader.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    myHeader.classList.add("sticky");
  } else {
    myHeader.classList.remove("sticky");
  }
}