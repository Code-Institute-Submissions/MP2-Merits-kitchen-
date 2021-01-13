function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 55.64452,
      lng: 12.63405,
    },
  });

  var labels = "A";

  var locations = [{ lat: 55.64452, lng: 12.63405 }];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

console.log("hello!");

(function ($) {
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    mouseDrag: false,
  });
})(jQuery);

$(function () {
  $("#accordion").accordion();
});
