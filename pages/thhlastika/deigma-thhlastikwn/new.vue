<template>
  <v-container fluid>
    <v-layout
      row
      wrap
      align-center
      justify-center
    >
      <v-flex xs12 mt-5 class="text-xs-center">
        <h2 class="headline"> {{ main.title }} </h2>
      </v-flex>

      <v-flex xs12 class="text-md-left text-xs-center" style="margin-top: 150px;">
        <h2 class="font-weight-thin"><v-icon large color="green">list_alt</v-icon> {{ main.titleForm }} </h2>
      </v-flex>

      <v-card class="my-5" style="width: 100%;">
        <div class="green lighten-4" style="width: 100%; height: 8px;"></div>
        <v-form v-model="validation" ref="form" class="py-5 px-4">
          <v-layout wrap justify-space-around>
            <v-flex xs12 md4 my-4>
              <v-autocomplete
                label="Πρωτόκολλο Id"
                color="green"
                :items="prwtokollaList"
                v-model="form.prwtokolaId"
                :rules="prwtokolaIdRules"
                no-data-text="Δεν βρέθηκαν δεδομένα"
                required
              >
              </v-autocomplete>
            </v-flex>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Κωδικός δειγματοληψίας"
                color="green"
                v-model="form.kwdikosDeigmatolhpsias"
                :counter="255"
                :rules="kwdikosDeigmatolhpsiasRules"
                required
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout wrap justify-space-around>
            <v-flex xs12 md4 lg3 my-4>
              <v-text-field
                label="Χρηματοδότηση"
                color="green"
                v-model="form.xrhmatodothsh"
                :counter="255"
                :rules="xrhmatodothshRules"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 md4 lg3 my-4>
              <v-text-field
                label="Ερευνητής"
                color="green"
                append-icon="account_box"
                v-model="form.ereunhths"
                :counter="255"
                :rules="ereunhthsRules"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 md6 lg3 my-4>
              <v-text-field
                label="Τοποθεσία"
                color="green"
                append-icon="location_searching"
                v-model="form.topothesia"
                :counter="255"
                :rules="topothesiaRules"
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout wrap justify-space-around>
            <v-flex xs12 md4 my-4>
              <v-dialog
                v-model="dateDialog"
                full-width
                width="290px"
                lazy
              >
                <v-text-field
                  slot="activator"
                  label="Ημερομηνία (Έτος-Μήνας-Ημέρα)"
                  color="green"
                  append-icon="date_range"
                  hint="YYYY-MM-DD | Παράδειγμα 2019-06-23"
                  v-model="form.date"
                  readonly
                >
                </v-text-field>
                <v-date-picker
                  color="green lighten-2"
                  v-model="form.date"
                  scrollable
                  :max="new Date().toISOString().substr(0, 10)"
                  min="1950-01-01"
                >
                </v-date-picker>
              </v-dialog>
            </v-flex>
            <v-flex xs12 md4 my-4>
              <v-dialog
                v-model="timeDialog"
                lazy
                full-width
                width="290px"
              >
                <v-text-field
                  slot="activator"
                  label="Ώρα"
                  v-model="form.time"
                  color="green"
                  append-icon="access_time"
                  hint="HH:MM:SS | Παράδειγμα 20:32:10"
                >
                </v-text-field>
                <v-time-picker
                  color="green lighten-2"
                  scrollable
                  v-model="form.time"
                  format="24hr"
                >
                </v-time-picker>
              </v-dialog>
            </v-flex>
          </v-layout>

          <v-layout wrap justify-space-around>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Διάρκεια"
                color="green"
                v-model="form.diarkeia"
                :counter="40"
                :rules="diarkeiaRules"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Επιφάνεια δειγματοληψίας"
                color="green"
                v-model="form.epifaneiaDeigmatolhpsias"
                :counter="255"
                :rules="epifaneiaDeigmatolhpsiasRules"
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout wrap justify-space-around>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Τύπος βλάστησης"
                color="green"
                v-model="form.tuposVlasthshs"
                :counter="255"
                :rules="tuposVlasthshsRules"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Τύπος οικοτόπου"
                color="green"
                v-model="form.tuposOikotopou"
                :counter="255"
                :rules="tuposOikotopouRules"
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
                v-model="form.latitudeEGSA"
                :counter="255"
                :rules="latitudeEGSARules"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Γεωγραφικό μήκος EGSA"
                color="green"
                append-icon="edit_location"
                v-model="form.longitudeEGSA"
                :counter="255"
                :rules="longitudeEGSARules"
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
                v-model="form.latitudeWGS84"
                :counter="255"
                :rules="latitudeWGS84Rules"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Γεωγραφικό μήκος WGS84"
                color="green"
                append-icon="edit_location"
                v-model="form.longitudeWGS84"
                :counter="255"
                :rules="longitudeWGS84Rules"
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout wrap justify-space-around>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Κελί πλέγματος"
                color="green"
                v-model="form.gridCell"
                :counter="30"
                :rules="gridCellRules"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Κωδικός Natura"
                color="green"
                v-model="form.kwdikosNatura"
                :counter="40"
                :rules="kwdikosNaturaRules"
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout wrap justify-space-around>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Μέθοδος δειγματοληψίας"
                color="green"
                v-model="form.methodosDeigmatolhpsias"
                :counter="255"
                :rules="methodosDeigmatolhpsiasRules"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Νομός"
                color="green"
                v-model="form.nomos"
                :counter="255"
                :rules="nomosRules"
              >
              </v-text-field>
            </v-flex>
          </v-layout>

          <v-layout wrap justify-space-around>
            <v-flex xs12 md8 my-4>
              <v-textarea
                label="Παρατηρήσεις"
                color="green"
                v-model="form.parathrhseis"
                :counter="255"
                :rules="parathrhseisRules"
                rows=6
              >
              </v-textarea>
            </v-flex>
          </v-layout>

          <v-layout justify-space-around mt-5>
            <v-flex xs6 md5 class="text-xs-center">
              <v-btn
                @click="submitForm"
                :disabled="!validation"
                color="green lighten-2 white--text"
                style="text-transform: none"
                >
                  Εγγραφή
              </v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-card>

      <v-flex xs12 class="text-md-left text-xs-center" style="margin-top: 150px;">
        <h2 class="font-weight-thin"><v-icon large color="green">cloud_upload</v-icon> {{ main.titleExcel }} </h2>
      </v-flex>
      <div class="dropperPlace" >
        <v-icon v-if="selectedFile != null" @click="removeFile()" style="position: absolute; color: red; z-index: 1; top: 25px; right: 25px;">close</v-icon>
        <input ref="inputFile" class="inputPlace" type="file" @change="selectExcel($event.target.files[0])" />
        <p v-if="selectedFile != null"> {{ selectedFile.name }} </p>
        <p v-else class="pa-4"> {{ main.subTitleExcel }} </p>
      </div>
      <v-btn class="mt-4" @click="submitExcel()" :disabled="!validationExcelInput" color="green lighten-2 white--text" style="text-transform: none">Αποστολή excel αρχείου</v-btn>      
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
      title: 'Δείγμα Θηλαστικών - Δημιουργία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Δημιουργία και αποθήκευση νέων δεδομένων τύπου Δείγματος Θηλαστικών -μέσω φόρμας ή αρχείου excel- για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Εγγραφή νέου Δείγματος Θηλαστικών',
        titleForm: 'Για εγγραφή μέσω φόρμας συμπληρώστε παρακάτω',
        titleExcel: 'Για εγγραφές μέσω excel (.xlsx) αρχείου εισάγετε το αρχείο',
        subTitleExcel: 'Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το excel'
      },
      form: {
        prwtokolaId: '',
        kwdikosDeigmatolhpsias: '',
        xrhmatodothsh: '',
        ereunhths: '',
        topothesia: '',
        date: '',
        time: '',
        diarkeia: '',
        tuposVlasthshs: '',
        tuposOikotopou: '',
        epifaneiaDeigmatolhpsias: '',
        latitudeEGSA: '',
        longitudeEGSA: '',
        latitudeWGS84: '',
        longitudeWGS84: '',
        gridCell: '',
        kwdikosNatura: '',
        methodosDeigmatolhpsias: '',
        parathrhseis: '',
        nomos: ''
      },
      // To fill through a mounted Get request
      prwtokollaList: [],
      dateDialog: false,
      timeDialog: false,
      validation: false,
      prwtokolaIdRules: [
        v => !!v || 'Συμπληρώστε το πεδίο Πρωτοκόλλου για το δείγμα',
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],
      kwdikosDeigmatolhpsiasRules: [
        v => !!v || 'Συμπληρώστε το πεδίο Πρωτοκόλλου για το δείγμα',
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      xrhmatodothshRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      ereunhthsRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      topothesiaRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      diarkeiaRules: [
        v => v.length <= 40 || 'Το πεδίο πρέπει να είναι λιγότερο από 40 χαρακτήρες'
      ],
      tuposVlasthshsRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      tuposOikotopouRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      epifaneiaDeigmatolhpsiasRules: [
        v => v.toString().length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες',
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],
      latitudeEGSARules: [
        v => v.toString().length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες',
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],
      longitudeEGSARules: [
        v => v.toString().length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες',
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],
      latitudeWGS84Rules: [
        v => v.toString().length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες',
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],
      longitudeWGS84Rules: [
        v => v.toString().length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες',
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],
      gridCellRules: [
        v => v.length <= 30 || 'Το πεδίο πρέπει να είναι λιγότερο από 30 χαρακτήρες'
      ],
      kwdikosNaturaRules: [
        v => v.length <= 30 || 'Το πεδίο πρέπει να είναι λιγότερο από 30 χαρακτήρες'
      ],
      methodosDeigmatolhpsiasRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      parathrhseisRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      nomosRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],

      selectedFile: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    // Getting the distinct Prwtokola for autocomplete list. Used for Deigmata Init
    getDistinctUrl(){
      return this.$store.getters.getPrwtokolaDistinctUrl
    },
    addFormUrl(){
      return this.$store.getters.getDeigmaThhlastikwnAddUrl
    },
    addFromExcelUrl(){
      return this.$store.getters.getDeigmaThhlastikwnAddFromExcelUrl
    },
    // Validating for the btn depending on the file -null or not-
    validationExcelInput(){
      if (this.selectedFile != null) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    // Getting Prwtokola for Deigmata Init
    this.getPrwtokolaIdList()
  },
  methods: {
    // Getting Prwtokola for Deigmata Init
    getPrwtokolaIdList() {
      this.$axios.get(this.getDistinctUrl)
        .then(response => {
          if(response.data.length == []) {
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα Πρωτόκολλα.'
            this.snackbar = true
          } else {
            // Filling the Prwtokola list for the user
            this.prwtokollaList = response.data
          }
        })
        .catch(err => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την εύρεση Πρωτοκόλλων.'
          this.snackbar = true
          throw err
        })
    },
    // Timeout the submit method and re-validate
    submitTimeout() {
      this.validation = false
      setTimeout(() => {
        this.validation = this.$refs.form.validate()
      }, 10000);
    },
    submitForm() {
      // Checking for nulls
      let checkedForm = {
        prwtokolaId: null,
        kwdikosDeigmatolhpsias: null,
        xrhmatodothsh: null,
        ereunhths: null,
        topothesia: null,
        date: null,
        time: null,
        diarkeia: null,
        tuposVlasthshs: null,
        tuposOikotopou: null,
        epifaneiaDeigmatolhpsias: null,
        latitudeEGSA: null,
        longitudeEGSA: null,
        latitudeWGS84: null,
        longitudeWGS84: null,
        gridCell: null,
        kwdikosNatura: null,
        methodosDeigmatolhpsias: null,
        parathrhseis: null,
        nomos: null
      }

      // Preparing the body for the Post
      checkedForm.prwtokolaId = this.form.prwtokolaId
      checkedForm.kwdikosDeigmatolhpsias = this.form.kwdikosDeigmatolhpsias

      if(!this.form.xrhmatodothsh == ''){
        checkedForm.xrhmatodothsh = this.form.xrhmatodothsh
      }
      if(!this.form.ereunhths == ''){
        checkedForm.ereunhths = this.form.ereunhths
      }
      if(!this.form.topothesia == ''){
        checkedForm.topothesia = this.form.topothesia
      }
      if(!this.form.date == ''){
        checkedForm.date = this.form.date
      }
      if(!this.form.time == ''){
        checkedForm.time = this.form.time
      }
      if(!this.form.diarkeia == ''){
        checkedForm.diarkeia = this.form.diarkeia
      }
      if(!this.form.tuposVlasthshs == ''){
        checkedForm.tuposVlasthshs = this.form.tuposVlasthshs
      }
      if(!this.form.tuposOikotopou == ''){
        checkedForm.tuposOikotopou = this.form.tuposOikotopou
      }
      if(!isNaN(this.form.epifaneiaDeigmatolhpsias)){
        // console.log("Passed through the epifaneiaDeigmatolhspias")
        checkedForm.epifaneiaDeigmatolhpsias = this.form.epifaneiaDeigmatolhpsias
      }
      if(!isNaN(this.form.latitudeEGSA)){
        // console.log("Passed through the latitudeEGSA")
        checkedForm.latitudeEGSA = this.form.latitudeEGSA
      }
      if(!isNaN(this.form.longitudeEGSA)){
        // console.log("Passed through the longitudeEGSA")
        checkedForm.longitudeEGSA = this.form.longitudeEGSA
      }
      if(!isNaN(this.form.latitudeWGS84)){
        // console.log("Passed through the latitudeWGS84")
        checkedForm.latitudeWGS84 = this.form.latitudeWGS84
      }
      if(!isNaN(this.form.longitudeWGS84)){
        // console.log("Passed through the longitudeWGS84")
        checkedForm.longitudeWGS84 = this.form.longitudeWGS84
      }
      if(!this.form.gridCell == ''){
        checkedForm.gridCell = this.form.gridCell
      }
      if(!this.form.kwdikosNatura == ''){
        checkedForm.kwdikosNatura = this.form.kwdikosNatura
      }
      if(!this.form.methodosDeigmatolhpsias == ''){
        checkedForm.methodosDeigmatolhpsias = this.form.methodosDeigmatolhpsias
      }
      if(!this.form.parathrhseis == ''){
        checkedForm.parathrhseis = this.form.parathrhseis
      }
      if(!this.form.nomos == ''){
        checkedForm.nomos = this.form.nomos
      }

      // console.log(checkedForm)

      // Post request and navigation
      this.$axios.post(this.addFormUrl, checkedForm)
        .then(response => {
          // console.log(response.data)
          this.$router.push('/thhlastika/deigma-thhlastikwn/' + response.data.id)
        })
        .catch(error => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο πρόβλημα με την νέα εγγραφή με αποτέλεσμα να ακυρωθεί'
          this.snackbar = true
          // Timeout the submit method and re-validate
          this.submitTimeout()
          throw error
        })
    },
    selectExcel(file) {
      // console.log(file)
      this.selectedFile = file
    },
    removeFile() {
      this.selectedFile = null
      this.$refs.inputFile.value = ''
    },
    submitExcel() {
      const formData = new FormData()
      formData.append('file', this.selectedFile)

      this.$axios.post(this.addFromExcelUrl, formData)
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