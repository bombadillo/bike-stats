<template>
  <div v-if="activity" id="map" class="map mt-3"></div>
</template>

<script>
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
      this.map = L.map('map').setView([38.63, -90.23], 12)
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
        this.map
      )

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
  margin-left: -16px;
  margin-right: -16px;
}
</style>
