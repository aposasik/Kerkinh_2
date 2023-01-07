<template>
  <v-container fluid>
    <v-btn @click="goBack" dark round class="mt-4 mb-3" color="light-green lighten-2" style="text-transform:none" title="Πλοήγηση πίσω στη σελίδα του δείγματος"><v-icon>arrow_back_ios</v-icon>Πίσω</v-btn>
    <v-layout
    row
    wrap
    align-center
    justify-center>
      <v-flex xs12 mt-5 class="text-xs-center">
        <h2 class="headline"> {{ main.title }} </h2>
      </v-flex>

      <v-flex xs8 sm6 md2 v-if="loading == true" class="text-xs-center mt-5">
        <v-progress-circular indeterminate size="45" color="green lighten-1"/>
      </v-flex>
      <v-flex v-if="noElements == true" xs12 lg11 class="text-xs-center text-md-left" style="margin-top: 130px;">
        <h3 class="font-weight-regular"> {{ main.emptyElements }} </h3>
      </v-flex>
      <v-flex v-else-if="noElements == false" xs12 lg9 style="margin-top: 100px;">
        <div>
          <h3 class="my-4 text-xs-center text-md-left font-weight-regular">Σύνολο Φωτογραφιών : {{ this.numberOfElements }} </h3>
        </div>

        <div v-for="picture in returnedData" :key="picture.id" class="my-5">
          <v-card>
            <div class="green lighten-4" style="width: 100%; height: 8px;"></div>
            <div class="pa-3">
              <img class="mb-4" :src="picture.url" alt="Φωτογραφία" style="width: 100%;">
              <v-divider class="mb-4"></v-divider>
              <v-layout>
                <h3 class="font-weight-medium mt-3">Id: {{ picture.id }} </h3>
                <v-spacer></v-spacer>
                <a :href="picture.url" :download="picture.pictureName" style="text-decoration: none">
                  <v-btn color="blue lighten-1" icon flat style="text-transform: none" title="Λήψη">
                    <v-icon medium>save_alt</v-icon>
                  </v-btn>
                </a>
                <v-btn @click="deletePicture(picture.id)" color="red lighten-1" icon flat style="text-transform: none" title="Διαγραφή">
                  <v-icon medium>delete</v-icon>
                </v-btn>
              </v-layout>
            </div>
          </v-card>
        </div>

      </v-flex>
    </v-layout>

    <v-snackbar :timeout=14000 v-model="snackbar" :color="snackbarColor" :multi-line=true :auto-height=true>
      <p class="pt-2"> {{ snackbarText }} </p>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: 'Φωτογραφίες Δείγματος Θηλαστικών - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Αναζήτηση Φωτογραφιών συνδεδεμένων με συγκεκριμένο Δείγμα Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση φωτογραφιών δείγματος',
        emptyElements: 'Δεν υπάρχουν αποθηκευμένα δεδομένα'
      },
      noElements: null,
      returnedData: {},
      numberOfElements: 0,

      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    deigmaId(){
      return this.$route.params.id
    },
    getPictures(){
      return this.$store.getters.getPicturesByDeigmaThhlastikwnIdIs
    },
    pictureById(){
      return this.$store.getters.getPictureByIdUrl
    },
  },
  mounted() {
    this.restCall()
  },
  methods: {
    goBack() {
      this.$router.push("/thhlastika/deigma-thhlastikwn/" + this.deigmaId)
    },
    restCall() {
      this.loading = true
      this.$axios.get(this.getPictures + this.deigmaId)
        .then((response) => {
          if( response.data.length == 0 ){
            this.noElements = true
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της αναζήτησης'
            this.snackbar = true
          } else {
            this.noElements = false
            this.numberOfElements = response.data.length
            this.returnedData = response.data
            // Ordering by id
            this.returnedData.sort(function(a, b) {
              return b.id - a.id
            })
            // Creating a new property for each returnedData 's picture, the url through the byte array data
            this.returnedData.forEach(picture => {
              picture.url = "data:" + picture.typeName + ";base64," + picture.data
            })
          }
          this.loading = false
        }).catch((err) => {
          this.loading = false
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση'
          this.snackbar = true
          throw err
        })
    },
    deletePicture(pictureId){
      this.$axios.delete(this.pictureById + pictureId)
        .then((response) => {
          if( response.data == false ){
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν μπόρεσε να διαγραφεί η φωτογραφία'
            this.snackbar = true
          } else if( response.data == true ) {
            this.snackbarColor = 'green'
            this.snackbarText = 'Η φωτογραφία διαγράφηκε επιτυχώς'
            this.snackbar = true
            // Re-calling the getPictures Method after the deletion
            this.restCall()
          }
        }).catch((err) => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Δεν μπόρεσε να διαγραφεί η φωτογραφία'
          this.snackbar = true
          throw err
        })
    }
  }
}
</script>
