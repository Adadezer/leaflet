let map = L.map('map').setView([-23.6687, -46.4614], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

var LeafIcon = L.Icon.extend({
  options: {iconSize: [40, 40]}
});

var bus111 = new LeafIcon({iconUrl: './img/bus111.png'});
var bus222 = new LeafIcon({iconUrl: './img/bus222.png'});
var bus333 = new LeafIcon({iconUrl: './img/bus333.png'});

L.marker([-23.667550938424426, -46.46092695255489], {icon: bus111}).addTo(map).bindPopup("{'ID':1, 'Numero':'111', 'Localizacao':'-23.667550938424426, -46.46092695255489'}");

L.marker([-23.693262039779096, -46.46068095745037], {icon: bus222}).addTo(map).bindPopup("{'ID':2, 'Numero':'222', 'Localizacao':'-23.693262039779096, -46.46068095745037'}");

L.marker([-23.652727341518407, -46.44099883645296], {icon: bus333}).addTo(map).bindPopup("{'ID':3, 'Numero':'333', 'Localizacao':'-23.652727341518407, -46.44099883645296'}");