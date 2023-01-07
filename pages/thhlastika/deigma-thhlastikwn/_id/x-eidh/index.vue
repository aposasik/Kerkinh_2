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
          <h3 class="my-4 text-xs-center text-md-left font-weight-regular">Σύνολο Δειγμάτων X Ειδών του δείγματος : {{ this.numberOfElements }} </h3>
        </div>
        <div v-for="deigmaXEidos in returnedData" :key="deigmaXEidos.id" class="my-5">
          <v-card my-2>
            <div class="green lighten-4" style="width: 100%; height: 8px;"></div>
            <div class="pa-4">
              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Δείγμα Θηλαστικών Id"
                    color="green"
                    v-model="deigmaXEidos.deigmaThhlastikwnId"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Ct Είδους"
                    color="green"
                    v-model="deigmaXEidos.ctEidos"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Σχετική αφθονία"
                    color="green"
                    v-model="deigmaXEidos.sxetikhAfthonia"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Αριθμός ατόμων"
                    color="green"
                    v-model="deigmaXEidos.plhthos"
                    readonly
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
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Φύλο"
                    color="green"
                    v-model="deigmaXEidos.fulo"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md2 my-4>
                  <v-text-field
                    label="ΕΟΚ Παρ II"
                    color="green"
                    v-model="deigmaXEidos.eokParII"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md2 my-4>
                  <v-text-field
                    label="ΕΟΚ Παρ IV"
                    color="green"
                    v-model="deigmaXEidos.eokParIV"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md2 my-4>
                  <v-text-field
                    label="ΕΟΚ Παρ V"
                    color="green"
                    v-model="deigmaXEidos.eokParV"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout justify-center>
                <v-flex xs12 md10 my-4>
                  <v-textarea
                    label="Παρατηρήσεις"
                    color="green"
                    v-model="deigmaXEidos.parathrhseis"
                    readonly
                    rows=6
                  >
                  </v-textarea>
                </v-flex>
              </v-layout>
              
              <v-layout>
                <h3 class="font-weight-medium mt-2">Id: {{ deigmaXEidos.id }} </h3>
                <v-spacer></v-spacer>
                <v-btn @click="toIdPage(deigmaXEidos.id)" color="green" dark style="text-transform: none">Εμφάνιση</v-btn>
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
      title: 'Δειγματοληψίες Χ Ειδών Δείγματος Θηλαστικών - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Αναζήτηση Δειγματοληψίες Χ Ειδών συνδεδεμένων με συγκεκριμένο Δείγμα Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Δειγμάτων X Ειδών του δείγματος',
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
      return this.$store.getters.getThhlastikaXEidhByDeigmaThhlastikwnIdIs
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
      this.$router.push("/thhlastika/deigma-thhlastikwn/" + this.id)
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
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/' + id)
    }
  }
}
</script>
