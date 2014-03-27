$(function() {
    $(window).resize(function() {
        verticalCenter();
    });
    verticalCenter();
});

function verticalCenter() {
    var caption = $('.carousel-caption')
    var bottom = ($('.carousel').height() - caption.height()) / 2;
    caption.css({ 'bottom' : bottom });
}
