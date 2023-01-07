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
            <div class="green lighten-4" style="width: 100%; height: 6px;"></div>
            <v-form v-model="validation" ref="form" class="pa-4">
              <v-layout wrap justify-space-between>
                <v-flex xs12 md5 xl3 my-3>
                  <v-textarea
                    label="Τύπος Πίεσης"
                    v-model="ct.actCode"
                    color="green"
                    :counter="50"
                    :rules="actCodeRules"
                    required
                    rows=5
                  >
                  </v-textarea>
                </v-flex>
                <v-flex xs12 md5 xl3 my-3>
                  <v-textarea
                    label="Περιγραφή"
                    v-model="ct.descriptionEn"
                    color="green"
                    :counter="255"
                    :rules="descriptionEnRules"
                    rows=5
                  >
                  </v-textarea>
                </v-flex>
                <v-flex xs12 md12 xl3 my-3>
                  <v-textarea
                    label="Παρατηρήσεις"
                    v-model="ct.remarks"
                    color="green"
                    :counter="255"
                    :rules="remarksRules"
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
      title: 'Ct Πίεσης Θηλαστικών - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Επεξεργασία συγκεκριμένου Ct Πίεσης Θηλαστικών για τη διαχείρηση δεδομένων των Ct Πιέσεων Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Ct Πίεσης με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Ct Πίεσης που επιθυμείτε'
      },
      noElements: null,
      ct: {
        id: '',
        actCode: '',
        descriptionEn: '',
        remarks: ''
      },
      returnedObject: {
        id: '',
        actCode: null,
        descriptionEn: null,
        remarks: null,
      },

      validation: false,
      actCodeRules: [
        v => !!v || 'Συμπληρώστε το πεδίο περιγραφή',
        v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'
      ],
      descriptionEnRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      remarksRules: [
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
      return this.$store.getters.getThhlastikaCtPressThreatsByIdUrl
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
      if(data.actCode != null && data.descriptionEn != null && data.remarks != null){
        this.ct = JSON.parse(JSON.stringify(data))
        this.returnedObject = JSON.parse(JSON.stringify(data))
      } else {
        if(data.actCode != null ) {
          this.ct.actCode = JSON.parse(JSON.stringify(data.actCode))
          this.returnedObject.actCode = JSON.parse(JSON.stringify(data.actCode))
        }
        if(data.descriptionEn != null ) {
          this.ct.descriptionEn = JSON.parse(JSON.stringify(data.descriptionEn))
          this.returnedObject.descriptionEn = JSON.parse(JSON.stringify(data.descriptionEn))
        }
      
        if(data.remarks != null ) {
          this.ct.remarks = JSON.parse(JSON.stringify(data.remarks))
          this.returnedObject.remarks = JSON.parse(JSON.stringify(data.remarks))
        }
        this.ct.id = JSON.parse(JSON.stringify(data.id))
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
            this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Ct Πίεσης που επιθυμείτε'
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
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση του Ct Πίεσης'
          this.snackbar = true
          throw err
        })
    },
    // Checking if the user is submitting to send the same data
    checkForSavingTheSame(){
      if ((this.ct.actCode == this.returnedObject.actCode || (this.ct.actCode == '' && this.returnedObject.actCode == null)) 
        && (this.ct.descriptionEn == this.returnedObject.descriptionEn || (this.ct.descriptionEn == '' && this.returnedObject.descriptionEn == null))
        && (this.ct.remarks == this.returnedObject.remarks || (this.ct.remarks == '' && this.returnedObject.remarks == null))){
          return true
      }
    },
    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData(){
        let patchedCt = {}
        
        // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)
        if( this.ct.actCode == '' && this.returnedObject.actCode != null ) {
          patchedCt.actCode = ''
        } else if( this.ct.actCode != '' && this.ct.actCode != this.returnedObject.actCode ) {
          patchedCt.actCode = this.ct.actCode
        }

        if( this.ct.descriptionEn == '' && this.returnedObject.descriptionEn != null ) {
          patchedCt.descriptionEn = ''
        } else if (this.ct.descriptionEn != '' && this.ct.descriptionEn != this.returnedObject.descriptionEn) {
          patchedCt.descriptionEn = this.ct.descriptionEn
        }
        
        if( this.ct.remarks == '' && this.returnedObject.remarks != null ) {
          patchedCt.remarks = ''
        } else if (this.ct.remarks != '' && this.ct.remarks != this.returnedObject.remarks) {
          patchedCt.remarks = this.ct.remarks
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
        // console.log(patchedCt)
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
              this.$router.push('/thhlastika/ct-press-threats/' + this.id)
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
