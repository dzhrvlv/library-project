<template>
    <div ref="map" class="map"></div>
</template>

<script>
var DG = require('2gis-maps');

export default {
    name: "Map",
    data: () => ({
        map: null
    }),
    mounted() {
        this.map = new DG.map(this.$refs.map, {
            'center': [53.204167, 50.138587],
            'zoom': 16
        })
        DG.marker([53.204167, 50.138587]).addTo(this.map);

    },
    beforeDestroy() {
        if (this.map) this.map.remove()
    }
}
</script>

<style scoped>
.map {
    width: 600px;
    height: 400px;
}
</style>