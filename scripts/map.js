// source/scripts/map.js
var ymaps;
var mapWrapper = document.querySelector(".page__map");
var mapImage = document.querySelector(".contacts__map-wrapper");
var center = [59.91337456420126, 30.331390999999872];
var pinSize = [15, 23];
var pinOffset = [-10, -25];
var zoom = 14;
mapWrapper.classList.remove("map--no-js");
mapImage.classList.remove("contacts__map-wrapper--no-js");
function init() {
  const map = new ymaps.Map("map", {
    center,
    zoom
  });
  const placemark = new ymaps.Placemark(center, {}, {
    iconLayout: "default#image",
    iconImageHref: "images/icons/stack.svg#map-pin",
    iconImageSize: pinSize,
    iconImageOffset: pinOffset
  });
  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
  map.geoObjects.add(placemark);
}
ymaps.ready(init);
//# sourceMappingURL=map.js.map
