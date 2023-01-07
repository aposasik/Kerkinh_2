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
            <v-layout wrap justify-space-between pa-4>
              <v-flex xs12 md5 xl3 my-3>
                <v-textarea
                  label="Περιγραφή"
                  v-model="prwtokola.perigrafh"
                  color="green"
                  readonly
                  rows=5
                >
                </v-textarea>
              </v-flex>
              <v-flex xs12 md5 xl3 my-3>
                <v-textarea
                  label="Πίνακας δεδομένων"
                  v-model="prwtokola.pinakasDedomenwn"
                  color="green"
                  readonly
                  rows=5
                >
                </v-textarea>
              </v-flex>
              <v-flex xs12 md12 xl3 my-3>
                <v-textarea
                  label="Παράθυρο δεδομένων"
                  v-model="prwtokola.parathuroDedomenwn"
                  color="green"
                  readonly
                  rows=5
                >
                </v-textarea>
              </v-flex>

              <h3 class="font-weight-medium mt-2">Id: {{ prwtokola.id }} </h3>
              <v-spacer></v-spacer>
              <v-btn @click="toIdEditPage(prwtokola.id)" color="green" dark style="text-transform: none">Επεξεργασία<v-icon small right>edit</v-icon></v-btn>
            </v-layout>
          </v-card>
          
          <v-layout justify-center align-center class="text-xs-center my-5">
            <v-spacer></v-spacer>
            <v-btn color="error lighten-1" @click="deleteById" title="Οριστική διαγραφή" style="text-transform: none">Διαγραφή<v-icon small right>delete</v-icon></v-btn>
          </v-layout>
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
      title: 'Πρωτόκολλα - Προβολή | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Προβολή συγκεκριμένου Πρωτοκόλλου για τη διαχείρηση δεδομένων των Πρωτοκόλλων για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
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
      prwtokola: {},

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
    checkForPrevPage(pageNumber) {
      if( pageNumber == 0 ) {
        this.prevPage = false
      } else {
        this.prevPage = true
      }
    },
    restCall(id) {
      this.loading = true
      this.$axios.get(this.getByIdUrl + id)
        .then(response => {
          // console.log(response)
          if( response.data == "" ){
            this.noElements = true
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το πρωτόκολλο που επιθυμείτε'
            this.snackbar = true
          } else {
            this.noElements = false
            this.prwtokola = response.data
          }
          this.loading = false
        }).catch((err) => {
          this.loading = false
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση'
          this.snackbar = true
        })
    },
    toIdEditPage(id) {
      this.$router.push('/prwtokola/' + id + '/edit')
    },
    deleteById() {
      this.$axios.delete(this.getByIdUrl + this.id)
        .then(response => {
          if(response.data == true){
            this.snackbarColor = 'green'
            this.snackbarText = 'Η διαγραφή ολοκληρώθηκε επιτυχώς'
            this.snackbar = true
            this.$router.push('/')
          } else if (response.data == false){
            this.snackbarColor = 'red'
            this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την διαγραφή'
            this.snackbar = true
          }
        })
        .catch(err => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την διαγραφή'
          this.snackbar = true
          throw err
        })
    }
  }
}
</script>
