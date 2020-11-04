map.on('load', function() {
  map.addSource('sample_geojson', {
    type: 'geojson',
    data: sampleGeojson,
  });
  map.addLayer({
    'id': 'sample_geojson',
    'type': 'circle',
    'source': 'sample_geojson',
    'layout': {},
    'paint': {
      'circle-color': '#a40000',
      'circle-radius': 50,
      'circle-opacity': 1.0,
    },
  });
});