ymaps.ready(init);
function init(){
var map = new ymaps.Map("map", {
        center: [55.740684, 37.618174],
        zoom: 15
    });
map.behaviors.disable('scrollZoom');
placemark = new ymaps.Placemark([55.740684, 37.618174], {
  hintContent: 'Твой Дом',
  balloonContentHeader: 'Твой Дом',
  balloonContentBody: 'Москва, Старомонетный переулок, 10'
});
map.geoObjects.add(placemark);
}

$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

$("#btn-top").click(function() {
    $('#menu-close').click();
    window.location='#top';
});

$("#btn-go-main").click(function() {
    $('#menu-close').click();
    window.location='#top';
});

$("#btn-about").click(function() {
    $('#menu-close').click();
    window.location='#services';
});

$("#btn-services").click(function() {
    $('#menu-close').click();
    window.location='#services';
});

$("#btn-contact").click(function() {
    $('#menu-close').click();
    window.location='#contact';
});

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
