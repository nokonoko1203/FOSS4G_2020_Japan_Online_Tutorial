const addMarker = (coordinates) => {
  new mapboxgl.Marker({
    color: '#005773',
  }).setLngLat(coordinates).addTo(map);
};

pointGeojson.features.forEach(function(feature){
  let coordinates = feature.geometry.coordinates;
  addMarker(coordinates);
})