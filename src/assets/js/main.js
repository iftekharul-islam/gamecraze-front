// navbar scroll color change
$(window).scroll(function() {
    $('.gamehub-menu').toggleClass('gamehub-menu-active', $(this).scrollTop() > 50);
});


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 13 || (charCode >= 48 && charCode <= 57)) {
        return true;
    }
    return false;
}

$(document).ready(function() {
    $(".x-close").click(function() {
        $(".promo-notification").remove();
    });
});
