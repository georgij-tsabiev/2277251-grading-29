var e,r=document.querySelector(".page__map"),c=document.querySelector(".contacts__map-wrapper"),t=[59.91337456420126,30.331390999999872],a=[15,23],s=[-10,-25],m=14;r.classList.remove("map--no-js");c.classList.remove("contacts__map-wrapper--no-js");function l(){let o=new e.Map("map",{center:t,zoom:m}),n=new e.Placemark(t,{},{iconLayout:"default#image",iconImageHref:"images/icons/stack.svg#map-pin",iconImageSize:a,iconImageOffset:s});o.controls.remove("geolocationControl"),o.controls.remove("searchControl"),o.controls.remove("trafficControl"),o.controls.remove("typeSelector"),o.controls.remove("fullscreenControl"),o.controls.remove("zoomControl"),o.controls.remove("rulerControl"),o.geoObjects.add(n)}e.ready(l);
