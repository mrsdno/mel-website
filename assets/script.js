// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  headerSticks();
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerSticks() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Get the name
var artistName = document.getElementById("aritstName");
var artistPicture = document.getElementById("artistPicture");

// Make name in jumbotron disappear
window.addEventListener("scroll", () => {
  var y = window.scrollY;
  if (y >= 300) {
    artistName.classList.add("disappear");
    artistPicture.classList.add("disappear");
    return;
  } else {
    artistName.classList.remove("disappear");
    artistPicture.classList.remove("disappear");
  }
});

$(document).on("ready", function () {
  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 0,
    // speed: 10000,
    // cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
