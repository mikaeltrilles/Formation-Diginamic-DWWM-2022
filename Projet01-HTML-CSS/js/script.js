
// création de la map
var map = L.map('map').setView([43.610769, 3.876716], 12);

var iconParticulier = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/F9B105/marker.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var iconPro = L.icon({
    iconUrl: 'https://img.icons8.com/ios-filled/50/094F71/marker.png',

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
var iconBorn = L.icon({iconUrl: "https://www.datavis.fr/maps/leaflet-control/map-icons/automotive.png",

    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [28, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
// création du calque image
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 25 })
    .addTo(map);

    
    // ajout d'un marqueur
    var marker = L.marker([43.612601, 3.807484], {icon: iconPro}).addTo(map);
    marker.bindPopup("<a href='ombriereparking1.html'><img src='./img/ombriereparking1.webp'/></a><h1> Parking société Renault</h1><p> Ombrière en acier sur le parking 330 places couvertes </p><p> Production 100 kWc </p><p> 2021 </p>").openPopup();

    var marker = L.marker([43.628060, 3.816461], {icon : iconParticulier}).addTo(map);
    marker.bindPopup("<a href='ombriereparticulier1.html'><img src='./img/ombriereparticulier1.webp'/></a><h1>Famille Dupont</h1><p> Ombrière bois pour deux voitures </p><p> Production 10 kWc </p><p> 2021 </p>").openPopup();

    var marker = L.marker([43.623101, 3.855911], {icon : iconParticulier} ).addTo(map);
    marker.bindPopup("<a href='ombriereparticulier2.html'><img src='./img/ombriereparticulier2.webp'/></a><h1>Famille Duval</h1><p> Ombrière bois pour une voiture </p><p> Production 9 kWc </p><p> 2022 </p>").openPopup();

    var marker = L.marker([43.634305, 3.913759], {icon : iconParticulier} ).addTo(map);
    marker.bindPopup("<a href='ombrieresyndic1.html'><img src='./img/ombrieresyndic1.webp'/><h1>Syndic du hameau</h1><p> Ombrière acier pour 30 places couvertes</p><p> Production 25 kWc </p><p> 2020 </p></a>").openPopup();

    var marker = L.marker([43.633191, 3.938457], {icon: iconPro}).addTo(map);
    marker.bindPopup("<a href='ombriereecole.html'><img src='./img/ombriereecole.webp'/><h1> Ecole des Bruyères</h1><p> Ombrière alu pour 20 places de parking </p><p> Production 30 kWc </p><p> 2021 </p></a>").openPopup();
    
    var marker = L.marker([43.588404, 3.855625], {icon : iconPro} ).addTo(map);
    marker.bindPopup("<a href='ombriereintermarche.html'><img src='./img/ombriereintermarche.webp'/><h1> Intermarché Croix D'Argent</h1><p> Ombrière en acier sur le parking 400 places couvertes </p><p> Production 350 kWc </p><p> 2020 </p></a>").openPopup();
    
    var marker = L.marker([43.617445, 3.866309], {icon : iconBorn} ).addTo(map);
    marker.bindPopup("Borne de recharge rapide").openPopup();

    var marker = L.marker([43.609803, 3.866917], {icon : iconBorn} ).addTo(map);
    marker.bindPopup("Borne de recharge rapide").openPopup();

    var marker = L.marker([43.613485, 3.880242], {icon : iconBorn} ).addTo(map);
    marker.bindPopup("Borne de recharge rapide").openPopup();

    var marker = L.marker([43.619776, 3.885649], {icon : iconBorn} ).addTo(map);
    marker.bindPopup("Borne de recharge rapide").openPopup();




    const imgs = document.getElementById('imgs')
    const gaucheBtn = document.getElementById('gauche')
    const droiteBtn = document.getElementById('droite')

    const img = document.querySelectorAll('#imgs img')

    let idx = 0

    let interval = setInterval(run, 2000)

    function run() {
        idx+++
        changeImage()
    }

    function changeImage() {
        if(idx > img.length - 1) {
            idx = 0
        } else if(idx < 0) {
            idx = img.length - 1
        }
        imgs.style.transform = `translateX($)`
    }