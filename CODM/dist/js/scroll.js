// Vertical Scroll
window.onscroll = function() {buttonScroll()};
var button = document.getElementById("footer-up-button");
var header = document.getElementById('main-header');
var sticky = header.offsetTop;
function buttonScroll() {
    if (window.pageYOffset > sticky) {
        button.classList.add("sticky-button");
    } else {
        button.classList.remove("sticky-button");
    }
}
function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Horizontal Scroll

var next = document.getElementById("next");
var previous = document.getElementById("previous");
next.onclick = function(){
    var navwidth = $("#hardcore-games-ul-list");
        navwidth.scrollLeft(navwidth.scrollLeft() + 300);
};
previous.onclick = function(){
    var navwidth = $("#hardcore-games-ul-list");
        navwidth.scrollLeft(navwidth.scrollLeft() - 300);
}