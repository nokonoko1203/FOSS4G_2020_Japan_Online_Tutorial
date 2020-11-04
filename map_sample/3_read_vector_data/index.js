const mapStyle = {
  version: 8,
  sources: {
    GSI: {
      type: 'raster',
      // tiles: ['https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png'],
      // tiles: ['https://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png'],
      tiles: ['https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg'],
      tileSize: 256,
      attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>',
    },
  },
  layers: [
    {
      id: 'GSI',
      type: 'raster',
      source: 'GSI',
      minzoom: 0,
      // maxzoom: 18,
      maxzoom: 23,
    },
  ],
};

const map = new mapboxgl.Map({
  container: 'map',
  style: mapStyle,
  center: [141.350755, 43.068661],
  zoom: 13,
});

map.addControl(new mapboxgl.NavigationControl(), 'top-right');