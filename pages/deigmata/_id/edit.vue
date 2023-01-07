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
            <v-form v-model="validation" ref="form">
              <v-layout wrap justify-space-around pa-4>
                <v-flex xs12 md5>
                  <v-text-field
                    v-model="deigma.id"
                    label="Δείγμα Id"
                    color="green"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex v-if="deigma.deigmaThhlastikwn != null" xs12 md5>
                  <v-text-field
                    v-model="deigma.deigmaThhlastikwn.id"
                    label="Δείγμα Θηλαστικών Id"
                    color="green"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs8>
                  <v-autocomplete
                  label="Πρωτόκολλο Id"
                  color="green"
                  :items="prwtokollaList"
                  v-model="deigma.prwtokola.id"
                  :rules="prwtokolaIdRules"
                  no-data-text="Δεν βρέθηκαν δεδομένα"
                  required
                  >
                  </v-autocomplete>
                </v-flex>
              </v-layout>

              <v-layout pa-4 justify-space-around>
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
      title: 'Δείγματα - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Επεξεργασία συγκεκριμένου Δείγματος για τη διαχείρηση δεδομένων των Δειγμάτων για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Δείγματος με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Δείγμα που επιθυμείτε'
      },
      noElements: null,
      deigma: {
        id: '',
        prwtokola: {
          id: ''
        },
        deigmaThhlastikwn: {
          id: ''
        },
      },
      returnedObject: {
        id: '',
        prwtokola: {},
        deigmaThhlastikwn: {},
      },

      // To fill through a mounted Get request
      prwtokollaList: [],
      validation: false,
      prwtokolaIdRules: [
        v => !!v || 'Συμπληρώστε το πεδίο Πρωτοκόλλου για το δείγμα',
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],

      loading: null,
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
    getByIdUrl(){
      return this.$store.getters.getDeigmataByIdUrl
    },
    id(){
      return this.$route.params.id
    }
  },
  mounted() {
    // Getting Prwtokola for Deigmata Init
    this.getPrwtokolaIdList()
    this.restCall(this.id)
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
    checkForNulls(data){
      // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
      if(data.prwtokola != null && data.deigmaThhlastikwn != null ){
        this.deigma = JSON.parse(JSON.stringify(data))
        this.returnedObject = JSON.parse(JSON.stringify(data))
      }
    },
    restCall(id) {
      this.loading = true
      this.$axios.get(this.getByIdUrl + id)
        .then((response) => {
          if( response.data == "" ){
            this.noElements = true
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το πρωτόκολλο που επιθυμείτε'
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
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση του πρωτοκόλλου'
          this.snackbar = true
          throw err
        })
    },
    // Checking if the user is submitting to send the same data
    checkForSavingTheSame(){
      if (this.deigma.prwtokola.id == this.returnedObject.prwtokola.id) {
          return true
      }
    },
    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData(){
      let patchedDeigma = {
        id: this.deigma.id,
        kwdikosPrwtokolou: ''
      }
      // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)
      if( this.deigma.prwtokola.id != this.returnedObject.prwtokola.id) {
        patchedDeigma.kwdikosPrwtokolou = this.deigma.prwtokola.id
      }
      return patchedDeigma
    },
    saveChanges(){
      // Checking for the values that will be Patched after the user's changes
      if ( this.checkForSavingTheSame() == true ) {
        this.snackbarColor = 'red'
        this.snackbarText = 'Δεν πραγματοποιήσατε καμία αλλαγή στα πεδία'
        this.snackbar = true
      } else {
        // Checking for null - '' values and doing the request
        let patchedDeigma = this.checkValuesOfSendingData()
        // console.log(patchedDeigma)
        this.$axios.patch(this.getByIdUrl + this.id, patchedDeigma)
          .then(response => {
            // console.log(response.data)
            if(response.data == false) {
              this.snackbarColor = 'red'
              this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν'
              this.snackbar = true
            } else if(response.data == true) {
              this.snackbarColor = 'green'
              this.snackbarText = 'Οι αλλαγές σας αποθηκεύθηκαν επιτυχώς'
              this.snackbar = true
              this.$router.push('/deigmata/' + this.id)
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
