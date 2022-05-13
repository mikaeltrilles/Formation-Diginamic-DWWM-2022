//* Coordonnées GPS de la ville du Siège ici Montpellier.
var startCity = [43.6112422, 3.8767337];

//* Création de l'objet carte à afficher dans le DOM.
//* Charger la carte Leaflet après le chargement de la fenêtre. Mettre Script en fin de page.

var map = L.map('map').setView(startCity, 9);

var tileStreets = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

//* Création d'un marqueur.
var startMarker = L.marker(startCity).addTo(map);
startMarker.bindPopup("<img src='./img/logo-site.webp' height=80px width=80px></img><br>Siège Social.").openPopup();





