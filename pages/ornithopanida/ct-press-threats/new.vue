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

      <v-card class=" my-5" style="width: 100%;">
        <div class="green lighten-4" style="width: 100%; height: 8px;"></div>
        <v-form v-model="validation" ref="form" class="py-5 px-4">
          <v-layout wrap justify-space-around>
            <v-flex xs12 md4 my-4>
              <v-text-field
                label="Τύπος Πίεσης"
                color="green"
                v-model="form.actCode"
                :counter="50"
                :rules="actCodeRules"
                required
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout wrap justify-space-between>
            <v-flex xs12 md5 my-4>
              <v-textarea
                label="Περιγραφή"
                color="green"
                v-model="form.descriptionEn"
                :counter="255"
                :rules="descriptionEnRules"
                required
                rows=6
              >
              </v-textarea>
            </v-flex>
            <v-flex xs12 md5 my-4>
              <v-textarea
                label="Παρατηρήσεις"
                color="green"
                v-model="form.remarks"
                :counter="255"
                :rules="remarksRules"
                required
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
      title: 'Ct Πίεσης Θηλαστικών - Δημιουργία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Δημιουργία και αποθήκευση νέων δεδομένων τύπου Ct Πίεσης Θηλαστικών -μέσω φόρμας ή αρχείου excel- για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Εγγραφή νέας Ct Πίεσης',
        titleForm: 'Για εγγραφή μέσω φόρμας συμπληρώστε παρακάτω',
        titleExcel: 'Για εγγραφές μέσω excel (.xlsx) αρχείου εισάγετε το αρχείο',
        subTitleExcel: 'Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το excel'
      },
      form: {
        actCode: '',
        descriptionEn: '',
        remarks: ''
      },
      validation: false,
      actCodeRules: [
        v => !!v || 'Συμπληρώστε το πεδίο Πίεσης',
        v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'
      ],
      descriptionEnRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      remarksRules: [
        v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'
      ],
      selectedFile: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    addFormUrl(){
      return this.$store.getters.getOrnithopanidaCtPressThreatsAddUrl
    },
    addFromExcelUrl(){
      return this.$store.getters.getOrnithopanidaCtPressThreatsAddFromExcelUrl
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
  methods: {
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
        actCode: null,
        descriptionEn: null,
        remarks: null
      }

      // Preparing the body for the Post
      if(!this.form.actCode == ''){
        checkedForm.actCode = this.form.actCode
      }
      if(!this.form.descriptionEn == ''){
        checkedForm.descriptionEn = this.form.descriptionEn
      }
      if(!this.form.remarks == ''){
        checkedForm.remarks = this.form.remarks
      }

      // Post request and navigation
      this.$axios.post(this.addFormUrl, checkedForm)
        .then(response => {
          this.$router.push('/ornithopanida/ct-press-threats/' + response.data.id)
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