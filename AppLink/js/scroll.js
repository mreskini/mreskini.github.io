window.onscroll = function() {buttonScroll()};
var button = document.getElementById("call-to-top");
var header = document.getElementById("header");
var sticky = header.offsetTop;
let headerAnchors = document.getElementsByClassName('header-anchor');

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function buttonScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        button.classList.add("button-sticky");
        for (let i = 0; i < headerAnchors.length; i++) {
            const element = headerAnchors[i];
            let textColor = "#576070";
            element.style.color = textColor;
            document.getElementById("menu-icon-i").style.color = textColor;
        }
    } else {
        button.classList.remove("button-sticky");
        for (let i = 0; i < headerAnchors.length; i++) {
            const element = headerAnchors[i];
            let textColor = "white";
            element.style.color = textColor;
            document.getElementById("menu-icon-i").style.color = textColor;
        }
        header.classList.remove("sticky");
    }
}