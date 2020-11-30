window.onscroll = function() {scroll()};
var header = document.getElementById("headerElement");
var btn = document.getElementById("toTopBtn");
var sticky = header.offsetTop;
function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        btn.classList.add("sticky-btn");
    } else {
        header.classList.remove("sticky");
        btn.classList.remove("sticky-btn");
    }
}