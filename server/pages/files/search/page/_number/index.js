exports.ids = [9];
exports.modules = {

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/files/search/page/_number/index.vue?vue&type=template&id=1104c468&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg9":""}},[_c('div',[_c('h3',{staticClass:"my-4 text-xs-center text-md-left font-weight-regular"},[_vm._v("Σύνολο Αρχείων : "+_vm._s(this.returnedData.totalElements)+" ")])]),_vm._v(" "),_vm._l((_vm.returnedData.content),function(file){return _c('div',{key:file.id,staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('div',{staticClass:"pa-3"},[_c('div',{staticClass:"mx-4"},[_c('h3',{staticClass:"font-weight-thin my-3"},[_vm._v("Όνομα αρχείου : "),_c('b',{staticClass:"ml-2"},[_vm._v(_vm._s(file.fileName))])]),_vm._v(" "),_c('h3',{staticClass:"font-weight-thin my-3"},[_vm._v("Τύπος αρχείου : "),_c('b',{staticClass:"ml-2"},[_vm._v(_vm._s(file.fileType))])])]),_vm._v(" "),_c('v-divider',{staticClass:"mb-4"}),_vm._v(" "),_c('v-layout',[_c('h3',{staticClass:"font-weight-medium mt-3"},[_vm._v("Id: "+_vm._s(file.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":file.url,"download":file.fileName}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"blue lighten-1","icon":"","flat":"","title":"Λήψη"}},[_c('v-icon',{attrs:{"medium":""}},[_vm._v("save_alt")])],1)],1),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"red lighten-1","icon":"","flat":"","title":"Διαγραφή"},on:{"click":function($event){return _vm.deleteFile(file.id)}}},[_c('v-icon',{attrs:{"medium":""}},[_vm._v("delete")])],1)],1)],1)])],1)}),_vm._v(" "),(_vm.noElements == false)?_c('div',{staticStyle:{"margin-top":"100px","margin-bottom":"20px"}},[_c('v-layout',[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.prevPage,"color":"green","flat":"","title":"Προηγούμενη σελίδα"},on:{"click":_vm.getPrevPage}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("arrow_back")]),_vm._v("\n            Σελίδα\n          ")],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.nextPage,"color":"green","flat":"","title":"Επόμενη σελίδα"},on:{"click":_vm.getNextPage}},[_vm._v("\n            Σελίδα\n            "),_c('v-icon',{attrs:{"right":""}},[_vm._v("arrow_forward")])],1)],1)],1):_vm._e()],2):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/files/search/page/_number/index.vue?vue&type=template&id=1104c468&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/files/search/page/_number/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: 'Αρχεία - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Αναζήτηση (δεδομένων) Αρχείων για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Αναζήτηση Αρχείων δείγματος',
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
    paramPage() {
      return Number(this.$route.params.number);
    },

    currentPage() {
      return this.$route.params.number - 1;
    },

    getFiles() {
      return this.$store.getters.getFilesSearchUrl;
    },

    fileById() {
      return this.$store.getters.getFileByIdUrl;
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
      this.$axios.get(this.getFiles + page).then(response => {
        if (response.data.length == 0) {
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

          this.checkForNextPage(response.data.last); // Creating a new property for each returnedData 's file, the url through the byte array data

          this.returnedData.content.forEach(file => {
            file.url = "data:" + file.fileType + ";base64," + file.data;
          });
          this.loading = false;
        }
      }).catch(err => {
        this.loading = false;
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση';
        this.snackbar = true;
        throw err;
      });
    },

    deleteFile(fileId) {
      this.$axios.delete(this.fileById + fileId).then(response => {
        if (response.data == false) {
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν μπόρεσε να διαγραφεί το αρχείο';
          this.snackbar = true;
        } else if (response.data == true) {
          this.snackbarColor = 'green';
          this.snackbarText = 'Το αρχείο διαγράφηκε επιτυχώς';
          this.snackbar = true; // Re-calling the getFiles Method after the deletion

          this.restCall(this.currentPage);
        }
      }).catch(err => {
        this.snackbarColor = 'red';
        this.snackbarText = 'Δεν μπόρεσε να διαγραφεί το αρχείο';
        this.snackbar = true;
        throw err;
      });
    },

    getPrevPage() {
      this.$router.push('/files/search/page/' + (this.paramPage - 1));
    },

    getNextPage() {
      this.$router.push('/files/search/page/' + (this.paramPage + 1));
    }

  }
});
// CONCATENATED MODULE: ./pages/files/search/page/_number/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_numbervue_type_script_lang_js_ = (_numbervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/files/search/page/_number/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_numbervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a9d986c"
  
)

/* harmony default export */ var _number = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map