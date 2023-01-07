<template>
  <v-container fluid>
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
      <v-flex v-else-if="noElements == false" xs12 lg10 style="margin-top: 100px;">
        <div class="my-5">
          <v-card>
            <div class="green lighten-4" style="width: 100%; height: 8px;"></div>
            <div class="pa-4">
              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Κωδικός δειγματοληψίας"
                    color="green"
                    v-model="deigma.kodikosDeigmatolipsias"
                    :counter="255"
                    readonly
                    required
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Χρηματοδότηση"
                    color="green"
                    v-model="deigma.xrhmatodothsh"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Ερευνητής"
                    color="green"
                    append-icon="account_box"
                    v-model="deigma.ereunhths"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Τοποθεσία"
                    color="green"
                    append-icon="location_searching"
                    v-model="deigma.topothesia"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Ημερομηνία (Έτος-Μήνας-Ημέρα)"
                    color="green"
                    append-icon="date_range"
                    hint="YYYY-MM-DD | Παράδειγμα 2019-06-23"
                    v-model="deigma.date"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Ώρα"
                    v-model="deigma.time"
                    color="green"
                    append-icon="access_time"
                    hint="HH:MM:SS | Παράδειγμα 20:32:10"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Διάρκεια"
                    color="green"
                    v-model="deigma.diarkeia"
                    :counter="40"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Επιφάνεια δειγματοληψίας"
                    color="green"
                    v-model="deigma.epifaneiaDeigmatolhpsias"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Τύπος βλάστησης"
                    color="green"
                    v-model="deigma.tuposVlasthshs"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Τύπος οικοτόπου"
                    color="green"
                    v-model="deigma.tuposOikotopou"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Γεωγραφικό πλάτος EGSA"
                    color="green"
                    append-icon="edit_location"
                    v-model="deigma.latitudeEGSA"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Γεωγραφικό μήκος EGSA"
                    color="green"
                    append-icon="edit_location"
                    v-model="deigma.longitudeEGSA"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Γεωγραφικό πλάτος WGS84"
                    color="green"
                    append-icon="edit_location"
                    v-model="deigma.latitudeWGS84"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Γεωγραφικό μήκος WGS84"
                    color="green"
                    append-icon="edit_location"
                    v-model="deigma.longitudeWGS84"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Κελί πλέγματος"
                    color="green"
                    v-model="deigma.gridCell"
                    :counter="30"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Κωδικός Natura"
                    color="green"
                    v-model="deigma.kodikosNatura"
                    :counter="40"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Μέθοδος δειγματοληψίας"
                    color="green"
                    v-model="deigma.methodosDeigmatolhpsias"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Νομός"
                    color="green"
                    v-model="deigma.nomos"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md8 my-4>
                  <v-textarea
                    label="Παρατηρήσεις"
                    color="green"
                    v-model="deigma.parathrhseis"
                    :counter="255"
                    readonly
                    rows=6
                  >
                  </v-textarea>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <h3 class="font-weight-medium mt-2">Id: {{ deigma.id }} </h3>
                <v-spacer></v-spacer>
                <v-btn @click="toIdEditPage(deigma.id)" color="green" dark style="text-transform: none">Επεξεργασία<v-icon small right>edit</v-icon></v-btn>
              </v-layout>
            </div>
          </v-card>
          
          <v-layout justify-center align-center class="text-xs-center my-5">
            <v-spacer></v-spacer>
            <v-btn color="error lighten-1" @click="deleteById" title="Οριστική διαγραφή" style="text-transform: none">Διαγραφή<v-icon small right>delete</v-icon></v-btn>
          </v-layout>

          <v-layout row wrap justify-center align-center class="text-xs-center my5">
            <v-flex xs12 class="text-md-left text-xs-center" style="margin-top: 150px;">
              <h2 class="font-weight-thin"><v-icon large color="green">add_photo_alternate</v-icon> {{ main.titlePicture }} </h2>
            </v-flex>
            <div class="dropperPlace" >
              <v-icon v-if="selectedPicture != null" @click="removePicture()" style="position: absolute; color: red; z-index: 1; top: 25px; right: 25px;">close</v-icon>
              <input ref="inputPicture" class="inputPlace" type="file" @change="selectPicture($event.target.files[0])" />
              <p v-if="selectedPicture != null"> {{ selectedPicture.name }} </p>
              <p v-else class="pa-4"> {{ main.subTitlePicture }} </p>
            </div>
            <v-btn class="mt-4" @click="submitPicture()" :disabled="!validationPictureInput" color="green lighten-2 white--text" style="text-transform: none">Αποστολή φωτογραφίας</v-btn>      
          </v-layout>

          <v-layout row wrap justify-center align-center class="text-xs-center my5">
            <v-flex xs12 class="text-md-left text-xs-center" style="margin-top: 150px;">
              <h2 class="font-weight-thin"><v-icon large color="green">insert_drive_file</v-icon> {{ main.titleFile }} </h2>
            </v-flex>
            <div class="dropperPlace" >
              <v-icon v-if="selectedFile != null" @click="removeFile()" style="position: absolute; color: red; z-index: 1; top: 25px; right: 25px;">close</v-icon>
              <input ref="inputFile" class="inputPlace" type="file" @change="selectFile($event.target.files[0])" />
              <p v-if="selectedFile != null"> {{ selectedFile.name }} </p>
              <p v-else class="pa-4"> {{ main.subTitleFile }} </p>
            </div>
            <v-btn class="mt-4" @click="submitFile()" :disabled="!validationFileInput" color="green lighten-2 white--text" style="text-transform: none">Αποστολή αρχείου</v-btn>      
          </v-layout>

          <v-speed-dial
            v-model="servicesBtn"
            :bottom="true"
            :right="true"
            absolute
            style="position: fixed; bottom: 60px;"
          >
            <v-btn
              slot="activator"
              v-model="servicesBtn"
              dark
              color="light-green lighten-1"
              fab
              title="Επιπλέον ενέργειες"
            >
              <v-icon>drag_indicator</v-icon>
              <v-icon>close</v-icon>
            </v-btn>
            <v-btn @click="goToPicturesPage" fab dark color="teal lighten-2" title="Εμφάνιση των φωτογραφιών του δείγματος">
              <v-icon>collections</v-icon>
            </v-btn>
            <v-btn @click="goToFilesPage" fab dark color="teal lighten-2" title="Εμφάνιση των αρχείων του δείγματος">
              <v-icon>file_copy</v-icon>
            </v-btn>
            <v-btn @click="goToXEidhPage" fab dark color="orange lighten-2" title="Εμφάνιση των Δειγμάτων X Ειδών του δείγματος" style="text-transform: none;">
              Είδη
            </v-btn>
            <v-btn @click="goToXPressThreatsPage" fab dark color="orange lighten-2" title="Εμφάνιση των Δειγμάτων X Πιέσεων του δείγματος" style="text-transform: none;">
              Πιέσεις
            </v-btn>
          </v-speed-dial>

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
      title: 'Δείγμα Ορνιθοπανίδας - Προβολή | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Προβολή συγκεκριμένου Δείγματος Ορνιθοπανίδας για τη διαχείρηση δεδομένων των Δειγμάτων Ορνιθοπανίδας για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Δείγματος Ορνιθοπανίδας με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Δείγμα Ορνιθοπανίδας που επιθυμείτε',
        titlePicture: 'Προσθέστε νέα φωτογραφία για το Δείγμα Ορνιθοπανίδας',
        subTitlePicture: 'Πατήστε για να επιλέξετε ή μεταφέρετε εδώ την φωτογραφία',
        titleFile: 'Προσθέστε νέο αρχείο (pdf / excel / word) για το Δείγμα Ορνιθοπανίδας',
        subTitleFile: 'Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το αρχείο',
      },
      noElements: null,
      deigma: {},

      selectedPicture: null,
      selectedFile: null,

      servicesBtn: false,
      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    getByIdUrl(){
      return this.$store.getters.getDeigmaOrnithopanidaByIdUrl
    },
    id(){
      return this.$route.params.id
    },
    addPictureUrl(){
      return this.$store.getters.getDeigmaOrnithopanidaByIdUrl + this.id + '/addPicture'
    },
    addFileUrl(){
      return this.$store.getters.getDeigmaOrnithopanidaByIdUrl + this.id + '/addFile'
    },

    // Validating for the btn depending on the file -null or not-
    validationPictureInput(){
      if (this.selectedPicture != null) {
        return true
      } else {
        return false
      }
    },
    // Validating for the btn depending on the file -null or not-
    validationFileInput(){
      if (this.selectedFile != null) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    this.restCall(this.id)
  },
  methods: {
    checkForPrevPage(pageNumber) {
      if( pageNumber == 0 ) {
        this.prevPage = false
      } else {
        this.prevPage = true
      }
    },
    restCall(id) {
      this.loading = true
      this.$axios.get(this.getByIdUrl + id)
        .then(response => {
          // console.log(response.data)
          if( response.data == "" ){
            this.noElements = true
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Δείγμα Θηλαστικών που επιθυμείτε'
            this.snackbar = true
          } else {
            this.noElements = false
            // TODO: Important : what happens if still it comes null for ct or deigmathhlastikwn (not the id and eidos but ctThhlastikaEidh and deigmaThhlastikwn themselves!) I should be checking this somehow maybe make a checkForNulls as for `edit` page?
            this.deigma = response.data
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
    toIdEditPage(id) {
      this.$router.push('/ornithopanida/deigma-ornithopanida/' + id + '/edit')
    },
    deleteById() {
      this.$axios.delete(this.getByIdUrl + this.id)
        .then(response => {
          if(response.data == true){
            this.snackbarColor = 'green'
            this.snackbarText = 'Η διαγραφή ολοκληρώθηκε επιτυχώς'
            this.snackbar = true
            this.$router.push('/')
          } else if (response.data == false){
            this.snackbarColor = 'red'
            this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την διαγραφή'
            this.snackbar = true
          }
        })
        .catch(err => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την διαγραφή'
          this.snackbar = true
          throw err
        })
    },
    selectPicture(file) {
      // console.log(file)
      this.selectedPicture = file
    },
    removePicture() {
      this.selectedPicture = null
      this.$refs.inputPicture.value = ''
    },
    submitPicture() {
      const formData = new FormData()
      formData.append('file', this.selectedPicture)

      this.$axios.patch(this.addPictureUrl, formData)
        .then(response => {
          if (response.data == true) {
            this.snackbarColor = 'success'
            this.snackbarText = 'Το αρχείο στάλθηκε και οι νέες εγγραφές δημιουργήθηκαν επιτυχώς'
            this.snackbar = true
            this.removePicture()
          } else if (response.data == false) {
            this.snackbarColor = 'red'
            this.snackbarText = 'Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε'
            this.snackbar = true
          }
        })
        .catch(error => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε'
          this.snackbar = true
          throw error
        })
    },
    selectFile(file) {
      // console.log(file)
      this.selectedFile = file
    },
    removeFile() {
      this.selectedFile = null
      this.$refs.inputFile.value = ''
    },
    submitFile() {
      const formData = new FormData()
      formData.append('file', this.selectedFile)

      this.$axios.patch(this.addFileUrl, formData)
        .then(response => {
          if (response.data == true) {
            this.snackbarColor = 'success'
            this.snackbarText = 'Το αρχείο στάλθηκε και οι νέες εγγραφές δημιουργήθηκαν επιτυχώς'
            this.snackbar = true
            this.removeFile()
          } else if (response.data == false) {
            this.snackbarColor = 'red'
            this.snackbarText = 'Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε'
            this.snackbar = true
          }
        })
        .catch(error => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε'
          this.snackbar = true
          throw error
        })
    },
    goToPicturesPage() {
      this.$router.push('/ornithopanida/deigma-ornithopanida/' + this.id + '/pictures/')
    },
    goToFilesPage(){
      this.$router.push('/ornithopanida/deigma-ornithopanida/' + this.id + '/files/')
    },
    goToXEidhPage(){
      this.$router.push('/ornithopanida/deigma-ornithopanida/' + this.id + '/x-eidh/')
    },
    goToXPressThreatsPage(){
      this.$router.push('/ornithopanida/deigma-ornithopanida/' + this.id + '/x-press-threats/')
    }
  }
}
</script>

<style lang="stylus">
.dropperPlace {
  height 30vh
  width 100%
  margin-top 20px
  border-radius 20px
  background-color white
  transition 150ms linear
  color grey
  display flex
  justify-content center
  align-items center
  box-shadow 0px 3px 5px #aaa
  position relative
}

.inputPlace {
  opacity 0
  height 30vh
  width 100%
  position absolute
  border-radius 20px
}

.dropperPlace:hover {
  background-color #eee
  transition 150ms linear
}
</style>