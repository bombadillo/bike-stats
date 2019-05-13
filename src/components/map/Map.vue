<template>
  <div
    v-if="activity"
    ref="map"
    class="map mt-3 no-margin border-solid border-b border-t border-solid border-grey-light"
  ></div>
</template>

<script>
import L from 'leaflet'
require('polyline-encoded')
import 'leaflet/dist/leaflet.css'

export default {
  name: 'Map',
  props: ['activity'],
  data() {
    return {
      map: null,
      tileLayer: null,
      layers: [],
      encodedRoutes: null
    }
  },
  methods: {
    initMap() {
      this.map = L.map(this.$refs.map).setView([38.63, -90.23], 12)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        detectRetina: true
      }).addTo(this.map)

      var greenLine = L.Polyline.fromEncoded(
        this.activity.map.summary_polyline,
        {
          color: '#2f365f',
          weight: 3,
          opacity: 0.7
        }
      ).addTo(this.map)

      this.map.fitBounds(greenLine.getBounds())
    },
    initLayers() {}
  },
  mounted: function() {
    if (this.activity) {
      this.initMap()
      this.initLayers()
    }
  }
}
</script>

<style scoped>
.map {
  height: 200px;
}
</style>
