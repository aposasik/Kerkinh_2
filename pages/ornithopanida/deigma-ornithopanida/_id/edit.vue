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
            <v-form v-model="validation" ref="form" class="pa-4">
              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Κωδικός Ορνιθοπανίδας"
                    color="green"
                    v-model="deigmaOrnithopanida.kodikosDeigmatolipsias"
                    :counter="255"
                    :rules="kodikosDeigmatolhpsiasRules"
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
                    v-model="deigmaOrnithopanida.xrhmatodothsh"
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
                    v-model="deigmaOrnithopanida.ereunhths"
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
                    v-model="deigmaOrnithopanida.topothesia"
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
                      v-model="deigmaOrnithopanida.date"
                      readonly
                    >
                    </v-text-field>
                    <v-date-picker
                      color="green lighten-2"
                      v-model="deigmaOrnithopanida.date"
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
                      v-model="deigmaOrnithopanida.time"
                      color="green"
                      append-icon="access_time"
                      hint="HH:MM:SS | Παράδειγμα 20:32:10"
                    >
                    </v-text-field>
                    <v-time-picker
                      color="green lighten-2"
                      scrollable
                      v-model="deigmaOrnithopanida.time"
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
                    v-model="deigmaOrnithopanida.diarkeia"
                    :counter="40"
                    :rules="diarkeiaRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Επιφάνεια δειγματοληψίας"
                    color="green"
                    v-model="deigmaOrnithopanida.epifaneiaDeigmatolhpsias"
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
                    v-model="deigmaOrnithopanida.tuposVlasthshs"
                    :counter="255"
                    :rules="tuposVlasthshsRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Τύπος οικοτόπου"
                    color="green"
                    v-model="deigmaOrnithopanida.tuposOikotopou"
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
                    v-model="deigmaOrnithopanida.latitudeEGSA"
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
                    v-model="deigmaOrnithopanida.longitudeEGSA"
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
                    v-model="deigmaOrnithopanida.latitudeWGS84"
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
                    v-model="deigmaOrnithopanida.longitudeWGS84"
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
                    v-model="deigmaOrnithopanida.gridCell"
                    :counter="30"
                    :rules="gridCellRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Κωδικός Natura"
                    color="green"
                    v-model="deigmaOrnithopanida.kodikosNatura"
                    :counter="40"
                    :rules="kodikosNaturaRules"
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Μέθοδος δειγματοληψίας"
                    color="green"
                    v-model="deigmaOrnithopanida.methodosDeigmatolhpsias"
                    :counter="255"
                    :rules="methodosDeigmatolhpsiasRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Νομός"
                    color="green"
                    v-model="deigmaOrnithopanida.nomos"
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
                    v-model="deigmaOrnithopanida.parathrhseis"
                    :counter="255"
                    :rules="xrhmatodothshRules"
                    rows=6
                  >
                  </v-textarea>
                </v-flex>
              </v-layout>
              <v-layout justify-space-around>
                <h3 class="font-weight-medium mt-2">Id: {{ id }} </h3>
                <v-spacer></v-spacer>
                <v-btn @click="saveChanges()" color="light-green lighten-1" dark style="text-transform: none">Αποθήκευση αλλαγών <v-icon small right>save</v-icon></v-btn>
              </v-layout>
            </v-form>
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
      title: 'Δείγμα Θηλαστικών - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Επεξεργασία συγκεκριμένου Δείγματος Θηλαστικών για τη διαχείρηση δεδομένων των Δειγμάτων Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Δείγματος Ορνιθοπανίδας με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Δείγμα Ορνιθοπανίδας που επιθυμείτε'
      },
      noElements: null,
      deigmaOrnithopanida: {
        id: '',
        kodikosDeigmatolipsias: '',
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
        kodikosNatura: '',
        methodosDeigmatolhpsias: '',
        parathrhseis: '',
        nomos: ''
      },
      
      returnedObject: {
        id: '',
        kodikosDeigmatolipsias: '',
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
        kodikosNatura: null,
        methodosDeigmatolhpsias: null,
        parathrhseis: null,
        nomos: null
      },

      validation: false,
      dateDialog: false,
      timeDialog: false,

      kodikosDeigmatolhpsiasRules: [
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
      kodikosNaturaRules: [
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
    }
  },
  mounted() {
    this.restCall(this.id)
  },
  methods: {
    // Timeout the submit method and re-validate
    submitTimeout() {
      this.validation = false
      setTimeout(() => {
        this.validation = this.$refs.form.validate()
      }, 10000);
    },
    checkForNulls(data){
      if(data.deigmaOrnithopanida != null && data.ctornithopanidaEidi != null && data.kodikosDeigmatolipsias != null
        && data.xrhmatodothsh != null && data.ereunhths != null && data.topothesia != null && data.date != null && data.time != null
        && data.diarkeia != null && data.tuposVlasthshs != null && data.tuposOikotopou != null && data.epifaneiaDeigmatolhpsias != null
        && data.latitudeEGSA != null && data.longitudeEGSA != null && data.latitudeWGS84 != null && data.longitudeWGS84
        && data.gridCell != null && data.kodikosNatura != null && data.methodosDeigmatolhpsias != null && data.parathrhseis != null
        && data.nomos != null ){
        // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
        this.deigmaOrnithopanida = JSON.parse(JSON.stringify(data))
        this.returnedObject = JSON.parse(JSON.stringify(data))
      } else {
        if(data.deigmaOrnithopanida != null) {
          this.deigmaOrnithopanida.id = JSON.parse(JSON.stringify(data.deigmaOrnithopanida.id))
          this.returnedObject.deigmaOrnithopanida.id = JSON.parse(JSON.stringify(data.deigmaOrnithopanida.id))
        }
        if(data.ctornithopanidaEidi != null) {
          this.deigmaOrnithopanida.ctornithopanidaEidi.eidos = JSON.parse(JSON.stringify(data.ctornithopanidaEidi.eidos))
          this.returnedObject.ctornithopanidaEidi.eidos = JSON.parse(JSON.stringify(data.ctornithopanidaEidi.eidos))
        }
        if(data.kodikosDeigmatolipsias != null) {
          this.deigmaOrnithopanida.kodikosDeigmatolipsias = JSON.parse(JSON.stringify(data.kodikosDeigmatolipsias))
          this.returnedObject.kodikosDeigmatolipsias = JSON.parse(JSON.stringify(data.kodikosDeigmatolipsias))
        }
        if(data.xrhmatodothsh != null) {
          this.deigmaOrnithopanida.xrhmatodothsh = JSON.parse(JSON.stringify(data.xrhmatodothsh))
          this.returnedObject.xrhmatodothsh = JSON.parse(JSON.stringify(data.xrhmatodothsh))
        }
        if(data.ereunhths != null) {
          this.deigmaOrnithopanida.ereunhths = JSON.parse(JSON.stringify(data.ereunhths))
          this.returnedObject.ereunhths = JSON.parse(JSON.stringify(data.ereunhths))
        }
        if(data.topothesia != null) {
          this.deigmaOrnithopanida.topothesia = JSON.parse(JSON.stringify(data.topothesia))
          this.returnedObject.topothesia = JSON.parse(JSON.stringify(data.topothesia))
        }
        if(data.date != null) {
          this.deigmaOrnithopanida.date = JSON.parse(JSON.stringify(data.date))
          this.returnedObject.date = JSON.parse(JSON.stringify(data.date))
        }
        if(data.time != null) {
          this.deigmaOrnithopanida.time = JSON.parse(JSON.stringify(data.time))
          this.returnedObject.time = JSON.parse(JSON.stringify(data.time))
        }
        if(data.diarkeia != null) {
          this.deigmaOrnithopanida.diarkeia = JSON.parse(JSON.stringify(data.diarkeia))
          this.returnedObject.diarkeia = JSON.parse(JSON.stringify(data.diarkeia))
        }
        if(data.tuposVlasthshs != null) {
          this.deigmaOrnithopanida.tuposVlasthshs = JSON.parse(JSON.stringify(data.tuposVlasthshs))
          this.returnedObject.tuposVlasthshs = JSON.parse(JSON.stringify(data.tuposVlasthshs))
        }
        if(data.tuposOikotopou != null){
          this.deigmaOrnithopanida.tuposOikotopou = JSON.parse(JSON.stringify(data.tuposOikotopou))
          this.returnedObject.tuposOikotopou = JSON.parse(JSON.stringify(data.tuposOikotopou))
        }
        if(data.epifaneiaDeigmatolhpsias != null){
          this.deigmaOrnithopanida.epifaneiaDeigmatolhpsias = JSON.parse(JSON.stringify(data.epifaneiaDeigmatolhpsias))
          this.returnedObject.epifaneiaDeigmatolhpsias = JSON.parse(JSON.stringify(data.epifaneiaDeigmatolhpsias))
        }
        if(data.latitudeEGSA != null){
          this.deigmaOrnithopanida.latitudeEGSA = JSON.parse(JSON.stringify(data.latitudeEGSA))
          this.returnedObject.latitudeEGSA = JSON.parse(JSON.stringify(data.latitudeEGSA))
        }
        if(data.longitudeEGSA != null){
          this.deigmaOrnithopanida.longitudeEGSA = JSON.parse(JSON.stringify(data.longitudeEGSA))
          this.returnedObject.longitudeEGSA = JSON.parse(JSON.stringify(data.longitudeEGSA))
        }
        if(data.latitudeWGS84 != null){
          this.deigmaOrnithopanida.latitudeWGS84 = JSON.parse(JSON.stringify(data.latitudeWGS84))
          this.returnedObject.latitudeWGS84 = JSON.parse(JSON.stringify(data.latitudeWGS84))
        }
        if(data.longitudeWGS84 != null){
          this.deigmaOrnithopanida.longitudeWGS84 = JSON.parse(JSON.stringify(data.longitudeWGS84))
          this.returnedObject.longitudeWGS84 = JSON.parse(JSON.stringify(data.longitudeWGS84))
        }
        if(data.gridCell != null){
          this.deigmaOrnithopanida.gridCell = JSON.parse(JSON.stringify(data.gridCell))
          this.returnedObject.gridCell = JSON.parse(JSON.stringify(data.gridCell))
        }
        if(data.kodikosNatura != null){
          this.deigmaOrnithopanida.kodikosNatura = JSON.parse(JSON.stringify(data.kodikosNatura))
          this.returnedObject.kodikosNatura = JSON.parse(JSON.stringify(data.kodikosNatura))
        }
        if(data.methodosDeigmatolhpsias != null){
          this.deigmaOrnithopanida.methodosDeigmatolhpsias = JSON.parse(JSON.stringify(data.methodosDeigmatolhpsias))
          this.returnedObject.methodosDeigmatolhpsias = JSON.parse(JSON.stringify(data.methodosDeigmatolhpsias))
        }
        if(data.parathrhseis != null){
          this.deigmaOrnithopanida.parathrhseis = JSON.parse(JSON.stringify(data.parathrhseis))
          this.returnedObject.parathrhseis = JSON.parse(JSON.stringify(data.parathrhseis))
        }
        if(data.nomos != null){
          this.deigmaOrnithopanida.nomos = JSON.parse(JSON.stringify(data.nomos))
          this.returnedObject.nomos = JSON.parse(JSON.stringify(data.nomos))
        }
      }
    },
    restCall(id) {
      this.loading = true
      this.$axios.get(this.getByIdUrl + id)
        .then((response) => {
          if( response.data == "" ){
            this.noElements = true
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Δείγμα Θηλαστικών που επιθυμείτε'
            this.snackbar = true
          } else {
            // Check for nulls in the returned data
            this.checkForNulls(response.data)
            this.noElements = false
          }
          this.loading = false
        }).catch((err) => {
          this.loading = false
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση του Δείγματος Θηλαστικών'
          this.snackbar = true
          throw err
        })
    },
    // Checking if the user is submitting to send the same data
    checkForSavingTheSame(){
      if (
          (this.deigmaOrnithopanida.kodikosDeigmatolipsias == this.returnedObject.kodikosDeigmatolipsias || (this.deigmaOrnithopanida.kodikosDeigmatolipsias == '' && this.returnedObject.kodikosDeigmatolipsias == null))
          && (this.deigmaOrnithopanida.xrhmatodothsh == this.returnedObject.xrhmatodothsh || (this.deigmaOrnithopanida.xrhmatodothsh == '' && this.returnedObject.xrhmatodothsh == null))
          && (this.deigmaOrnithopanida.ereunhths == this.returnedObject.ereunhths || (this.deigmaOrnithopanida.ereunhths == '' && this.returnedObject.ereunhths == null))
          && (this.deigmaOrnithopanida.topothesia == this.returnedObject.topothesia || (this.deigmaOrnithopanida.topothesia == '' && this.returnedObject.topothesia == null))
          && (this.deigmaOrnithopanida.date == this.returnedObject.date || (this.deigmaOrnithopanida.date == '' && this.returnedObject.date == null))
          && (this.deigmaOrnithopanida.time == this.returnedObject.time || (this.deigmaOrnithopanida.time == '' && this.returnedObject.time == null))
          && (this.deigmaOrnithopanida.diarkeia == this.returnedObject.diarkeia || (this.deigmaOrnithopanida.diarkeia == '' && this.returnedObject.diarkeia == null))
          && (this.deigmaOrnithopanida.tuposVlasthshs == this.returnedObject.tuposVlasthshs || (this.deigmaOrnithopanida.tuposVlasthshs == '' && this.returnedObject.tuposVlasthshs == null))
          && (this.deigmaOrnithopanida.tuposOikotopou == this.returnedObject.tuposOikotopou || (this.deigmaOrnithopanida.tuposOikotopou == '' && this.returnedObject.tuposOikotopou == null))
          && (this.deigmaOrnithopanida.epifaneiaDeigmatolhpsias == this.returnedObject.epifaneiaDeigmatolhpsias || (this.deigmaOrnithopanida.epifaneiaDeigmatolhpsias == '' && this.returnedObject.epifaneiaDeigmatolhpsias == null))
          && (this.deigmaOrnithopanida.latitudeEGSA == this.returnedObject.latitudeEGSA || (this.deigmaOrnithopanida.latitudeEGSA == '' && this.returnedObject.latitudeEGSA == null))
          && (this.deigmaOrnithopanida.longitudeEGSA == this.returnedObject.longitudeEGSA || (this.deigmaOrnithopanida.longitudeEGSA == '' && this.returnedObject.longitudeEGSA == null))
          && (this.deigmaOrnithopanida.latitudeWGS84 == this.returnedObject.latitudeWGS84 || (this.deigmaOrnithopanida.latitudeWGS84 == '' && this.returnedObject.latitudeWGS84 == null))
          && (this.deigmaOrnithopanida.longitudeWGS84 == this.returnedObject.longitudeWGS84 || (this.deigmaOrnithopanida.longitudeWGS84 == '' && this.returnedObject.longitudeWGS84 == null))
          && (this.deigmaOrnithopanida.gridCell == this.returnedObject.gridCell || (this.deigmaOrnithopanida.gridCell == '' && this.returnedObject.gridCell == null))
          && (this.deigmaOrnithopanida.kodikosNatura == this.returnedObject.kodikosNatura || (this.deigmaOrnithopanida.kodikosNatura == '' && this.returnedObject.kodikosNatura == null))
          && (this.deigmaOrnithopanida.methodosDeigmatolhpsias == this.returnedObject.methodosDeigmatolhpsias || (this.deigmaOrnithopanida.methodosDeigmatolhpsias == '' && this.returnedObject.methodosDeigmatolhpsias == null))
          && (this.deigmaOrnithopanida.parathrhseis == this.returnedObject.parathrhseis || (this.deigmaOrnithopanida.parathrhseis == '' && this.returnedObject.parathrhseis == null))
          && (this.deigmaOrnithopanida.nomos == this.returnedObject.nomos || (this.deigmaOrnithopanida.nomos == '' && this.returnedObject.nomos == null))
        ){ 
        return true
      }
    },
    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData(){
      let patchedDeigmaThhlastikwn = {}

      // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)
      // Checks of types are being done without `typeof` because the v-model's value changes to String when the user Backspaces the id to type the new one which will be as : '3'. It still works normally but can't use typeof.
      if( this.deigmaOrnithopanida.kodikosDeigmatolipsias == '' && this.returnedObject.kodikosDeigmatolipsias != null ) {
        patchedDeigmaThhlastikwn.kodikosDeigmatolipsias = ''
      } else if( this.deigmaOrnithopanida.kodikosDeigmatolipsias != '' && this.deigmaOrnithopanida.kodikosDeigmatolipsias != this.returnedObject.kodikosDeigmatolipsias) {
        patchedDeigmaThhlastikwn.kodikosDeigmatolipsias = this.deigmaOrnithopanida.kodikosDeigmatolipsias
      }

      if( this.deigmaOrnithopanida.xrhmatodothsh == '' && this.returnedObject.xrhmatodothsh != null ) {
        patchedDeigmaThhlastikwn.xrhmatodothsh = ''
      } else if( this.deigmaOrnithopanida.xrhmatodothsh != '' && this.deigmaOrnithopanida.xrhmatodothsh != this.returnedObject.xrhmatodothsh) {
        patchedDeigmaThhlastikwn.xrhmatodothsh = this.deigmaOrnithopanida.xrhmatodothsh
      }

      if( this.deigmaOrnithopanida.ereunhths == '' && this.returnedObject.ereunhths != null ) {
        patchedDeigmaThhlastikwn.ereunhths = ''
      } else if( this.deigmaOrnithopanida.ereunhths != '' && this.deigmaOrnithopanida.ereunhths != this.returnedObject.ereunhths) {
        patchedDeigmaThhlastikwn.ereunhths = this.deigmaOrnithopanida.ereunhths
      }

      if( this.deigmaOrnithopanida.topothesia == '' && this.returnedObject.topothesia != null ) {
        patchedDeigmaThhlastikwn.topothesia = ''
      } else if( this.deigmaOrnithopanida.topothesia != '' && this.deigmaOrnithopanida.topothesia != this.returnedObject.topothesia) {
        patchedDeigmaThhlastikwn.topothesia = this.deigmaOrnithopanida.topothesia
      }

      if( this.deigmaOrnithopanida.date == '' && this.returnedObject.date != null ) {
        patchedDeigmaThhlastikwn.date = ''
      } else if( this.deigmaOrnithopanida.date != '' && this.deigmaOrnithopanida.date != this.returnedObject.date) {
        patchedDeigmaThhlastikwn.date = this.deigmaOrnithopanida.date
      }

      if( this.deigmaOrnithopanida.time == '' && this.returnedObject.time != null ) {
        patchedDeigmaThhlastikwn.time = ''
      } else if( this.deigmaOrnithopanida.time != '' && this.deigmaOrnithopanida.time != this.returnedObject.time ) {
        patchedDeigmaThhlastikwn.time = this.deigmaOrnithopanida.time
      }

      if( this.deigmaOrnithopanida.diarkeia == '' && this.returnedObject.diarkeia != null ) {
        patchedDeigmaThhlastikwn.diarkeia = ''
      } else if( this.deigmaOrnithopanida.diarkeia != '' && this.deigmaOrnithopanida.diarkeia != this.returnedObject.diarkeia ) {
        patchedDeigmaThhlastikwn.diarkeia = this.deigmaOrnithopanida.diarkeia
      }

      if( this.deigmaOrnithopanida.tuposVlasthshs == '' && this.returnedObject.tuposVlasthshs != null ) {
        patchedDeigmaThhlastikwn.tuposVlasthshs = ''
      } else if( this.deigmaOrnithopanida.tuposVlasthshs != '' && this.deigmaOrnithopanida.tuposVlasthshs != this.returnedObject.tuposVlasthshs ) {
        patchedDeigmaThhlastikwn.tuposVlasthshs = this.deigmaOrnithopanida.tuposVlasthshs
      }

      if( this.deigmaOrnithopanida.tuposOikotopou == '' && this.returnedObject.tuposOikotopou != null ) {
        patchedDeigmaThhlastikwn.tuposOikotopou = ''
      } else if( this.deigmaOrnithopanida.tuposOikotopou != '' && this.deigmaOrnithopanida.tuposOikotopou != this.returnedObject.tuposOikotopou ) {
        patchedDeigmaThhlastikwn.tuposOikotopou = this.deigmaOrnithopanida.tuposOikotopou
      }

      if( this.deigmaOrnithopanida.epifaneiaDeigmatolhpsias === '' && this.returnedObject.epifaneiaDeigmatolhpsias != null ) {
        patchedDeigmaThhlastikwn.epifaneiaDeigmatolhpsias = ''
      } else if( this.deigmaOrnithopanida.epifaneiaDeigmatolhpsias != '' && this.deigmaOrnithopanida.epifaneiaDeigmatolhpsias != this.returnedObject.epifaneiaDeigmatolhpsias ) {
        patchedDeigmaThhlastikwn.epifaneiaDeigmatolhpsias = this.deigmaOrnithopanida.epifaneiaDeigmatolhpsias
      }

      if( this.deigmaOrnithopanida.latitudeEGSA === '' && this.returnedObject.latitudeEGSA != null ) {
        patchedDeigmaThhlastikwn.latitudeEGSA = ''
      } else if( this.deigmaOrnithopanida.latitudeEGSA != '' && this.deigmaOrnithopanida.latitudeEGSA != this.returnedObject.latitudeEGSA ) {
        patchedDeigmaThhlastikwn.latitudeEGSA = this.deigmaOrnithopanida.latitudeEGSA
      }

      if( this.deigmaOrnithopanida.longitudeEGSA === '' && this.returnedObject.longitudeEGSA != null ) {
        patchedDeigmaThhlastikwn.longitudeEGSA = ''
      } else if( this.deigmaOrnithopanida.longitudeEGSA != '' && this.deigmaOrnithopanida.longitudeEGSA != this.returnedObject.longitudeEGSA ) {
        patchedDeigmaThhlastikwn.longitudeEGSA = this.deigmaOrnithopanida.longitudeEGSA
      }

      if( this.deigmaOrnithopanida.latitudeWGS84 === '' && this.returnedObject.latitudeWGS84 != null ) {
        patchedDeigmaThhlastikwn.latitudeWGS84 = ''
      } else if( this.deigmaOrnithopanida.latitudeWGS84 != '' && this.deigmaOrnithopanida.latitudeWGS84 != this.returnedObject.latitudeWGS84 ) {
        patchedDeigmaThhlastikwn.latitudeWGS84 = this.deigmaOrnithopanida.latitudeWGS84
      }

      if( this.deigmaOrnithopanida.longitudeWGS84 === '' && this.returnedObject.longitudeWGS84 != null ) {
        patchedDeigmaThhlastikwn.longitudeWGS84 = ''
      } else if( this.deigmaOrnithopanida.longitudeWGS84 != '' && this.deigmaOrnithopanida.longitudeWGS84 != this.returnedObject.longitudeWGS84 ) {
        patchedDeigmaThhlastikwn.longitudeWGS84 = this.deigmaOrnithopanida.longitudeWGS84
      }

      if( this.deigmaOrnithopanida.gridCell == '' && this.returnedObject.gridCell != null ) {
        patchedDeigmaThhlastikwn.gridCell = ''
      } else if( this.deigmaOrnithopanida.gridCell != '' && this.deigmaOrnithopanida.gridCell != this.returnedObject.gridCell ) {
        patchedDeigmaThhlastikwn.gridCell = this.deigmaOrnithopanida.gridCell
      }

      if( this.deigmaOrnithopanida.kodikosNatura == '' && this.returnedObject.kodikosNatura != null ) {
        patchedDeigmaThhlastikwn.kodikosNatura = ''
      } else if( this.deigmaOrnithopanida.kodikosNatura != '' && this.deigmaOrnithopanida.kodikosNatura != this.returnedObject.kodikosNatura ) {
        patchedDeigmaThhlastikwn.kodikosNatura = this.deigmaOrnithopanida.kodikosNatura
      }

      if( this.deigmaOrnithopanida.methodosDeigmatolhpsias == '' && this.returnedObject.methodosDeigmatolhpsias != null ) {
        patchedDeigmaThhlastikwn.methodosDeigmatolhpsias = ''
      } else if( this.deigmaOrnithopanida.methodosDeigmatolhpsias != '' && this.deigmaOrnithopanida.methodosDeigmatolhpsias != this.returnedObject.methodosDeigmatolhpsias ) {
        patchedDeigmaThhlastikwn.methodosDeigmatolhpsias = this.deigmaOrnithopanida.methodosDeigmatolhpsias
      }

      if( this.deigmaOrnithopanida.parathrhseis == '' && this.returnedObject.parathrhseis != null ) {
        patchedDeigmaThhlastikwn.parathrhseis = ''
      } else if( this.deigmaOrnithopanida.parathrhseis != '' && this.deigmaOrnithopanida.parathrhseis != this.returnedObject.parathrhseis ) {
        patchedDeigmaThhlastikwn.parathrhseis = this.deigmaOrnithopanida.parathrhseis
      }

      if( this.deigmaOrnithopanida.nomos == '' && this.returnedObject.nomos != null ) {
        patchedDeigmaThhlastikwn.nomos = ''
        console.log('1o')
      } else if( this.deigmaOrnithopanida.nomos != '' && this.deigmaOrnithopanida.nomos != this.returnedObject.nomos ) {
        console.log('2o')
        patchedDeigmaThhlastikwn.nomos = this.deigmaOrnithopanida.nomos
      }

      return patchedDeigmaThhlastikwn
    },
    saveChanges(){
      // Checking for the values that will be Patched after the user's changes
      if ( this.checkForSavingTheSame() == true ) {
        this.snackbarColor = 'red'
        this.snackbarText = 'Δεν πραγματοποιήσατε καμία αλλαγή στα πεδία'
        this.snackbar = true
      } else {
        // Checking for null - '' values and doing the request
        let patchedDeigmaThhlastikwn = this.checkValuesOfSendingData()
        this.$axios.patch(this.getByIdUrl + this.id, patchedDeigmaThhlastikwn)
          .then(response => {
            if(response.data == false) {
              this.snackbarColor = 'red'
              this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν'
              this.snackbar = true
            } else if(response.data == true) {
              this.snackbarColor = 'green'
              this.snackbarText = 'Οι αλλαγές σας αποθηκεύθηκαν επιτυχώς'
              this.snackbar = true
              this.$router.push('/ornithopanida/deigma-ornithopanida/' + this.id)
            }
            // Not checking for any other value because there shouldn't exist any different case
          })
          .catch(err => {
            this.snackbarColor = 'red'
            this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν'
            this.snackbar = true
            // Timeout the submit method and re-validate
            this.submitTimeout()
            throw err
          })
      }
    }
  }
}
</script>