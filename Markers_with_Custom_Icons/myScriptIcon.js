var map = L.map('map').setView([-23.667550938424426, -46.46092695255489 ], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

var greenIcon = L.icon({
  iconUrl: './img/bus111.png',
  // shadowUrl: './img/leaf-shadow.png',

  iconSize:     [55, 55], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  // iconAnchor:   [-23.667550938424426, -46.46092695255489], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([-23.667550938424426, -46.46092695255489], {icon: greenIcon}).addTo(map);