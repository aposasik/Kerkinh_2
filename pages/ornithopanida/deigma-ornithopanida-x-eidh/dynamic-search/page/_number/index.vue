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
                v-model="dialogEidhList"
                label="Ct Είδους"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                hint="Λίστα όλων των Ct Ειδών"
                :persisten-hint="true"
                :items="eidhList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogSxetikhAfthoniaList"
                label="Σχετική Αφθονία"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="sxetikhAfthoniaList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogHlikiaList"
                label="Ηλικία"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="hlikiaList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogFuloList"
                label="Φύλο"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="fuloList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-text-field
                v-model="dialogPlhthosFrom"
                label="Αριθμός ατόμων -Από-"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12 md5>
                <v-text-field
                v-model="dialogPlhthosTo"
                label="Αριθμός ατόμων -Εώς-"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12 md5 lg3>
                <v-autocomplete
                v-model="dialogEokParII"
                label="ΕοκΠαρII"
                color="green lighten-2"
                class="mt-3 mb-5"
                :items="eokParList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5 lg3>
                <v-autocomplete
                v-model="dialogEokParIV"
                label="ΕοκΠαρIV"
                color="green lighten-2"
                class="mt-3 mb-5"
                :items="eokParList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5 lg3>
                <v-autocomplete
                v-model="dialogEokParV"
                label="ΕοκΠαρV"
                color="green lighten-2"
                class="mt-3 mb-5"
                :items="eokParList"
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
          <h3 class="my-4 text-xs-center text-md-left font-weight-regular">Σύνολο Χ Ειδών Θηλαστικών : {{ this.returnedData.totalResults }} </h3>
          <v-spacer></v-spacer>
        </div>
        <div v-for="deigmaX in returnedData.deigmaThhlastikwnXEidhList" :key="deigmaX.id" class="my-5">
          <v-card>
            <div class="green lighten-4" style="width: 100%; height: 8px;"></div>
            <div class="pa-4">
              <v-layout wrap justify-space-around>
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
                    label="Ct Είδους"
                    color="green"
                    v-model="deigmaX.ctThhlastikaEidh.eidos"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Σχετική Αφθονία"
                    color="green"
                    v-model="deigmaX.sxetikhAfthonia"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Αριθμός ατόμων"
                    color="green"
                    v-model="deigmaX.plhthos"
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
                    v-model="deigmaX.hlikia"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Φύλο"
                    color="green"
                    v-model="deigmaX.fulo"
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
                    v-model="deigmaX.eokParII"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md2 my-4>
                  <v-text-field
                    label="ΕΟΚ Παρ IV"
                    color="green"
                    v-model="deigmaX.eokParIV"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md2 my-4>
                  <v-text-field
                    label="ΕΟΚ Παρ V"
                    color="green"
                    v-model="deigmaX.eokParV"
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
                    v-model="deigmaX.parathrhseis"
                    readonly
                    rows=6
                  >
                  </v-textarea>
                </v-flex>
              </v-layout>
                
              <v-layout wrap justify-space-around>
                <v-flex xs12><v-divider class="mt-3 mb-2"/></v-flex>
                <h3 class="font-weight-medium mt-2">Id: {{ deigmaX.id }} </h3>
                <v-spacer></v-spacer>
                <v-btn @click="toIdPage(deigmaX.id)" color="green" dark style="text-transform: none">Εμφάνιση</v-btn>
              </v-layout>
            </div>
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
      title: 'Δειγματοληψίες Χ Είδη Θηλαστικών - Δυναμική Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Δυναμική Αναζήτηση (δεδομένων) Δειγματοληψιών Χ Ειδών Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Δυναμική Αναζήτηση Δειγματοληψιών Χ Ειδών Θηλαστικών',
        emptyElements: 'Δεν υπάρχουν αποθηκευμένα δεδομένα'
      },
      
      noElements: null,
      downloadDisable: false,

      // For filtering dialog
      dialog: false,
      dialogSize: null,
      dialogSort: null,
      dialogDeigmaThhlastikwnIdList: [],
      dialogEidhList: [],
      dialogSxetikhAfthoniaList: [],
      dialogHlikiaList: [],
      dialogFuloList: [],
      dialogPlhthosFrom: null,
      dialogPlhthosTo: null,
      dialogEokParII: null,
      dialogEokParIV: null,
      dialogEokParV: null,
      sizesList: [10, 15, 20, 40, 100],
      sortsList: ['Desc', 'Asc'],
      // The Eidh values list that we get trough the getAutocompletes Request when mounted()
      deigmaThhlastikwnIdList: [],
      eidhList: [],
      sxetikhAfthoniaList: [],
      hlikiaList: [],
      fuloList: [],
      eokParList: [true, false],


      returnedData: {
        deigmaThhlastikwnXEidhList: [
          {
            id: null,
            // actCode: null,
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
      return this.$store.getters.getThhlastikaXEidhAutocompletes
    },
    dynamicSearchUrl(){
      return this.$store.getters.getThhlastikaXEidhDynamicSearchUrl
    },
    dynamicDownloadUrl(){
      return this.$store.getters.getThhlastikaXEidhDynamicDownloadUrl
    },
    paramPage(){
      return Number(this.$route.params.number)
    },
    currentPage(){
      return this.$route.params.number - 1
    },
    storedChips: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getChipsList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setChipsList', value )
      }
    },
    storedSize: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getSize']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setSize', value )
      }
    },
    storedSort: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getSort']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setSort', value)
      }
    },
    storedDeigmaThhlastikwnIdList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getDeigmaThhlastikwnIdList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setDeigmaThhlastikwnIdList', value)
      }
    },
    storedEidhList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getEidhList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setEidhList', value)
      }
    },
    storedSxetikhAfthoniaList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getSxetikhAfthoniaList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setSxetikhAfthoniaList', value)
      }
    },
    storedHlikiaList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getHlikiaList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setHlikiaList', value)
      }
    },
    storedFuloList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getFuloList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setFuloList', value)
      }
    },
    storedPlhthosFrom: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getPlhthosFrom']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setPlhthosFrom', value)
      }
    },
    storedPlhthosTo: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getPlhthosTo']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setPlhthosTo', value)
      }
    },
    storedEokParII: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getEokParII']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setEokParII', value)
      }
    },
    storedEokParIV: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getEokParIV']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setEokParIV', value)
      }
    },
    storedEokParV: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getEokParV']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setEokParV', value)
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
            response.data.ctEidosList.length == 0 &&
            response.data.sxetikhAfthoniaList.length == 0 &&
            response.data.hlikiaList.length == 0 &&
            response.data.fuloList.length == 0
          ){
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα για όλες τις λίστες της φόρμας φίλτρων'
            this.snackbar = true
          } else {
            this.deigmaThhlastikwnIdList = response.data.deigmaThhlastikwnIdList
            this.eidhList = response.data.ctEidosList
            this.sxetikhAfthoniaList = response.data.sxetikhAfthoniaList
            this.hlikiaList = response.data.hlikiaList
            this.fuloList = response.data.fuloList
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
      this.dialogEidhList = this.storedEidhList
      this.dialogSxetikhAfthoniaList = this.storedSxetikhAfthoniaList
      this.dialogHlikiaList = this.storedHlikiaList
      this.dialogFuloList = this.storedFuloList
      this.dialogPlhthosFrom = this.storedPlhthosFrom
      this.dialogPlhthosTo = this.storedPlhthosTo
      this.dialogEokParII = this.storedEokParII
      this.dialogEokParIV = this.storedEokParIV
      this.dialogEokParV = this.storedEokParV
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
      if( this.storedEidhList.length != 0 ) {
        search = search + 'ctThhlastikaEidh~'
        this.storedEidhList.forEach(eidos => {
          search = search + eidos + ';'
        });
        search = search + '@'
      }
      if( this.storedSxetikhAfthoniaList.length != 0 ) {
        search = search + 'sxetikhAfthonia~'
        this.storedSxetikhAfthoniaList.forEach(sxetikhAfthonia => {
          search = search + sxetikhAfthonia + ';'
        });
        search = search + '@'
      }
      if( this.storedHlikiaList.length != 0 ) {
        search = search + 'hlikia~'
        this.storedHlikiaList.forEach(hlikia => {
          search = search + hlikia + ';'
        });
        search = search + '@'
      }
      if( this.storedFuloList.length != 0 ) {
        search = search + 'fulo~'
        this.storedFuloList.forEach(fulo => {
          search = search + fulo + ';'
        });
        search = search + '@'
      }
      if (this.storedPlhthosFrom != null && this.storedPlhthosFrom != '') {
        search = search + 'plhthos>' + this.storedPlhthosFrom + '@'
      }
      if (this.storedPlhthosTo != null && this.storedPlhthosTo != '') {
        search = search + 'plhthos<' + this.storedPlhthosTo + '@'
      }
      if (this.storedEokParII != null) {
        search = search + 'eokParII~' + this.storedEokParII + '@'
      }
      if (this.storedEokParIV != null) {
        search = search + 'eokParIV~' + this.storedEokParIV + '@'
      }
      if (this.storedEokParV != null) {
        search = search + 'eokParV~' + this.storedEokParV + '@'
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
      this.storedEidhList = this.dialogEidhList
      this.storedSxetikhAfthoniaList = this.dialogSxetikhAfthoniaList
      this.storedHlikiaList = this.dialogHlikiaList
      this.storedFuloList = this.dialogFuloList
      this.storedPlhthosFrom = this.dialogPlhthosFrom
      this.storedPlhthosTo = this.dialogPlhthosTo
      this.storedEokParII = this.dialogEokParII
      this.storedEokParIV = this.dialogEokParIV
      this.storedEokParV = this.dialogEokParV
    },
    // Updating the Vuex ChipsList by generating the new one from the submitted filtering
    generateNewChips() {
      let list = []
      if ( this.dialogDeigmaThhlastikwnIdList.length != 0 ) {
        this.dialogDeigmaThhlastikwnIdList.forEach(deigmaId => {
          list.push('Δείγμα Θηλαστικών Id = ' + deigmaId)
        });
      }
      if ( this.dialogEidhList.length != 0 ) {
        this.dialogEidhList.forEach(eidos => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( eidos.length > 30 ) {
            eidos = eidos.substring(0, 30)
            eidos = eidos + '...'
          }
          list.push('Ct Είδους = ' + eidos)
        });
      }
      if ( this.dialogSxetikhAfthoniaList.length != 0 ) {
        this.dialogSxetikhAfthoniaList.forEach(sxetikhAfthonia => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( sxetikhAfthonia.length > 30 ) {
            sxetikhAfthonia = sxetikhAfthonia.substring(0, 30)
            sxetikhAfthonia = sxetikhAfthonia + '...'
          }
          list.push('Σχετική αφθονία = ' + sxetikhAfthonia)
        });
      }
      if ( this.dialogHlikiaList.length != 0 ) {
        this.dialogHlikiaList.forEach(hlikia => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( hlikia.length > 30 ) {
            hlikia = hlikia.substring(0, 30)
            hlikia = hlikia + '...'
          }
          list.push('Ηλικία = ' + hlikia)
        });
      }
      if ( this.dialogFuloList.length != 0 ) {
        this.dialogFuloList.forEach(fulo => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( fulo.length > 30 ) {
            fulo = fulo.substring(0, 30)
            fulo = fulo + '...'
          }
          list.push('Φύλο = ' + fulo)
        });
      }
      if ( this.dialogPlhthosFrom != null && this.dialogPlhthosFrom != ''){
        list.push('Πλήθος >= ' + this.dialogPlhthosFrom)
      }
      if ( this.dialogPlhthosTo != null && this.dialogPlhthosTo != ''){
        list.push('Πληθος <= ' + this.dialogPlhthosTo)
      }
      if ( this.dialogEokParII == true || this.dialogEokParII == false ){
        list.push('ΕοκΠαρΙΙ = ' + this.dialogEokParII)
      }
      if ( this.dialogEokParIV == true || this.dialogEokParIV == false ){
        list.push('ΕοκΠαρΙV = ' + this.dialogEokParIV)
      }
      if ( this.dialogEokParV == true || this.dialogEokParV == false ){
        list.push('ΕοκΠαρV = ' + this.dialogEokParV)
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
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/' + id)
    },
    getPreviousPage() {
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/' + (this.paramPage - 1))
    },
    getNextPage() {
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/' + (this.paramPage + 1))
    }
  }
}
</script>