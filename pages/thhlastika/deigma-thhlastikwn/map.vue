  <template>
  <div>
    <h1>Your coordinates</h1>
    <p>{{coordinates.lat}} Latitude, {{coordinates.lng}} Longitude</p>
  <GmapMap
    :center.sync="coordinates"
    :zoom.sync="zoom"
    map-type-id="terrain"
    style="width: 1920px; height: 850px"
  >
    <GmapMarker
      v-for="marker in mapMarkers"
      :key="marker.id"
      :title="marker.title"
      :animation="marker.animation"
      :icon="marker.icon"
      :position="coordinates"
     
    />
  </GmapMap>
  </div>
  </template>
  
  <script>
  import {mapActions} from 'vuex'
  import EventBus from '../eventBus'
  

  export default {
    data() {
      return {
        mapCenter: {
          lat: 0, 
          lng: 0 
          },
        mapTypeId: "terrain",
        zoom: 14,
        coordinates:{
          lat:0,
          lng:0
        },
        mapMarkers:[
         {
           position:
           {
             lat: 0, 
             lng: 0
           }
         }
        ],
        mapMarkerIconSize: null,
        ignoreCenterOnSelectedStore: false,
         
      }
    },
   
  computed: {
        selectedLocation () {
              return this.$store.getters.selectedLocation
          },
          selectedStore: {
              get () {
                  return this.$store.getters.selectedStore
              },
              set (value) {
                  this.updateSelectedStore(value)
              }
          },
          stores () {
              return this.$store.getters.stores
          },
          mapIcons () {
              return this.$store.getters.mapIcons
          }
      },
     created(){

      this.$getLocation({})
     .then(coordinates => {
     this.coordinates = coordinates;
     })

    },
      
  };

  </script>





