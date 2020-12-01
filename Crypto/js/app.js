ScrollOut({
    targets: '.animate-up,.animate-left,.animate-right,.animate-up-slow,.animate-up-slower,.animate-up-fast,.animate-up-faster',
    once:true,
});
$(document).ready(function(){
    // Add down arrow icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
    });
    // Toggle right and down arrow icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    });
});
