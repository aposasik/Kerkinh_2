exports.ids = [14];
exports.modules = {

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/ct-eidh/index.vue?vue&type=template&id=1583c886&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","text-xs-center":"","my-5":""}},[_c('h2',{staticClass:"headline font-weight-thin"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","my-5":""}},[_c('v-card',{staticClass:"pa-4"},[_c('h2',{staticClass:"mt-2 mb-5 font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.subTitle)+" ")]),_vm._v(" "),_vm._l((_vm.main.texts),function(text,i){return _c('p',{key:i,staticClass:"my-4 subheading font-weight-thin",domProps:{"innerHTML":_vm._s(text)}})}),_vm._v(" "),_c('div',{staticClass:"my-5"},[_c('h2',{staticClass:"mb-4 font-weight-regular",domProps:{"innerHTML":_vm._s(_vm.main.pictureTitle)}}),_vm._v(" "),_c('ct-eidh-excel')],1)],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ornithopanida/ct-eidh/index.vue?vue&type=template&id=1583c886&

// EXTERNAL MODULE: ./components/CtEidhExcel.vue + 2 modules
var CtEidhExcel = __webpack_require__(93);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/ct-eidh/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ct_eidhvue_type_script_lang_js_ = ({
  components: {
    CtEidhExcel: CtEidhExcel["a" /* default */]
  },

  head() {
    return {
      title: 'Ct Είδη Θηλαστικών - Πληροφορίες | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Γενικές πληροφορίες και τρόποι χρήσης για τη διαχείρηση δεδομένων των Ct Είδη Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Εγχειρίδιο χρήσης ειδών',
        subTitle: 'Γενικές πληροφορίες',
        texts: ['<span class="ml-3"></span>Στο menu παντώντας στο drop-list <b>Είδη</b> σας ανοίγονται όλες οι υπάρχουσες επιλογές πλοήγησης. Από εκεί μπορείτε να επιλέξετε μεταξύ <b>Αναζήτησης</b>, <b>Δυναμικής Αναζήτησης</b>, πλοήγηση προς τα <b>Σχετίκα</b> (πληροφορίες) ή δημιουργία <b>Νέας Εγγραφής</b>.', '<span class="ml-3"></span>Πηγαίνοντας στην δημιουργία νέας εγγραφής θα πλοηγηθείτε σε μία σελίδα με δύο δυνατότητες, με την χρήση μίας φόρμας οπού θα συμπληρώσετε τα απαραίτητα δεδομένα για την νέα εγγραφή και με την αποστολή αρχείου excel ( <b class="green--text">xlsx</b> ) σχεδειασμένου με σώστα πεδία για πολλαπλές νέες εγγραφές. Η φόρμα θα σας δώσει την δυνατότητα αποστολής μόνο εφόσον τηρούνται οι απαραίτητοι κανόνες. Τέτοιοι είναι η συμπλήρωση αναγκαστικών πεδίων και η μείωση χαρακτήρων ανά πεδίο στα όρια που απαιτεί το κάθε ένα. Προσοχή: Για την χρήση αρχείου excel ( <b class="green--text">xlsx</b> ) να τηρηθούν οι απαραίτητοι κανόνες.', '<span class="ml-3"></span>Πηγαίνοντας στη σελίδα <b>Αναζήτηση</b> θα μεταφερθείτε σε μία σελίδα που αυτόματα θα σας εμφανίσει τα 10 τελευταία εγγεγραμμένα είδη. Από εκεί θα σας δίνεται η δυνατότητα να μεταφερθείτε στα συγκεκριμένα είδη που ζητάτε για παραπάνω ενέργειες. Για την αναζήτηση περισσοτέρων ειδών μπορείτε να πλοηγηθείτε στις επόμενες σελίδες μέσω του Pagination στο κάτω μέρος της σελίδας.', '<span class="ml-3"></span>Πηγαίνοντας στη σελίδα <b>Δυναμική Αναζήτηση</b> θα μεταφερθείτε σε μία σελίδα όπου θα μπορείτε να φιλτράρετε την αναζήτηση που θέλετε να εκτελεστεί ώστε να βρείτε τα επιθυμητά αποτελέσματα ειδών. Το φιλτράρισμα θα γίνεται συμπληρώνοντας υπάρχοντα πεδία τα οποία θα έχουν την μορφή λίστας έχοντας όλα τα πιθανά υπαρκτά ( ήδη εγγεγραμένα ) δεδομένα ανά πεδίο. Με τον ίδιο τρόπο όπως στην <b>Αναζήτηση</b> από εκεί θα σας δίνεται η δυνατότητα να μεταφερθείτε στα συγκεκριμένα είδη που ζητάτε για παραπάνω ενέργειες. Για την αναζήτηση περισσοτέρων ειδών μπορείτε να πλοηγηθείτε στις επόμενες σελίδες μέσω του Pagination στο κάτω μέρος της σελίδας.', '<span class="ml-3"></span>Πλοηγώντας σε συγκεκριμένο είδος μέσω της αναζήτησης ή της δυναμικής αναζήτησης θα έχετε τις δυνατότητες <span class="light-blue--text">Επεξεργασίας</span> και αποθήκευσης των αλλαγών, <span class="light-blue--text">Διαγραφής</span> (Προσοχή η διαγραφή δεν αναιρείται και συνδεόμενα δεδομένα μπορεί να χαθούν) του είδους.', '<span class="ml-3"></span>Καθ όλη την χρήση των εκάστοτε σελίδων υπάρχει ενημέρωση προς τον χρήστη για περιπτώσεις σφαλμάτων, επιτυχών ενεργειών του χρήστη καθώς και βοηθητικά μυνήματα για την συμπλήρωση νέων εγγραφών.'],
        pictureTitle: 'Παράδειγμα ενός excel ( <span class="green--text">xlsx</span> ) Είδών'
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/ornithopanida/ct-eidh/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ornithopanida_ct_eidhvue_type_script_lang_js_ = (ct_eidhvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/ornithopanida/ct-eidh/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ornithopanida_ct_eidhvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7d4422b0"
  
)

/* harmony default export */ var ct_eidh = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("c55a2268", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/CtEidhExcel.49d6aec.png";

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CtEidhExcel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CtEidhExcel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CtEidhExcel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CtEidhExcel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CtEidhExcel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".picture{width:100%;height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/CtEidhExcel.vue?vue&type=template&id=2c95607a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"picture",attrs:{"src":__webpack_require__(78),"alt":"Παράδειγμα excel Ct ειδών"}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CtEidhExcel.vue?vue&type=template&id=2c95607a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/CtEidhExcel.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "015d5ba4"
  
)

/* harmony default export */ var CtEidhExcel = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map