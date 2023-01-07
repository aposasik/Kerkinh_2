exports.ids = [70];
exports.modules = {

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2ce076a8", content, true, context)
};

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dropperPlace{margin-top:20px;background-color:#fff;transition:.15s linear;color:grey;display:flex;justify-content:center;align-items:center;box-shadow:0 3px 5px #aaa;position:relative}.dropperPlace,.inputPlace{height:30vh;width:100%;border-radius:20px}.inputPlace{opacity:0;position:absolute}.dropperPlace:hover{background-color:#eee;transition:.15s linear}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn-x-eidh/new.vue?vue&type=template&id=76edd7ff&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),_c('v-flex',{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{"xs12":""}},[_c('h2',{staticClass:"font-weight-thin"},[_c('v-icon',{attrs:{"large":"","color":"green"}},[_vm._v("list_alt")]),_vm._v(" "+_vm._s(_vm.main.titleForm)+" ")],1)]),_vm._v(" "),_c('v-card',{staticClass:"my-5",staticStyle:{"width":"100%"}},[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('v-form',{ref:"form",staticClass:"py-5 px-4",model:{value:(_vm.validation),callback:function ($$v) {_vm.validation=$$v},expression:"validation"}},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Δείγμα Θηλαστικών Id","color":"green","rules":_vm.deigmaThhlastikwnIdRules,"required":""},model:{value:(_vm.form.deigmaThhlastikwnId),callback:function ($$v) {_vm.$set(_vm.form, "deigmaThhlastikwnId", $$v)},expression:"form.deigmaThhlastikwnId"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-autocomplete',{attrs:{"label":"Ct Είδους","color":"green","items":_vm.ctEidhList,"rules":_vm.ctEidosRules,"no-data-text":"Δεν βρέθηκαν δεδομένα","required":""},model:{value:(_vm.form.ctEidos),callback:function ($$v) {_vm.$set(_vm.form, "ctEidos", $$v)},expression:"form.ctEidos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Σχετική αφθονία","color":"green","counter":255,"rules":_vm.sxetikhAfthoniaRules},model:{value:(_vm.form.sxetikhAfthonia),callback:function ($$v) {_vm.$set(_vm.form, "sxetikhAfthonia", $$v)},expression:"form.sxetikhAfthonia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Αριθμός ατόμων","color":"green","rules":_vm.plhthosRules},model:{value:(_vm.form.plhthos),callback:function ($$v) {_vm.$set(_vm.form, "plhthos", $$v)},expression:"form.plhthos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ηλικία","color":"green","counter":255,"rules":_vm.hlikiaRules},model:{value:(_vm.form.hlikia),callback:function ($$v) {_vm.$set(_vm.form, "hlikia", $$v)},expression:"form.hlikia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Φύλο","color":"green","counter":255,"rules":_vm.fuloRules},model:{value:(_vm.form.fulo),callback:function ($$v) {_vm.$set(_vm.form, "fulo", $$v)},expression:"form.fulo"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-autocomplete',{attrs:{"label":"ΕΟΚ Παρ II","color":"green","items":_vm.eokParList},model:{value:(_vm.form.eokParII),callback:function ($$v) {_vm.$set(_vm.form, "eokParII", $$v)},expression:"form.eokParII"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-autocomplete',{attrs:{"label":"ΕΟΚ Παρ IV","color":"green","items":_vm.eokParList},model:{value:(_vm.form.eokParIV),callback:function ($$v) {_vm.$set(_vm.form, "eokParIV", $$v)},expression:"form.eokParIV"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-autocomplete',{attrs:{"label":"ΕΟΚ Παρ V","color":"green","items":_vm.eokParList},model:{value:(_vm.form.eokParV),callback:function ($$v) {_vm.$set(_vm.form, "eokParV", $$v)},expression:"form.eokParV"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"justify-center":""}},[_c('v-flex',{attrs:{"xs12":"","md10":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Παρατηρήσεις","color":"green","counter":255,"rules":_vm.parathrhseisRules,"rows":"6"},model:{value:(_vm.form.parathrhseis),callback:function ($$v) {_vm.$set(_vm.form, "parathrhseis", $$v)},expression:"form.parathrhseis"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"justify-space-around":"","mt-5":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs6":"","md5":""}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.validation,"color":"green lighten-2 white--text"},on:{"click":_vm.submitForm}},[_vm._v("\n                Εγγραφή\n            ")])],1)],1)],1)],1),_vm._v(" "),_c('v-flex',{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{"xs12":""}},[_c('h2',{staticClass:"font-weight-thin"},[_c('v-icon',{attrs:{"large":"","color":"green"}},[_vm._v("cloud_upload")]),_vm._v(" "+_vm._s(_vm.main.titleExcel)+" ")],1)]),_vm._v(" "),_c('div',{staticClass:"dropperPlace"},[(_vm.selectedFile != null)?_c('v-icon',{staticStyle:{"position":"absolute","color":"red","z-index":"1","top":"25px","right":"25px"},on:{"click":function($event){return _vm.removeFile()}}},[_vm._v("close")]):_vm._e(),_vm._v(" "),_c('input',{ref:"inputFile",staticClass:"inputPlace",attrs:{"type":"file"},on:{"change":function($event){return _vm.selectExcel($event.target.files[0])}}}),_vm._v(" "),(_vm.selectedFile != null)?_c('p',[_vm._v(" "+_vm._s(_vm.selectedFile.name)+" ")]):_c('p',{staticClass:"pa-4"},[_vm._v(" "+_vm._s(_vm.main.subTitleExcel)+" ")])],1),_vm._v(" "),_c('v-btn',{staticClass:"mt-4",staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.validationExcelInput,"color":"green lighten-2 white--text"},on:{"click":function($event){return _vm.submitExcel()}}},[_vm._v("Αποστολή excel αρχείου")])],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn-x-eidh/new.vue?vue&type=template&id=76edd7ff&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn-x-eidh/new.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var newvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Δειγματοληψία Χ Είδους Θηλαστικών - Δημιουργία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Δημιουργία και αποθήκευση νέων δεδομένων τύπου Δειγματοληψίας Χ Είδους Θηλαστικών -μέσω φόρμας ή αρχείου excel- για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Εγγραφή νέου Δείγματος X Είδους',
        titleForm: 'Για εγγραφή μέσω φόρμας συμπληρώστε παρακάτω',
        titleExcel: 'Για εγγραφές μέσω excel (.xlsx) αρχείου εισάγετε το αρχείο',
        subTitleExcel: 'Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το excel'
      },
      form: {
        deigmaThhlastikwnId: '',
        ctEidos: '',
        sxetikhAfthonia: '',
        parathrhseis: '',
        hlikia: '',
        fulo: '',
        plhthos: '',
        eokParII: '',
        eokParIV: '',
        eokParV: ''
      },
      // To fill through a mounted Get request
      ctEidhList: [],
      eokParList: [true, false],
      validation: false,
      deigmaThhlastikwnIdRules: [v => !!v || 'Συμπληρώστε το πεδίο Δείγματος θηλαστικού', v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      ctEidosRules: [v => !!v || 'Συμπληρώστε το πεδίο Ct Είδους', v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'],
      sxetikhAfthoniaRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      parathrhseisRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      hlikiaRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      fuloRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      plhthosRules: [v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      selectedFile: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },

  computed: {
    // Getting the distinct Ct Eidh for autocomplete list
    getDistinctUrl() {
      return this.$store.getters.getThhlastikaCtEidosDistinctUrl;
    },

    addFormUrl() {
      return this.$store.getters.getThhlastikaXEidhAddUrl;
    },

    addFromExcelUrl() {
      return this.$store.getters.getThhlastikaXEidhAddFromExcelUrl;
    },

    // Validating for the btn depending on the file -null or not-
    validationExcelInput() {
      if (this.selectedFile != null) {
        return true;
      } else {
        return false;
      }
    }

  },

  mounted() {
    // Getting CtEidh
    this.getCtEidh();
  },

  methods: {
    // Getting CtEidh for select lists
    getCtEidh() {
      this.$axios.get(this.getDistinctUrl).then(response => {
        if (response.data.length == []) {
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα Ct Είδη.';
          this.snackbar = true;
        } else {
          // Filling the CtEidh list for the user
          this.ctEidhList = response.data;
        }
      }).catch(err => {
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την εύρεση Ct Ειδών.';
        this.snackbar = true;
        throw err;
      });
    },

    // Timeout the submit method and re-validate
    submitTimeout() {
      this.validation = false;
      setTimeout(() => {
        this.validation = this.$refs.form.validate();
      }, 10000);
    },

    submitForm() {
      // Checking for nulls
      let checkedForm = {
        deigmaThhlastikwnId: null,
        ctEidos: null,
        sxetikhAfthonia: null,
        parathrhseis: null,
        hlikia: null,
        fulo: null,
        plhthos: null,
        eokParII: null,
        eokParIV: null,
        eokParV: null
      }; // Preparing the body for the Post

      checkedForm.deigmaThhlastikwnId = this.form.deigmaThhlastikwnId;
      checkedForm.ctEidos = this.form.ctEidos;

      if (!this.form.sxetikhAfthonia == '') {
        checkedForm.sxetikhAfthonia = this.form.sxetikhAfthonia;
      }

      if (!this.form.parathrhseis == '') {
        checkedForm.parathrhseis = this.form.parathrhseis;
      }

      if (!this.form.hlikia == '') {
        checkedForm.hlikia = this.form.hlikia;
      }

      if (!this.form.fulo == '') {
        checkedForm.fulo = this.form.fulo;
      }

      if (!this.form.plhthos == '') {
        checkedForm.plhthos = this.form.plhthos;
      }

      if (!(typeof this.form.eokParII === 'string')) {
        checkedForm.eokParII = this.form.eokParII;
      }

      if (!(typeof this.form.eokParIV === 'string')) {
        checkedForm.eokParIV = this.form.eokParIV;
      }

      if (!(typeof this.form.eokParV === 'string')) {
        checkedForm.eokParV = this.form.eokParV;
      } // console.log(checkedForm)
      // Post request and navigation


      this.$axios.post(this.addFormUrl, checkedForm).then(response => {
        // console.log(response.data)
        this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/' + response.data.id);
      }).catch(error => {
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο πρόβλημα με την νέα εγγραφή με αποτέλεσμα να ακυρωθεί';
        this.snackbar = true; // Timeout the submit method and re-validate

        this.submitTimeout();
        throw error;
      });
    },

    selectExcel(file) {
      // console.log(file)
      this.selectedFile = file;
    },

    removeFile() {
      this.selectedFile = null;
      this.$refs.inputFile.value = '';
    },

    submitExcel() {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.$axios.post(this.addFromExcelUrl, formData).then(response => {
        if (response.data == true) {
          this.snackbarColor = 'success';
          this.snackbarText = 'Το αρχείο στάλθηκε και οι νέες εγγραφές δημιουργήθηκαν επιτυχώς';
          this.snackbar = true;
          this.removeFile();
        } else if (response.data == false) {
          this.snackbarColor = 'red';
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε';
          this.snackbar = true;
        }
      }).catch(error => {
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε';
        this.snackbar = true;
        throw error;
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn-x-eidh/new.vue?vue&type=script&lang=js&
 /* harmony default export */ var deigma_thhlastikwn_x_eidh_newvue_type_script_lang_js_ = (newvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn-x-eidh/new.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(143)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  deigma_thhlastikwn_x_eidh_newvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3c5ee37c"
  
)

/* harmony default export */ var deigma_thhlastikwn_x_eidh_new = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=new.js.map