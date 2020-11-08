document.getElementById("sidebar-menu").style.display = "none";
document.getElementById("sidebar-menu-close-button").style.display = "none";
function closeMenu(){
    document.getElementById("sidebar-menu").style.animation = "closeMenu 500ms";
    setTimeout(function(){
        document.getElementById("sidebar-menu").style.display = "none";
    } , 200 );
    document.getElementById("sidebar-menu-close-button").style.display = "none";
}
function closeMenuNoAnimation(){
    document.getElementById("sidebar-menu").style.display = "none";
    document.getElementById("sidebar-menu-close-button").style.display = "none";
}
function openMenu(){
    document.getElementById("sidebar-menu").style.animation = "openMenu 500ms";
    setTimeout(function(){
        document.getElementById("sidebar-menu").style.display = "block";
    } , 200 );
    document.getElementById("sidebar-menu-close-button").style.display = "block";
}
$(window).on('resize', function(){
    closeMenuNoAnimation();
});