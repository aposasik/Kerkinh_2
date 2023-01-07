exports.ids = [53];
exports.modules = {

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/prwtokola/search/page/_number/index.vue?vue&type=template&id=6fac91c6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('div',[_c('h3',{staticClass:"my-4 text-xs-center text-md-left font-weight-regular"},[_vm._v("Σύνολο Πρωτοκόλλων : "+_vm._s(this.returnedData.totalElements)+" ")])]),_vm._v(" "),_vm._l((_vm.returnedData.content),function(prwtokola){return _c('div',{key:prwtokola.id,staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-between":"","pa-4":""}},[_c('v-flex',{attrs:{"xs12":"","md5":"","xl3":"","my-3":""}},[_c('v-textarea',{attrs:{"label":"Περιγραφή","color":"green","readonly":"","rows":"5"},model:{value:(prwtokola.perigrafh),callback:function ($$v) {_vm.$set(prwtokola, "perigrafh", $$v)},expression:"prwtokola.perigrafh"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","xl3":"","my-3":""}},[_c('v-textarea',{attrs:{"label":"Πίνακας δεδομένων","color":"green","readonly":"","rows":"5"},model:{value:(prwtokola.pinakasDedomenwn),callback:function ($$v) {_vm.$set(prwtokola, "pinakasDedomenwn", $$v)},expression:"prwtokola.pinakasDedomenwn"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":"","xl3":"","my-3":""}},[_c('v-textarea',{attrs:{"label":"Παράθυρο δεδομένων","color":"green","readonly":"","rows":"5"},model:{value:(prwtokola.parathuroDedomenwn),callback:function ($$v) {_vm.$set(prwtokola, "parathuroDedomenwn", $$v)},expression:"prwtokola.parathuroDedomenwn"}})],1),_vm._v(" "),_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(prwtokola.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"green","dark":""},on:{"click":function($event){return _vm.toIdPage(prwtokola.id)}}},[_vm._v("Εμφάνιση")])],1)],1)],1)}),_vm._v(" "),(_vm.noElements == false)?_c('div',{staticStyle:{"margin-top":"100px","margin-bottom":"20px"}},[_c('v-layout',[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.prevPage,"color":"green","flat":"","title":"Προηγούμενη σελίδα"},on:{"click":_vm.getPrevPage}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("arrow_back")]),_vm._v("\n            Σελίδα\n          ")],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.nextPage,"color":"green","flat":"","title":"Επόμενη σελίδα"},on:{"click":_vm.getNextPage}},[_vm._v("\n            Σελίδα\n            "),_c('v-icon',{attrs:{"right":""}},[_vm._v("arrow_forward")])],1)],1)],1):_vm._e()],2):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/prwtokola/search/page/_number/index.vue?vue&type=template&id=6fac91c6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/prwtokola/search/page/_number/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: 'Πρωτόκολλα - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Αναζήτηση (δεδομένων) Πρωτοκόλλων για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Αναζήτηση πρωτοκόλλων',
        emptyElements: 'Δεν υπάρχουν αποθηκευμένα δεδομένα'
      },
      noElements: null,
      returnedData: {},
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
      snackbarColor: ''
    };
  },

  computed: {
    searchUrl() {
      return this.$store.getters.getPrwtokolaSearchUrl;
    },

    paramPage() {
      return Number(this.$route.params.number);
    },

    currentPage() {
      return this.$route.params.number - 1;
    }

  },

  mounted() {
    this.restCall(this.currentPage);
  },

  methods: {
    checkForPrevPage(pageNumber) {
      if (pageNumber == 0) {
        this.prevPage = false;
      } else {
        this.prevPage = true;
      }
    },

    checkForNextPage(last) {
      if (last == true) {
        this.nextPage = false;
      } else {
        this.nextPage = true;
      }
    },

    restCall(page) {
      this.loading = true;
      this.$axios.get(this.searchUrl + '/' + page).then(response => {
        if (response.data.totalElements == 0) {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της αναζήτησης';
          this.snackbar = true;
        } else if (response.data.totalElements != 0 && response.data.numberOfElements == 0) {
          this.noElements = true;
        } else {
          this.noElements = false;
          this.returnedData = response.data; // Checking for prevPage

          this.checkForPrevPage(response.data.pageable.pageNumber); // Checking for nextPage

          this.checkForNextPage(response.data.last);
        }

        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση';
        this.snackbar = true;
        throw err;
      });
    },

    toIdPage(id) {
      this.$router.push('/prwtokola/' + id);
    },

    getPrevPage() {
      this.$router.push('/prwtokola/search/page/' + (this.paramPage - 1));
    },

    getNextPage() {
      this.$router.push('/prwtokola/search/page/' + (this.paramPage + 1));
    }

  }
});
// CONCATENATED MODULE: ./pages/prwtokola/search/page/_number/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_numbervue_type_script_lang_js_ = (_numbervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/prwtokola/search/page/_number/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_numbervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "60432a3e"
  
)

/* harmony default export */ var _number = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map