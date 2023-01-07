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
                    label="Κωδικός δειγματοληψίας"
                    color="green"
                    v-model="deigmaThhlastikwn.kwdikosDeigmatolhpsias"
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
                    v-model="deigmaThhlastikwn.xrhmatodothsh"
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
                    v-model="deigmaThhlastikwn.ereunhths"
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
                    v-model="deigmaThhlastikwn.topothesia"
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
                      v-model="deigmaThhlastikwn.date"
                      readonly
                    >
                    </v-text-field>
                    <v-date-picker
                      color="green lighten-2"
                      v-model="deigmaThhlastikwn.date"
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
                      v-model="deigmaThhlastikwn.time"
                      color="green"
                      append-icon="access_time"
                      hint="HH:MM:SS | Παράδειγμα 20:32:10"
                    >
                    </v-text-field>
                    <v-time-picker
                      color="green lighten-2"
                      scrollable
                      v-model="deigmaThhlastikwn.time"
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
                    v-model="deigmaThhlastikwn.diarkeia"
                    :counter="40"
                    :rules="diarkeiaRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Επιφάνεια δειγματοληψίας"
                    color="green"
                    v-model="deigmaThhlastikwn.epifaneiaDeigmatolhpsias"
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
                    v-model="deigmaThhlastikwn.tuposVlasthshs"
                    :counter="255"
                    :rules="tuposVlasthshsRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Τύπος οικοτόπου"
                    color="green"
                    v-model="deigmaThhlastikwn.tuposOikotopou"
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
                    v-model="deigmaThhlastikwn.latitudeEGSA"
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
                    v-model="deigmaThhlastikwn.longitudeEGSA"
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
                    v-model="deigmaThhlastikwn.latitudeWGS84"
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
                    v-model="deigmaThhlastikwn.longitudeWGS84"
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
                    v-model="deigmaThhlastikwn.gridCell"
                    :counter="30"
                    :rules="gridCellRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Κωδικός Natura"
                    color="green"
                    v-model="deigmaThhlastikwn.kwdikosNatura"
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
                    v-model="deigmaThhlastikwn.methodosDeigmatolhpsias"
                    :counter="255"
                    :rules="methodosDeigmatolhpsiasRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Νομός"
                    color="green"
                    v-model="deigmaThhlastikwn.nomos"
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
                    v-model="deigmaThhlastikwn.parathrhseis"
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
        title: 'Αναζήτηση Δείγματος Θηλαστικών με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Δείγμα Θηλαστικών που επιθυμείτε'
      },
      noElements: null,
      deigmaThhlastikwn: {
        id: '',
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
      
      returnedObject: {
        id: '',
        kwdikosDeigmatolhpsias: '',
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
      },

      validation: false,
      dateDialog: false,
      timeDialog: false,

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

      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    getByIdUrl(){
      return this.$store.getters.getDeigmaThhlastikwnByIdUrl
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
      if(data.deigmaThhlastikwnThhlastikwn != null && data.ctThhlastikaEidh != null && data.kwdikosDeigmatolhpsias != null
        && data.xrhmatodothsh != null && data.ereunhths != null && data.topothesia != null && data.date != null && data.time != null
        && data.diarkeia != null && data.tuposVlasthshs != null && data.tuposOikotopou != null && data.epifaneiaDeigmatolhpsias != null
        && data.latitudeEGSA != null && data.longitudeEGSA != null && data.latitudeWGS84 != null && data.longitudeWGS84
        && data.gridCell != null && data.kwdikosNatura != null && data.methodosDeigmatolhpsias != null && data.parathrhseis != null
        && data.nomos != null ){
        // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
        this.deigmaThhlastikwn = JSON.parse(JSON.stringify(data))
        this.returnedObject = JSON.parse(JSON.stringify(data))
      } else {
        if(data.deigmaThhlastikwnThhlastikwn != null) {
          this.deigmaThhlastikwn.deigmaThhlastikwnThhlastikwn.id = JSON.parse(JSON.stringify(data.deigmaThhlastikwnThhlastikwn.id))
          this.returnedObject.deigmaThhlastikwnThhlastikwn.id = JSON.parse(JSON.stringify(data.deigmaThhlastikwnThhlastikwn.id))
        }
        if(data.ctThhlastikaEidh != null) {
          this.deigmaThhlastikwn.ctThhlastikaEidh.eidos = JSON.parse(JSON.stringify(data.ctThhlastikaEidh.eidos))
          this.returnedObject.ctThhlastikaEidh.eidos = JSON.parse(JSON.stringify(data.ctThhlastikaEidh.eidos))
        }
        if(data.kwdikosDeigmatolhpsias != null) {
          this.deigmaThhlastikwn.kwdikosDeigmatolhpsias = JSON.parse(JSON.stringify(data.kwdikosDeigmatolhpsias))
          this.returnedObject.kwdikosDeigmatolhpsias = JSON.parse(JSON.stringify(data.kwdikosDeigmatolhpsias))
        }
        if(data.xrhmatodothsh != null) {
          this.deigmaThhlastikwn.xrhmatodothsh = JSON.parse(JSON.stringify(data.xrhmatodothsh))
          this.returnedObject.xrhmatodothsh = JSON.parse(JSON.stringify(data.xrhmatodothsh))
        }
        if(data.ereunhths != null) {
          this.deigmaThhlastikwn.ereunhths = JSON.parse(JSON.stringify(data.ereunhths))
          this.returnedObject.ereunhths = JSON.parse(JSON.stringify(data.ereunhths))
        }
        if(data.topothesia != null) {
          this.deigmaThhlastikwn.topothesia = JSON.parse(JSON.stringify(data.topothesia))
          this.returnedObject.topothesia = JSON.parse(JSON.stringify(data.topothesia))
        }
        if(data.date != null) {
          this.deigmaThhlastikwn.date = JSON.parse(JSON.stringify(data.date))
          this.returnedObject.date = JSON.parse(JSON.stringify(data.date))
        }
        if(data.time != null) {
          this.deigmaThhlastikwn.time = JSON.parse(JSON.stringify(data.time))
          this.returnedObject.time = JSON.parse(JSON.stringify(data.time))
        }
        if(data.diarkeia != null) {
          this.deigmaThhlastikwn.diarkeia = JSON.parse(JSON.stringify(data.diarkeia))
          this.returnedObject.diarkeia = JSON.parse(JSON.stringify(data.diarkeia))
        }
        if(data.tuposVlasthshs != null) {
          this.deigmaThhlastikwn.tuposVlasthshs = JSON.parse(JSON.stringify(data.tuposVlasthshs))
          this.returnedObject.tuposVlasthshs = JSON.parse(JSON.stringify(data.tuposVlasthshs))
        }
        if(data.tuposOikotopou != null){
          this.deigmaThhlastikwn.tuposOikotopou = JSON.parse(JSON.stringify(data.tuposOikotopou))
          this.returnedObject.tuposOikotopou = JSON.parse(JSON.stringify(data.tuposOikotopou))
        }
        if(data.epifaneiaDeigmatolhpsias != null){
          this.deigmaThhlastikwn.epifaneiaDeigmatolhpsias = JSON.parse(JSON.stringify(data.epifaneiaDeigmatolhpsias))
          this.returnedObject.epifaneiaDeigmatolhpsias = JSON.parse(JSON.stringify(data.epifaneiaDeigmatolhpsias))
        }
        if(data.latitudeEGSA != null){
          this.deigmaThhlastikwn.latitudeEGSA = JSON.parse(JSON.stringify(data.latitudeEGSA))
          this.returnedObject.latitudeEGSA = JSON.parse(JSON.stringify(data.latitudeEGSA))
        }
        if(data.longitudeEGSA != null){
          this.deigmaThhlastikwn.longitudeEGSA = JSON.parse(JSON.stringify(data.longitudeEGSA))
          this.returnedObject.longitudeEGSA = JSON.parse(JSON.stringify(data.longitudeEGSA))
        }
        if(data.latitudeWGS84 != null){
          this.deigmaThhlastikwn.latitudeWGS84 = JSON.parse(JSON.stringify(data.latitudeWGS84))
          this.returnedObject.latitudeWGS84 = JSON.parse(JSON.stringify(data.latitudeWGS84))
        }
        if(data.longitudeWGS84 != null){
          this.deigmaThhlastikwn.longitudeWGS84 = JSON.parse(JSON.stringify(data.longitudeWGS84))
          this.returnedObject.longitudeWGS84 = JSON.parse(JSON.stringify(data.longitudeWGS84))
        }
        if(data.gridCell != null){
          this.deigmaThhlastikwn.gridCell = JSON.parse(JSON.stringify(data.gridCell))
          this.returnedObject.gridCell = JSON.parse(JSON.stringify(data.gridCell))
        }
        if(data.kwdikosNatura != null){
          this.deigmaThhlastikwn.kwdikosNatura = JSON.parse(JSON.stringify(data.kwdikosNatura))
          this.returnedObject.kwdikosNatura = JSON.parse(JSON.stringify(data.kwdikosNatura))
        }
        if(data.methodosDeigmatolhpsias != null){
          this.deigmaThhlastikwn.methodosDeigmatolhpsias = JSON.parse(JSON.stringify(data.methodosDeigmatolhpsias))
          this.returnedObject.methodosDeigmatolhpsias = JSON.parse(JSON.stringify(data.methodosDeigmatolhpsias))
        }
        if(data.parathrhseis != null){
          this.deigmaThhlastikwn.parathrhseis = JSON.parse(JSON.stringify(data.parathrhseis))
          this.returnedObject.parathrhseis = JSON.parse(JSON.stringify(data.parathrhseis))
        }
        if(data.nomos != null){
          this.deigmaThhlastikwn.nomos = JSON.parse(JSON.stringify(data.nomos))
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
          (this.deigmaThhlastikwn.kwdikosDeigmatolhpsias == this.returnedObject.kwdikosDeigmatolhpsias || (this.deigmaThhlastikwn.kwdikosDeigmatolhpsias == '' && this.returnedObject.kwdikosDeigmatolhpsias == null))
          && (this.deigmaThhlastikwn.xrhmatodothsh == this.returnedObject.xrhmatodothsh || (this.deigmaThhlastikwn.xrhmatodothsh == '' && this.returnedObject.xrhmatodothsh == null))
          && (this.deigmaThhlastikwn.ereunhths == this.returnedObject.ereunhths || (this.deigmaThhlastikwn.ereunhths == '' && this.returnedObject.ereunhths == null))
          && (this.deigmaThhlastikwn.topothesia == this.returnedObject.topothesia || (this.deigmaThhlastikwn.topothesia == '' && this.returnedObject.topothesia == null))
          && (this.deigmaThhlastikwn.date == this.returnedObject.date || (this.deigmaThhlastikwn.date == '' && this.returnedObject.date == null))
          && (this.deigmaThhlastikwn.time == this.returnedObject.time || (this.deigmaThhlastikwn.time == '' && this.returnedObject.time == null))
          && (this.deigmaThhlastikwn.diarkeia == this.returnedObject.diarkeia || (this.deigmaThhlastikwn.diarkeia == '' && this.returnedObject.diarkeia == null))
          && (this.deigmaThhlastikwn.tuposVlasthshs == this.returnedObject.tuposVlasthshs || (this.deigmaThhlastikwn.tuposVlasthshs == '' && this.returnedObject.tuposVlasthshs == null))
          && (this.deigmaThhlastikwn.tuposOikotopou == this.returnedObject.tuposOikotopou || (this.deigmaThhlastikwn.tuposOikotopou == '' && this.returnedObject.tuposOikotopou == null))
          && (this.deigmaThhlastikwn.epifaneiaDeigmatolhpsias == this.returnedObject.epifaneiaDeigmatolhpsias || (this.deigmaThhlastikwn.epifaneiaDeigmatolhpsias == '' && this.returnedObject.epifaneiaDeigmatolhpsias == null))
          && (this.deigmaThhlastikwn.latitudeEGSA == this.returnedObject.latitudeEGSA || (this.deigmaThhlastikwn.latitudeEGSA == '' && this.returnedObject.latitudeEGSA == null))
          && (this.deigmaThhlastikwn.longitudeEGSA == this.returnedObject.longitudeEGSA || (this.deigmaThhlastikwn.longitudeEGSA == '' && this.returnedObject.longitudeEGSA == null))
          && (this.deigmaThhlastikwn.latitudeWGS84 == this.returnedObject.latitudeWGS84 || (this.deigmaThhlastikwn.latitudeWGS84 == '' && this.returnedObject.latitudeWGS84 == null))
          && (this.deigmaThhlastikwn.longitudeWGS84 == this.returnedObject.longitudeWGS84 || (this.deigmaThhlastikwn.longitudeWGS84 == '' && this.returnedObject.longitudeWGS84 == null))
          && (this.deigmaThhlastikwn.gridCell == this.returnedObject.gridCell || (this.deigmaThhlastikwn.gridCell == '' && this.returnedObject.gridCell == null))
          && (this.deigmaThhlastikwn.kwdikosNatura == this.returnedObject.kwdikosNatura || (this.deigmaThhlastikwn.kwdikosNatura == '' && this.returnedObject.kwdikosNatura == null))
          && (this.deigmaThhlastikwn.methodosDeigmatolhpsias == this.returnedObject.methodosDeigmatolhpsias || (this.deigmaThhlastikwn.methodosDeigmatolhpsias == '' && this.returnedObject.methodosDeigmatolhpsias == null))
          && (this.deigmaThhlastikwn.parathrhseis == this.returnedObject.parathrhseis || (this.deigmaThhlastikwn.parathrhseis == '' && this.returnedObject.parathrhseis == null))
          && (this.deigmaThhlastikwn.nomos == this.returnedObject.nomos || (this.deigmaThhlastikwn.nomos == '' && this.returnedObject.nomos == null))
        ){ 
        return true
      }
    },
    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData(){
      let patchedDeigmaThhlastikwn = {}

      // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)
      // Checks of types are being done without `typeof` because the v-model's value changes to String when the user Backspaces the id to type the new one which will be as : '3'. It still works normally but can't use typeof.
      if( this.deigmaThhlastikwn.kwdikosDeigmatolhpsias == '' && this.returnedObject.kwdikosDeigmatolhpsias != null ) {
        patchedDeigmaThhlastikwn.kwdikosDeigmatolhpsias = ''
      } else if( this.deigmaThhlastikwn.kwdikosDeigmatolhpsias != '' && this.deigmaThhlastikwn.kwdikosDeigmatolhpsias != this.returnedObject.kwdikosDeigmatolhpsias) {
        patchedDeigmaThhlastikwn.kwdikosDeigmatolhpsias = this.deigmaThhlastikwn.kwdikosDeigmatolhpsias
      }

      if( this.deigmaThhlastikwn.xrhmatodothsh == '' && this.returnedObject.xrhmatodothsh != null ) {
        patchedDeigmaThhlastikwn.xrhmatodothsh = ''
      } else if( this.deigmaThhlastikwn.xrhmatodothsh != '' && this.deigmaThhlastikwn.xrhmatodothsh != this.returnedObject.xrhmatodothsh) {
        patchedDeigmaThhlastikwn.xrhmatodothsh = this.deigmaThhlastikwn.xrhmatodothsh
      }

      if( this.deigmaThhlastikwn.ereunhths == '' && this.returnedObject.ereunhths != null ) {
        patchedDeigmaThhlastikwn.ereunhths = ''
      } else if( this.deigmaThhlastikwn.ereunhths != '' && this.deigmaThhlastikwn.ereunhths != this.returnedObject.ereunhths) {
        patchedDeigmaThhlastikwn.ereunhths = this.deigmaThhlastikwn.ereunhths
      }

      if( this.deigmaThhlastikwn.topothesia == '' && this.returnedObject.topothesia != null ) {
        patchedDeigmaThhlastikwn.topothesia = ''
      } else if( this.deigmaThhlastikwn.topothesia != '' && this.deigmaThhlastikwn.topothesia != this.returnedObject.topothesia) {
        patchedDeigmaThhlastikwn.topothesia = this.deigmaThhlastikwn.topothesia
      }

      if( this.deigmaThhlastikwn.date == '' && this.returnedObject.date != null ) {
        patchedDeigmaThhlastikwn.date = ''
      } else if( this.deigmaThhlastikwn.date != '' && this.deigmaThhlastikwn.date != this.returnedObject.date) {
        patchedDeigmaThhlastikwn.date = this.deigmaThhlastikwn.date
      }

      if( this.deigmaThhlastikwn.time == '' && this.returnedObject.time != null ) {
        patchedDeigmaThhlastikwn.time = ''
      } else if( this.deigmaThhlastikwn.time != '' && this.deigmaThhlastikwn.time != this.returnedObject.time ) {
        patchedDeigmaThhlastikwn.time = this.deigmaThhlastikwn.time
      }

      if( this.deigmaThhlastikwn.diarkeia == '' && this.returnedObject.diarkeia != null ) {
        patchedDeigmaThhlastikwn.diarkeia = ''
      } else if( this.deigmaThhlastikwn.diarkeia != '' && this.deigmaThhlastikwn.diarkeia != this.returnedObject.diarkeia ) {
        patchedDeigmaThhlastikwn.diarkeia = this.deigmaThhlastikwn.diarkeia
      }

      if( this.deigmaThhlastikwn.tuposVlasthshs == '' && this.returnedObject.tuposVlasthshs != null ) {
        patchedDeigmaThhlastikwn.tuposVlasthshs = ''
      } else if( this.deigmaThhlastikwn.tuposVlasthshs != '' && this.deigmaThhlastikwn.tuposVlasthshs != this.returnedObject.tuposVlasthshs ) {
        patchedDeigmaThhlastikwn.tuposVlasthshs = this.deigmaThhlastikwn.tuposVlasthshs
      }

      if( this.deigmaThhlastikwn.tuposOikotopou == '' && this.returnedObject.tuposOikotopou != null ) {
        patchedDeigmaThhlastikwn.tuposOikotopou = ''
      } else if( this.deigmaThhlastikwn.tuposOikotopou != '' && this.deigmaThhlastikwn.tuposOikotopou != this.returnedObject.tuposOikotopou ) {
        patchedDeigmaThhlastikwn.tuposOikotopou = this.deigmaThhlastikwn.tuposOikotopou
      }

      if( this.deigmaThhlastikwn.epifaneiaDeigmatolhpsias === '' && this.returnedObject.epifaneiaDeigmatolhpsias != null ) {
        patchedDeigmaThhlastikwn.epifaneiaDeigmatolhpsias = ''
      } else if( this.deigmaThhlastikwn.epifaneiaDeigmatolhpsias != '' && this.deigmaThhlastikwn.epifaneiaDeigmatolhpsias != this.returnedObject.epifaneiaDeigmatolhpsias ) {
        patchedDeigmaThhlastikwn.epifaneiaDeigmatolhpsias = this.deigmaThhlastikwn.epifaneiaDeigmatolhpsias
      }

      if( this.deigmaThhlastikwn.latitudeEGSA === '' && this.returnedObject.latitudeEGSA != null ) {
        patchedDeigmaThhlastikwn.latitudeEGSA = ''
      } else if( this.deigmaThhlastikwn.latitudeEGSA != '' && this.deigmaThhlastikwn.latitudeEGSA != this.returnedObject.latitudeEGSA ) {
        patchedDeigmaThhlastikwn.latitudeEGSA = this.deigmaThhlastikwn.latitudeEGSA
      }

      if( this.deigmaThhlastikwn.longitudeEGSA === '' && this.returnedObject.longitudeEGSA != null ) {
        patchedDeigmaThhlastikwn.longitudeEGSA = ''
      } else if( this.deigmaThhlastikwn.longitudeEGSA != '' && this.deigmaThhlastikwn.longitudeEGSA != this.returnedObject.longitudeEGSA ) {
        patchedDeigmaThhlastikwn.longitudeEGSA = this.deigmaThhlastikwn.longitudeEGSA
      }

      if( this.deigmaThhlastikwn.latitudeWGS84 === '' && this.returnedObject.latitudeWGS84 != null ) {
        patchedDeigmaThhlastikwn.latitudeWGS84 = ''
      } else if( this.deigmaThhlastikwn.latitudeWGS84 != '' && this.deigmaThhlastikwn.latitudeWGS84 != this.returnedObject.latitudeWGS84 ) {
        patchedDeigmaThhlastikwn.latitudeWGS84 = this.deigmaThhlastikwn.latitudeWGS84
      }

      if( this.deigmaThhlastikwn.longitudeWGS84 === '' && this.returnedObject.longitudeWGS84 != null ) {
        patchedDeigmaThhlastikwn.longitudeWGS84 = ''
      } else if( this.deigmaThhlastikwn.longitudeWGS84 != '' && this.deigmaThhlastikwn.longitudeWGS84 != this.returnedObject.longitudeWGS84 ) {
        patchedDeigmaThhlastikwn.longitudeWGS84 = this.deigmaThhlastikwn.longitudeWGS84
      }

      if( this.deigmaThhlastikwn.gridCell == '' && this.returnedObject.gridCell != null ) {
        patchedDeigmaThhlastikwn.gridCell = ''
      } else if( this.deigmaThhlastikwn.gridCell != '' && this.deigmaThhlastikwn.gridCell != this.returnedObject.gridCell ) {
        patchedDeigmaThhlastikwn.gridCell = this.deigmaThhlastikwn.gridCell
      }

      if( this.deigmaThhlastikwn.kwdikosNatura == '' && this.returnedObject.kwdikosNatura != null ) {
        patchedDeigmaThhlastikwn.kwdikosNatura = ''
      } else if( this.deigmaThhlastikwn.kwdikosNatura != '' && this.deigmaThhlastikwn.kwdikosNatura != this.returnedObject.kwdikosNatura ) {
        patchedDeigmaThhlastikwn.kwdikosNatura = this.deigmaThhlastikwn.kwdikosNatura
      }

      if( this.deigmaThhlastikwn.methodosDeigmatolhpsias == '' && this.returnedObject.methodosDeigmatolhpsias != null ) {
        patchedDeigmaThhlastikwn.methodosDeigmatolhpsias = ''
      } else if( this.deigmaThhlastikwn.methodosDeigmatolhpsias != '' && this.deigmaThhlastikwn.methodosDeigmatolhpsias != this.returnedObject.methodosDeigmatolhpsias ) {
        patchedDeigmaThhlastikwn.methodosDeigmatolhpsias = this.deigmaThhlastikwn.methodosDeigmatolhpsias
      }

      if( this.deigmaThhlastikwn.parathrhseis == '' && this.returnedObject.parathrhseis != null ) {
        patchedDeigmaThhlastikwn.parathrhseis = ''
      } else if( this.deigmaThhlastikwn.parathrhseis != '' && this.deigmaThhlastikwn.parathrhseis != this.returnedObject.parathrhseis ) {
        patchedDeigmaThhlastikwn.parathrhseis = this.deigmaThhlastikwn.parathrhseis
      }

      if( this.deigmaThhlastikwn.nomos == '' && this.returnedObject.nomos != null ) {
        patchedDeigmaThhlastikwn.nomos = ''
        console.log('1o')
      } else if( this.deigmaThhlastikwn.nomos != '' && this.deigmaThhlastikwn.nomos != this.returnedObject.nomos ) {
        console.log('2o')
        patchedDeigmaThhlastikwn.nomos = this.deigmaThhlastikwn.nomos
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
              this.$router.push('/thhlastika/deigma-thhlastikwn/' + this.id)
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