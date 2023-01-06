function t(t,e,o,n){Object.defineProperty(t,e,{get:o,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},r=o.parcelRequire766b;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){s[t]=e},o.parcelRequire766b=r),r.register("27Lyk",(function(e,o){var n,s;t(e.exports,"register",(()=>n),(t=>n=t)),t(e.exports,"resolve",(()=>s),(t=>s=t));var r={};n=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)r[e[o]]=t[e[o]]},s=function(t){var e=r[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r("27Lyk").register(JSON.parse('{"jRPZQ":"index.41f51054.js","lQISy":"symbol-defs.4fee08e3.svg"}'));var i;i=new URL(r("27Lyk").resolve("lQISy"),import.meta.url).toString();const a=document.querySelector(".container"),c=(document.querySelector("map"),document.querySelector(".button"),document.querySelector(".button-1")),l=document.querySelector(".button-2"),d=document.querySelector(".button-3"),h=document.querySelector(".button-5"),u=document.querySelector(".button-6"),m=document.querySelector(".left__search--input"),p=document.querySelector(".left__search--button"),g=document.querySelectorAll("[data-button]"),_=document.querySelector(".left__country"),f=document.querySelector(".left__box"),y=document.querySelector(".right__weather"),b=document.querySelector(".right__information"),w=document.querySelector(".left__logo--icon"),S=document.querySelector(".right__weather--icon"),v=(document.querySelector(".weather-type"),document.querySelector(".right__weather--temperature"));g.forEach((t=>{t.classList.contains("button-1")||t.classList.contains("button-2")||t.classList.contains("button-5")||t.classList.contains("button-6")||t.addEventListener("click",(function(){t.classList.toggle("hidden-button")}))})),w.addEventListener("click",(function(t){window.open("https://www.github.com/Sls0n/mapsi","_blank")}));new class{map;marker;searchValue;constructor(){this._getPosition(),p.addEventListener("click",this._getSearchValue.bind(this)),m.addEventListener("keydown",this._getSearchValueOnEnter.bind(this)),h.addEventListener("click",this._toggleDefaultMode.bind(this)),u.addEventListener("click",this._toggleHyperMode.bind(this)),c.addEventListener("click",this._toggleDefaultView.bind(this)),l.addEventListener("click",this._toggleAerialView.bind(this)),d.addEventListener("click",this._toggleLiveWeather.bind(this)),_.addEventListener("click",this._flyToMarker.bind(this))}_getPosition(){navigator.geolocation.getCurrentPosition(function(t){const e=t.coords.latitude,o=t.coords.longitude;this.map=L.map("map",{center:[e,o],zoom:16,inertia:!0,inertiaDeceleration:2e3,minZoom:2}),this.map.setMaxBounds([[-180,-360],[180,360]]),this._mapTemplate(),this._addMarker(e,o,!1),this.map.on("click",function(t){const e=t.latlng.lat,o=t.latlng.lng;this._addMarker(e,o),this._locationDetails(e,o)}.bind(this))}.bind(this),(function(t){const e=`${t.message}! Allow location to continue`;alert(e),console.error(t)}))}_mapTemplate(){const t=this.map._layers;for(const e in t)t[e]._url&&this.map.removeLayer(t[e]);c.classList.contains("hidden-button")&&L.tileLayer("https://{s}.tile.openstreetmap.jp/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map),l.classList.contains("hidden-button")&&L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"}).addTo(this.map),this._addMarker(this.map.getCenter().lat,this.map.getCenter().lng,!1)}_addMarker(t,e,o=!0){this.marker&&this.map.removeLayer(this.marker),this.marker=L.marker([t,e]).addTo(this.map),o&&this.map.flyTo([t,e]),this._weatherDetails(t,e),this._locationDetails(t,e)}async _locationSearch(t){try{const e=await fetch(`https://nominatim.openstreetmap.org/search?q=${t}&format=json&limit=1`);if(!e.ok)throw new Error(`Problem with geocoding ${e.status}`);const o=await e.json();if(0===o.length)throw _.innerHTML="Location not found! Please try again with a different search term or check the spelling.",new Error("Location not found!");const n=o[0].lat,s=o[0].lon,r=o[0].importance;"tourism"===o[0].class||"road"===o[0].class||"amenity"===o[0].class?this.map.setZoom(18):r>.85?this.map.setZoom(5):r>.8?this.map.setZoom(8):r>.7?this.map.setZoom(14):r>.6?this.map.setZoom(15):r>.5?this.map.setZoom(16):r>.4?this.map.setZoom(17):this.map.setZoom(18),this._addMarker(n,s)}catch(t){console.error(t)}}async _locationDetails(t,e){try{const o=await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${t}&lon=${e}&zoom=${this.map._zoom}`);if(!o.ok)throw alert(`${o.status} Too many requests`),new Error(`${o.status} Too many requests`);const n=await o.json(),s=`${n.display_name}`;if(_.innerHTML=s,n.error)throw _.innerHTML="Location not found! Please try again with a different search term or check the spelling.",new Error("Location not found!");"tourism"===n.class&&this.map.setZoom(18)}catch(t){console.error(t)}}async _weatherDetails(t,o){try{const n=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${o}&appid=2dad590f3f45d847cf92171de9848662&units=metric`);if(!n.ok)throw S.innerHTML="Weather not found!",S.style.fontSize="1.5rem",v.textContent="ERROR",new Error(`${n.status} ERROR`);const s=await n.json(),r=s.weather[0].main,a=s.main.temp;v.textContent=`${a}°C`;const c=`\n      <svg class="weather-icon">\n         <use xlink:href="${e(i)}#icon-${r}"></use>\n      </svg>\n      <div class="weather-type">${r}</div>`;S.innerHTML=c}catch(t){console.error(t)}}_getSearchValue(){this.searchValue=m.value,this._locationSearch(this.searchValue)}_getSearchValueOnEnter(t){"Enter"===t.key&&(this.searchValue=m.value,this._locationSearch(this.searchValue))}_setElementStatus(t,e){t.style.cursor=e?"pointer":"default",t.style.pointerEvents=e?"auto":"none",t.style.opacity=e?"1":"0.4"}_toggleDefaultMode(){h.classList.add("hidden-button-2"),u.classList.remove("hidden-button-2"),this._setElementStatus(c,!0),this._setElementStatus(l,!0),this._setElementStatus(d,!0),f.style.cursor="auto",this._mapTemplate(),this.map.setZoom(16),this.map.setMinZoom(2)}_toggleHyperMode(){u.classList.add("hidden-button-2"),h.classList.remove("hidden-button-2"),c.classList.remove("hidden-button"),l.classList.add("hidden-button"),d.classList.remove("hidden-button"),b.classList.add("hidden"),y.classList.add("hidden"),this._setElementStatus(c,!1),this._setElementStatus(l,!1),this._setElementStatus(d,!1),f.style.cursor="no-drop",this._mapTemplate(),this.map.setZoom(18),this.map.setMinZoom(15)}_toggleDefaultView(){c.classList.add("hidden-button"),l.classList.remove("hidden-button"),this._mapTemplate()}_toggleAerialView(){l.classList.add("hidden-button"),c.classList.remove("hidden-button"),this._mapTemplate()}_toggleLiveWeather(){y.classList.toggle("hidden")}_flyToMarker(){this.map.flyTo(this.marker.getLatLng(),this.map._zoom,{duration:1})}};if(window.innerWidth<500){const t='\n  <center class="modal">\n    <center class="modal__content">\n      <center class="modal__text">\n        <h2 class="modal__heading">Sorry, This app is not optimized and responsive for mobile devices. You need to use PC in order to use this :(</h2> <br> <br>\n        <p class="modal__paragraph">Please use it on PC or laptop. Or try using desktop mode in the mobile.</p> <br> <br>\n        <a style="color: #333; background-color: #b3acfc; padding: 2rem; text-decoration: none; border-radius: 1rem;" href="https://www.github.com/Sls0n/mapsi">Contribute</a>\n      </center>\n    </center>\n  </center>';a.innerHTML="",a.insertAdjacentHTML("afterbegin",t)}
//# sourceMappingURL=index.41f51054.js.map