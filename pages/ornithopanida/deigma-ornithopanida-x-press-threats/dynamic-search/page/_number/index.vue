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

      <v-layout mt-4 mb-3>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent max-width="800px">
          <v-btn slot="activator" @click="dialog = true" color="green lighten-2" outline dark style="text-transform: none;" title="Επιλέξτε φίλτρα για τη δυναμική αναζήτηση">Φίλτρα<v-icon right>dvr</v-icon></v-btn>
          <v-card>
            <div style="position: absolute; top: 0px; right: 0px;"><v-btn @click="dialog = false" icon><v-icon medium color="red lighten-1">close</v-icon></v-btn></div>
            <v-layout pa-4 wrap row justify-center align-center>
              <v-flex xs12>
                <div class="text-xs-center">
                  <h2 class="font-weight-medium grey--text text--darken-1">Φίλτρα</h2>
                </div>
              </v-flex>
              <v-flex xs12 md6>
                <v-autocomplete
                v-model="dialogDeigmaThhlastikwnIdList"
                label="Δείγματα Θηλαστικών Ids"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="deigmaThhlastikwnIdList"
                >
                </v-autocomplete>
              </v-flex>
            </v-layout>
            <v-layout pa-4 wrap row justify-space-between align-center>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogActCodesList"
                label="Ct Πίεσης"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                hint="Λίστα όλων των Ct Πιέσεων"
                :persisten-hint="true"
                :items="actCodesList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogKwdikosEidousList"
                label="Κωδικός Είδους"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="kwdikosEidousList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogPressThreatList"
                label="Τύπος Πίεσης"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="pressThreatList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogImportanceList"
                label="Σημασία"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="importanceList"
                >
                </v-autocomplete>
              </v-flex>
            </v-layout>
            
            <v-layout pa-4 row wrap justify-space-between align-center>
              <v-flex xs12 md5 my-2>
                <v-autocomplete
                v-model="dialogSize"
                label="Αριθμός δεδομένων"
                color="green lighten-2"
                :items="sizesList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5 my-2>
                <v-autocomplete
                v-model="dialogSort"
                label="Ταξινόμηση"
                color="green lighten-2"
                :items="sortsList"
                hint="Φθίνουσα - Desc | Αύξουσα - Asc"
                :persistent-hint="true"
                >
                </v-autocomplete>
              </v-flex>
            </v-layout>

            <v-layout pa-4 row wrap justify-center align-center>
              <v-btn @click="filterAndSearch" dark color="green lighten-2" style="text-transform: none;">Δυναμική Αναζήτηση</v-btn>
            </v-layout>
          </v-card>
        </v-dialog>
      </v-layout>
      
      <v-flex v-if="storedChips.length != 0 || storedChips != null" xs12>
        <v-chip class="mb-3" v-for="chip in this.storedChips" :key="chip">{{ chip }}</v-chip>
      </v-flex>

      <v-flex xs8 sm6 md2 v-if="loading == true" class="text-xs-center mt-5">
        <v-progress-circular indeterminate size="45" color="green lighten-1"/>
      </v-flex>
      <v-flex v-if="noElements == true" xs12 lg11 class="text-xs-center text-md-left" style="margin-top: 130px;">
        <h3 class="font-weight-regular"> {{ main.emptyElements }} </h3>
      </v-flex>
      <v-flex v-else-if="noElements == false" xs12 lg10 style="margin-top: 100px;">
        <!-- TODO: Fix the button doesn't just become disabled it actually doesnt show at all -->
        <v-btn :href="generatedDownloadRequest" @click="onDownloadClicked" :disabled="downloadDisable" color="green lighten-1" dark style="text-transform: none; margin-left: 0px;" title="Λήψη δεδομένων σε μορφή xlsx excel μέσω της δυναμικής αναζήτησης">Λήψη excel<v-icon right>save_alt</v-icon></v-btn>
        <div v-if="downloadDisable == true"><v-progress-linear color="green lighten-1" indeterminate style="width: 150px;"></v-progress-linear></div>
        <div>
          <h3 class="my-4 text-xs-center text-md-left font-weight-regular">Σύνολο Χ Πιέσεων Θηλαστικών : {{ this.returnedData.totalResults }} </h3>
          <v-spacer></v-spacer>
        </div>
        <div v-for="deigmaX in returnedData.deigmaThhlastikwnXPressThreatsList" :key="deigmaX.id" class="my-5">
          <v-card>
            <div class="green lighten-4" style="width: 100%; height: 8px;"></div>
            <v-layout wrap justify-space-around pa-4>
              <v-flex xs12 md4 my-4>
                <v-text-field
                  label="Δείγμα Θηλαστικών Id"
                  color="green"
                  v-model="deigmaX.deigmaThhlastikwn.id"
                  readonly
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12 md4 my-4>
                <v-text-field
                  label="Ct Πίεσης"
                  color="green"
                  v-model="deigmaX.ctThhlastikaPressThreats.actCode"
                  readonly
                >
                </v-text-field>
              </v-flex>
            </v-layout>

            <v-layout wrap justify-space-around pa-4>
              <v-flex xs12 md4 lg3 my-4>
                <v-text-field
                  label="Κωδικός είδους"
                  color="green"
                  v-model="deigmaX.kwdikosEidous"
                  readonly
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12 md4 lg3 my-4>
                <v-text-field
                  label="Τύπος πίεσης"
                  color="green"
                  v-model="deigmaX.pressThreat"
                  readonly
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12 md6 lg3 my-4>
                <v-text-field
                  label="Σημασία"
                  color="green"
                  v-model="deigmaX.importance"
                  readonly
                >
                </v-text-field>
              </v-flex>
            </v-layout>
              
            <v-layout wrap justify-space-around pa-4>
              <v-flex xs12><v-divider class="mt-3 mb-2"/></v-flex>
              <h3 class="font-weight-medium mt-2">Id: {{ deigmaX.id }} </h3>
              <v-spacer></v-spacer>
              <v-btn @click="toIdPage(deigmaX.id)" color="green" dark style="text-transform: none">Εμφάνιση</v-btn>
            </v-layout>
          </v-card>
        </div>
        <div v-if="noElements == false" style="margin-top: 100px; margin-bottom: 20px;">
          <v-layout>
            <v-btn @click="getPreviousPage" :disabled="!returnedData.hasPreviousPage" color="green" flat title="Προηγούμενη σελίδα" style="text-transform: none">
              <v-icon left>arrow_back</v-icon>
              Σελίδα
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="getNextPage" :disabled="!returnedData.hasNextPage" color="green" flat title="Επόμενη σελίδα" style="text-transform: none">
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
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  head() {
    return {
      title: 'Δειγματοληψίες Χ Πιέσεων Θηλαστικών - Δυναμική Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Δυναμική Αναζήτηση (δεδομένων) Δειγματοληψιών Χ Πιέσεων Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Δυναμική Αναζήτηση Δειγματοληψιών Χ Πιέσεων Θηλαστικών',
        emptyElements: 'Δεν υπάρχουν αποθηκευμένα δεδομένα'
      },
      
      noElements: null,
      downloadDisable: false,

      // For filtering dialog
      dialog: false,
      dialogSize: null,
      dialogSort: null,
      dialogDeigmaThhlastikwnIdList: [],
      dialogActCodesList: [],
      dialogKwdikosEidousList: [],
      dialogPressThreatList: [],
      dialogImportanceList: [],
      sizesList: [10, 15, 20, 40, 100],
      sortsList: ['Desc', 'Asc'],
      // The Eidh values list that we get trough the getAutocompletes Request when mounted()
      deigmaThhlastikwnIdList: [],
      actCodesList: [],
      kwdikosEidousList: [],
      pressThreatList: [],
      importanceList: [],

      returnedData: {
        ctThhlastikaPressThreatsList: [
          {
            id: null,
            actCode: null,
          },
        ],
        totalReturnedResults: 0,
        hasPreviousPage: false,
        hasNextPage: false,
        totalPages: 0,
        totalResults: 0,
        page: null,
        size: null,
      },

      // Url objects
      searchUrl: '?search=',
      getSearchRequest: '',
      getDownloadRequest: '',

      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: '',
    }
  },
  computed: {
    getAutocompletesUrl(){
      return this.$store.getters.getThhlastikaXPressThreatsAutocompletes
    },
    dynamicSearchUrl(){
      return this.$store.getters.getThhlastikaXPressThreatsDynamicSearchUrl
    },
    dynamicDownloadUrl(){
      return this.$store.getters.getThhlastikaXPressThreatsDynamicDownloadUrl
    },
    paramPage(){
      return Number(this.$route.params.number)
    },
    currentPage(){
      return this.$route.params.number - 1
    },
    storedChips: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-press-threats/getChipsList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-press-threats/setChipsList', value )
      }
    },
    storedSize: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-press-threats/getSize']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-press-threats/setSize', value )
      }
    },
    storedSort: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-press-threats/getSort']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-press-threats/setSort', value)
      }
    },
    storedDeigmaThhlastikwnIdList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-press-threats/getDeigmaThhlastikwnIdList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-press-threats/setDeigmaThhlastikwnIdList', value)
      }
    },
    storedActCodesList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-press-threats/getActCodesList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-press-threats/setActCodesList', value)
      }
    },
    storedKwdikosEidousList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-press-threats/getKwdikosEidousList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-press-threats/setKwdikosEidousList', value)
      }
    },
    storedPressThreatList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-press-threats/getPressThreatList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-press-threats/setPressThreatList', value)
      }
    },
    storedImportanceList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-press-threats/getImportanceList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-press-threats/setImportanceList', value)
      }
    },
    sizeUrl() {
      return '&size=' + this.storedSize
    },
    sortUrl() {
      return '&sort=' + this.storedSort
    },
    pageUrl() {
      return '&page=' + this.currentPage
    },
    // Automatically generated request urls for search and download calls
    generatedSearchRequest() {
      return this.genGetSearchRequest()
    },
    generatedDownloadRequest() {
      return this.genGetDownloadRequest()
    }
  },
  mounted() {
    this.getAutocompletes()
    this.initDialogLists()
    this.restSearchCall()
  },
  methods: {
    // Getting the Autocompletes for the filtering form
    getAutocompletes() {
      this.$axios.get(this.getAutocompletesUrl)
        .then((response) => {
          if( response.data.deigmaThhlastikwnIdList.length == 0 &&
            response.data.ctActCodeList.length == 0 &&
            response.data.kwdikosEidousList.length == 0 &&
            response.data.pressThreatList.length == 0 &&
            response.data.importanceList.length == 0
          ){
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα για όλες τις λίστες της φόρμας φίλτρων'
            this.snackbar = true
          } else {
            this.deigmaThhlastikwnIdList = response.data.deigmaThhlastikwnIdList
            this.actCodesList = response.data.ctActCodeList
            this.kwdikosEidousList = response.data.kwdikosEidousList
            this.pressThreatList = response.data.pressThreatList
            this.importanceList = response.data.importanceList
          }
        }).catch((err) => {
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στη φόρτωση λιστών για τη φόρμα φίλτρων'
          this.snackbar = true
          throw err
        })
    },
    // Getting the Stored values whether they are the deafults or saved from previous search or paging
    initDialogLists() {
      this.dialogSize = this.storedSize
      this.dialogSort = this.storedSort
      this.dialogDeigmaThhlastikwnIdList = this.storedDeigmaThhlastikwnIdList
      this.dialogActCodesList = this.storedActCodesList
      this.dialogKwdikosEidousList = this.storedKwdikosEidousList
      this.dialogPressThreatList = this.storedPressThreatList
      this.dialogImportanceList = this.storedImportanceList
    },
    // Generating the Get request
    genGetSearchRequest() {
      let search = this.generateArguments()
      // console.log(this.dynamicSearchUrl + search + this.sizeUrl + this.pageUrl + this.sortUrl)
      return this.dynamicSearchUrl + search + this.sizeUrl + this.pageUrl + this.sortUrl
    },
    genGetDownloadRequest() {
      let search = this.generateArguments()
      return this.dynamicDownloadUrl + search + this.sortUrl
    },
    // Generating the String for the arguments (filtered or not)
    generateArguments() {
      let search = this.searchUrl
      if( this.storedDeigmaThhlastikwnIdList.length != 0 ) {
        search = search + 'deigmaThhlastikwn~'
        this.storedDeigmaThhlastikwnIdList.forEach(deigmaId => {
          search = search + deigmaId + ';'
        });
        search = search + '@'
      }
      if( this.storedActCodesList.length != 0 ) {
        search = search + 'ctThhlastikaPressThreats~'
        this.storedActCodesList.forEach(actCode => {
          search = search + actCode + ';'
        });
        search = search + '@'
      }
      if( this.storedKwdikosEidousList.length != 0 ) {
        search = search + 'kwdikosEidous~'
        this.storedKwdikosEidousList.forEach(kwdikosEidous => {
          search = search + kwdikosEidous + ';'
        });
        search = search + '@'
      }
      if( this.storedPressThreatList.length != 0 ) {
        search = search + 'pressThreat~'
        this.storedPressThreatList.forEach(pressThreat => {
          search = search + pressThreat + ';'
        });
        search = search + '@'
      }
      if( this.storedImportanceList.length != 0 ) {
        search = search + 'importance~'
        this.storedImportanceList.forEach(importance => {
          search = search + importance + ';'
        });
        search = search + '@'
      }

      return search
    },
    // Search Get Request
    restSearchCall() {
      this.loading = true
      this.$axios.get(this.generatedSearchRequest)
        .then((response) => {
          if( response.data.totalResults == 0 ){
            this.noElements = true
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της δυναμικής αναζήτησης'
            this.snackbar = true
          } else if ( response.data.totalReturnedResults == 0) {
            this.noElements = true
          } else {
            this.noElements = false
            this.returnedData = response.data
          }
          this.loading = false
        }).catch((err) => {
          this.loading = false
          this.snackbarColor = 'red'
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα στη δυναμική αναζήτηση'
          this.snackbar = true
          throw err
        })
    },
    // Triggered when the user submits the filtering
    filterAndSearch() {
      this.updateFiltering()
      this.generateNewChips()
      this.restSearchCall()
      this.dialog = false
    },
    // Updating the Vuex store with new filter values (so that the Get Requests will have the updated search arguments)
    updateFiltering() {
      this.storedSize = this.dialogSize
      this.storedSort = this.dialogSort
      this.storedDeigmaThhlastikwnIdList = this.dialogDeigmaThhlastikwnIdList
      this.storedActCodesList = this.dialogActCodesList
      this.storedKwdikosEidousList = this.dialogKwdikosEidousList
      this.storedPressThreatList = this.dialogPressThreatList
      this.storedImportanceList = this.dialogImportanceList
    },
    // Updating the Vuex ChipsList by generating the new one from the submitted filtering
    generateNewChips() {
      let list = []
      if ( this.dialogDeigmaThhlastikwnIdList.length != 0 ) {
        this.dialogDeigmaThhlastikwnIdList.forEach(deigmaId => {
          list.push('Δείγμα Θηλαστικών Id = ' + deigmaId)
        });
      }
      if ( this.dialogActCodesList.length != 0 ) {
        this.dialogActCodesList.forEach(actCode => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( actCode.length > 30 ) {
            actCode = actCode.substring(0, 30)
            actCode = actCode + '...'
          }
          list.push('Ct Πίεσης = ' + actCode)
        });
      }
      if ( this.dialogKwdikosEidousList.length != 0 ) {
        this.dialogKwdikosEidousList.forEach(kwdikosEidous => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( kwdikosEidous.length > 30 ) {
            kwdikosEidous = kwdikosEidous.substring(0, 30)
            kwdikosEidous = kwdikosEidous + '...'
          }
          list.push('Κωδικός Είδους = ' + kwdikosEidous)
        });
      }
      if ( this.dialogPressThreatList.length != 0 ) {
        this.dialogPressThreatList.forEach(pressThreat => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( pressThreat.length > 30 ) {
            pressThreat = pressThreat.substring(0, 30)
            pressThreat = pressThreat + '...'
          }
          list.push('Τύπος Πίεσης = ' + pressThreat)
        });
      }
      if ( this.dialogImportanceList.length != 0 ) {
        this.dialogImportanceList.forEach(importance => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( importance.length > 30 ) {
            importance = importance.substring(0, 30)
            importance = importance + '...'
          }
          list.push('Σημασία = ' + importance)
        });
      }

      if ( list.length != 0 ) {
        this.storedChips = list
      } else {
        list.push('Χωρίς φίλτρα')
        this.storedChips = list
      }
    },
    // Timeout for download btn so that the user wont be able to click it again for some time
    onDownloadClicked() {
      this.snackbarColor = 'green lighten-1'
      this.snackbarText = 'Δημιουργείται το excel αρχείο : Μπορεί να διαρκέσει λίγη ώρα ανάλογα τον όγκο των δεδομένων. Μετά την λήψη μεταβείτε στον φάκελο λήψεις του συστήματός σας.'
      this.snackbar = true
      this.downloadDisable = true
      setTimeout(() => {
        this.downloadDisable = false
      }, 10000)
    },
    toIdPage(id) {
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-press-threats/' + id)
    },
    getPreviousPage() {
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-press-threats/dynamic-search/page/' + (this.paramPage - 1))
    },
    getNextPage() {
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-press-threats/dynamic-search/page/' + (this.paramPage + 1))
    }
  }
}
</script>