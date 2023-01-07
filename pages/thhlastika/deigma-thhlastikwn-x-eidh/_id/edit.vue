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
                    label="Δείγμα Θηλαστικών Id"
                    color="green"
                    v-model="deigmaXEidos.deigmaThhlastikwn.id"
                    :rules="deigmaThhlastikwnIdRules"
                    required
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-autocomplete
                    label="Ct Είδους"
                    color="green"
                    :items="ctEidhList"
                    v-model="deigmaXEidos.ctThhlastikaEidh.eidos"
                    :rules="ctEidosRules"
                    no-data-text="Δεν βρέθηκαν δεδομένα"
                    required
                  >
                  </v-autocomplete>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Σχετική αφθονία"
                    color="green"
                    v-model="deigmaXEidos.sxetikhAfthonia"
                    :counter="255"
                    :rules="sxetikhAfthoniaRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Αριθμός ατόμων"
                    color="green"
                    v-model="deigmaXEidos.plhthos"
                    :rules="plhthosRules"
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Ηλικία"
                    color="green"
                    v-model="deigmaXEidos.hlikia"
                    :counter="255"
                    :rules="hlikiaRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Φύλο"
                    color="green"
                    v-model="deigmaXEidos.fulo"
                    :counter="255"
                    :rules="fuloRules"
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md2 my-4>
                  <v-autocomplete
                    label="ΕΟΚ Παρ II"
                    color="green"
                    v-model="deigmaXEidos.eokParII"
                    :items="eokParList"
                  >
                  </v-autocomplete>
                </v-flex>
                <v-flex xs12 md2 my-4>
                  <v-autocomplete
                    label="ΕΟΚ Παρ IV"
                    color="green"
                    v-model="deigmaXEidos.eokParIV"
                    :items="eokParList"
                  >
                  </v-autocomplete>
                </v-flex>
                <v-flex xs12 md2 my-4>
                  <v-autocomplete
                    label="ΕΟΚ Παρ V"
                    color="green"
                    v-model="deigmaXEidos.eokParV"
                    :items="eokParList"
                  >
                  </v-autocomplete>
                </v-flex>
              </v-layout>

              <v-layout justify-center>
                <v-flex xs12 md10 my-4>
                  <v-textarea
                    label="Παρατηρήσεις"
                    color="green"
                    v-model="deigmaXEidos.parathrhseis"
                    :counter="255"
                    :rules="parathrhseisRules"
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
      title: 'Δειγματοληψία Χ Είδους Θηλαστικών - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Επεξεργασία συγκεκριμένης Δειγματοληψίας Χ Είδους Θηλαστικών για τη διαχείρηση δεδομένων των Δειγματοληψιών Χ Ειδών Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Δείγματος X Είδους με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Δείγμα X Είδος που επιθυμείτε'
      },
      noElements: null,
      deigmaXEidos: {
        id: '',
        deigmaThhlastikwn: {
          id: ''
        },
        ctThhlastikaEidh: {
          eidos: ''
        },
        sxetikhAfthonia: '',
        parathrhseis: '',
        hlikia: '',
        fulo: '',
        plhthos: '',
        eokParII: '',
        eokParIV: '',
        eokParV: '',
      },
      
      returnedObject: {
        id: '',
        deigmaThhlastikwn: {
          id: ''
        },
        ctThhlastikaEidh: {
          eidos: ''
        },
        sxetikhAfthonia: null,
        parathrhseis: null,
        hlikia: null,
        fulo: null,
        plhthos: null,
        eokParII: null,
        eokParIV: null,
        eokParV: null,
      },
      ctEidhList: [],
      eokParList: [ true, false ],
      validation: false,

      deigmaThhlastikwnIdRules: [
        v => !!v || 'Συμπληρώστε το πεδίο Δείγματος θηλαστικού',
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],
      ctEidosRules: [
        v => !!v || 'Συμπληρώστε το πεδίο Ct Είδους',
        v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'
      ],
      sxetikhAfthoniaRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      parathrhseisRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      hlikiaRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      fuloRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      plhthosRules: [
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
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
      return this.$store.getters.getThhlastikaCtEidosDistinctUrl
    },
    getByIdUrl(){
      return this.$store.getters.getThhlastikaXEidhByIdUrl
    },
    id(){
      return this.$route.params.id
    }
  },
  mounted() {
    this.restCall(this.id)
    // Getting CtEidh
    this.getCtEidh()
  },
  methods: {
    // Getting CtEidh for select lists
    getCtEidh() {
      this.$axios.get(this.getDistinctUrl)
        .then(response => {
          if(response.data.length == []) {
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα Ct Είδη.'
            this.snackbar = true
          } else {
            // Filling the CtEidh list for the user
            this.ctEidhList = response.data
          }
        })
        .catch(err => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την εύρεση Ct Ειδών.'
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
      if(data.deigmaThhlastikwn != null && data.ctThhlastikaEidh != null && data.sxetikhAfthonia != null
        && data.parathrhseis != null && data.hlikia != null && data.fulo != null && data.plhthos != null && data.eokParII != null
        && data.eokParIV != null && data.eokParV != null ){
        // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
        this.deigmaXEidos = JSON.parse(JSON.stringify(data))
        this.returnedObject = JSON.parse(JSON.stringify(data))
      } else {
        if(data.deigmaThhlastikwn != null) {
          this.deigmaXEidos.deigmaThhlastikwn.id = JSON.parse(JSON.stringify(data.deigmaThhlastikwn.id))
          this.returnedObject.deigmaThhlastikwn.id = JSON.parse(JSON.stringify(data.deigmaThhlastikwn.id))
        }
        if(data.ctThhlastikaEidh != null) {
          this.deigmaXEidos.ctThhlastikaEidh.eidos = JSON.parse(JSON.stringify(data.ctThhlastikaEidh.eidos))
          this.returnedObject.ctThhlastikaEidh.eidos = JSON.parse(JSON.stringify(data.ctThhlastikaEidh.eidos))
        }
        if(data.sxetikhAfthonia != null) {
          this.deigmaXEidos.sxetikhAfthonia = JSON.parse(JSON.stringify(data.sxetikhAfthonia))
          this.returnedObject.sxetikhAfthonia = JSON.parse(JSON.stringify(data.sxetikhAfthonia))
        }
        if(data.parathrhseis != null) {
          this.deigmaXEidos.parathrhseis = JSON.parse(JSON.stringify(data.parathrhseis))
          this.returnedObject.parathrhseis = JSON.parse(JSON.stringify(data.parathrhseis))
        }
        if(data.hlikia != null) {
          this.deigmaXEidos.hlikia = JSON.parse(JSON.stringify(data.hlikia))
          this.returnedObject.hlikia = JSON.parse(JSON.stringify(data.hlikia))
        }
        if(data.fulo != null) {
          this.deigmaXEidos.fulo = JSON.parse(JSON.stringify(data.fulo))
          this.returnedObject.fulo = JSON.parse(JSON.stringify(data.fulo))
        }
        if(data.plhthos != null) {
          this.deigmaXEidos.plhthos = JSON.parse(JSON.stringify(data.plhthos))
          this.returnedObject.plhthos = JSON.parse(JSON.stringify(data.plhthos))
        }
        if(data.eokParII != null) {
          this.deigmaXEidos.eokParII = JSON.parse(JSON.stringify(data.eokParII))
          this.returnedObject.eokParII = JSON.parse(JSON.stringify(data.eokParII))
        }
        if(data.eokParIV != null) {
          this.deigmaXEidos.eokParIV = JSON.parse(JSON.stringify(data.eokParIV))
          this.returnedObject.eokParIV = JSON.parse(JSON.stringify(data.eokParIV))
        }
        if(data.eokParV != null) {
          this.deigmaXEidos.eokParV = JSON.parse(JSON.stringify(data.eokParV))
          this.returnedObject.eokParV = JSON.parse(JSON.stringify(data.eokParV))
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
            this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Δείγμα X Είδος που επιθυμείτε'
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
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση του Δείγμα X Είδος'
          this.snackbar = true
          throw err
        })
    },
    // Checking if the user is submitting to send the same data
    checkForSavingTheSame(){
      if (
          (this.deigmaXEidos.deigmaThhlastikwn.id == this.returnedObject.deigmaThhlastikwn.id || (this.deigmaXEidos.deigmaThhlastikwn.id == '' && this.returnedObject.deigmaThhlastikwn.id == null))
          && (this.deigmaXEidos.ctThhlastikaEidh.eidos == this.returnedObject.ctThhlastikaEidh.eidos || (this.deigmaXEidos.ctThhlastikaEidh.eidos == '' && this.returnedObject.ctThhlastikaEidh.eidos == null))
          && (this.deigmaXEidos.sxetikhAfthonia == this.returnedObject.sxetikhAfthonia || (this.deigmaXEidos.sxetikhAfthonia == '' && this.returnedObject.sxetikhAfthonia == null))
          && (this.deigmaXEidos.parathrhseis == this.returnedObject.parathrhseis || (this.deigmaXEidos.parathrhseis == '' && this.returnedObject.parathrhseis == null))
          && (this.deigmaXEidos.hlikia == this.returnedObject.hlikia || (this.deigmaXEidos.hlikia == '' && this.returnedObject.hlikia == null))
          && (this.deigmaXEidos.fulo == this.returnedObject.fulo || (this.deigmaXEidos.fulo == '' && this.returnedObject.fulo == null))
          && (this.deigmaXEidos.plhthos == this.returnedObject.plhthos || (this.deigmaXEidos.plhthos == '' && this.returnedObject.plhthos == null))
          && (this.deigmaXEidos.eokParII == this.returnedObject.eokParII || (this.deigmaXEidos.eokParII == '' && this.returnedObject.eokParII == null))
          && (this.deigmaXEidos.eokParIV == this.returnedObject.eokParIV || (this.deigmaXEidos.eokParIV == '' && this.returnedObject.eokParIV == null))
          && (this.deigmaXEidos.eokParV == this.returnedObject.eokParV || (this.deigmaXEidos.eokParV == '' && this.returnedObject.eokParV == null))
        ){ 
        return true
      }
    },
    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData(){
      let patchedDeigmaX = {}

      // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)
      // Checks of types are being done without `typeof` because the v-model's value changes to String when the user Backspaces the id to type the new one which will be as : '3'. It still works normally but can't use typeof.
      if( this.deigmaXEidos.deigmaThhlastikwn.id === '' && this.returnedObject.deigmaThhlastikwn.id != null ) {
        patchedDeigmaX.deigmaThhlastikwnId = ''
      } else if( this.deigmaXEidos.deigmaThhlastikwn.id != this.returnedObject.deigmaThhlastikwn.id) {
        patchedDeigmaX.deigmaThhlastikwnId = this.deigmaXEidos.deigmaThhlastikwn.id
      }

      if( this.deigmaXEidos.ctThhlastikaEidh.eidos == '' && this.returnedObject.ctThhlastikaEidh.eidos != null ) {
        patchedDeigmaX.ctEidos = ''
      } else if( this.deigmaXEidos.ctThhlastikaEidh.eidos != '' && this.deigmaXEidos.ctThhlastikaEidh.eidos != this.returnedObject.ctThhlastikaEidh.eidos) {
        patchedDeigmaX.ctEidos = this.deigmaXEidos.ctThhlastikaEidh.eidos
      }

      if( this.deigmaXEidos.sxetikhAfthonia == '' && this.returnedObject.sxetikhAfthonia != null ) {
        patchedDeigmaX.sxetikhAfthonia = ''
      } else if( this.deigmaXEidos.sxetikhAfthonia != '' && this.deigmaXEidos.sxetikhAfthonia != this.returnedObject.sxetikhAfthonia) {
        patchedDeigmaX.sxetikhAfthonia = this.deigmaXEidos.sxetikhAfthonia
      }

      if( this.deigmaXEidos.parathrhseis == '' && this.returnedObject.parathrhseis != null ) {
        patchedDeigmaX.parathrhseis = ''
      } else if( this.deigmaXEidos.parathrhseis != '' && this.deigmaXEidos.parathrhseis != this.returnedObject.parathrhseis) {
        patchedDeigmaX.parathrhseis = this.deigmaXEidos.parathrhseis
      }

      if( this.deigmaXEidos.hlikia == '' && this.returnedObject.hlikia != null ) {
        patchedDeigmaX.hlikia = ''
      } else if( this.deigmaXEidos.hlikia != '' && this.deigmaXEidos.hlikia != this.returnedObject.hlikia) {
        patchedDeigmaX.hlikia = this.deigmaXEidos.hlikia
      }

      if( this.deigmaXEidos.fulo == '' && this.returnedObject.fulo != null ) {
        patchedDeigmaX.fulo = ''
      } else if( this.deigmaXEidos.fulo != '' && this.deigmaXEidos.fulo != this.returnedObject.fulo) {
        patchedDeigmaX.fulo = this.deigmaXEidos.fulo
      }

      if( this.deigmaXEidos.plhthos == '' && this.returnedObject.plhthos != null ) {
        patchedDeigmaX.plhthos = ''
      } else if( this.deigmaXEidos.plhthos != '' && this.deigmaXEidos.plhthos != this.returnedObject.plhthos) {
        patchedDeigmaX.plhthos = this.deigmaXEidos.plhthos
      }

      // We have to use 2 `if` statements instead of `else if` because we it always checks the first if so it doesn't pass through the second (it has to check the first in case of it being null inittially)
      if( this.deigmaXEidos.eokParII === '' && this.returnedObject.eokParII != null ) {
        patchedDeigmaX.eokParII = ''
      } else if( (this.deigmaXEidos.eokParII == true || this.deigmaXEidos.eokParII == false) && this.deigmaXEidos.eokParII != this.returnedObject.eokParII ) {
        patchedDeigmaX.eokParII = this.deigmaXEidos.eokParII
      }

      if( this.deigmaXEidos.eokParIV === '' && this.returnedObject.eokParIV != null ) {
        patchedDeigmaX.eokParIV = ''
      } else if( (this.deigmaXEidos.eokParIV == true || this.deigmaXEidos.eokParIV == false) && this.deigmaXEidos.eokParIV != this.returnedObject.eokParIV ) {
        patchedDeigmaX.eokParIV = this.deigmaXEidos.eokParIV
      }

      if( this.deigmaXEidos.eokParV === '' && this.returnedObject.eokParV != null ) {
        patchedDeigmaX.eokParV = ''
      } else if( (this.deigmaXEidos.eokParV == true || this.deigmaXEidos.eokParV == false) && this.deigmaXEidos.eokParV != this.returnedObject.eokParV ) {
        patchedDeigmaX.eokParV = this.deigmaXEidos.eokParV
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
              this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/' + this.id)
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