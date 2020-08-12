const mapboxgl = require("mapbox-gl");
const markerFactory = require('./marker');
mapboxgl.accessToken = "pk.eyJ1IjoiZmlsa2pqIiwiYSI6ImNrZHFuZ3l1MjBvNXYycnA4eG5teXlxd3QifQ.7qU7Kt75Q6ciEXISNCNsRw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = markerFactory([-74.009151, 40.705086],'hotel');
marker.addTo(map);



// markMaker(,markerDomEl);
// markMaker([-87.641, 41.895]);




