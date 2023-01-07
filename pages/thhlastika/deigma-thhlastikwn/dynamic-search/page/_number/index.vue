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
            </v-layout>
            <v-layout pa-4 wrap row justify-space-between align-center>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogKwdikosDeigmatolhpsiasList"
                label="Κωδικός δειγματοληψίας"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.kwdikosDeigmatolhpsiasList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogXrhmatodothshList"
                label="Χρηματοδότηση"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                hint="Λίστα όλων των Ct Ειδών"
                :persisten-hint="true"
                :items="autocompletes.xrhmatodothshList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogEreunhthsList"
                label="Ερευνητής"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.ereunhthsList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogTopothesiaList"
                label="Τοποθεσία"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.topothesiaList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-dialog
                  v-model="openDateFromDialog"
                  full-width
                  width="290px"
                  lazy
                >
                  <v-text-field
                    slot="activator"
                    label="Ημερομηνία -Από- (Έτος-Μήνας-Ημέρα)"
                    color="green"
                    append-icon="date_range"
                    class="mt-3 mb-5"
                    clearable
                    hint="YYYY-MM-DD | Παράδειγμα 2019-06-23"
                    v-model="dialogDateFrom"
                    readonly
                  >
                  </v-text-field>
                  <v-date-picker
                    color="green lighten-2"
                    v-model="dialogDateFrom"
                    scrollable
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                  >
                  </v-date-picker>
                </v-dialog>
              </v-flex>
              <v-flex xs12 md5>
                <v-dialog
                  v-model="openDateToDialog"
                  full-width
                  width="290px"
                  lazy
                >
                  <v-text-field
                    slot="activator"
                    label="Ημερομηνία -Εώς- (Έτος-Μήνας-Ημέρα)"
                    color="green"
                    append-icon="date_range"
                    class="mt-3 mb-5"
                    clearable
                    hint="YYYY-MM-DD | Παράδειγμα 2019-06-23"
                    v-model="dialogDateTo"
                    readonly
                  >
                  </v-text-field>
                  <v-date-picker
                    color="green lighten-2"
                    v-model="dialogDateTo"
                    scrollable
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                  >
                  </v-date-picker>
                </v-dialog>
              </v-flex>
              <v-flex xs12 md5>
                <v-dialog
                  v-model="openTimeFromDialog"
                  lazy
                  full-width
                  width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="Ώρα -Από-"
                    v-model="dialogTimeFrom"
                    color="green"
                    class="mt-3 mb-5"
                    clearable
                    append-icon="access_time"
                    hint="HH:MM:SS | Παράδειγμα 20:32:10"
                  >
                  </v-text-field>
                  <v-time-picker
                    color="green lighten-2"
                    scrollable
                    v-model="dialogTimeFrom"
                    format="24hr"
                  >
                  </v-time-picker>
                </v-dialog>
              </v-flex>
              <v-flex xs12 md5>
                <v-dialog
                  v-model="openTimeToDialog"
                  lazy
                  full-width
                  width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="Ώρα -Εώς-"
                    v-model="dialogTimeTo"
                    color="green"
                    class="mt-3 mb-5"
                    clearable
                    append-icon="access_time"
                    hint="HH:MM:SS | Παράδειγμα 20:32:10"
                  >
                  </v-text-field>
                  <v-time-picker
                    color="green lighten-2"
                    scrollable
                    v-model="dialogTimeTo"
                    format="24hr"
                  >
                  </v-time-picker>
                </v-dialog>
              </v-flex>
              <v-flex xs12 md5>
                <v-text-field
                v-model="dialogEpifaneiaDeigmatolhpsiasFrom"
                label="Επιφάνεια δειγματοληψίας -Από-"
                color="green lighten-2"
                class="mt-3 mb-5"
                :rules="epifaneiaDeigmatolhpsiasRules"
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12 md5>
                <v-text-field
                v-model="dialogEpifaneiaDeigmatolhpsiasTo"
                label="Επιφάνεια δειγματοληψίας -Εώς-"
                color="green lighten-2"
                class="mt-3 mb-5"
                :rules="epifaneiaDeigmatolhpsiasRules"
                >
                </v-text-field>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogLatitudeEGSAList"
                label="Γεωγραφικό πλάτος EGSA"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.latitudeEGSAList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogLongitudeEGSAList"
                label="Γεωγραφικό μήκος EGSA"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.longitudeEGSAList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogLatitudeWGS84List"
                label="Γεωγραφικό πλάτος WGS84"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.latitudeWGS84List"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogLongitudeWGS84List"
                label="Γεωγραφικό μήκος WGS84"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.longitudeWGS84List"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogGridCellList"
                label="Κελί πλέγματος"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.gridCellList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogKwdikosNaturaList"
                label="Κωδικός Natura"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.kwdikosNaturaList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogMethodosDeigmatolhpsiasList"
                label="Μέθοδος δειγματοληψίας"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.methodosDeigmatolhpsiasList"
                >
                </v-autocomplete>
              </v-flex>
              <v-flex xs12 md5>
                <v-autocomplete
                v-model="dialogNomosList"
                label="Νομός"
                color="green lighten-2"
                class="mt-3 mb-5"
                multiple
                :items="autocompletes.nomosList"
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
          <h3 class="my-4 text-xs-center text-md-left font-weight-regular">Σύνολο Δειγμάτων Θηλαστικών : {{ this.returnedData.totalResults }} </h3>
          <v-spacer></v-spacer>
        </div>
        <div v-for="deigma in returnedData.deigmaThhlastikwnList" :key="deigma.id" class="my-5">
          <v-card>
            <div class="green lighten-4" style="width: 100%; height: 8px;"></div>
            <div class="pa-4">
              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Κωδικός δειγματοληψίας"
                    color="green"
                    v-model="deigma.kwdikosDeigmatolhpsias"
                    :counter="255"
                    readonly
                    required
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Χρηματοδότηση"
                    color="green"
                    v-model="deigma.xrhmatodothsh"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Ερευνητής"
                    color="green"
                    append-icon="account_box"
                    v-model="deigma.ereunhths"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Τοποθεσία"
                    color="green"
                    append-icon="location_searching"
                    v-model="deigma.topothesia"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Ημερομηνία (Έτος-Μήνας-Ημέρα)"
                    color="green"
                    append-icon="date_range"
                    hint="YYYY-MM-DD | Παράδειγμα 2019-06-23"
                    v-model="deigma.date"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Ώρα"
                    v-model="deigma.time"
                    color="green"
                    append-icon="access_time"
                    hint="HH:MM:SS | Παράδειγμα 20:32:10"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Διάρκεια"
                    color="green"
                    v-model="deigma.diarkeia"
                    :counter="40"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Επιφάνεια δειγματοληψίας"
                    color="green"
                    v-model="deigma.epifaneiaDeigmatolhpsias"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Τύπος βλάστησης"
                    color="green"
                    v-model="deigma.tuposVlasthshs"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Τύπος οικοτόπου"
                    color="green"
                    v-model="deigma.tuposOikotopou"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Γεωγραφικό πλάτος EGSA"
                    color="green"
                    append-icon="edit_location"
                    v-model="deigma.latitudeEGSA"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Γεωγραφικό μήκος EGSA"
                    color="green"
                    append-icon="edit_location"
                    v-model="deigma.longitudeEGSA"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Γεωγραφικό πλάτος WGS84"
                    color="green"
                    append-icon="edit_location"
                    v-model="deigma.latitudeWGS84"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Γεωγραφικό μήκος WGS84"
                    color="green"
                    append-icon="edit_location"
                    v-model="deigma.longitudeWGS84"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Κελί πλέγματος"
                    color="green"
                    v-model="deigma.gridCell"
                    :counter="30"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Κωδικός Natura"
                    color="green"
                    v-model="deigma.kwdikosNatura"
                    :counter="40"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Μέθοδος δειγματοληψίας"
                    color="green"
                    v-model="deigma.methodosDeigmatolhpsias"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
                <v-flex xs12 md4 my-4>
                  <v-text-field
                    label="Νομός"
                    color="green"
                    v-model="deigma.nomos"
                    :counter="255"
                    readonly
                  >
                  </v-text-field>
                </v-flex>
              </v-layout>

              <v-layout wrap justify-space-around>
                <v-flex xs12 md8 my-4>
                  <v-textarea
                    label="Παρατηρήσεις"
                    color="green"
                    v-model="deigma.parathrhseis"
                    :counter="255"
                    readonly
                    rows=6
                  >
                  </v-textarea>
                </v-flex>
              </v-layout>

              <v-layout>
                <h3 class="font-weight-medium mt-2">Id: {{ deigma.id }} </h3>
                <v-spacer></v-spacer>
                <v-btn @click="toIdPage(deigma.id)" color="green" dark style="text-transform: none">Εμφάνιση</v-btn>
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
      title: 'Δείγματα Θηλαστικών - Δυναμική Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [
        {
          hid: 'description', name: 'description',
          content: 'Δυναμική Αναζήτηση (δεδομένων) Δειγμάτων Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
        }
      ]
    }
  },
  data() {
    return {
      main: {
        title: 'Δυναμική Αναζήτηση Δειγμάτων Θηλαστικών',
        emptyElements: 'Δεν υπάρχουν αποθηκευμένα δεδομένα'
      },
      
      noElements: null,
      downloadDisable: false,

      // For filtering dialog
      dialog: false,
      openDateFromDialog: false,
      openDateToDialog: false,
      openTimeFromDialog: false,
      openTimeToDialog: false,
      
      dialogSize: null,
      dialogSort: null,
      dialogKwdikosDeigmatolhpsiasList: [],
      dialogXrhmatodothshList: [],
      dialogEreunhthsList: [],
      dialogTopothesiaList: [],
      dialogDateFrom: null,
      dialogDateTo: null,
      dialogTimeFrom: null,
      dialogTimeTo: null,
      dialogDiarkeiaList: [],
      dialogTuposVlasthshsList: [],
      dialogTuposOikotopouList: [],
      dialogEpifaneiaDeigmatolhpsiasFrom: null,
      dialogEpifaneiaDeigmatolhpsiasTo: null,
      dialogLatitudeEGSAList: [],
      dialogLongitudeEGSAList: [],
      dialogLatitudeWGS84List: [],
      dialogLongitudeWGS84List: [],
      dialogGridCellList: [],
      dialogKwdikosNaturaList: [],
      dialogMethodosDeigmatolhpsiasList: [],
      dialogNomosList: [],
      sizesList: [10, 15, 20, 40, 100],
      sortsList: ['Desc', 'Asc'],

      epifaneiaDeigmatolhpsiasRules: [
        v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'
      ],

      // The Eidh values list that we get trough the getAutocompletes Request when mounted()
      autocompletes: {
        kwdikosDeigmatolhpsiasList: [],
        xrhmatodothshList: [],
        ereunhthsList: [],
        topothesiaList: [],
        diarkeiaList: [],
        tuposVlasthshsList: [],
        tuposOikotopouList: [],
        latitudeEGSAList: [],
        longitudeEGSAList: [],
        latitudeWGS84List: [],
        longitudeWGS84List: [],
        gridCellList: [],
        kwdikosNaturaList: [],
        methodosDeigmatolhpsiasList: [],
        nomosList: [],
      },

      returnedData: {
        deigmaThhlastikwnList: [
          {
            id: null,
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
      return this.$store.getters.getDeigmaThhlastikwnAutocompletes
    },
    dynamicSearchUrl(){
      return this.$store.getters.getDeigmaThhlastikwnDynamicSearchUrl
    },
    dynamicDownloadUrl(){
      return this.$store.getters.getDeigmaThhlastikwnDynamicDownloadUrl
    },
    paramPage(){
      return Number(this.$route.params.number)
    },
    currentPage(){
      return this.$route.params.number - 1
    },
    storedChips: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getChipsList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setChipsList', value )
      }
    },
    storedSize: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getSize']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setSize', value )
      }
    },
    storedSort: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getSort']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setSort', value)
      }
    },
    storedKwdikosDeigmatolhpsiasList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getKwdikosDeigmatolhpsiasList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setKwdikosDeigmatolhpsiasList', value)
      }
    },
    storedXrhmatodothshList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getXrhmatodothshList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setXrhmatodothshList', value)
      }
    },
    storedEreunhthsList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getEreunhthsList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setEreunhthsList', value)
      }
    },
    storedTopothesiaList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getTopothesiaList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setTopothesiaList', value)
      }
    },
    storedDateFrom: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getDateFrom']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setDateFrom', value)
      }
    },
    storedDateTo: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getDateTo']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setDateTo', value)
      }
    },
    storedTimeFrom: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getTimeFrom']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setTimeFrom', value)
      }
    },
    storedTimeTo: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getTimeTo']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setTimeTo', value)
      }
    },
    storedDiarkeiaList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getDiarkeiaList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setDiarkeiaList', value)
      }
    },
    storedTuposVlasthshsList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getTuposVlasthshsList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setTuposVlasthshsList', value)
      }
    },
    storedTuposOikotopouList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getTuposOikotopouList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setTuposOikotopouList', value)
      }
    },
    storedEpifaneiaDeigmatolhpsiasFrom: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getEpifaneiaDeigmatolhpsiasFrom']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setEpifaneiaDeigmatolhpsiasFrom', value)
      }
    },
    storedEpifaneiaDeigmatolhpsiasTo: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getEpifaneiaDeigmatolhpsiasTo']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setEpifaneiaDeigmatolhpsiasTo', value)
      }
    },
    storedLatitudeEGSAList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getLatitudeEGSAList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setLatitudeEGSAList', value)
      }
    },
    storedLongitudeEGSAList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getLongitudeEGSAList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setLongitudeEGSAList', value)
      }
    },
    storedLatitudeWGS84List: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getLatitudeWGS84List']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setLatitudeWGS84List', value)
      }
    },
    storedLongitudeWGS84List: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getLongitudeWGS84List']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setLongitudeWGS84List', value)
      }
    },
    storedGridCellList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getGridCellList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setGridCellList', value)
      }
    },
    storedKwdikosNaturaList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getKwdikosNaturaList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setKwdikosNaturaList', value)
      }
    },
    storedMethodosDeigmatolhpsiasList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getMethodosDeigmatolhpsiasList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setMethodosDeigmatolhpsiasList', value)
      }
    },
    storedNomosList: {
      get: function() {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getNomosList']
      },
      set: function(value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setNomosList', value)
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
          if( response.data.kwdikosDeigmatolhpsiasList.length == 0 &&
            response.data.xrhmatodothshList.length == 0 &&
            response.data.ereunhthsList.length == 0 &&
            response.data.topothesiaList.length == 0 &&
            response.data.getDiarkeiaList.length == 0 &&
            response.data.tuposVlasthshsList.length == 0 &&
            response.data.tuposOikotopouList.length == 0 &&
            response.data.gridCellList.length == 0 &&
            response.data.kwdikosNaturaList.length == 0 &&
            response.data.methodosDeigmatolhpsiasList.length == 0 &&
            response.data.latitudeEGSAList.length == 0 &&
            response.data.longitudeEGSAList.length == 0 &&
            response.data.latitudeWGS84List.length == 0 &&
            response.data.longitudeWGS84List.length == 0 &&
            response.data.nomosList.length == 0
          ){
            this.snackbarColor = 'red'
            this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα για όλες τις λίστες της φόρμας φίλτρων'
            this.snackbar = true
          } else {
            this.autocompletes = response.data
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
      this.dialogKwdikosDeigmatolhpsiasList = this.storedKwdikosDeigmatolhpsiasList
      this.dialogXrhmatodothshList = this.storedXrhmatodothshList
      this.dialogEreunhthsList = this.storedEreunhthsList
      this.dialogTopothesiaList = this.storedDiarkeiaList
      this.dialogDateFrom = this.storedDateFrom
      this.dialogDateTo = this.storedDateTo
      this.dialogTimeFrom = this.storedTimeFrom
      this.dialogTimeTo = this.storedTimeTo
      this.dialogDiarkeiaList = this.storedDiarkeiaList
      this.dialogTuposVlasthshsList = this.storedTuposVlasthshsList
      this.dialogTuposOikotopouList = this.storedTuposOikotopouList
      this.dialogEpifaneiaDeigmatolhpsiasFrom = this.storedEpifaneiaDeigmatolhpsiasFrom
      this.dialogEpifaneiaDeigmatolhpsiasTo = this.storedEpifaneiaDeigmatolhpsiasTo
      this.dialogLatitudeEGSAList = this.storedLatitudeEGSAList
      this.dialogLongitudeEGSAList = this.storedLongitudeEGSAList
      this.dialogLatitudeWGS84List = this.storedLatitudeWGS84List
      this.dialogLongitudeWGS84List = this.storedLongitudeWGS84List
      this.dialogGridCellList = this.storedGridCellList
      this.dialogKwdikosNaturaList = this.storedKwdikosNaturaList
      this.dialogMethodosDeigmatolhpsiasList = this.storedMethodosDeigmatolhpsiasList
      this.dialogNomosList = this.storedNomosList
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
      if( this.storedKwdikosDeigmatolhpsiasList.length != 0 ) {
        search = search + 'kwdikosDeigmatolhpsias~'
        this.storedKwdikosDeigmatolhpsiasList.forEach(kwdikosDeigmatolhpsias => {
          search = search + kwdikosDeigmatolhpsias + ';'
        });
        search = search + '@'
      }
      if( this.storedXrhmatodothshList.length != 0 ) {
        search = search + 'xrhmatodothsh~'
        this.storedXrhmatodothshList.forEach(xrhmatodothsh => {
          search = search + xrhmatodothsh + ';'
        });
        search = search + '@'
      }
      if( this.storedEreunhthsList.length != 0 ) {
        search = search + 'ereunhths~'
        this.storedEreunhthsList.forEach(ereunhths => {
          search = search + ereunhths + ';'
        });
        search = search + '@'
      }
      if( this.storedTopothesiaList.length != 0 ) {
        search = search + 'topothesia~'
        this.storedTopothesiaList.forEach(topothesia => {
          search = search + topothesia + ';'
        });
        search = search + '@'
      }
      if (this.storedDateFrom != null) {
        search = search + 'date>' + this.storedDateFrom + '@'
      }
      if (this.storedDateTo != null) {
        search = search + 'date<' + this.storedDateTo + '@'
      }
      if (this.storedTimeFrom != null) {
        search = search + 'time>' + this.storedTimeFrom + '@'
      }
      if (this.storedTimeTo != null) {
        search = search + 'time<' + this.storedTimeTo + '@'
      }
      if( this.storedDiarkeiaList.length != 0 ) {
        search = search + 'diarkeia~'
        this.storedDiarkeiaList.forEach(diarkeia => {
          search = search + diarkeia + ';'
        });
        search = search + '@'
      }
      if( this.storedTuposVlasthshsList.length != 0 ) {
        search = search + 'tuposVlasthshs~'
        this.storedTuposVlasthshsList.forEach(tuposVlasthshs => {
          search = search + tuposVlasthshs + ';'
        });
        search = search + '@'
      }
      if( this.storedTuposOikotopouList.length != 0 ) {
        search = search + 'tuposOikotopou~'
        this.storedTuposOikotopouList.forEach(tuposOikotopou => {
          search = search + tuposOikotopou + ';'
        });
        search = search + '@'
      }
      if (this.storedEpifaneiaDeigmatolhpsiasFrom != null && this.storedEpifaneiaDeigmatolhpsiasFrom != '') {
        search = search + 'epifaneiaDeigmatolhpsias>' + this.storedEpifaneiaDeigmatolhpsiasFrom + '@'
      }
      if (this.storedEpifaneiaDeigmatolhpsiasTo != null && this.storedEpifaneiaDeigmatolhpsiasTo != '') {
        search = search + 'epifaneiaDeigmatolhpsias<' + this.storedEpifaneiaDeigmatolhpsiasTo + '@'
      }
      if( this.storedLatitudeEGSAList.length != 0 ) {
        search = search + 'latitudeEGSA~'
        this.storedLatitudeEGSAList.forEach(latitudeEGSA => {
          search = search + latitudeEGSA + ';'
        });
        search = search + '@'
      }
      if( this.storedLongitudeEGSAList.length != 0 ) {
        search = search + 'longitudeEGSA~'
        this.storedLongitudeEGSAList.forEach(longitudeEGSA => {
          search = search + longitudeEGSA + ';'
        });
        search = search + '@'
      }
      if( this.storedLatitudeWGS84List.length != 0 ) {
        search = search + 'latitudeWGS84~'
        this.storedLatitudeWGS84List.forEach(latitudeWGS84 => {
          search = search + latitudeWGS84 + ';'
        });
        search = search + '@'
      }
      if( this.storedLongitudeWGS84List.length != 0 ) {
        search = search + 'longitudeWGS84~'
        this.storedLongitudeWGS84List.forEach(longitudeWGS84 => {
          search = search + longitudeWGS84 + ';'
        });
        search = search + '@'
      }
      if( this.storedGridCellList.length != 0 ) {
        search = search + 'gridCell~'
        this.storedGridCellList.forEach(gridCell => {
          search = search + gridCell + ';'
        });
        search = search + '@'
      }
      if( this.storedKwdikosNaturaList.length != 0 ) {
        search = search + 'kwdikosNatura~'
        this.storedKwdikosNaturaList.forEach(kwdikosNatura => {
          search = search + kwdikosNatura + ';'
        });
        search = search + '@'
      }
      if( this.storedMethodosDeigmatolhpsiasList.length != 0 ) {
        search = search + 'methodosDeigmatolhpsias~'
        this.storedMethodosDeigmatolhpsiasList.forEach(methodosDeigmatolhpsias => {
          search = search + methodosDeigmatolhpsias + ';'
        });
        search = search + '@'
      }
      if( this.storedNomosList.length != 0 ) {
        search = search + 'nomos~'
        this.storedNomosList.forEach(nomos => {
          search = search + nomos + ';'
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
          // console.log(response)
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
      this.storedKwdikosDeigmatolhpsiasList = this.dialogKwdikosDeigmatolhpsiasList
      this.storedXrhmatodothshList = this.dialogXrhmatodothshList
      this.storedEreunhthsList = this.dialogEreunhthsList
      this.storedTopothesiaList = this.dialogTopothesiaList
      this.storedDateFrom = this.dialogDateFrom
      this.storedDateTo = this.dialogDateTo
      this.storedTimeFrom = this.dialogTimeFrom
      this.storedTimeTo = this.dialogTimeTo
      this.storedDiarkeiaList = this.dialogDiarkeiaList
      this.storedTuposVlasthshsList = this.dialogTuposVlasthshsList
      this.storedTuposOikotopouList = this.dialogTuposOikotopouList
      this.storedEpifaneiaDeigmatolhpsiasFrom = this.dialogEpifaneiaDeigmatolhpsiasFrom
      this.storedEpifaneiaDeigmatolhpsiasTo = this.dialogEpifaneiaDeigmatolhpsiasTo
      this.storedLatitudeEGSAList = this.dialogLatitudeEGSAList
      this.storedLongitudeEGSAList = this.dialogLongitudeEGSAList
      this.storedLatitudeWGS84List = this.dialogLatitudeWGS84List
      this.storedLongitudeWGS84List = this.dialogLongitudeWGS84List
      this.storedGridCellList = this.dialogGridCellList
      this.storedKwdikosNaturaList = this.dialogKwdikosNaturaList
      this.storedMethodosDeigmatolhpsiasList = this.dialogMethodosDeigmatolhpsiasList
      this.storedNomosList= this.dialogNomosList
    },
    // Updating the Vuex ChipsList by generating the new one from the submitted filtering
    generateNewChips() {
      let list = []
      if ( this.dialogKwdikosDeigmatolhpsiasList.length != 0 ) {
        this.dialogKwdikosDeigmatolhpsiasList.forEach(kwdikosDeigmatolhpsias => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( kwdikosDeigmatolhpsias.length > 20 ) {
            kwdikosDeigmatolhpsias = kwdikosDeigmatolhpsias.substring(0, 20)
            kwdikosDeigmatolhpsias = kwdikosDeigmatolhpsias + '...'
          }
          list.push('Κωδικός δειγματοληψίας = ' + kwdikosDeigmatolhpsias)
        });
      }
      if ( this.dialogXrhmatodothshList.length != 0 ) {
        this.dialogXrhmatodothshList.forEach(xrhmatodothsh => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( xrhmatodothsh.length > 20 ) {
            xrhmatodothsh = xrhmatodothsh.substring(0, 20)
            xrhmatodothsh = xrhmatodothsh + '...'
          }
          list.push('Χρηματοδότηση = ' + xrhmatodothsh)
        });
      }
      if ( this.dialogEreunhthsList.length != 0 ) {
        this.dialogEreunhthsList.forEach(ereunhths => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( ereunhths.length > 30 ) {
            ereunhths = ereunhths.substring(0, 30)
            ereunhths = ereunhths + '...'
          }
          list.push('Ερευνητής = ' + ereunhths)
        });
      }
      if ( this.dialogTopothesiaList.length != 0 ) {
        this.dialogTopothesiaList.forEach(topothesia => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( topothesia.length > 30 ) {
            topothesia = topothesia.substring(0, 30)
            topothesia = topothesia + '...'
          }
          list.push('Τοποθεσία = ' + topothesia)
        });
      }
      if ( this.dialogDateFrom != null ){
        list.push('Ημερομηνία >= ' + this.dialogDateFrom)
      }
      if ( this.dialogDateTo != null ){
        list.push('Ημερομηνία <= ' + this.dialogDateTo)
      }
      if ( this.dialogTimeFrom != null ){
        list.push('Ώρα >= ' + this.dialogTimeFrom)
      }
      if ( this.dialogTimeTo != null ){
        list.push('Ώρα <= ' + this.dialogTimeTo)
      }
      if ( this.dialogDiarkeiaList.length != 0 ) {
        this.dialogDiarkeiaList.forEach(diarkeia => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( diarkeia.length > 30 ) {
            diarkeia = diarkeia.substring(0, 30)
            diarkeia = diarkeia + '...'
          }
          list.push('Διάρκεια = ' + diarkeia)
        });
      }
      if ( this.dialogTuposVlasthshsList.length != 0 ) {
        this.dialogTuposVlasthshsList.forEach(tuposVlasthshs => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( tuposVlasthshs.length > 20 ) {
            tuposVlasthshs = tuposVlasthshs.substring(0, 20)
            tuposVlasthshs = tuposVlasthshs + '...'
          }
          list.push('Τύπος βλάστησης = ' + tuposVlasthshs)
        });
      }
      if ( this.dialogTuposOikotopouList.length != 0 ) {
        this.dialogTuposOikotopouList.forEach(tuposOikotopou => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( tuposOikotopou.length > 20 ) {
            tuposOikotopou = tuposOikotopou.substring(0, 20)
            tuposOikotopou = tuposOikotopou + '...'
          }
          list.push('Τύπος οικοτόπου = ' + tuposOikotopou)
        });
      }
      if ( this.dialogEpifaneiaDeigmatolhpsiasFrom != null && this.dialogEpifaneiaDeigmatolhpsiasFrom != '' ){
        list.push('Επιφάνεια δειγματοληψίας >= ' + this.dialogEpifaneiaDeigmatolhpsiasFrom)
      }
      if ( this.dialogEpifaneiaDeigmatolhpsiasTo != null && this.dialogEpifaneiaDeigmatolhpsiasTo != '' ){
        list.push('Επιφάνεια δειγματοληψίας <= ' + this.dialogEpifaneiaDeigmatolhpsiasTo)
      }
      if ( this.dialogLatitudeEGSAList.length != 0 ) {
        this.dialogLatitudeEGSAList.forEach(latitudeEGSA => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( latitudeEGSA.length > 20 ) {
            latitudeEGSA = latitudeEGSA.substring(0, 20)
            latitudeEGSA = latitudeEGSA + '...'
          }
          list.push('Γεωγρ. πλάτος EGSA = ' + latitudeEGSA)
        });
      }
      if ( this.dialogLongitudeEGSAList.length != 0 ) {
        this.dialogLongitudeEGSAList.forEach(longitudeEGSA => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( longitudeEGSA.length > 20 ) {
            longitudeEGSA = longitudeEGSA.substring(0, 20)
            longitudeEGSA = longitudeEGSA + '...'
          }
          list.push('Γεωγρ. μήκος EGSA = ' + longitudeEGSA)
        });
      }
      if ( this.dialogLatitudeWGS84List.length != 0 ) {
        this.dialogLatitudeWGS84List.forEach(latitudeWGS84 => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( latitudeWGS84.length > 20 ) {
            latitudeWGS84 = latitudeWGS84.substring(0, 20)
            latitudeWGS84 = latitudeWGS84 + '...'
          }
          list.push('Γεωγρ. πλάτος WGS84 = ' + latitudeWGS84)
        });
      }
      if ( this.dialogLongitudeWGS84List.length != 0 ) {
        this.dialogLongitudeWGS84List.forEach(longitudeWGS84 => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( longitudeWGS84.length > 20 ) {
            longitudeWGS84 = longitudeWGS84.substring(0, 20)
            longitudeWGS84 = longitudeWGS84 + '...'
          }
          list.push('Γεωγρ. μήκος WGS84 = ' + longitudeWGS84)
        });
      }
      if ( this.dialogGridCellList.length != 0 ) {
        this.dialogGridCellList.forEach(gridCell => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( gridCell.length > 20 ) {
            gridCell = gridCell.substring(0, 20)
            gridCell = gridCell + '...'
          }
          list.push('Κελί πλέγματος = ' + gridCell)
        });
      }
      if ( this.dialogKwdikosNaturaList.length != 0 ) {
        this.dialogKwdikosNaturaList.forEach(kwdikosNatura => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( kwdikosNatura.length > 20 ) {
            kwdikosNatura = kwdikosNatura.substring(0, 20)
            kwdikosNatura = kwdikosNatura + '...'
          }
          list.push('Κωδικός Natura = ' + kwdikosNatura)
        });
      }
      if ( this.dialogMethodosDeigmatolhpsiasList.length != 0 ) {
        this.dialogMethodosDeigmatolhpsiasList.forEach(methodosDeigmatolhpsias => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( methodosDeigmatolhpsias.length > 20 ) {
            methodosDeigmatolhpsias = methodosDeigmatolhpsias.substring(0, 20)
            methodosDeigmatolhpsias = methodosDeigmatolhpsias + '...'
          }
          list.push('Μέθοδος δειγματοληψίας = ' + methodosDeigmatolhpsias)
        });
      }
      if ( this.dialogNomosList.length != 0 ) {
        this.dialogNomosList.forEach(nomos => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if ( nomos.length > 20 ) {
            nomos = nomos.substring(0, 20)
            nomos = nomos + '...'
          }
          list.push('Νομός = ' + nomos)
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
      this.$router.push('/thhlastika/deigma-thhlastikwn/' + id)
    },
    getPreviousPage() {
      this.$router.push('/thhlastika/deigma-thhlastikwn/dynamic-search/page/' + (this.paramPage - 1))
    },
    getNextPage() {
      this.$router.push('/thhlastika/deigma-thhlastikwn/dynamic-search/page/' + (this.paramPage + 1))
    }
  }
}
</script>