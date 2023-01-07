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
              <v-layout wrap justify-space-between pa-4>
                <v-flex xs12 md5 xl3 my-3>
                  <v-textarea
                    label="Περιγραφή"
                    v-model="prwtokola.perigrafh"
                    color="green"
                    :counter="255"
                    :rules="perigrafhRules"
                    required
                    rows=5
                  >
                  </v-textarea>
                </v-flex>
                <v-flex xs12 md5 xl3 my-3>
                  <v-textarea
                    label="Πίνακας δεδομένων"
                    v-model="prwtokola.pinakasDedomenwn"
                    color="green"
                    :counter="255"
                    :rules="pinakasRules"
                    rows=5
                  >
                  </v-textarea>
                </v-flex>
                <v-flex xs12 md12 xl3 my-3>
                  <v-textarea
                    label="Παράθυρο δεδομένων"
                    v-model="prwtokola.parathuroDedomenwn"
                    color="green"
                    :counter="255"
                    :rules="parathuroRules"
                    rows=5
                  >
                  </v-textarea>
                </v-flex>

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
      title: 'Πρωτόκολλο - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Επεξεργασία συγκεκριμένου Πρωτοκόλλου για τη διαχείρηση δεδομένων των Πρωτοκόλλων για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση πρωτοκόλλου με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το πρωτόκολλο που επιθυμείτε'
      },
      noElements: null,
      prwtokola: {
        id: '',
        perigrafh: '',
        pinakasDedomenwn: '',
        parathuroDedomenwn: ''
      },
      returnedObject: {
        id: '',
        perigrafh: null,
        pinakasDedomenwn: null,
        parathuroDedomenwn: null,
      },

      validation: false,
      perigrafhRules: [
        v => !!v || 'Συμπληρώστε το πεδίο περιγραφή',
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      parathuroRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      pinakasRules: [
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
      return this.$store.getters.getPrwtokolaByIdUrl
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
      // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
      if(data.perigrafh != null && data.pinakasDedomenwn != null && data.parathuroDedomenwn != null){
        this.prwtokola = JSON.parse(JSON.stringify(data))
        this.returnedObject = JSON.parse(JSON.stringify(data))
      } else {
        if(data.perigrafh != null ) {
          this.prwtokola.perigrafh = JSON.parse(JSON.stringify(data.perigrafh))
          this.returnedObject.perigrafh = JSON.parse(JSON.stringify(data.perigrafh))
        }
        if(data.pinakasDedomenwn != null ) {
          this.prwtokola.pinakasDedomenwn = JSON.parse(JSON.stringify(data.pinakasDedomenwn))
          this.returnedObject.pinakasDedomenwn = JSON.parse(JSON.stringify(data.pinakasDedomenwn))
        }
      
        if(data.parathuroDedomenwn != null ) {
          this.prwtokola.parathuroDedomenwn = JSON.parse(JSON.stringify(data.parathuroDedomenwn))
          this.returnedObject.parathuroDedomenwn = JSON.parse(JSON.stringify(data.parathuroDedomenwn))
        }
        this.prwtokola.id = JSON.parse(JSON.stringify(data.id))
        this.returnedObject.id = JSON.parse(JSON.stringify(data.id))
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
      if ((this.prwtokola.perigrafh == this.returnedObject.perigrafh || (this.prwtokola.perigrafh == '' && this.returnedObject.perigrafh == null)) 
        && (this.prwtokola.parathuroDedomenwn == this.returnedObject.parathuroDedomenwn || (this.prwtokola.parathuroDedomenwn == '' && this.returnedObject.parathuroDedomenwn == null))
        && (this.prwtokola.pinakasDedomenwn == this.returnedObject.pinakasDedomenwn || (this.prwtokola.pinakasDedomenwn == '' && this.returnedObject.pinakasDedomenwn == null))){
          return true
      }
    },
    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData(){
      let patchedPrwtokola = {
        id: this.prwtokola.id
      }
      // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)
      if( this.prwtokola.perigrafh == '' && this.returnedObject.perigrafh != null ) {
        patchedPrwtokola.perigrafh = ''
      } else if( this.prwtokola.perigrafh != '' && this.prwtokola.perigrafh != this.returnedObject.perigrafh) {
        patchedPrwtokola.perigrafh = this.prwtokola.perigrafh
      }

      if( this.prwtokola.pinakasDedomenwn == '' && this.returnedObject.pinakasDedomenwn != null ) {
        patchedPrwtokola.pinakasDedomenwn = ''
      } else if (this.prwtokola.pinakasDedomenwn != '' && this.prwtokola.pinakasDedomenwn != this.returnedObject.pinakasDedomenwn) {
        patchedPrwtokola.pinakasDedomenwn = this.prwtokola.pinakasDedomenwn
      }
      
      if( this.prwtokola.parathuroDedomenwn == '' && this.returnedObject.parathuroDedomenwn != null ) {
        patchedPrwtokola.parathuroDedomenwn = ''
      } else if (this.prwtokola.parathuroDedomenwn != '' && this.prwtokola.parathuroDedomenwn != this.returnedObject.parathuroDedomenwn) {
        patchedPrwtokola.parathuroDedomenwn = this.prwtokola.parathuroDedomenwn
      }
      return patchedPrwtokola
    },
    saveChanges(){
      // Checking for the values that will be Patched after the user's changes
      if ( this.checkForSavingTheSame() == true ) {
        this.snackbarColor = 'red'
        this.snackbarText = 'Δεν πραγματοποιήσατε καμία αλλαγή στα πεδία'
        this.snackbar = true
      } else {
        // Checking for null - '' values and doing the request
        let patchedPrwtokola = this.checkValuesOfSendingData()
        this.$axios.patch(this.getByIdUrl + this.id, patchedPrwtokola)
          .then(response => {
            if(response.data == false) {
              this.snackbarColor = 'red'
              this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν'
              this.snackbar = true
            } else if(response.data == true) {
              this.snackbarColor = 'green'
              this.snackbarText = 'Οι αλλαγές σας αποθηκεύθηκαν επιτυχώς'
              this.snackbar = true
              this.$router.push('/prwtokola/' + this.id)
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
