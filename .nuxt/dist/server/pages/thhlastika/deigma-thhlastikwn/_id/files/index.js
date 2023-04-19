exports.ids = [79];
exports.modules = {

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn/_id/files/index.vue?vue&type=template&id=36507644&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-btn',{staticClass:"mt-4 mb-3",staticStyle:{"text-transform":"none"},attrs:{"dark":"","round":"","color":"light-green lighten-2","title":"Πλοήγηση πίσω στη σελίδα του δείγματος"},on:{"click":_vm.goBack}},[_c('v-icon',[_vm._v("arrow_back_ios")]),_vm._v("Πίσω")],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg9":""}},[_c('div',[_c('h3',{staticClass:"my-4 text-xs-center text-md-left font-weight-regular"},[_vm._v("Σύνολο Αρχείων : "+_vm._s(this.numberOfElements)+" ")])]),_vm._v(" "),_vm._l((_vm.returnedData),function(file){return _c('div',{key:file.id,staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('div',{staticClass:"pa-3"},[_c('div',{staticClass:"mx-4"},[_c('h3',{staticClass:"font-weight-thin my-3"},[_vm._v("Όνομα αρχείου : "),_c('b',{staticClass:"ml-2"},[_vm._v(_vm._s(file.fileName))])]),_vm._v(" "),_c('h3',{staticClass:"font-weight-thin my-3"},[_vm._v("Τύπος αρχείου : "),_c('b',{staticClass:"ml-2"},[_vm._v(_vm._s(file.fileType))])])]),_vm._v(" "),_c('v-divider',{staticClass:"mb-4"}),_vm._v(" "),_c('v-layout',[_c('h3',{staticClass:"font-weight-medium mt-3"},[_vm._v("Id: "+_vm._s(file.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('a',{staticStyle:{"text-decoration":"none"},attrs:{"href":file.url,"download":file.fileName}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"blue lighten-1","icon":"","flat":"","title":"Λήψη"}},[_c('v-icon',{attrs:{"medium":""}},[_vm._v("save_alt")])],1)],1),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"red lighten-1","icon":"","flat":"","title":"Διαγραφή"},on:{"click":function($event){return _vm.deleteFile(file.id)}}},[_c('v-icon',{attrs:{"medium":""}},[_vm._v("delete")])],1)],1)],1)])],1)})],2):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/_id/files/index.vue?vue&type=template&id=36507644&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn/_id/files/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var filesvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Αρχεία Δείγματος Θηλαστικών - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Αναζήτηση Αρχείων συνδεδεμένων με συγκεκριμένο Δείγμα Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
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
      numberOfElements: 0,
      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },

  computed: {
    deigmaId() {
      return this.$route.params.id;
    },

    getFiles() {
      return this.$store.getters.getFilesByDeigmaThhlastikwnIdIs;
    },

    fileById() {
      return this.$store.getters.getFileByIdUrl;
    }

  },

  mounted() {
    this.restCall();
  },

  methods: {
    goBack() {
      this.$router.push("/thhlastika/deigma-thhlastikwn/" + this.deigmaId);
    },

    restCall() {
      this.loading = true;
      this.$axios.get(this.getFiles + this.deigmaId).then(response => {
        if (response.data.length == 0) {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της αναζήτησης';
          this.snackbar = true;
        } else {
          this.noElements = false;
          this.numberOfElements = response.data.length;
          this.returnedData = response.data; // Ordering by id

          this.returnedData.sort(function (a, b) {
            return b.id - a.id;
          }); // Creating a new property for each returnedData 's file, the url through the byte array data

          this.returnedData.forEach(file => {
            file.url = "data:" + file.fileType + ";base64," + file.data;
          });
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

          this.restCall();
        }
      }).catch(err => {
        this.snackbarColor = 'red';
        this.snackbarText = 'Δεν μπόρεσε να διαγραφεί το αρχείο';
        this.snackbar = true;
        throw err;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/_id/files/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_filesvue_type_script_lang_js_ = (filesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/_id/files/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_filesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4896bbab"
  
)

/* harmony default export */ var files = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map