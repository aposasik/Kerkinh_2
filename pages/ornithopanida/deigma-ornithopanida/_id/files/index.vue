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
          <h3 class="my-4 text-xs-center text-md-left font-weight-regular">Σύνολο Αρχείων : {{ this.numberOfElements }} </h3>
        </div>

        <div v-for="file in returnedData" :key="file.id" class="my-5">
          <v-card>
            <div class="green lighten-4" style="width: 100%; height: 8px;"></div>
            <div class="pa-3">
              <div class="mx-4">
                <h3 class="font-weight-thin my-3">Όνομα αρχείου &#58; <b class="ml-2">{{ file.fileName }}</b> </h3>
                <h3 class="font-weight-thin my-3">Τύπος αρχείου &#58; <b class="ml-2">{{ file.fileType }}</b> </h3>
              </div>
              <v-divider class="mb-4"></v-divider>
              <v-layout>
                <h3 class="font-weight-medium mt-3">Id: {{ file.id }} </h3>
                <v-spacer></v-spacer>
                <a :href="file.url" :download="file.fileName" style="text-decoration: none">
                  <v-btn color="blue lighten-1" icon flat style="text-transform: none" title="Λήψη">
                    <v-icon medium>save_alt</v-icon>
                  </v-btn>
                </a>
                <v-btn @click="deleteFile(file.id)" color="red lighten-1" icon flat style="text-transform: none" title="Διαγραφή">
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
      title: 'Αρχεία Δείγματος Θηλαστικών - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Αναζήτηση Αρχείων συνδεδεμένων με συγκεκριμένο Δείγμα Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Αρχείων δείγματος',
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
    getFiles(){
      return this.$store.getters.getFilesByDeigmaThhlastikwnIdIs
    },
    fileById(){
      return this.$store.getters.getFileByIdUrl
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
      this.$axios.get(this.getFiles + this.deigmaId)
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
            // Creating a new property for each returnedData 's file, the url through the byte array data
            this.returnedData.forEach(file => {
              file.url = "data:" + file.fileType + ";base64," + file.data
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
    deleteFile(fileId){
      this.$axios.delete(this.fileById + fileId)
        .then((response) => {
          if( response.data == false ){
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν μπόρεσε να διαγραφεί το αρχείο'
            this.snackbar = true
          } else if( response.data == true ) {
            this.snackbarColor = 'green'
            this.snackbarText = 'Το αρχείο διαγράφηκε επιτυχώς'
            this.snackbar = true
            // Re-calling the getFiles Method after the deletion
            this.restCall()
          }
        }).catch((err) => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Δεν μπόρεσε να διαγραφεί το αρχείο'
          this.snackbar = true
          throw err
        })
    }
  }
}
</script>
