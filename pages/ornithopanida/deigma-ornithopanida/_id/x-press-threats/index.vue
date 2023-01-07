<template>
  <v-container fluid>
    <v-btn @click="goBack" dark round class="mt-4 mb-3" color="light-green lighten-2" style="text-transform:none" title="Πλοήγηση πίσω στη σελίδα του δείγματος"><v-icon>arrow_back_ios</v-icon>Πίσω</v-btn>
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
        <div>
          <h3 class="my-4 text-xs-center text-md-left font-weight-regular">Σύνολο Δειγμάτων X Πιέσεων του δείγματος : {{ this.numberOfElements }} </h3>
        </div>
        <div v-for="deigmaXPressThreat in returnedData" :key="deigmaXPressThreat.id" class="my-5">
          <v-card my-2>
            <div class="green lighten-4" style="width: 100%; height: 7px;"></div>
            <div class="pa-4">
              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Δείγμα Θηλαστικών Id"
                    color="green"
                    v-model="deigmaXPressThreat.deigmaornithopanidaID"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Ct Πίεσης"
                    color="green"
                    v-model="deigmaXPressThreat.ctActCode"
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
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 lg3 my-4>
                  <v-text-field
                    label="Τύπος πίεσης"
                    color="green"
                    v-model="deigmaXPressThreat.type"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md6 lg3 my-4>
                  <v-text-field
                    label="Σημασία"
                    color="green"
                    v-model="deigmaXPressThreat.importance"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout>
                <h3 class="font-weight-medium mt-2">Id: {{ deigmaXPressThreat.id }} </h3>
                <v-spacer></v-spacer>
                <v-btn @click="toIdPage(deigmaXPressThreat.id)" color="green" dark style="text-transform: none">Εμφάνιση</v-btn>
              </v-layout>
            </div>
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
      title: 'Δειγματοληψίες Χ Πιέσεων Δείγματος Θηλαστικών - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Αναζήτηση Δειγματοληψιών Χ Πιέσεων συνδεδεμένων με συγκεκριμένο Δείγμα Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Δειγμάτων X Πιέσεων του δείγματος',
        emptyElements: 'Δεν υπάρχουν αποθηκευμένα δεδομένα'
      },
      noElements: null,
      returnedData: {},
      numberOfElements: 0,

      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    searchUrl(){
      return this.$store.getters.getOrnithopanidaXPressThreatsByDeigmaOrnithopanidaIdIs
    },
    id(){
      return this.$route.params.id
    }
  },
  mounted() {
    this.restCall()
  },
  methods: {
    goBack() {
      this.$router.push("/ornithopanida/deigma-ornithopanida/" + this.id)
    },
    restCall() {
      this.loading = true
      this.$axios.get(this.searchUrl + '/' + this.id)
        .then((response) => {
          if( response.data.length == 0 ){
            this.noElements = true
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της αναζήτησης'
            this.snackbar = true
          } else {
            this.noElements = false
            this.returnedData = response.data
            this.numberOfElements = response.data.length
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
    toIdPage(id) {
      this.$router.push('/ornithopanida/deigma-ornithopanida-x-press-threats/' + id)
    }
  }
}
</script>
