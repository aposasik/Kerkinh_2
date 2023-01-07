exports.ids = [5];
exports.modules = {

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/deigmata/dynamic-search/page/_number/index.vue?vue&type=template&id=ba5ff886&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),_c('v-layout',{attrs:{"mt-4":"","mb-3":""}},[_c('v-spacer'),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"800px"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"slot":"activator","color":"green lighten-2","outline":"","dark":"","title":"Επιλέξτε φίλτρα για τη δυναμική αναζήτηση"},on:{"click":function($event){_vm.dialog = true}},slot:"activator"},[_vm._v("Φίλτρα"),_c('v-icon',{attrs:{"right":""}},[_vm._v("dvr")])],1),_vm._v(" "),_c('v-card',[_c('div',{staticStyle:{"position":"absolute","top":"0px","right":"0px"}},[_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){_vm.dialog = false}}},[_c('v-icon',{attrs:{"medium":"","color":"red lighten-1"}},[_vm._v("close")])],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","wrap":"","row":"","justify-center":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"text-xs-center"},[_c('h2',{staticClass:"font-weight-medium grey--text text--darken-1"},[_vm._v("Φίλτρα")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md6":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Πρωτόκολλα","color":"green lighten-2","multiple":"","no-data-text":"Δεν βρέθηκαν δεδομένα","items":_vm.prwtokolaList},model:{value:(_vm.dialogPrwtokolaList),callback:function ($$v) {_vm.dialogPrwtokolaList=$$v},expression:"dialogPrwtokolaList"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","row":"","wrap":"","justify-space-between":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":"","md5":"","my-2":""}},[_c('v-autocomplete',{attrs:{"label":"Αριθμός δεδομένων","color":"green lighten-2","no-data-text":"Δεν βρέθηκαν δεδομένα","items":_vm.sizesList},model:{value:(_vm.dialogSize),callback:function ($$v) {_vm.dialogSize=$$v},expression:"dialogSize"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","my-2":""}},[_c('v-autocomplete',{attrs:{"label":"Ταξινόμηση","color":"green lighten-2","no-data-text":"Δεν βρέθηκαν δεδομένα","items":_vm.sortsList,"hint":"Φθίνουσα - Desc | Αύξουσα - Asc","persistent-hint":true},model:{value:(_vm.dialogSort),callback:function ($$v) {_vm.dialogSort=$$v},expression:"dialogSort"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","row":"","wrap":"","justify-center":"","align-center":""}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"dark":"","color":"green lighten-2"},on:{"click":_vm.filterAndSearch}},[_vm._v("Δυναμική Αναζήτηση")])],1)],1)],1)],1),_vm._v(" "),(_vm.storedChips.length != 0 || _vm.storedChips != null)?_c('v-flex',{attrs:{"xs12":""}},_vm._l((this.storedChips),function(chip){return _c('v-chip',{key:chip,staticClass:"mb-3"},[_vm._v(_vm._s(chip))])}),1):_vm._e(),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('v-btn',{staticStyle:{"text-transform":"none","margin-left":"0px"},attrs:{"href":_vm.generatedDownloadRequest,"disabled":_vm.downloadDisable,"color":"green lighten-1","dark":"","title":"Λήψη δεδομένων σε μορφή xlsx excel μέσω της δυναμικής αναζήτησης"},on:{"click":_vm.onDownloadClicked}},[_vm._v("Λήψη excel"),_c('v-icon',{attrs:{"right":""}},[_vm._v("save_alt")])],1),_vm._v(" "),(_vm.downloadDisable == true)?_c('div',[_c('v-progress-linear',{staticStyle:{"width":"150px"},attrs:{"color":"green lighten-1","indeterminate":""}})],1):_vm._e(),_vm._v(" "),_c('div',[_c('h3',{staticClass:"my-4 text-xs-center text-md-left font-weight-regular"},[_vm._v("Σύνολο Δειγμάτων : "+_vm._s(this.returnedData.totalResults)+" ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_vm._l((_vm.returnedData.deigmataList),function(deigma){return _c('div',{key:deigma.id,staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-between":"","pa-4":""}},[_c('v-flex',{attrs:{"xs12":"","md12":"","lg3":""}},[_c('h4',{staticClass:"my-3 font-weight-thin"},[_vm._v(" Δείγμα ")]),_vm._v(" "),_c('p',{staticClass:"font-weight-regular"},[_vm._v("Id : "+_vm._s(deigma.id))])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","lg3":""}},[_c('h4',{staticClass:"my-3 font-weight-thin"},[_vm._v(" Πρωτόκολλο ")]),_vm._v(" "),_c('p',{staticClass:"font-weight-regular"},[_vm._v("Id : "+_vm._s(deigma.prwtokolaId))])]),_vm._v(" "),(deigma.deigmaThhlastikwn != null)?_c('v-flex',{attrs:{"xs12":"","md5":"","lg3":""}},[_c('h4',{staticClass:"my-3 font-weight-thin"},[_vm._v(" Δείγμα Θηλαστικών ")]),_vm._v(" "),_c('p',{staticClass:"font-weight-regular"},[_vm._v("Id : "+_vm._s(deigma.deigmaThhlastikwnId))])]):_vm._e(),_vm._v(" "),_c('v-flex',{attrs:{"xs12":""}},[_c('v-divider',{staticClass:"mt-3 mb-2"})],1),_vm._v(" "),_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(deigma.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"green","dark":""},on:{"click":function($event){return _vm.toIdPage(deigma.id)}}},[_vm._v("Εμφάνιση")])],1)],1)],1)}),_vm._v(" "),(_vm.noElements == false)?_c('div',{staticStyle:{"margin-top":"100px","margin-bottom":"20px"}},[_c('v-layout',[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.returnedData.hasPreviousPage,"color":"green","flat":"","title":"Προηγούμενη σελίδα"},on:{"click":_vm.getPreviousPage}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("arrow_back")]),_vm._v("\n            Σελίδα\n          ")],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.returnedData.hasNextPage,"color":"green","flat":"","title":"Επόμενη σελίδα"},on:{"click":_vm.getNextPage}},[_vm._v("\n            Σελίδα\n            "),_c('v-icon',{attrs:{"right":""}},[_vm._v("arrow_forward")])],1)],1)],1):_vm._e()],2):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/deigmata/dynamic-search/page/_number/index.vue?vue&type=template&id=ba5ff886&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/deigmata/dynamic-search/page/_number/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _numbervue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Δείγματα - Δυναμική Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Δυναμική Αναζήτηση (δεδομένων) Δειγμάτων για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Δυναμική Αναζήτηση Δειγμάτων',
        emptyElements: 'Δεν υπάρχουν αποθηκευμένα δεδομένα'
      },
      noElements: null,
      downloadDisable: false,
      // For filtering dialog
      dialog: false,
      dialogSize: null,
      dialogSort: null,
      dialogPrwtokolaList: [],
      sizesList: [10, 15, 20, 40, 100],
      sortsList: ['Desc', 'Asc'],
      // The Prwtokola values list that we get trough the getAutocompletes Request when mounted()
      prwtokolaList: [],
      returnedData: {
        deigmataList: [{
          id: null,
          prwtokolaId: null,
          deigmaThhlastikwnId: null
        }],
        totalReturnedResults: 0,
        hasPreviousPage: false,
        hasNextPage: false,
        totalPages: 0,
        totalResults: 0,
        page: null,
        size: null
      },
      // Url objects
      searchUrl: '?search=',
      getSearchRequest: '',
      getDownloadRequest: '',
      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },

  computed: {
    getAutocompletesUrl() {
      return this.$store.getters.getDeigmataAutocompletes;
    },

    dynamicSearchUrl() {
      return this.$store.getters.getDeigmataDynamicSearchUrl;
    },

    dynamicDownloadUrl() {
      return this.$store.getters.getDeigmataDynamicDownloadUrl;
    },

    paramPage() {
      return Number(this.$route.params.number);
    },

    currentPage() {
      return this.$route.params.number - 1;
    },

    storedChips: {
      get: function () {
        return this.$store.getters['deigmata/getChipsList'];
      },
      set: function (value) {
        this.$store.commit('deigmata/setChipsList', value);
      }
    },
    storedSize: {
      get: function () {
        return this.$store.getters['deigmata/getSize'];
      },
      set: function (value) {
        this.$store.commit('deigmata/setSize', value);
      }
    },
    storedSort: {
      get: function () {
        return this.$store.getters['deigmata/getSort'];
      },
      set: function (value) {
        this.$store.commit('deigmata/setSort', value);
      }
    },
    storedPrwtokolaList: {
      get: function () {
        return this.$store.getters['deigmata/getPrwtokolaList'];
      },
      set: function (value) {
        this.$store.commit('deigmata/setPrwtokolaList', value);
      }
    },

    sizeUrl() {
      return '&size=' + this.storedSize;
    },

    sortUrl() {
      return '&sort=' + this.storedSort;
    },

    pageUrl() {
      return '&page=' + this.currentPage;
    },

    // Automatically generated request urls for search and download calls
    generatedSearchRequest() {
      return this.genGetSearchRequest();
    },

    generatedDownloadRequest() {
      return this.genGetDownloadRequest();
    }

  },

  mounted() {
    this.getAutocompletes();
    this.initDialogLists();
    this.restSearchCall();
  },

  methods: {
    // Getting the Autocompletes for the filtering form
    getAutocompletes() {
      this.$axios.get(this.getAutocompletesUrl).then(response => {
        if (response.data.length == 0) {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα Πρωτόκολλα για τη φόρμα φίλτρων';
          this.snackbar = true;
        } else {
          this.noElements = false;
          this.prwtokolaList = response.data;
        }
      }).catch(err => {
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα στη φόρτωση λιστών για τη φόρμα φίλτρων';
        this.snackbar = true;
        throw err;
      });
    },

    // Getting the Stored values whether they are the deafults or saved from previous search or paging
    initDialogLists() {
      this.dialogSize = this.storedSize;
      this.dialogSort = this.storedSort;
      this.dialogPrwtokolaList = this.storedPrwtokolaList;
    },

    // Generating the Get request
    genGetSearchRequest() {
      let search = this.generateArguments();
      return this.dynamicSearchUrl + search + this.sizeUrl + this.pageUrl + this.sortUrl;
    },

    genGetDownloadRequest() {
      let search = this.generateArguments();
      return this.dynamicDownloadUrl + search + this.sortUrl;
    },

    // Generating the String for the arguments (filtered or not)
    generateArguments() {
      let search = this.searchUrl;

      if (this.storedPrwtokolaList.length != 0) {
        search = search + 'prwtokola~';
        this.storedPrwtokolaList.forEach(prwtokola => {
          search = search + prwtokola + ';';
        });
        search = search + '@';
      }

      return search;
    },

    // Search Get Request
    restSearchCall() {
      this.loading = true;
      this.$axios.get(this.generatedSearchRequest).then(response => {
        if (response.data.totalResults == 0) {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της δυναμικής αναζήτησης';
          this.snackbar = true;
        } else if (response.data.totalReturnedResults == 0) {
          this.noElements = true;
        } else {
          this.noElements = false;
          this.returnedData = response.data;
        }

        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα στη δυναμική αναζήτηση';
        this.snackbar = true;
        throw err;
      });
    },

    // Triggered when the user submits the filtering
    filterAndSearch() {
      this.updateFiltering();
      this.generateNewChips();
      this.restSearchCall();
      this.dialog = false;
    },

    // Updating the Vuex store with new filter values (so that the Get Requests will have the updated search arguments)
    updateFiltering() {
      this.storedSize = this.dialogSize;
      this.storedSort = this.dialogSort;
      this.storedPrwtokolaList = this.dialogPrwtokolaList;
    },

    // Updating the Vuex ChipsList by generating the new one from the submitted filtering
    generateNewChips() {
      let list = [];

      if (this.dialogPrwtokolaList.length != 0) {
        this.dialogPrwtokolaList.forEach(prwtokolo => {
          list.push('Πρωτόκολλο Id = ' + prwtokolo);
        });
      }

      if (list.length != 0) {
        this.storedChips = list;
      } else {
        list.push('Χωρίς φίλτρα');
        this.storedChips = list;
      }
    },

    // Timeout for download btn so that the user wont be able to click it again for some time
    onDownloadClicked() {
      this.snackbarColor = 'green lighten-1';
      this.snackbarText = 'Δημιουργείται το excel αρχείο : Μπορεί να διαρκέσει λίγη ώρα ανάλογα τον όγκο των δεδομένων. Μετά την λήψη μεταβείτε στον φάκελο λήψεις του συστήματός σας.';
      this.snackbar = true;
      this.downloadDisable = true;
      setTimeout(() => {
        this.downloadDisable = false;
      }, 10000);
    },

    toIdPage(id) {
      this.$router.push('/deigmata/' + id);
    },

    getPreviousPage() {
      this.$router.push('/deigmata/dynamic-search/page/' + (this.paramPage - 1));
    },

    getNextPage() {
      this.$router.push('/deigmata/dynamic-search/page/' + (this.paramPage + 1));
    }

  }
});
// CONCATENATED MODULE: ./pages/deigmata/dynamic-search/page/_number/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_numbervue_type_script_lang_js_ = (_numbervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/deigmata/dynamic-search/page/_number/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_numbervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3f19669f"
  
)

/* harmony default export */ var _number = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map