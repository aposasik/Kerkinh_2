exports.ids = [87];
exports.modules = {

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(148);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("03bb0bd8", content, true, context)
};

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_new_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dropperPlace{margin-top:20px;background-color:#fff;transition:.15s linear;color:grey;display:flex;justify-content:center;align-items:center;box-shadow:0 3px 5px #aaa;position:relative}.dropperPlace,.inputPlace{height:30vh;width:100%;border-radius:20px}.inputPlace{opacity:0;position:absolute}.dropperPlace:hover{background-color:#eee;transition:.15s linear}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn/new.vue?vue&type=template&id=e56e423c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),_c('v-flex',{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{"xs12":""}},[_c('h2',{staticClass:"font-weight-thin"},[_c('v-icon',{attrs:{"large":"","color":"green"}},[_vm._v("list_alt")]),_vm._v(" "+_vm._s(_vm.main.titleForm)+" ")],1)]),_vm._v(" "),_c('v-card',{staticClass:"my-5",staticStyle:{"width":"100%"}},[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('v-form',{ref:"form",staticClass:"py-5 px-4",model:{value:(_vm.validation),callback:function ($$v) {_vm.validation=$$v},expression:"validation"}},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-autocomplete',{attrs:{"label":"Πρωτόκολλο Id","color":"green","items":_vm.prwtokollaList,"rules":_vm.prwtokolaIdRules,"no-data-text":"Δεν βρέθηκαν δεδομένα","required":""},model:{value:(_vm.form.prwtokolaId),callback:function ($$v) {_vm.$set(_vm.form, "prwtokolaId", $$v)},expression:"form.prwtokolaId"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Κωδικός δειγματοληψίας","color":"green","counter":255,"rules":_vm.kwdikosDeigmatolhpsiasRules,"required":""},model:{value:(_vm.form.kwdikosDeigmatolhpsias),callback:function ($$v) {_vm.$set(_vm.form, "kwdikosDeigmatolhpsias", $$v)},expression:"form.kwdikosDeigmatolhpsias"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","lg3":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Χρηματοδότηση","color":"green","counter":255,"rules":_vm.xrhmatodothshRules},model:{value:(_vm.form.xrhmatodothsh),callback:function ($$v) {_vm.$set(_vm.form, "xrhmatodothsh", $$v)},expression:"form.xrhmatodothsh"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","lg3":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ερευνητής","color":"green","append-icon":"account_box","counter":255,"rules":_vm.ereunhthsRules},model:{value:(_vm.form.ereunhths),callback:function ($$v) {_vm.$set(_vm.form, "ereunhths", $$v)},expression:"form.ereunhths"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md6":"","lg3":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τοποθεσία","color":"green","append-icon":"location_searching","counter":255,"rules":_vm.topothesiaRules},model:{value:(_vm.form.topothesia),callback:function ($$v) {_vm.$set(_vm.form, "topothesia", $$v)},expression:"form.topothesia"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-dialog',{attrs:{"full-width":"","width":"290px","lazy":""},model:{value:(_vm.dateDialog),callback:function ($$v) {_vm.dateDialog=$$v},expression:"dateDialog"}},[_c('v-text-field',{attrs:{"slot":"activator","label":"Ημερομηνία (Έτος-Μήνας-Ημέρα)","color":"green","append-icon":"date_range","hint":"YYYY-MM-DD | Παράδειγμα 2019-06-23","readonly":""},slot:"activator",model:{value:(_vm.form.date),callback:function ($$v) {_vm.$set(_vm.form, "date", $$v)},expression:"form.date"}}),_vm._v(" "),_c('v-date-picker',{attrs:{"color":"green lighten-2","scrollable":"","max":new Date().toISOString().substr(0, 10),"min":"1950-01-01"},model:{value:(_vm.form.date),callback:function ($$v) {_vm.$set(_vm.form, "date", $$v)},expression:"form.date"}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-dialog',{attrs:{"lazy":"","full-width":"","width":"290px"},model:{value:(_vm.timeDialog),callback:function ($$v) {_vm.timeDialog=$$v},expression:"timeDialog"}},[_c('v-text-field',{attrs:{"slot":"activator","label":"Ώρα","color":"green","append-icon":"access_time","hint":"HH:MM:SS | Παράδειγμα 20:32:10"},slot:"activator",model:{value:(_vm.form.time),callback:function ($$v) {_vm.$set(_vm.form, "time", $$v)},expression:"form.time"}}),_vm._v(" "),_c('v-time-picker',{attrs:{"color":"green lighten-2","scrollable":"","format":"24hr"},model:{value:(_vm.form.time),callback:function ($$v) {_vm.$set(_vm.form, "time", $$v)},expression:"form.time"}})],1)],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Διάρκεια","color":"green","counter":40,"rules":_vm.diarkeiaRules},model:{value:(_vm.form.diarkeia),callback:function ($$v) {_vm.$set(_vm.form, "diarkeia", $$v)},expression:"form.diarkeia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Επιφάνεια δειγματοληψίας","color":"green","counter":255,"rules":_vm.epifaneiaDeigmatolhpsiasRules},model:{value:(_vm.form.epifaneiaDeigmatolhpsias),callback:function ($$v) {_vm.$set(_vm.form, "epifaneiaDeigmatolhpsias", $$v)},expression:"form.epifaneiaDeigmatolhpsias"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τύπος βλάστησης","color":"green","counter":255,"rules":_vm.tuposVlasthshsRules},model:{value:(_vm.form.tuposVlasthshs),callback:function ($$v) {_vm.$set(_vm.form, "tuposVlasthshs", $$v)},expression:"form.tuposVlasthshs"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τύπος οικοτόπου","color":"green","counter":255,"rules":_vm.tuposOikotopouRules},model:{value:(_vm.form.tuposOikotopou),callback:function ($$v) {_vm.$set(_vm.form, "tuposOikotopou", $$v)},expression:"form.tuposOikotopou"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό πλάτος EGSA","color":"green","append-icon":"edit_location","counter":255,"rules":_vm.latitudeEGSARules},model:{value:(_vm.form.latitudeEGSA),callback:function ($$v) {_vm.$set(_vm.form, "latitudeEGSA", $$v)},expression:"form.latitudeEGSA"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό μήκος EGSA","color":"green","append-icon":"edit_location","counter":255,"rules":_vm.longitudeEGSARules},model:{value:(_vm.form.longitudeEGSA),callback:function ($$v) {_vm.$set(_vm.form, "longitudeEGSA", $$v)},expression:"form.longitudeEGSA"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό πλάτος WGS84","color":"green","append-icon":"edit_location","counter":255,"rules":_vm.latitudeWGS84Rules},model:{value:(_vm.form.latitudeWGS84),callback:function ($$v) {_vm.$set(_vm.form, "latitudeWGS84", $$v)},expression:"form.latitudeWGS84"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό μήκος WGS84","color":"green","append-icon":"edit_location","counter":255,"rules":_vm.longitudeWGS84Rules},model:{value:(_vm.form.longitudeWGS84),callback:function ($$v) {_vm.$set(_vm.form, "longitudeWGS84", $$v)},expression:"form.longitudeWGS84"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Κελί πλέγματος","color":"green","counter":30,"rules":_vm.gridCellRules},model:{value:(_vm.form.gridCell),callback:function ($$v) {_vm.$set(_vm.form, "gridCell", $$v)},expression:"form.gridCell"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Κωδικός Natura","color":"green","counter":40,"rules":_vm.kwdikosNaturaRules},model:{value:(_vm.form.kwdikosNatura),callback:function ($$v) {_vm.$set(_vm.form, "kwdikosNatura", $$v)},expression:"form.kwdikosNatura"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Μέθοδος δειγματοληψίας","color":"green","counter":255,"rules":_vm.methodosDeigmatolhpsiasRules},model:{value:(_vm.form.methodosDeigmatolhpsias),callback:function ($$v) {_vm.$set(_vm.form, "methodosDeigmatolhpsias", $$v)},expression:"form.methodosDeigmatolhpsias"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Νομός","color":"green","counter":255,"rules":_vm.nomosRules},model:{value:(_vm.form.nomos),callback:function ($$v) {_vm.$set(_vm.form, "nomos", $$v)},expression:"form.nomos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md8":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Παρατηρήσεις","color":"green","counter":255,"rules":_vm.parathrhseisRules,"rows":"6"},model:{value:(_vm.form.parathrhseis),callback:function ($$v) {_vm.$set(_vm.form, "parathrhseis", $$v)},expression:"form.parathrhseis"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"justify-space-around":"","mt-5":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs6":"","md5":""}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.validation,"color":"green lighten-2 white--text"},on:{"click":_vm.submitForm}},[_vm._v("\n                Εγγραφή\n            ")])],1)],1)],1)],1),_vm._v(" "),_c('v-flex',{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{"xs12":""}},[_c('h2',{staticClass:"font-weight-thin"},[_c('v-icon',{attrs:{"large":"","color":"green"}},[_vm._v("cloud_upload")]),_vm._v(" "+_vm._s(_vm.main.titleExcel)+" ")],1)]),_vm._v(" "),_c('div',{staticClass:"dropperPlace"},[(_vm.selectedFile != null)?_c('v-icon',{staticStyle:{"position":"absolute","color":"red","z-index":"1","top":"25px","right":"25px"},on:{"click":function($event){return _vm.removeFile()}}},[_vm._v("close")]):_vm._e(),_vm._v(" "),_c('input',{ref:"inputFile",staticClass:"inputPlace",attrs:{"type":"file"},on:{"change":function($event){return _vm.selectExcel($event.target.files[0])}}}),_vm._v(" "),(_vm.selectedFile != null)?_c('p',[_vm._v(" "+_vm._s(_vm.selectedFile.name)+" ")]):_c('p',{staticClass:"pa-4"},[_vm._v(" "+_vm._s(_vm.main.subTitleExcel)+" ")])],1),_vm._v(" "),_c('v-btn',{staticClass:"mt-4",staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.validationExcelInput,"color":"green lighten-2 white--text"},on:{"click":function($event){return _vm.submitExcel()}}},[_vm._v("Αποστολή excel αρχείου")])],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/new.vue?vue&type=template&id=e56e423c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn/new.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: 'Δείγμα Θηλαστικών - Δημιουργία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Δημιουργία και αποθήκευση νέων δεδομένων τύπου Δείγματος Θηλαστικών -μέσω φόρμας ή αρχείου excel- για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Εγγραφή νέου Δείγματος Θηλαστικών',
        titleForm: 'Για εγγραφή μέσω φόρμας συμπληρώστε παρακάτω',
        titleExcel: 'Για εγγραφές μέσω excel (.xlsx) αρχείου εισάγετε το αρχείο',
        subTitleExcel: 'Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το excel'
      },
      form: {
        prwtokolaId: '',
        kwdikosDeigmatolhpsias: '',
        xrhmatodothsh: '',
        ereunhths: '',
        topothesia: '',
        date: '',
        time: '',
        diarkeia: '',
        tuposVlasthshs: '',
        tuposOikotopou: '',
        epifaneiaDeigmatolhpsias: '',
        latitudeEGSA: '',
        longitudeEGSA: '',
        latitudeWGS84: '',
        longitudeWGS84: '',
        gridCell: '',
        kwdikosNatura: '',
        methodosDeigmatolhpsias: '',
        parathrhseis: '',
        nomos: ''
      },
      // To fill through a mounted Get request
      prwtokollaList: [],
      dateDialog: false,
      timeDialog: false,
      validation: false,
      prwtokolaIdRules: [v => !!v || 'Συμπληρώστε το πεδίο Πρωτοκόλλου για το δείγμα', v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      kwdikosDeigmatolhpsiasRules: [v => !!v || 'Συμπληρώστε το πεδίο Πρωτοκόλλου για το δείγμα', v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      xrhmatodothshRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      ereunhthsRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      topothesiaRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      diarkeiaRules: [v => v.length <= 40 || 'Το πεδίο πρέπει να είναι λιγότερο από 40 χαρακτήρες'],
      tuposVlasthshsRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      tuposOikotopouRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      epifaneiaDeigmatolhpsiasRules: [v => v.toString().length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες', v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      latitudeEGSARules: [v => v.toString().length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες', v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      longitudeEGSARules: [v => v.toString().length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες', v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      latitudeWGS84Rules: [v => v.toString().length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες', v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      longitudeWGS84Rules: [v => v.toString().length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες', v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      gridCellRules: [v => v.length <= 30 || 'Το πεδίο πρέπει να είναι λιγότερο από 30 χαρακτήρες'],
      kwdikosNaturaRules: [v => v.length <= 30 || 'Το πεδίο πρέπει να είναι λιγότερο από 30 χαρακτήρες'],
      methodosDeigmatolhpsiasRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      parathrhseisRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      nomosRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      selectedFile: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },

  computed: {
    // Getting the distinct Prwtokola for autocomplete list. Used for Deigmata Init
    getDistinctUrl() {
      return this.$store.getters.getPrwtokolaDistinctUrl;
    },

    addFormUrl() {
      return this.$store.getters.getDeigmaThhlastikwnAddUrl;
    },

    addFromExcelUrl() {
      return this.$store.getters.getDeigmaThhlastikwnAddFromExcelUrl;
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
    // Getting Prwtokola for Deigmata Init
    this.getPrwtokolaIdList();
  },

  methods: {
    // Getting Prwtokola for Deigmata Init
    getPrwtokolaIdList() {
      this.$axios.get(this.getDistinctUrl).then(response => {
        if (response.data.length == []) {
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα Πρωτόκολλα.';
          this.snackbar = true;
        } else {
          // Filling the Prwtokola list for the user
          this.prwtokollaList = response.data;
        }
      }).catch(err => {
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την εύρεση Πρωτοκόλλων.';
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
        prwtokolaId: null,
        kwdikosDeigmatolhpsias: null,
        xrhmatodothsh: null,
        ereunhths: null,
        topothesia: null,
        date: null,
        time: null,
        diarkeia: null,
        tuposVlasthshs: null,
        tuposOikotopou: null,
        epifaneiaDeigmatolhpsias: null,
        latitudeEGSA: null,
        longitudeEGSA: null,
        latitudeWGS84: null,
        longitudeWGS84: null,
        gridCell: null,
        kwdikosNatura: null,
        methodosDeigmatolhpsias: null,
        parathrhseis: null,
        nomos: null
      }; // Preparing the body for the Post

      checkedForm.prwtokolaId = this.form.prwtokolaId;
      checkedForm.kwdikosDeigmatolhpsias = this.form.kwdikosDeigmatolhpsias;

      if (!this.form.xrhmatodothsh == '') {
        checkedForm.xrhmatodothsh = this.form.xrhmatodothsh;
      }

      if (!this.form.ereunhths == '') {
        checkedForm.ereunhths = this.form.ereunhths;
      }

      if (!this.form.topothesia == '') {
        checkedForm.topothesia = this.form.topothesia;
      }

      if (!this.form.date == '') {
        checkedForm.date = this.form.date;
      }

      if (!this.form.time == '') {
        checkedForm.time = this.form.time;
      }

      if (!this.form.diarkeia == '') {
        checkedForm.diarkeia = this.form.diarkeia;
      }

      if (!this.form.tuposVlasthshs == '') {
        checkedForm.tuposVlasthshs = this.form.tuposVlasthshs;
      }

      if (!this.form.tuposOikotopou == '') {
        checkedForm.tuposOikotopou = this.form.tuposOikotopou;
      }

      if (!isNaN(this.form.epifaneiaDeigmatolhpsias)) {
        // console.log("Passed through the epifaneiaDeigmatolhspias")
        checkedForm.epifaneiaDeigmatolhpsias = this.form.epifaneiaDeigmatolhpsias;
      }

      if (!isNaN(this.form.latitudeEGSA)) {
        // console.log("Passed through the latitudeEGSA")
        checkedForm.latitudeEGSA = this.form.latitudeEGSA;
      }

      if (!isNaN(this.form.longitudeEGSA)) {
        // console.log("Passed through the longitudeEGSA")
        checkedForm.longitudeEGSA = this.form.longitudeEGSA;
      }

      if (!isNaN(this.form.latitudeWGS84)) {
        // console.log("Passed through the latitudeWGS84")
        checkedForm.latitudeWGS84 = this.form.latitudeWGS84;
      }

      if (!isNaN(this.form.longitudeWGS84)) {
        // console.log("Passed through the longitudeWGS84")
        checkedForm.longitudeWGS84 = this.form.longitudeWGS84;
      }

      if (!this.form.gridCell == '') {
        checkedForm.gridCell = this.form.gridCell;
      }

      if (!this.form.kwdikosNatura == '') {
        checkedForm.kwdikosNatura = this.form.kwdikosNatura;
      }

      if (!this.form.methodosDeigmatolhpsias == '') {
        checkedForm.methodosDeigmatolhpsias = this.form.methodosDeigmatolhpsias;
      }

      if (!this.form.parathrhseis == '') {
        checkedForm.parathrhseis = this.form.parathrhseis;
      }

      if (!this.form.nomos == '') {
        checkedForm.nomos = this.form.nomos;
      } // console.log(checkedForm)
      // Post request and navigation


      this.$axios.post(this.addFormUrl, checkedForm).then(response => {
        // console.log(response.data)
        this.$router.push('/thhlastika/deigma-thhlastikwn/' + response.data.id);
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
// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/new.vue?vue&type=script&lang=js&
 /* harmony default export */ var deigma_thhlastikwn_newvue_type_script_lang_js_ = (newvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/new.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(147)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  deigma_thhlastikwn_newvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9a498280"
  
)

/* harmony default export */ var deigma_thhlastikwn_new = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=new.js.map