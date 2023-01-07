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
              <v-text-field
                label="Δείγμα Θηλαστικών Id"
                color="green"
                v-model="form.deigmataOrnithopanidasId"
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
                v-model="form.ctEidos"
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
                v-model="form.typosparatiriseis"
                :counter="255"
                :rules="typosparatiriseisRules"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Αριθμός ατόμων"
                color="green"
                v-model="form.arithmosatomon"
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
                v-model="form.hlikia"
                :counter="255"
                :rules="hlikiaRules"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Φύλο"
                color="green"
                v-model="form.fulo"
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
                v-model="form.ekpar1"
                :items="eokParList"
              >
              </v-autocomplete>
            </v-flex>
            <v-flex xs12 md2 my-4>
              <v-autocomplete
                label="ΕΟΚ Παρ IV"
                color="green"
                v-model="form.ekpar2"
                :items="eokParList"
              >
              </v-autocomplete>
            </v-flex>
            <v-flex xs12 md2 my-4>
              <v-autocomplete
                label="ΕΟΚ Παρ V"
                color="green"
                v-model="form.ekpar3"
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
                v-model="form.paratiriseis"
                :counter="255"
                :rules="paratiriseisRules"
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
      title: 'Δειγματοληψία Χ Είδους Θηλαστικών - Δημιουργία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Δημιουργία και αποθήκευση νέων δεδομένων τύπου Δειγματοληψίας Χ Είδους Θηλαστικών -μέσω φόρμας ή αρχείου excel- για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Εγγραφή νέου Δείγματος X Είδους',
        titleForm: 'Για εγγραφή μέσω φόρμας συμπληρώστε παρακάτω',
        titleExcel: 'Για εγγραφές μέσω excel (.xlsx) αρχείου εισάγετε το αρχείο',
        subTitleExcel: 'Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το excel'
      },
      form: {
        deigmataOrnithopanidasId: '',
        ctEidos: '',
        typosparatiriseis: '',
        paratiriseis: '',
        hlikia: '',
        fulo: '',
        arithmosatomon: '',
        ekpar1: '',
        ekpar2: '',
        ekpar3: '',
      },
      // To fill through a mounted Get request
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

      selectedFile: null,
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
    addFormUrl(){
      return this.$store.getters.getOrnithopanidaXEidhAddUrl
    },
    addFromExcelUrl(){
      return this.$store.getters.getOrnithopanidaXEidhAddFromExcelUrl
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
    submitForm() {
      // Checking for nulls
      let checkedForm = {
        deigmataOrnithopanidasId: null,
        ctEidos: null,
        typosparatiriseis: null,
        paratiriseis: null,
        hlikia: null,
        fulo: null,
        arithmosatomon: null,
        ekpar1: null,
        ekpar2: null,
        ekpar3: null,
      }

      // Preparing the body for the Post
      checkedForm.deigmataOrnithopanidasId = this.form.deigmataOrnithopanidasId
      checkedForm.ctEidos = this.form.ctEidos

      if(!this.form.typosparatiriseis == ''){
        checkedForm.typosparatiriseis = this.form.typosparatiriseis
      }
      if(!this.form.paratiriseis == ''){
        checkedForm.paratiriseis = this.form.paratiriseis
      }
      if(!this.form.hlikia == ''){
        checkedForm.hlikia = this.form.hlikia
      }
      if(!this.form.fulo == ''){
        checkedForm.fulo = this.form.fulo
      }
      if(!this.form.arithmosatomon == ''){
        checkedForm.arithmosatomon = this.form.arithmosatomon
      }
      if(!(typeof this.form.ekpar1 === 'string')){
        checkedForm.ekpar1 = this.form.ekpar1
      }
      if(!(typeof this.form.ekpar2 === 'string')){
        checkedForm.ekpar2 = this.form.ekpar2
      }
      if(!(typeof this.form.ekpar3 === 'string')){
        checkedForm.ekpar3 = this.form.ekpar3
      }

      // console.log(checkedForm)

      // Post request and navigation
      this.$axios.post(this.addFormUrl, checkedForm)
        .then(response => {
          // console.log(response.data)
          this.$router.push('/ornithopanida/deigma-ornithopanida-x-eidh/' + response.data.id)
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