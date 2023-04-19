exports.ids = [25];
exports.modules = {

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/_number/index.vue?vue&type=template&id=daaa265e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),_c('v-layout',{attrs:{"mt-4":"","mb-3":""}},[_c('v-spacer'),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"800px"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"slot":"activator","color":"green lighten-2","outline":"","dark":"","title":"Επιλέξτε φίλτρα για τη δυναμική αναζήτηση"},on:{"click":function($event){_vm.dialog = true}},slot:"activator"},[_vm._v("Φίλτρα"),_c('v-icon',{attrs:{"right":""}},[_vm._v("dvr")])],1),_vm._v(" "),_c('v-card',[_c('div',{staticStyle:{"position":"absolute","top":"0px","right":"0px"}},[_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){_vm.dialog = false}}},[_c('v-icon',{attrs:{"medium":"","color":"red lighten-1"}},[_vm._v("close")])],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","wrap":"","row":"","justify-center":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"text-xs-center"},[_c('h2',{staticClass:"font-weight-medium grey--text text--darken-1"},[_vm._v("Φίλτρα")])])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md6":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Δείγματα Θηλαστικών Ids","color":"green lighten-2","multiple":"","items":_vm.deigmaThhlastikwnIdList},model:{value:(_vm.dialogDeigmaThhlastikwnIdList),callback:function ($$v) {_vm.dialogDeigmaThhlastikwnIdList=$$v},expression:"dialogDeigmaThhlastikwnIdList"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","wrap":"","row":"","justify-space-between":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Ct Είδους","color":"green lighten-2","multiple":"","hint":"Λίστα όλων των Ct Ειδών","persisten-hint":true,"items":_vm.eidhList},model:{value:(_vm.dialogEidhList),callback:function ($$v) {_vm.dialogEidhList=$$v},expression:"dialogEidhList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Σχετική Αφθονία","color":"green lighten-2","multiple":"","items":_vm.sxetikhAfthoniaList},model:{value:(_vm.dialogSxetikhAfthoniaList),callback:function ($$v) {_vm.dialogSxetikhAfthoniaList=$$v},expression:"dialogSxetikhAfthoniaList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Ηλικία","color":"green lighten-2","multiple":"","items":_vm.hlikiaList},model:{value:(_vm.dialogHlikiaList),callback:function ($$v) {_vm.dialogHlikiaList=$$v},expression:"dialogHlikiaList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Φύλο","color":"green lighten-2","multiple":"","items":_vm.fuloList},model:{value:(_vm.dialogFuloList),callback:function ($$v) {_vm.dialogFuloList=$$v},expression:"dialogFuloList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-text-field',{staticClass:"mt-3 mb-5",attrs:{"label":"Αριθμός ατόμων -Από-","color":"green lighten-2","multiple":""},model:{value:(_vm.dialogPlhthosFrom),callback:function ($$v) {_vm.dialogPlhthosFrom=$$v},expression:"dialogPlhthosFrom"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-text-field',{staticClass:"mt-3 mb-5",attrs:{"label":"Αριθμός ατόμων -Εώς-","color":"green lighten-2","multiple":""},model:{value:(_vm.dialogPlhthosTo),callback:function ($$v) {_vm.dialogPlhthosTo=$$v},expression:"dialogPlhthosTo"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","lg3":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"ΕοκΠαρII","color":"green lighten-2","items":_vm.eokParList},model:{value:(_vm.dialogEokParII),callback:function ($$v) {_vm.dialogEokParII=$$v},expression:"dialogEokParII"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","lg3":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"ΕοκΠαρIV","color":"green lighten-2","items":_vm.eokParList},model:{value:(_vm.dialogEokParIV),callback:function ($$v) {_vm.dialogEokParIV=$$v},expression:"dialogEokParIV"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","lg3":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"ΕοκΠαρV","color":"green lighten-2","items":_vm.eokParList},model:{value:(_vm.dialogEokParV),callback:function ($$v) {_vm.dialogEokParV=$$v},expression:"dialogEokParV"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","row":"","wrap":"","justify-space-between":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":"","md5":"","my-2":""}},[_c('v-autocomplete',{attrs:{"label":"Αριθμός δεδομένων","color":"green lighten-2","items":_vm.sizesList},model:{value:(_vm.dialogSize),callback:function ($$v) {_vm.dialogSize=$$v},expression:"dialogSize"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","my-2":""}},[_c('v-autocomplete',{attrs:{"label":"Ταξινόμηση","color":"green lighten-2","items":_vm.sortsList,"hint":"Φθίνουσα - Desc | Αύξουσα - Asc","persistent-hint":true},model:{value:(_vm.dialogSort),callback:function ($$v) {_vm.dialogSort=$$v},expression:"dialogSort"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","row":"","wrap":"","justify-center":"","align-center":""}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"dark":"","color":"green lighten-2"},on:{"click":_vm.filterAndSearch}},[_vm._v("Δυναμική Αναζήτηση")])],1)],1)],1)],1),_vm._v(" "),(_vm.storedChips.length != 0 || _vm.storedChips != null)?_c('v-flex',{attrs:{"xs12":""}},_vm._l((this.storedChips),function(chip){return _c('v-chip',{key:chip,staticClass:"mb-3"},[_vm._v(_vm._s(chip))])}),1):_vm._e(),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('v-btn',{staticStyle:{"text-transform":"none","margin-left":"0px"},attrs:{"href":_vm.generatedDownloadRequest,"disabled":_vm.downloadDisable,"color":"green lighten-1","dark":"","title":"Λήψη δεδομένων σε μορφή xlsx excel μέσω της δυναμικής αναζήτησης"},on:{"click":_vm.onDownloadClicked}},[_vm._v("Λήψη excel"),_c('v-icon',{attrs:{"right":""}},[_vm._v("save_alt")])],1),_vm._v(" "),(_vm.downloadDisable == true)?_c('div',[_c('v-progress-linear',{staticStyle:{"width":"150px"},attrs:{"color":"green lighten-1","indeterminate":""}})],1):_vm._e(),_vm._v(" "),_c('div',[_c('h3',{staticClass:"my-4 text-xs-center text-md-left font-weight-regular"},[_vm._v("Σύνολο Χ Ειδών Θηλαστικών : "+_vm._s(this.returnedData.totalResults)+" ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_vm._l((_vm.returnedData.deigmaThhlastikwnXEidhList),function(deigmaX){return _c('div',{key:deigmaX.id,staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('div',{staticClass:"pa-4"},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Δείγμα Θηλαστικών Id","color":"green","readonly":""},model:{value:(deigmaX.deigmaThhlastikwn.id),callback:function ($$v) {_vm.$set(deigmaX.deigmaThhlastikwn, "id", $$v)},expression:"deigmaX.deigmaThhlastikwn.id"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ct Είδους","color":"green","readonly":""},model:{value:(deigmaX.ctThhlastikaEidh.eidos),callback:function ($$v) {_vm.$set(deigmaX.ctThhlastikaEidh, "eidos", $$v)},expression:"deigmaX.ctThhlastikaEidh.eidos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Σχετική Αφθονία","color":"green","readonly":""},model:{value:(deigmaX.sxetikhAfthonia),callback:function ($$v) {_vm.$set(deigmaX, "sxetikhAfthonia", $$v)},expression:"deigmaX.sxetikhAfthonia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Αριθμός ατόμων","color":"green","readonly":""},model:{value:(deigmaX.plhthos),callback:function ($$v) {_vm.$set(deigmaX, "plhthos", $$v)},expression:"deigmaX.plhthos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ηλικία","color":"green","readonly":""},model:{value:(deigmaX.hlikia),callback:function ($$v) {_vm.$set(deigmaX, "hlikia", $$v)},expression:"deigmaX.hlikia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Φύλο","color":"green","readonly":""},model:{value:(deigmaX.fulo),callback:function ($$v) {_vm.$set(deigmaX, "fulo", $$v)},expression:"deigmaX.fulo"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"ΕΟΚ Παρ II","color":"green","readonly":""},model:{value:(deigmaX.eokParII),callback:function ($$v) {_vm.$set(deigmaX, "eokParII", $$v)},expression:"deigmaX.eokParII"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"ΕΟΚ Παρ IV","color":"green","readonly":""},model:{value:(deigmaX.eokParIV),callback:function ($$v) {_vm.$set(deigmaX, "eokParIV", $$v)},expression:"deigmaX.eokParIV"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"ΕΟΚ Παρ V","color":"green","readonly":""},model:{value:(deigmaX.eokParV),callback:function ($$v) {_vm.$set(deigmaX, "eokParV", $$v)},expression:"deigmaX.eokParV"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"justify-center":""}},[_c('v-flex',{attrs:{"xs12":"","md10":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Παρατηρήσεις","color":"green","readonly":"","rows":"6"},model:{value:(deigmaX.parathrhseis),callback:function ($$v) {_vm.$set(deigmaX, "parathrhseis", $$v)},expression:"deigmaX.parathrhseis"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('v-divider',{staticClass:"mt-3 mb-2"})],1),_vm._v(" "),_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(deigmaX.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"green","dark":""},on:{"click":function($event){return _vm.toIdPage(deigmaX.id)}}},[_vm._v("Εμφάνιση")])],1)],1)])],1)}),_vm._v(" "),(_vm.noElements == false)?_c('div',{staticStyle:{"margin-top":"100px","margin-bottom":"20px"}},[_c('v-layout',[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.returnedData.hasPreviousPage,"color":"green","flat":"","title":"Προηγούμενη σελίδα"},on:{"click":_vm.getPreviousPage}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("arrow_back")]),_vm._v("\n            Σελίδα\n          ")],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.returnedData.hasNextPage,"color":"green","flat":"","title":"Επόμενη σελίδα"},on:{"click":_vm.getNextPage}},[_vm._v("\n            Σελίδα\n            "),_c('v-icon',{attrs:{"right":""}},[_vm._v("arrow_forward")])],1)],1)],1):_vm._e()],2):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/_number/index.vue?vue&type=template&id=daaa265e&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/_number/index.vue?vue&type=script&lang=js&
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
      title: 'Δειγματοληψίες Χ Είδη Θηλαστικών - Δυναμική Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Δυναμική Αναζήτηση (δεδομένων) Δειγματοληψιών Χ Ειδών Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
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
        deigmaThhlastikwnXEidhList: [{
          id: null // actCode: null,

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
      return this.$store.getters.getThhlastikaXEidhAutocompletes;
    },

    dynamicSearchUrl() {
      return this.$store.getters.getThhlastikaXEidhDynamicSearchUrl;
    },

    dynamicDownloadUrl() {
      return this.$store.getters.getThhlastikaXEidhDynamicDownloadUrl;
    },

    paramPage() {
      return Number(this.$route.params.number);
    },

    currentPage() {
      return this.$route.params.number - 1;
    },

    storedChips: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getChipsList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setChipsList', value);
      }
    },
    storedSize: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getSize'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setSize', value);
      }
    },
    storedSort: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getSort'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setSort', value);
      }
    },
    storedDeigmaThhlastikwnIdList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getDeigmaThhlastikwnIdList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setDeigmaThhlastikwnIdList', value);
      }
    },
    storedEidhList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getEidhList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setEidhList', value);
      }
    },
    storedSxetikhAfthoniaList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getSxetikhAfthoniaList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setSxetikhAfthoniaList', value);
      }
    },
    storedHlikiaList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getHlikiaList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setHlikiaList', value);
      }
    },
    storedFuloList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getFuloList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setFuloList', value);
      }
    },
    storedPlhthosFrom: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getPlhthosFrom'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setPlhthosFrom', value);
      }
    },
    storedPlhthosTo: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getPlhthosTo'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setPlhthosTo', value);
      }
    },
    storedEokParII: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getEokParII'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setEokParII', value);
      }
    },
    storedEokParIV: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getEokParIV'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setEokParIV', value);
      }
    },
    storedEokParV: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn-x-eidh/getEokParV'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn-x-eidh/setEokParV', value);
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
        if (response.data.deigmaThhlastikwnIdList.length == 0 && response.data.ctEidosList.length == 0 && response.data.sxetikhAfthoniaList.length == 0 && response.data.hlikiaList.length == 0 && response.data.fuloList.length == 0) {
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα για όλες τις λίστες της φόρμας φίλτρων';
          this.snackbar = true;
        } else {
          this.deigmaThhlastikwnIdList = response.data.deigmaThhlastikwnIdList;
          this.eidhList = response.data.ctEidosList;
          this.sxetikhAfthoniaList = response.data.sxetikhAfthoniaList;
          this.hlikiaList = response.data.hlikiaList;
          this.fuloList = response.data.fuloList;
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
      this.dialogDeigmaThhlastikwnIdList = this.storedDeigmaThhlastikwnIdList;
      this.dialogEidhList = this.storedEidhList;
      this.dialogSxetikhAfthoniaList = this.storedSxetikhAfthoniaList;
      this.dialogHlikiaList = this.storedHlikiaList;
      this.dialogFuloList = this.storedFuloList;
      this.dialogPlhthosFrom = this.storedPlhthosFrom;
      this.dialogPlhthosTo = this.storedPlhthosTo;
      this.dialogEokParII = this.storedEokParII;
      this.dialogEokParIV = this.storedEokParIV;
      this.dialogEokParV = this.storedEokParV;
    },

    // Generating the Get request
    genGetSearchRequest() {
      let search = this.generateArguments(); // console.log(this.dynamicSearchUrl + search + this.sizeUrl + this.pageUrl + this.sortUrl)

      return this.dynamicSearchUrl + search + this.sizeUrl + this.pageUrl + this.sortUrl;
    },

    genGetDownloadRequest() {
      let search = this.generateArguments();
      return this.dynamicDownloadUrl + search + this.sortUrl;
    },

    // Generating the String for the arguments (filtered or not)
    generateArguments() {
      let search = this.searchUrl;

      if (this.storedDeigmaThhlastikwnIdList.length != 0) {
        search = search + 'deigmaThhlastikwn~';
        this.storedDeigmaThhlastikwnIdList.forEach(deigmaId => {
          search = search + deigmaId + ';';
        });
        search = search + '@';
      }

      if (this.storedEidhList.length != 0) {
        search = search + 'ctThhlastikaEidh~';
        this.storedEidhList.forEach(eidos => {
          search = search + eidos + ';';
        });
        search = search + '@';
      }

      if (this.storedSxetikhAfthoniaList.length != 0) {
        search = search + 'sxetikhAfthonia~';
        this.storedSxetikhAfthoniaList.forEach(sxetikhAfthonia => {
          search = search + sxetikhAfthonia + ';';
        });
        search = search + '@';
      }

      if (this.storedHlikiaList.length != 0) {
        search = search + 'hlikia~';
        this.storedHlikiaList.forEach(hlikia => {
          search = search + hlikia + ';';
        });
        search = search + '@';
      }

      if (this.storedFuloList.length != 0) {
        search = search + 'fulo~';
        this.storedFuloList.forEach(fulo => {
          search = search + fulo + ';';
        });
        search = search + '@';
      }

      if (this.storedPlhthosFrom != null && this.storedPlhthosFrom != '') {
        search = search + 'plhthos>' + this.storedPlhthosFrom + '@';
      }

      if (this.storedPlhthosTo != null && this.storedPlhthosTo != '') {
        search = search + 'plhthos<' + this.storedPlhthosTo + '@';
      }

      if (this.storedEokParII != null) {
        search = search + 'eokParII~' + this.storedEokParII + '@';
      }

      if (this.storedEokParIV != null) {
        search = search + 'eokParIV~' + this.storedEokParIV + '@';
      }

      if (this.storedEokParV != null) {
        search = search + 'eokParV~' + this.storedEokParV + '@';
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
      this.storedDeigmaThhlastikwnIdList = this.dialogDeigmaThhlastikwnIdList;
      this.storedEidhList = this.dialogEidhList;
      this.storedSxetikhAfthoniaList = this.dialogSxetikhAfthoniaList;
      this.storedHlikiaList = this.dialogHlikiaList;
      this.storedFuloList = this.dialogFuloList;
      this.storedPlhthosFrom = this.dialogPlhthosFrom;
      this.storedPlhthosTo = this.dialogPlhthosTo;
      this.storedEokParII = this.dialogEokParII;
      this.storedEokParIV = this.dialogEokParIV;
      this.storedEokParV = this.dialogEokParV;
    },

    // Updating the Vuex ChipsList by generating the new one from the submitted filtering
    generateNewChips() {
      let list = [];

      if (this.dialogDeigmaThhlastikwnIdList.length != 0) {
        this.dialogDeigmaThhlastikwnIdList.forEach(deigmaId => {
          list.push('Δείγμα Θηλαστικών Id = ' + deigmaId);
        });
      }

      if (this.dialogEidhList.length != 0) {
        this.dialogEidhList.forEach(eidos => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (eidos.length > 30) {
            eidos = eidos.substring(0, 30);
            eidos = eidos + '...';
          }

          list.push('Ct Είδους = ' + eidos);
        });
      }

      if (this.dialogSxetikhAfthoniaList.length != 0) {
        this.dialogSxetikhAfthoniaList.forEach(sxetikhAfthonia => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (sxetikhAfthonia.length > 30) {
            sxetikhAfthonia = sxetikhAfthonia.substring(0, 30);
            sxetikhAfthonia = sxetikhAfthonia + '...';
          }

          list.push('Σχετική αφθονία = ' + sxetikhAfthonia);
        });
      }

      if (this.dialogHlikiaList.length != 0) {
        this.dialogHlikiaList.forEach(hlikia => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (hlikia.length > 30) {
            hlikia = hlikia.substring(0, 30);
            hlikia = hlikia + '...';
          }

          list.push('Ηλικία = ' + hlikia);
        });
      }

      if (this.dialogFuloList.length != 0) {
        this.dialogFuloList.forEach(fulo => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (fulo.length > 30) {
            fulo = fulo.substring(0, 30);
            fulo = fulo + '...';
          }

          list.push('Φύλο = ' + fulo);
        });
      }

      if (this.dialogPlhthosFrom != null && this.dialogPlhthosFrom != '') {
        list.push('Πλήθος >= ' + this.dialogPlhthosFrom);
      }

      if (this.dialogPlhthosTo != null && this.dialogPlhthosTo != '') {
        list.push('Πληθος <= ' + this.dialogPlhthosTo);
      }

      if (this.dialogEokParII == true || this.dialogEokParII == false) {
        list.push('ΕοκΠαρΙΙ = ' + this.dialogEokParII);
      }

      if (this.dialogEokParIV == true || this.dialogEokParIV == false) {
        list.push('ΕοκΠαρΙV = ' + this.dialogEokParIV);
      }

      if (this.dialogEokParV == true || this.dialogEokParV == false) {
        list.push('ΕοκΠαρV = ' + this.dialogEokParV);
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
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/' + id);
    },

    getPreviousPage() {
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/' + (this.paramPage - 1));
    },

    getNextPage() {
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/dynamic-search/page/' + (this.paramPage + 1));
    }

  }
});
// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/_number/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_numbervue_type_script_lang_js_ = (_numbervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida-x-eidh/dynamic-search/page/_number/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_numbervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7e77c2a2"
  
)

/* harmony default export */ var _number = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map