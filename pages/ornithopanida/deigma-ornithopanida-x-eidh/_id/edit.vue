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
                    v-model="deigmaXEidos.deigmaOrnithopanida.id"
                    :rules="deigmataOrnithopanidasidRules"
                    required
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-autocomplete
                    label="Ct Είδους"
                    color="green"
                    :items="ctEidhList"
                    v-model="deigmaXEidos.ctornithopanidaEidi.eidos"
                    :rules="CtkodikoseidosRules"
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
                    v-model="deigmaXEidos.typosparatiriseis"
                    :counter="255"
                    :rules="typosparatiriseisRules"
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Αριθμός ατόμων"
                    color="green"
                    v-model="deigmaXEidos.arithmosatomon"
                    :rules="arithmosatomonRules"
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
                    v-model="deigmaXEidos.ekpar1"
                    :items="eokParList"
                  >
                  </v-autocomplete>
                </v-flex>
                <v-flex xs12 md2 my-4>
                  <v-autocomplete
                    label="ΕΟΚ Παρ IV"
                    color="green"
                    v-model="deigmaXEidos.ekpar2"
                    :items="eokParList"
                  >
                  </v-autocomplete>
                </v-flex>
                <v-flex xs12 md2 my-4>
                  <v-autocomplete
                    label="ΕΟΚ Παρ V"
                    color="green"
                    v-model="deigmaXEidos.ekpar3"
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
                    v-model="deigmaXEidos.paratiriseis"
                    :counter="255"
                    :rules="paratiriseisRules"
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
        deigmaOrnithopanida: {
          id: ''
        },
        ctornithopanidaEidi: {
          eidos: ''
        },
        typosparatiriseis: '',
        paratiriseis: '',
        hlikia: '',
        fulo: '',
        arithmosatomon: '',
        ekpar1: '',
        ekpar2: '',
        ekpar3: '',
      },
      
      returnedObject: {
        id: '',
        deigmaOrnithopanida: {
          id: ''
        },
        ctornithopanidaEidi: {
         eidos: ''
        },
        typosparatiriseis: null,
        paratiriseis: null,
        hlikia: null,
        fulo: null,
        arithmosatomon: null,
        ekpar1: null,
        ekpar2: null,
        ekpar3: null,
      },
      ctEidhList: [],
      eokParList: [ true, false ],
      validation: false,

      deigmataOrnithopanidasidRules: [
        v => !!v || 'Συμπληρώστε το πεδίο Δείγματος θηλαστικού',
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],
      CtkodikoseidosRules: [
        v => !!v || 'Συμπληρώστε το πεδίο Ct Είδους',
        v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'
      ],
      typosparatiriseisRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      paratiriseisRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      hlikiaRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      fuloRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      arithmosatomonRules: [
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
      return this.$store.getters.getOrnithopanidaCtEidosDistinctUrl
    },
    getByIdUrl(){
      return this.$store.getters.getOrnithopanidaXEidhAddUrl
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
      if(data.deigmaOrnithopanida != null && data.ctornithopanidaEidi != null && data.typosparatiriseis != null
        && data.paratiriseis != null && data.hlikia != null && data.fulo != null && data.arithmosatomon != null && data.ekpar1 != null
        && data.ekpar2 != null && data.ekpar3 != null ){
        // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
        this.deigmaXEidos = JSON.parse(JSON.stringify(data))
        this.returnedObject = JSON.parse(JSON.stringify(data))
      } else {
        if(data.deigmaOrnithopanida != null) {
          this.deigmaXEidos.deigmaOrnithopanida.id = JSON.parse(JSON.stringify(data.deigmaOrnithopanida.id))
          this.returnedObject.deigmaOrnithopanida.id = JSON.parse(JSON.stringify(data.deigmaOrnithopanida.id))
        }
        if(data.ctornithopanidaEidi != null) {
          this.deigmaXEidos.ctornithopanidaEidi.eidos = JSON.parse(JSON.stringify(data.ctornithopanidaEidi.eidos))
          this.returnedObject.ctornithopanidaEidi.eidos = JSON.parse(JSON.stringify(data.ctornithopanidaEidi.eidos))
        }
        if(data.typosparatiriseis != null) {
          this.deigmaXEidos.typosparatiriseis = JSON.parse(JSON.stringify(data.typosparatiriseis))
          this.returnedObject.typosparatiriseis = JSON.parse(JSON.stringify(data.typosparatiriseis))
        }
        if(data.paratiriseis != null) {
          this.deigmaXEidos.paratiriseis = JSON.parse(JSON.stringify(data.paratiriseis))
          this.returnedObject.paratiriseis = JSON.parse(JSON.stringify(data.paratiriseis))
        }
        if(data.hlikia != null) {
          this.deigmaXEidos.hlikia = JSON.parse(JSON.stringify(data.hlikia))
          this.returnedObject.hlikia = JSON.parse(JSON.stringify(data.hlikia))
        }
        if(data.fulo != null) {
          this.deigmaXEidos.fulo = JSON.parse(JSON.stringify(data.fulo))
          this.returnedObject.fulo = JSON.parse(JSON.stringify(data.fulo))
        }
        if(data.arithmosatomon != null) {
          this.deigmaXEidos.arithmosatomon = JSON.parse(JSON.stringify(data.arithmosatomon))
          this.returnedObject.arithmosatomon = JSON.parse(JSON.stringify(data.arithmosatomon))
        }
        if(data.ekpar1 != null) {
          this.deigmaXEidos.ekpar1 = JSON.parse(JSON.stringify(data.ekpar1))
          this.returnedObject.ekpar1 = JSON.parse(JSON.stringify(data.ekpar1))
        }
        if(data.ekpar2 != null) {
          this.deigmaXEidos.ekpar2 = JSON.parse(JSON.stringify(data.ekpar2))
          this.returnedObject.ekpar2 = JSON.parse(JSON.stringify(data.ekpar2))
        }
        if(data.ekpar3 != null) {
          this.deigmaXEidos.ekpar3 = JSON.parse(JSON.stringify(data.ekpar3))
          this.returnedObject.ekpar3 = JSON.parse(JSON.stringify(data.ekpar3))
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
          (this.deigmaXEidos.deigmaOrnithopanida.id == this.returnedObject.deigmaOrnithopanida.id || (this.deigmaXEidos.deigmaOrnithopanida.id == '' && this.returnedObject.deigmaOrnithopanida.id == null))
          && (this.deigmaXEidos.ctornithopanidaEidi.eidos == this.returnedObject.ctornithopanidaEidi.eidos || (this.deigmaXEidos.ctornithopanidaEidi.eidos == '' && this.returnedObject.ctornithopanidaEidi.eidos == null))
          && (this.deigmaXEidos.typosparatiriseis == this.returnedObject.typosparatiriseis || (this.deigmaXEidos.typosparatiriseis == '' && this.returnedObject.typosparatiriseis == null))
          && (this.deigmaXEidos.paratiriseis == this.returnedObject.paratiriseis || (this.deigmaXEidos.paratiriseis == '' && this.returnedObject.paratiriseis == null))
          && (this.deigmaXEidos.hlikia == this.returnedObject.hlikia || (this.deigmaXEidos.hlikia == '' && this.returnedObject.hlikia == null))
          && (this.deigmaXEidos.fulo == this.returnedObject.fulo || (this.deigmaXEidos.fulo == '' && this.returnedObject.fulo == null))
          && (this.deigmaXEidos.arithmosatomon == this.returnedObject.arithmosatomon || (this.deigmaXEidos.arithmosatomon == '' && this.returnedObject.arithmosatomon == null))
          && (this.deigmaXEidos.ekpar1 == this.returnedObject.ekpar1 || (this.deigmaXEidos.ekpar1 == '' && this.returnedObject.ekpar1 == null))
          && (this.deigmaXEidos.ekpar2 == this.returnedObject.ekpar2 || (this.deigmaXEidos.ekpar2 == '' && this.returnedObject.ekpar2 == null))
          && (this.deigmaXEidos.ekpar3 == this.returnedObject.ekpar3 || (this.deigmaXEidos.ekpar3 == '' && this.returnedObject.ekpar3 == null))
        ){ 
        return true
      }
    },
    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData(){
      let patchedDeigmaX = {}

      // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)
      // Checks of types are being done without `typeof` because the v-model's value changes to String when the user Backspaces the id to type the new one which will be as : '3'. It still works normally but can't use typeof.
      if( this.deigmaXEidos.deigmaOrnithopanida.id === '' && this.returnedObject.deigmaOrnithopanida.id != null ) {
        patchedDeigmaX.deigmataOrnithopanidasId = ''
      } else if( this.deigmaXEidos.deigmaOrnithopanida.id != this.returnedObject.deigmaOrnithopanida.id) {
        patchedDeigmaX.deigmataOrnithopanidasId = this.deigmaXEidos.deigmaOrnithopanida.id
      }

      if( this.deigmaXEidos.ctornithopanidaEidi.eidos == '' && this.returnedObject.ctornithopanidaEidi.eidos  != null ) {
        patchedDeigmaX.ctEidos = ''
      } else if( this.deigmaXEidos.ctornithopanidaEidi.eidos != '' && this.deigmaXEidos.ctornithopanidaEidi.eidos != this.returnedObject.ctornithopanidaEidi.eidos) {
        patchedDeigmaX.ctEidos = this.deigmaXEidos.ctornithopanidaEidi.eidos
      }

      if( this.deigmaXEidos.typosparatiriseis == '' && this.returnedObject.typosparatiriseis != null ) {
        patchedDeigmaX.typosparatiriseis = ''
      } else if( this.deigmaXEidos.typosparatiriseis != '' && this.deigmaXEidos.typosparatiriseis != this.returnedObject.typosparatiriseis) {
        patchedDeigmaX.typosparatiriseis = this.deigmaXEidos.typosparatiriseis
      }

      if( this.deigmaXEidos.paratiriseis == '' && this.returnedObject.paratiriseis != null ) {
        patchedDeigmaX.paratiriseis = ''
      } else if( this.deigmaXEidos.paratiriseis != '' && this.deigmaXEidos.paratiriseis != this.returnedObject.paratiriseis) {
        patchedDeigmaX.paratiriseis = this.deigmaXEidos.paratiriseis
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

      if( this.deigmaXEidos.arithmosatomon == '' && this.returnedObject.arithmosatomon != null ) {
        patchedDeigmaX.arithmosatomon = ''
      } else if( this.deigmaXEidos.arithmosatomon != '' && this.deigmaXEidos.arithmosatomon != this.returnedObject.arithmosatomon) {
        patchedDeigmaX.arithmosatomon = this.deigmaXEidos.arithmosatomon
      }

      // We have to use 2 `if` statements instead of `else if` because we it always checks the first if so it doesn't pass through the second (it has to check the first in case of it being null inittially)
      if( this.deigmaXEidos.ekpar1 === '' && this.returnedObject.ekpar1 != null ) {
        patchedDeigmaX.ekpar1 = ''
      } else if( (this.deigmaXEidos.ekpar1 == true || this.deigmaXEidos.ekpar1 == false) && this.deigmaXEidos.ekpar1 != this.returnedObject.ekpar1 ) {
        patchedDeigmaX.ekpar1 = this.deigmaXEidos.ekpar1
      }

      if( this.deigmaXEidos.ekpar2 === '' && this.returnedObject.ekpar2 != null ) {
        patchedDeigmaX.ekpar2 = ''
      } else if( (this.deigmaXEidos.ekpar2 == true || this.deigmaXEidos.ekpar2 == false) && this.deigmaXEidos.ekpar2 != this.returnedObject.ekpar2 ) {
        patchedDeigmaX.ekpar2 = this.deigmaXEidos.ekpar2
      }

      if( this.deigmaXEidos.ekpar3 === '' && this.returnedObject.ekpar3 != null ) {
        patchedDeigmaX.ekpar3 = ''
      } else if( (this.deigmaXEidos.ekpar3 == true || this.deigmaXEidos.ekpar3 == false) && this.deigmaXEidos.ekpar3 != this.returnedObject.ekpar3 ) {
        patchedDeigmaX.ekpar3 = this.deigmaXEidos.ekpar3
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
              this.$router.push('/orntithopanida/deigma-orntithopanida-x-eidh/' + this.id)
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