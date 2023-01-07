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
            <div class="green lighten-4" style="width: 100%; height: 7px;"></div>
            <v-form v-model="validation" ref="form" class="pa-4">
              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Δείγμα Θηλαστικών Id"
                    color="green"
                    v-model="deigmaXPressThreat.deigmaOrnithopanida.id"
                    :rules="deigmaOrnithopanidaidRules"
                    required
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-autocomplete
                    label="Ct Πίεσης"
                    color="green"
                    :items="ctActCodesList"
                    v-model="deigmaXPressThreat.ctornithopanidaPressuresAndThreats.actCode"
                    :rules="ctActCodeRules"
                    no-data-text="Δεν βρέθηκαν δεδομένα"
                    required
                  >
                  </v-autocomplete>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 lg3 my-4>
                  <v-text-field
                    label="Κωδικός είδους"
                    color="green"
                    v-model="deigmaXPressThreat.kodikos"
                    :counter="50"
                    :rules="kodikosules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 lg3 my-4>
                  <v-text-field
                    label="Τύπος πίεσης"
                    color="green"
                    v-model="deigmaXPressThreat.type"
                    :counter="50"
                    :rules="typeRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md6 lg3 my-4>
                  <v-text-field
                    label="Σημασία"
                    color="green"
                    v-model="deigmaXPressThreat.importance"
                    :counter="50"
                    :rules="importanceRules"
                  >
                  </v-text-field>
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
      title: 'Δειγματοληψία Χ Πίεσης Θηλαστικών - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Επεξεργασία συγκεκριμένης Δειγματοληψίας Χ Πίεσης Θηλαστικών για τη διαχείρηση δεδομένων των Δειγματοληψιών Χ Πιέσεων Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Δείγματος X Πίεσης με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Δείγμα X Πίεσης που επιθυμείτε'
      },
      noElements: null,
      deigmaXPressThreat: {
        id: '',
        deigmaOrnithopanida: {
          id: ''
        },
        ctornithopanidaPressuresAndThreatssThreats: {
          actCode: ''
        },
        kodikos: '',
        type: '',
        importance: ''
      },
      
      returnedObject: {
        id: '',
        deigmaOrnithopanida: {
          id: ''
        },
        ctornithopanidaPressuresAndThreats: {
          actCode: ''
        },
        kodikos: null,
        type: null,
        importance: null
      },
      ctActCodesList: [],
      validation: false,

      deigmaOrnithopanidaIdRules: [
        v => !!v || 'Συμπληρώστε το πεδίο Δείγματος θηλαστικού',
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],
      ctActCodeRules: [
        v => !!v || 'Συμπληρώστε το πεδίο Ct Τύπου Πίεσης',
        v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'
      ],
      kodikosRules: [
        v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'
      ],
      typeRules: [
        v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'
      ],
      importanceRules: [
        v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'
      ],

      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    // Getting the distinct Ct Eidh for autocomplete list
    getDistinctUrl(){
      return this.$store.getters.getOrnithopanidaCtPressThreatsDistinctUrl
    },
    getByIdUrl(){
      return this.$store.getters.getOrnithopanidaXPressThreatsByIdUrl
    },
    id(){
      return this.$route.params.id
    }
  },
  mounted() {
    this.restCall(this.id)
    // Getting CtActCodes
    this.getCtActCodes()
  },
  methods: {
    // Getting CtActCodes for select lists
    getCtActCodes() {
      this.$axios.get(this.getDistinctUrl)
        .then(response => {
          if(response.data.length == []) {
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα Ct Πίεσης.'
            this.snackbar = true
          } else {
            // Filling the CtActCodes list for the user
            this.ctActCodesList = response.data
          }
        })
        .catch(err => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την εύρεση Ct Πίεσης.'
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
    checkForNulls(data){
      if(data.deigmaOrnithopanida != null && data.ctornithopanidaPressuresAndThreats != null && data.kodikos != null
        && data.type != null && data.importance != null && data.fulo != null && data.plhthos != null && data.eokParII != null
        && data.eokParIV != null && data.eokParV != null ){
        // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
        this.deigmaXPressThreat = JSON.parse(JSON.stringify(data))
        this.returnedObject = JSON.parse(JSON.stringify(data))
      } else {
        if(data.deigmaOrnithopanida != null) {
          this.deigmaXPressThreat.deigmaOrnithopanida.id = JSON.parse(JSON.stringify(data.deigmaOrnithopanida.id))
          this.returnedObject.deigmaOrnithopanida.id = JSON.parse(JSON.stringify(data.deigmaOrnithopanida.id))
        }
        if(data.ctornithopanidaPressuresAndThreats != null) {
          this.deigmaXPressThreat.ctornithopanidaPressuresAndThreats.actCode = JSON.parse(JSON.stringify(data.ctornithopanidaPressuresAndThreats.actCode))
          this.returnedObject.ctornithopanidaPressuresAndThreats.actCode = JSON.parse(JSON.stringify(data.ctornithopanidaPressuresAndThreats.actCode))
        }
        if(data.kodikos != null) {
          this.deigmaXPressThreat.kodikos = JSON.parse(JSON.stringify(data.kodikos))
          this.returnedObject.kodikos = JSON.parse(JSON.stringify(data.kodikos))
        }
        if(data.pressThreat != null) {
          this.deigmaXPressThreat.type = JSON.parse(JSON.stringify(data.type))
          this.returnedObject.type = JSON.parse(JSON.stringify(data.type))
        }
        if(data.importance != null) {
          this.deigmaXPressThreat.importance = JSON.parse(JSON.stringify(data.importance))
          this.returnedObject.importance = JSON.parse(JSON.stringify(data.importance))
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
            this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Δείγμα X Πίεσης που επιθυμείτε'
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
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση του Δείγμα X Πίεσης'
          this.snackbar = true
          throw err
        })
    },
    // Checking if the user is submitting to send the same data
    checkForSavingTheSame(){
      if (
          (this.deigmaXPressThreat.deigmaOrnithopanida.id == this.returnedObject.deigmaOrnithopanida.id || (this.deigmaXPressThreat.deigmaOrnithopanida.id == '' && this.returnedObject.deigmaOrnithopanida.id == null))
          && (this.deigmaXPressThreat.ctornithopanidaPressuresAndThreats.actCode == this.returnedObject.ctornithopanidaPressuresAndThreats.actCode || (this.deigmaXPressThreat.ctornithopanidaPressuresAndThreats.actCode == '' && this.returnedObject.ctornithopanidaPressuresAndThreats.actCode == null))
          && (this.deigmaXPressThreat.kodikos == this.returnedObject.kodikos || (this.deigmaXPressThreat.kodikos == '' && this.returnedObject.kodikos == null))
          && (this.deigmaXPressThreat.type == this.returnedObject.type || (this.deigmaXPressThreat.type == '' && this.returnedObject.type == null))
          && (this.deigmaXPressThreat.importance == this.returnedObject.importance || (this.deigmaXPressThreat.importance == '' && this.returnedObject.importance == null))
        ){ 
        return true
      }
    },
    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData(){
      let patchedDeigmaX = {}

      // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)
      // Checks of types are being done without `typeof` because the v-model's value changes to String when the user Backspaces the id to type the new one which will be as : '3'. It still works normally but can't use typeof.
      if( this.deigmaXPressThreat.deigmaOrnithopanida.id === '' && this.returnedObject.deigmaOrnithopanida.id != null ) {
        patchedDeigmaX.deigmaornithopanidaID = ''
      } else if( this.deigmaXPressThreat.deigmaOrnithopanida.id != this.returnedObject.deigmaOrnithopanida.id) {
        patchedDeigmaX.deigmaornithopanidaID = this.deigmaXPressThreat.deigmaOrnithopanida.id
      }

      if( this.deigmaXPressThreat.ctornithopanidaPressuresAndThreats.actCode == '' && this.returnedObject.ctornithopanidaPressuresAndThreats.actCode != null ) {
        patchedDeigmaX.ctActCode = ''
      } else if( this.deigmaXPressThreat.ctornithopanidaPressuresAndThreats.actCode != '' && this.deigmaXPressThreat.ctornithopanidaPressuresAndThreats.actCode != this.returnedObject.ctornithopanidaPressuresAndThreats.actCode) {
        patchedDeigmaX.ctActCode = this.deigmaXPressThreat.ctornithopanidaPressuresAndThreats.actCode
      }

      if( this.deigmaXPressThreat.kodikos == '' && this.returnedObject.kodikos != null ) {
        patchedDeigmaX.kodikos = ''
      } else if( this.deigmaXPressThreat.kodikos != '' && this.deigmaXPressThreat.kodikos != this.returnedObject.kodikos) {
        patchedDeigmaX.kodikos = this.deigmaXPressThreat.kodikos
      }

      if( this.deigmaXPressThreat.type == '' && this.returnedObject.type != null ) {
        patchedDeigmaX.type = ''
      } else if( this.deigmaXPressThreat.type != '' && this.deigmaXPressThreat.type != this.returnedObject.type) {
        patchedDeigmaX.type = this.deigmaXPressThreat.type
      }

      if( this.deigmaXPressThreat.importance == '' && this.returnedObject.importance != null ) {
        patchedDeigmaX.importance = ''
      } else if( this.deigmaXPressThreat.importance != '' && this.deigmaXPressThreat.importance != this.returnedObject.importance) {
        patchedDeigmaX.importance = this.deigmaXPressThreat.importance
      }

      return patchedDeigmaX
    },
    saveChanges(){
      // Checking for the values that will be Patched after the user's changes
      if ( this.checkForSavingTheSame() == true ) {
        this.snackbarColor = 'red'
        this.snackbarText = 'Δεν πραγματοποιήσατε καμία αλλαγή στα πεδία'
        this.snackbar = true
      } else {
        // Checking for null - '' values and doing the request
        let patchedDeigmaX = this.checkValuesOfSendingData()
        this.$axios.patch(this.getByIdUrl + this.id, patchedDeigmaX)
          .then(response => {
            if(response.data == false) {
              this.snackbarColor = 'red'
              this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν'
              this.snackbar = true
            } else if(response.data == true) {
              this.snackbarColor = 'green'
              this.snackbarText = 'Οι αλλαγές σας αποθηκεύθηκαν επιτυχώς'
              this.snackbar = true
              this.$router.push('/ornithopanida/deigma-ornithopanida-x-press-threats/' + this.id)
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