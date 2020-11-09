document.getElementById("mobile-menu-list").style.display = "none";
document.getElementById("mobile-menu-close-button").style.display = "none";
function closeMenu(){
    document.getElementById("mobile-menu-list").style.animation = "closeMenu 500ms";
    setTimeout(function(){
        document.getElementById("mobile-menu-list").style.display = "none";
    } , 200 );
    document.getElementById("mobile-menu-close-button").style.display = "none";
}
function closeMenuNoAnimation(){
    document.getElementById("mobile-menu-list").style.display = "none";
    document.getElementById("mobile-menu-close-button").style.display = "none";
}
function openMenu(){
    document.getElementById("mobile-menu-list").style.animation = "openMenu 500ms";
    setTimeout(function(){
        document.getElementById("mobile-menu-list").style.display = "block";
    } , 200 );
    document.getElementById("mobile-menu-close-button").style.display = "block";
}
$(window).on('resize', function(){
    closeMenuNoAnimation();
});