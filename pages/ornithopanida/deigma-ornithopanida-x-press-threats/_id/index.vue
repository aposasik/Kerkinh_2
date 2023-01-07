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
            <div class="pa-4">
              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Δείγμα Ορνιθοπανίδας Id"
                    color="green"
                    v-model="deigmaXPressThreat.deigmaOrnithopanida.id"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Ct Πίεσης"
                    color="green"
                    v-model="deigmaXPressThreat.ctornithopanidaPressuresAndThreats.actCode"
                    no-data-text="Δεν βρέθηκαν δεδομένα"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 lg3 my-4>
                  <v-text-field
                    label="Κωδικός είδους"
                    color="green"
                    v-model="deigmaXPressThreat.kodikos"
                    :counter="50"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 lg3 my-4>
                  <v-text-field
                    label="Τύπος πίεσης"
                    color="green"
                    v-model="deigmaXPressThreat.type"
                    :counter="50"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md6 lg3 my-4>
                  <v-text-field
                    label="Σημασία"
                    color="green"
                    v-model="deigmaXPressThreat.importance"
                    :counter="50"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <h3 class="font-weight-medium mt-2">Id: {{ deigmaXPressThreat.id }} </h3>
                <v-spacer></v-spacer>
                <v-btn @click="toIdEditPage(deigmaXPressThreat.id)" color="green" dark style="text-transform: none">Επεξεργασία<v-icon small right>edit</v-icon></v-btn>
              </v-layout>
            </div>
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
      title: 'Δειγματοληψία Χ Πίεσης Θηλαστικών - Προβολή | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Προβολή συγκεκριμένης Δειγματοληψίας Χ Πίεσης Θηλαστικών για τη διαχείρηση δεδομένων των Δειγματοληψιών Χ Πιέσεων Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
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
        deigmaOrnithopanida: {},
        ctornithopanidaPressuresAndThreats: {}
      },

      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    getByIdUrl(){
      return this.$store.getters.getOrnithopanidaXPressThreatsByIdUrl
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
          // console.log(response.data)
          if( response.data == "" ){
            this.noElements = true
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Δείγμα X Πίεσης που επιθυμείτε'
            this.snackbar = true
          } else {
            this.noElements = false
            // TODO: Important : what happens if still it comes null for ct or deigmathhlastikwn (not the id and eidos but ctThhlastikaEidh and deigmaThhlastikwn themselves!) I should be checking this somehow maybe make a checkForNulls as for `edit` page?
            this.deigmaXPressThreat = response.data
            // console.log(this.deigmaXPressThreat)
          }
          this.loading = false
        }).catch((err) => {
          this.loading = false
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση'
          this.snackbar = true
          throw err
        })
    },
    toIdEditPage(id) {
      this.$router.push('/ornithopanida/deigma-ornithopanida-x-press-threats/' + id + '/edit')
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
