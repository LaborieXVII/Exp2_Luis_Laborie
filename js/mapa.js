let map = L.map('map').setView([-33.51119665511753, -70.75247074421401], 35);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

let marker = L.marker([-33.51119665511753, -70.75247074421401]).addTo(map);
