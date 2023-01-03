<template>
    <v-container class="mt-16" align="center">
        <v-card class="tracking-card" rounded="4">
            <v-select
            class="ma-8"
            label="Packet auswählen"
            :items="packagesList"
            ></v-select>
            <v-card-title class="ma-8">
                <h1>Das PACKETNAME ist: STATUS</h1>
            </v-card-title>
            <v-row class="mx-8 my-16">
                <v-col lg="4" xs="12">
                    <div
                    class="pa-6 rounded-circle d-inline-block delivery-icon"
                    >
                        <v-icon
                        class="ma-4"
                        color="green"
                        size="100"
                        >
                            fas fa-box
                        </v-icon>
                    </div>
                    <h2 class="mt-6">In Bearbeitung</h2>
                </v-col>
                <v-col lg="4" xs="12">
                    <div class="pa-6 rounded-circle d-inline-block delivery-icon">
                        <v-icon
                        class="ma-4"
                        color="green"
                        size="100"
                        >
                            fas fa-truck
                        </v-icon>
                    </div>
                    <h2 class="mt-6">Versendet</h2>
                </v-col>
                <v-col lg="4" xs="12">
                    <div class="pa-6 rounded-circle d-inline-block delivery-icon">
                        <v-icon
                        class="ma-4"
                        color="red"
                        size="100"
                        >
                            fas fa-check
                        </v-icon>
                    </div>
                    <h2 class="mt-6">Angekommen</h2>
                </v-col>
            </v-row>
        </v-card>
    </v-container>

  <div class="map-box">
    <l-map ref="map" v-model:zoom="zoom" :center=position :maxZoom=18>
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"

      >
      </l-tile-layer>
      <l-marker :lat-lng=position>

      </l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker  } from "@vue-leaflet/vue-leaflet";

export default {
  name: "trackingView",
  created() {
    document.title = "Tracking";
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,

  },
  data() {
    return {
      //entry zoomlevel
      zoom: 8,
      //edit this to get other positions on the map. Its centered to this position and the marker uses the same value
      position: [50.52687192341124, 8.654176867109685],


      package1: {
        name: 'Packet 1',
        status: '0',
        statusText: 'In Bearbeitung',

      },
      package2: {
        name: 'Packet 2',
        status: '1',
        statusText: 'Versendet',
      },
      package3: {
        name: 'Packet 3',
        status: '2',
        statusText: 'Zugestellt',
      },

      packagesList : [this.package1.name, this.package2.name, this.package3.name]

    }
  },
}

</script>

<style scoped>
.tracking-card {
    max-width: 1300px;
}

.delivery-icon {
    border: 4px solid black;
}
.map-box{
  height: 50vh;
  width: 100vw;
}
</style>
