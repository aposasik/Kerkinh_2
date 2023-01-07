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
                <v-flex xs12 md6 my-4>
                  <v-text-field
                    label="Είδος"
                    color="green"
                    v-model="ct.eidos"
                    :rules="eidosRules"
                    :counter="100"
                    required
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
      title: 'Ct Είδους Θηλαστικών - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Επεξεργασία συγκεκριμένου Ct Είδους Θηλαστικών για τη διαχείρηση δεδομένων των Ct Ειδών Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Ct Είδους με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Ct Είδος που επιθυμείτε'
      },
      noElements: null,
      ct: {
        id: '',
        eidos: ''
      },
      returnedObject: {
        id: '',
        eidos: null
      },

      validation: false,
      eidosRules: [
        v => !!v || 'Συμπληρώστε το πεδίο περιγραφή',
        v => v.length <= 100 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],

      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    getByIdUrl(){
      return this.$store.getters.getThhlastikaCtEidosByIdUrl
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
      if(data.eidos != null ){
        // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
        this.ct = JSON.parse(JSON.stringify(data))
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
            this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Ct Είδος που επιθυμείτε'
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
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση του Ct Είδους'
          this.snackbar = true
          throw err
        })
    },
    // Checking if the user is submitting to send the same data
    checkForSavingTheSame(){
      if ( this.ct.eidos == this.returnedObject.eidos || (this.ct.eidos == '' && this.returnedObject.eidos == null)){
        return true
      }
    },
    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData(){
        let patchedCt = {
          id: this.ct.id
        }
        // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)
        if( this.ct.eidos == '' && this.returnedObject.eidos != null ) {
          patchedCt.eidos = ''
        } else if( this.ct.eidos != '' && this.ct.eidos != this.returnedObject.eidos ) {
          patchedCt.eidos = this.ct.eidos
        }
        return patchedCt
    },
    saveChanges(){
      // Checking for the values that will be Patched after the user's changes
      if ( this.checkForSavingTheSame() == true ) {
        this.snackbarColor = 'red'
        this.snackbarText = 'Δεν πραγματοποιήσατε καμία αλλαγή στα πεδία'
        this.snackbar = true
      } else {
        // Checking for null - '' values and doing the request
        let patchedCt = this.checkValuesOfSendingData()
        this.$axios.patch(this.getByIdUrl + this.id, patchedCt)
          .then(response => {
            if(response.data == false) {
              this.snackbarColor = 'red'
              this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν'
              this.snackbar = true
            } else if(response.data == true) {
              this.snackbarColor = 'green'
              this.snackbarText = 'Οι αλλαγές σας αποθηκεύθηκαν επιτυχώς'
              this.snackbar = true
              this.$router.push('/thhlastika/ct-eidh/' + this.id)
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
