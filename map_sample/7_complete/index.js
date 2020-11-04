const mapStyle = {
  version: 8,
  sources: {
    GSI: {
      type: 'raster',
      // tiles: [''],
      // tiles: ['https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'],
      // tiles: ['https://api.maptiler.com/maps/jp-mierune-streets/{z}/{x}/{y}.png?key=hogehoge'],
      tileSize: 256,
      // attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>',
      attribution: '<a href="https://maptiler.jp/" target="_blank">&copy; MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    },
  },
  layers: [
    {
      id: 'GSI',
      type: 'raster',
      source: 'GSI',
      minzoom: 0,
      maxzoom: 18,
    },
  ],
};

const map = new mapboxgl.Map({
  container: 'map',
  // style: mapStyle,
  // style: 'https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=hogehoge',
  style: 'https://api.maptiler.com/maps/845376c8-5697-427b-bc90-b94fc1cd3648/style.json?key=hogehoge',
  center: [141.350755, 43.068661],
  zoom: 13,
});

map.addControl(new mapboxgl.NavigationControl(), 'top-right');

const sampleGeojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          141.350755,
          43.068661
        ]
      }
    }
  ]
}

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

const pointGeojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          141.350755,
          43.068661
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          141.34670734405518,
          43.070768810315336
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          141.35790824890137,
          43.06526661706656
        ]
      }
    }
  ]
}

const addMarker = (coordinates) => {
  new mapboxgl.Marker({
    color: '#005773',
  }).setLngLat(coordinates).addTo(map);
};

pointGeojson.features.forEach(function(feature){
  let coordinates = feature.geometry.coordinates;
  addMarker(coordinates);
})