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
        <div>
          <h3 class="my-4 text-xs-center text-md-left font-weight-regular">Σύνολο Δειγμάτων : {{ this.returnedData.totalElements }} </h3>
        </div>
        <div v-for="deigma in returnedData.content" :key="deigma.id" class="my-5">
          <v-card>
            <div class="green lighten-4" style="width: 100%; height: 8px;"></div>
            <v-layout wrap justify-space-between pa-4>
              <v-flex xs12 md12 lg3>
                <h4 class="my-3 font-weight-thin"> Δείγμα </h4>
                <p class="font-weight-regular">Id : {{ deigma.id }}</p>
              </v-flex>
              <v-flex xs12 md5 lg3>
                <h4 class="my-3 font-weight-thin"> Πρωτόκολλο </h4>
                <p class="font-weight-regular">Id : {{ deigma.prwtokola.id }}</p>
              </v-flex>
              <v-flex v-if="deigma.deigmaThhlastikwn != null" xs12 md5 lg3>
                <h4 class="my-3 font-weight-thin"> Δείγμα Θηλαστικών </h4>
                <p class="font-weight-regular">Id : {{ deigma.deigmaThhlastikwn.id }}</p>
              </v-flex>
              
              <v-flex xs12><v-divider class="mt-3 mb-2"/></v-flex>
              <h3 class="font-weight-medium mt-2">Id: {{ deigma.id }} </h3>
              <v-spacer></v-spacer>
              <v-btn @click="toIdPage(deigma.id)" color="green" dark style="text-transform: none">Εμφάνιση</v-btn>
            </v-layout>
          </v-card>
        </div>
        <div v-if="noElements == false" style="margin-top: 100px; margin-bottom: 20px;">
          <v-layout>
            <v-btn @click="getPrevPage" :disabled="!prevPage" color="green" flat title="Προηγούμενη σελίδα" style="text-transform: none">
              <v-icon left>arrow_back</v-icon>
              Σελίδα
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="getNextPage" :disabled="!nextPage" color="green" flat title="Επόμενη σελίδα" style="text-transform: none">
              Σελίδα
              <v-icon right>arrow_forward</v-icon>
            </v-btn>
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
      title: 'Δείγματα - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Αναζήτηση (δεδομένων) Δειγμάτων για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Αναζήτηση Δειγμάτων',
        emptyElements: 'Δεν υπάρχουν αποθηκευμένα δεδομένα'
      },
      noElements: null,
      returnedData: {
        prwtokola: {},
        deigmaThhlastikwn: {},
        // Use farther deigmata types so and make a v-else-if for each one of them
      },
      page: null,
      numberOfElements: 0,
      prevPage: false,
      nextPage: false,
      totalPages: 0,
      totalElements: 0,
      size: null,

      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    searchUrl(){
      return this.$store.getters.getDeigmataSearchUrl
    },
    paramPage(){
      return Number(this.$route.params.number)
    },
    currentPage(){
      return this.$route.params.number - 1
    }
  },
  mounted() {
    this.restCall(this.currentPage)
  },
  methods: {
    checkForPrevPage(pageNumber) {
      if( pageNumber == 0 ) {
        this.prevPage = false
      } else {
        this.prevPage = true
      }
    },
    checkForNextPage(last) {
      if( last == true ) {
        this.nextPage = false
      } else {
        this.nextPage = true
      }
    },
    restCall(page) {
      this.loading = true
      this.$axios.get(this.searchUrl + '/' + page)
        .then((response) => {
          if( response.data.totalElements == 0 ){
            this.noElements = true
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της αναζήτησης'
            this.snackbar = true
          } else if ( response.data.totalElements != 0 && response.data.numberOfElements == 0) {
            this.noElements = true
          } else {
            this.noElements = false
            this.returnedData = response.data
            // Checking for prevPage
            this.checkForPrevPage(response.data.pageable.pageNumber)
            // Checking for nextPage
            this.checkForNextPage(response.data.last)
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
      this.$router.push('/deigmata/' + id)
    },
    getPrevPage() {
      this.$router.push('/deigmata/search/page/' + (this.paramPage - 1))
    },
    getNextPage() {
      this.$router.push('/deigmata/search/page/' + (this.paramPage + 1))
    }
  }
}
</script>
