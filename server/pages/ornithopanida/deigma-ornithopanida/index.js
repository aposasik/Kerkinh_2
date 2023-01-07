exports.ids = [42];
exports.modules = {

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/deigma-ornithopanida/index.vue?vue&type=template&id=6e199b36&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","text-xs-center":"","my-5":""}},[_c('h2',{staticClass:"headline font-weight-thin"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","my-5":""}},[_c('v-card',{staticClass:"pa-4"},[_c('h2',{staticClass:"mt-2 mb-5 font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.subTitle)+" ")]),_vm._v(" "),_vm._l((_vm.main.texts),function(text,i){return _c('p',{key:i,staticClass:"my-4 subheading font-weight-thin",domProps:{"innerHTML":_vm._s(text)}})}),_vm._v(" "),_c('div',{staticClass:"my-5"},[_c('h2',{staticClass:"mb-4 font-weight-regular",domProps:{"innerHTML":_vm._s(_vm.main.pictureTitle)}}),_vm._v(" "),_c('deigma-thhlastikwn-excel')],1)],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/index.vue?vue&type=template&id=6e199b36&

// EXTERNAL MODULE: ./components/DeigmaThhlastikwnExcel.vue + 2 modules
var DeigmaThhlastikwnExcel = __webpack_require__(95);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/deigma-ornithopanida/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var deigma_ornithopanidavue_type_script_lang_js_ = ({
  components: {
    DeigmaThhlastikwnExcel: DeigmaThhlastikwnExcel["a" /* default */]
  },

  head() {
    return {
      title: 'Δείγματα Θηλαστικών - Πληροφορίες | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Γενικές πληροφορίες και τρόποι χρήσης για τη διαχείρηση δεδομένων των Δειγμάτων Ορνιθοπανίδας για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Εγχειρίδιο χρήσης δειγμάτων θηλαστικών',
        subTitle: 'Γενικές πληροφορίες',
        texts: ['<span class="ml-3"></span>Στο menu παντώντας στο drop-list <b>Δείγμα Ορνιθοπανίδα</b> σας ανοίγονται όλες οι υπάρχουσες επιλογές πλοήγησης. Από εκεί μπορείτε να επιλέξετε μεταξύ <b>Αναζήτησης</b>, <b>Δυναμικής Αναζήτησης</b>, πλοήγηση προς τα <b>Σχετίκα</b> (πληροφορίες), τον <b>Χάρτη</b> ή δημιουργία <b>Νέας Εγγραφής</b>.', '<span class="ml-3"></span>Πηγαίνοντας στην δημιουργία νέας εγγραφής θα πλοηγηθείτε σε μία σελίδα με δύο δυνατότητες, με την χρήση μίας φόρμας οπού θα συμπληρώσετε τα απαραίτητα δεδομένα για την νέα εγγραφή και με την αποστολή αρχείου excel ( <b class="green--text">xlsx</b> ) σχεδειασμένου με σώστα πεδία για πολλαπλές νέες εγγραφές ( Προσοχή: Η ημερομηνία κατά την αποθήκευση μέσω excel να συμπληρώνεται όπως στο παράδειγμα κάτω ). Η φόρμα θα σας δώσει την δυνατότητα αποστολής μόνο εφόσον τηρούνται οι απαραίτητοι κανόνες. Τέτοιοι είναι η συμπλήρωση αναγκαστικών πεδίων και η μείωση χαρακτήρων ανά πεδίο στα όρια που απαιτεί το κάθε ένα. Προσοχή: Για την χρήση αρχείου excel ( <b class="green--text">xlsx</b> ) να τηρηθούν οι απαραίτητοι κανόνες.', '<span class="ml-3"></span>Πηγαίνοντας στη σελίδα <b>Αναζήτηση</b> θα μεταφερθείτε σε μία σελίδα που αυτόματα θα σας εμφανίσει τα 10 τελευταία εγγεγραμμένα δείγματα θηλαστικών. Από εκεί θα σας δίνεται η δυνατότητα να μεταφερθείτε στα συγκεκριμένα δείγματα θηλαστικών που ζητάτε για παραπάνω ενέργειες. Για την αναζήτηση περισσοτέρων δειγμάτων θηλαστικών μπορείτε να πλοηγηθείτε στις επόμενες σελίδες μέσω του Pagination στο κάτω μέρος της σελίδας.', '<span class="ml-3"></span>Πηγαίνοντας στη σελίδα <b>Δυναμική Αναζήτηση</b> θα μεταφερθείτε σε μία σελίδα όπου θα μπορείτε να φιλτράρετε την αναζήτηση που θέλετε να εκτελεστεί ώστε να βρείτε τα επιθυμητά αποτελέσματα δείγματα θηλαστικών. Το φιλτράρισμα θα γίνεται συμπληρώνοντας υπάρχοντα πεδία τα οποία θα έχουν την μορφή λίστας έχοντας όλα τα πιθανά υπαρκτά ( ήδη εγγεγραμένα ) δεδομένα ανά πεδίο. Με τον ίδιο τρόπο όπως στην <b>Αναζήτηση</b> από εκεί θα σας δίνεται η δυνατότητα να μεταφερθείτε στα συγκεκριμένα δείγματα θηλαστικών που ζητάτε για παραπάνω ενέργειες. Για την αναζήτηση περισσοτέρων δειγμάτων θηλαστικών μπορείτε να πλοηγηθείτε στις επόμενες σελίδες μέσω του Pagination στο κάτω μέρος της σελίδας.', '<span class="ml-3"></span>Πηγαίνοντας στη σελίδα <b>Χάρτης</b> θα μεταφερθείτε σε μία σελίδα συνδεδεμένη με Google Maps όπου αυτόματα θα πραγματοποιείται λήψη όλων των στιγμάτων ( markers ) για κάθε αποθηκευμένο δείγμα θηλαστικών με συμπληρωμένο <span class="light-blue--text">Γεωγραφικό μήκος WGS84</span> και <span class="light-blue--text">Γεωγραφικό πλάτος WGS84</span>. Προσοχή, το Google Maps χρειάζεται το γεωγραφικό μήκος και πλάτος τύπου WGS84. Συμπληρώνοντας μόνο τύπου EGSA δεν θα είναι αρκετό για την εμφάνιση του σημείου. Συνίσταται η συμπλήρωση και των δύο τύπων.', '<span class="ml-3"></span>Πλοηγώντας σε συγκεκριμένο δείγμα ορνιθοπανίδας μέσω της αναζήτησης ή της δυναμικής αναζήτησης θα έχετε τις δυνατότητες <span class="light-blue--text">Επεξεργασίας</span> και αποθήκευσης των αλλαγών μέσω της οποίας επεξεργασίας δίνεται η επιπλέον δυνατότητα στον χρήστη να αποθηκεύσει συνδεδεμένα με το συγκεκριμένο δείγμα θηλαστικού <span class="light-blue--text">Αρχεία</span> και <span class="light-blue--text">Φωτογραφίες</span>. Η δυνατότητα αυτή δεν θα υπάρχει κατά την νέα εγγραφή δείγματος θηλαστικών διότι μεσώ της χρήσης excel-εγγραφής δεν είναι εφικτή και επειδή με το τρόπο αυτό θα μειωθούν τα αποθηκευμένα αρχεία και φωτογραφίες αποθηκεύοντας μονάχα τις σημαντικές περιπτώσεις. Προσοχή: Η αποθήκευση αρχείου ή φωτογραφίας πρέπει να είναι κάτω του ορίου μεγέθους 4Mb για αποφυγή επιβάρυνσης της βάσης δεδομένων. Γενικότερα συνίσταται η προσπάθεια αποφυγής της αποθήκευσης αρχείων ή φωτογραφιών. Μία ακόμη δυνατότητα του χρήστη είναι αυτή της <span class="light-blue--text">Διαγραφής</span> (Προσοχή η διαγραφή δεν αναιρείται και συνδεόμενα δεδομένα θα χαθούν) του δείγματος θηλαστικού. Τέλος, πλοηγώντας στο συγκεκριμένο δείγμα θηλαστικών που επιθυμήσατε δίνονται στον χρήστη δύο ακόμη δυνατότητες, η εμφάνιση όλων των <span class="light-blue--text">Δειγμάτων Χ Ειδών</span> ή <span class="light-blue--text">Δειγμάτων Χ Πιέσεων</span> που είναι συνδεδεμένες με το συγκεκριμένο δείγμα.', '<span class="ml-3"></span>Καθ όλη την χρήση των εκάστοτε σελίδων υπάρχει ενημέρωση προς τον χρήστη για περιπτώσεις σφαλμάτων, επιτυχών ενεργειών του χρήστη καθώς και βοηθητικά μυνήματα για την συμπλήρωση νέων εγγραφών.'],
        pictureTitle: 'Παράδειγμα ενός excel ( <span class="green--text">xlsx</span> ) Δειγμάτων Θηλαστικών'
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ornithopanida_deigma_ornithopanidavue_type_script_lang_js_ = (deigma_ornithopanidavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ornithopanida_deigma_ornithopanidavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b56cc1c"
  
)

/* harmony default export */ var deigma_ornithopanida = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3ed6e394", content, true, context)
};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/DeigmaThhlastikwnExcel.95a9f8f.png";

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DeigmaThhlastikwnExcel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DeigmaThhlastikwnExcel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DeigmaThhlastikwnExcel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DeigmaThhlastikwnExcel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DeigmaThhlastikwnExcel_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".picture{width:100%;height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/DeigmaThhlastikwnExcel.vue?vue&type=template&id=52d4c486&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"picture",attrs:{"src":__webpack_require__(84),"alt":"Παράδειγμα excel δειγμάτων θηλαστικών"}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DeigmaThhlastikwnExcel.vue?vue&type=template&id=52d4c486&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/DeigmaThhlastikwnExcel.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
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
  "e9861ade"
  
)

/* harmony default export */ var DeigmaThhlastikwnExcel = __webpack_exports__["a"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map