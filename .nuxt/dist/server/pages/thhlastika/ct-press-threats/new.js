exports.ids = [64];
exports.modules = {

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(142);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("e476eb44", content, true, context)
};

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dropperPlace{margin-top:20px;background-color:#fff;transition:.15s linear;color:grey;display:flex;justify-content:center;align-items:center;box-shadow:0 3px 5px #aaa;position:relative}.dropperPlace,.inputPlace{height:30vh;width:100%;border-radius:20px}.inputPlace{opacity:0;position:absolute}.dropperPlace:hover{background-color:#eee;transition:.15s linear}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/ct-press-threats/new.vue?vue&type=template&id=d35632f8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),_c('v-flex',{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{"xs12":""}},[_c('h2',{staticClass:"font-weight-thin"},[_c('v-icon',{attrs:{"large":"","color":"green"}},[_vm._v("list_alt")]),_vm._v(" "+_vm._s(_vm.main.titleForm)+" ")],1)]),_vm._v(" "),_c('v-card',{staticClass:" my-5",staticStyle:{"width":"100%"}},[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('v-form',{ref:"form",staticClass:"py-5 px-4",model:{value:(_vm.validation),callback:function ($$v) {_vm.validation=$$v},expression:"validation"}},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τύπος Πίεσης","color":"green","counter":50,"rules":_vm.actCodeRules,"required":""},model:{value:(_vm.form.actCode),callback:function ($$v) {_vm.$set(_vm.form, "actCode", $$v)},expression:"form.actCode"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-between":""}},[_c('v-flex',{attrs:{"xs12":"","md5":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Περιγραφή","color":"green","counter":255,"rules":_vm.descriptionEnRules,"required":"","rows":"6"},model:{value:(_vm.form.descriptionEn),callback:function ($$v) {_vm.$set(_vm.form, "descriptionEn", $$v)},expression:"form.descriptionEn"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Παρατηρήσεις","color":"green","counter":255,"rules":_vm.remarksRules,"required":"","rows":"6"},model:{value:(_vm.form.remarks),callback:function ($$v) {_vm.$set(_vm.form, "remarks", $$v)},expression:"form.remarks"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"justify-space-around":"","mt-5":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs6":"","md5":""}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.validation,"color":"green lighten-2 white--text"},on:{"click":_vm.submitForm}},[_vm._v("\n                Εγγραφή\n            ")])],1)],1)],1)],1),_vm._v(" "),_c('v-flex',{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{"xs12":""}},[_c('h2',{staticClass:"font-weight-thin"},[_c('v-icon',{attrs:{"large":"","color":"green"}},[_vm._v("cloud_upload")]),_vm._v(" "+_vm._s(_vm.main.titleExcel)+" ")],1)]),_vm._v(" "),_c('div',{staticClass:"dropperPlace"},[(_vm.selectedFile != null)?_c('v-icon',{staticStyle:{"position":"absolute","color":"red","z-index":"1","top":"25px","right":"25px"},on:{"click":function($event){return _vm.removeFile()}}},[_vm._v("close")]):_vm._e(),_vm._v(" "),_c('input',{ref:"inputFile",staticClass:"inputPlace",attrs:{"type":"file"},on:{"change":function($event){return _vm.selectExcel($event.target.files[0])}}}),_vm._v(" "),(_vm.selectedFile != null)?_c('p',[_vm._v(" "+_vm._s(_vm.selectedFile.name)+" ")]):_c('p',{staticClass:"pa-4"},[_vm._v(" "+_vm._s(_vm.main.subTitleExcel)+" ")])],1),_vm._v(" "),_c('v-btn',{staticClass:"mt-4",staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.validationExcelInput,"color":"green lighten-2 white--text"},on:{"click":function($event){return _vm.submitExcel()}}},[_vm._v("Αποστολή excel αρχείου")])],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/thhlastika/ct-press-threats/new.vue?vue&type=template&id=d35632f8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/ct-press-threats/new.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: 'Ct Πίεσης Θηλαστικών - Δημιουργία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Δημιουργία και αποθήκευση νέων δεδομένων τύπου Ct Πίεσης Θηλαστικών -μέσω φόρμας ή αρχείου excel- για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Εγγραφή νέας Ct Πίεσης',
        titleForm: 'Για εγγραφή μέσω φόρμας συμπληρώστε παρακάτω',
        titleExcel: 'Για εγγραφές μέσω excel (.xlsx) αρχείου εισάγετε το αρχείο',
        subTitleExcel: 'Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το excel'
      },
      form: {
        actCode: '',
        descriptionEn: '',
        remarks: ''
      },
      validation: false,
      actCodeRules: [v => !!v || 'Συμπληρώστε το πεδίο Πίεσης', v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'],
      descriptionEnRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      remarksRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      selectedFile: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },

  computed: {
    addFormUrl() {
      return this.$store.getters.getThhlastikaCtPressThreatsAddUrl;
    },

    addFromExcelUrl() {
      return this.$store.getters.getThhlastikaCtPressThreatsAddFromExcelUrl;
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
  methods: {
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
        actCode: null,
        descriptionEn: null,
        remarks: null
      }; // Preparing the body for the Post

      if (!this.form.actCode == '') {
        checkedForm.actCode = this.form.actCode;
      }

      if (!this.form.descriptionEn == '') {
        checkedForm.descriptionEn = this.form.descriptionEn;
      }

      if (!this.form.remarks == '') {
        checkedForm.remarks = this.form.remarks;
      } // Post request and navigation


      this.$axios.post(this.addFormUrl, checkedForm).then(response => {
        this.$router.push('/thhlastika/ct-press-threats/' + response.data.id);
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
// CONCATENATED MODULE: ./pages/thhlastika/ct-press-threats/new.vue?vue&type=script&lang=js&
 /* harmony default export */ var ct_press_threats_newvue_type_script_lang_js_ = (newvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/thhlastika/ct-press-threats/new.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(141)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ct_press_threats_newvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1ec9594a"
  
)

/* harmony default export */ var ct_press_threats_new = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=new.js.map