exports.ids = [37];
exports.modules = {

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2e57ca36", content, true, context)
};

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_stylus_loader_index_js_ref_8_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dropperPlace{margin-top:20px;background-color:#fff;transition:.15s linear;color:grey;display:flex;justify-content:center;align-items:center;box-shadow:0 3px 5px #aaa;position:relative}.dropperPlace,.inputPlace{height:30vh;width:100%;border-radius:20px}.inputPlace{opacity:0;position:absolute}.dropperPlace:hover{background-color:#eee;transition:.15s linear}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/deigma-ornithopanida/_id/index.vue?vue&type=template&id=1f9c5858&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('div',{staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('div',{staticClass:"pa-4"},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Κωδικός δειγματοληψίας","color":"green","counter":255,"readonly":"","required":""},model:{value:(_vm.deigma.kodikosDeigmatolipsias),callback:function ($$v) {_vm.$set(_vm.deigma, "kodikosDeigmatolipsias", $$v)},expression:"deigma.kodikosDeigmatolipsias"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Χρηματοδότηση","color":"green","counter":255,"readonly":""},model:{value:(_vm.deigma.xrhmatodothsh),callback:function ($$v) {_vm.$set(_vm.deigma, "xrhmatodothsh", $$v)},expression:"deigma.xrhmatodothsh"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ερευνητής","color":"green","append-icon":"account_box","counter":255,"readonly":""},model:{value:(_vm.deigma.ereunhths),callback:function ($$v) {_vm.$set(_vm.deigma, "ereunhths", $$v)},expression:"deigma.ereunhths"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τοποθεσία","color":"green","append-icon":"location_searching","counter":255,"readonly":""},model:{value:(_vm.deigma.topothesia),callback:function ($$v) {_vm.$set(_vm.deigma, "topothesia", $$v)},expression:"deigma.topothesia"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ημερομηνία (Έτος-Μήνας-Ημέρα)","color":"green","append-icon":"date_range","hint":"YYYY-MM-DD | Παράδειγμα 2019-06-23","readonly":""},model:{value:(_vm.deigma.date),callback:function ($$v) {_vm.$set(_vm.deigma, "date", $$v)},expression:"deigma.date"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ώρα","color":"green","append-icon":"access_time","hint":"HH:MM:SS | Παράδειγμα 20:32:10","readonly":""},model:{value:(_vm.deigma.time),callback:function ($$v) {_vm.$set(_vm.deigma, "time", $$v)},expression:"deigma.time"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Διάρκεια","color":"green","counter":40,"readonly":""},model:{value:(_vm.deigma.diarkeia),callback:function ($$v) {_vm.$set(_vm.deigma, "diarkeia", $$v)},expression:"deigma.diarkeia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Επιφάνεια δειγματοληψίας","color":"green","counter":255,"readonly":""},model:{value:(_vm.deigma.epifaneiaDeigmatolhpsias),callback:function ($$v) {_vm.$set(_vm.deigma, "epifaneiaDeigmatolhpsias", $$v)},expression:"deigma.epifaneiaDeigmatolhpsias"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τύπος βλάστησης","color":"green","counter":255,"readonly":""},model:{value:(_vm.deigma.tuposVlasthshs),callback:function ($$v) {_vm.$set(_vm.deigma, "tuposVlasthshs", $$v)},expression:"deigma.tuposVlasthshs"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τύπος οικοτόπου","color":"green","counter":255,"readonly":""},model:{value:(_vm.deigma.tuposOikotopou),callback:function ($$v) {_vm.$set(_vm.deigma, "tuposOikotopou", $$v)},expression:"deigma.tuposOikotopou"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό πλάτος EGSA","color":"green","append-icon":"edit_location","counter":255,"readonly":""},model:{value:(_vm.deigma.latitudeEGSA),callback:function ($$v) {_vm.$set(_vm.deigma, "latitudeEGSA", $$v)},expression:"deigma.latitudeEGSA"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό μήκος EGSA","color":"green","append-icon":"edit_location","counter":255,"readonly":""},model:{value:(_vm.deigma.longitudeEGSA),callback:function ($$v) {_vm.$set(_vm.deigma, "longitudeEGSA", $$v)},expression:"deigma.longitudeEGSA"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό πλάτος WGS84","color":"green","append-icon":"edit_location","counter":255,"readonly":""},model:{value:(_vm.deigma.latitudeWGS84),callback:function ($$v) {_vm.$set(_vm.deigma, "latitudeWGS84", $$v)},expression:"deigma.latitudeWGS84"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό μήκος WGS84","color":"green","append-icon":"edit_location","counter":255,"readonly":""},model:{value:(_vm.deigma.longitudeWGS84),callback:function ($$v) {_vm.$set(_vm.deigma, "longitudeWGS84", $$v)},expression:"deigma.longitudeWGS84"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Κελί πλέγματος","color":"green","counter":30,"readonly":""},model:{value:(_vm.deigma.gridCell),callback:function ($$v) {_vm.$set(_vm.deigma, "gridCell", $$v)},expression:"deigma.gridCell"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Κωδικός Natura","color":"green","counter":40,"readonly":""},model:{value:(_vm.deigma.kodikosNatura),callback:function ($$v) {_vm.$set(_vm.deigma, "kodikosNatura", $$v)},expression:"deigma.kodikosNatura"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Μέθοδος δειγματοληψίας","color":"green","counter":255,"readonly":""},model:{value:(_vm.deigma.methodosDeigmatolhpsias),callback:function ($$v) {_vm.$set(_vm.deigma, "methodosDeigmatolhpsias", $$v)},expression:"deigma.methodosDeigmatolhpsias"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Νομός","color":"green","counter":255,"readonly":""},model:{value:(_vm.deigma.nomos),callback:function ($$v) {_vm.$set(_vm.deigma, "nomos", $$v)},expression:"deigma.nomos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md8":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Παρατηρήσεις","color":"green","counter":255,"readonly":"","rows":"6"},model:{value:(_vm.deigma.parathrhseis),callback:function ($$v) {_vm.$set(_vm.deigma, "parathrhseis", $$v)},expression:"deigma.parathrhseis"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(_vm.deigma.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"green","dark":""},on:{"click":function($event){return _vm.toIdEditPage(_vm.deigma.id)}}},[_vm._v("Επεξεργασία"),_c('v-icon',{attrs:{"small":"","right":""}},[_vm._v("edit")])],1)],1)],1)]),_vm._v(" "),_c('v-layout',{staticClass:"text-xs-center my-5",attrs:{"justify-center":"","align-center":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"error lighten-1","title":"Οριστική διαγραφή"},on:{"click":_vm.deleteById}},[_vm._v("Διαγραφή"),_c('v-icon',{attrs:{"small":"","right":""}},[_vm._v("delete")])],1)],1),_vm._v(" "),_c('v-layout',{staticClass:"text-xs-center my5",attrs:{"row":"","wrap":"","justify-center":"","align-center":""}},[_c('v-flex',{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{"xs12":""}},[_c('h2',{staticClass:"font-weight-thin"},[_c('v-icon',{attrs:{"large":"","color":"green"}},[_vm._v("add_photo_alternate")]),_vm._v(" "+_vm._s(_vm.main.titlePicture)+" ")],1)]),_vm._v(" "),_c('div',{staticClass:"dropperPlace"},[(_vm.selectedPicture != null)?_c('v-icon',{staticStyle:{"position":"absolute","color":"red","z-index":"1","top":"25px","right":"25px"},on:{"click":function($event){return _vm.removePicture()}}},[_vm._v("close")]):_vm._e(),_vm._v(" "),_c('input',{ref:"inputPicture",staticClass:"inputPlace",attrs:{"type":"file"},on:{"change":function($event){return _vm.selectPicture($event.target.files[0])}}}),_vm._v(" "),(_vm.selectedPicture != null)?_c('p',[_vm._v(" "+_vm._s(_vm.selectedPicture.name)+" ")]):_c('p',{staticClass:"pa-4"},[_vm._v(" "+_vm._s(_vm.main.subTitlePicture)+" ")])],1),_vm._v(" "),_c('v-btn',{staticClass:"mt-4",staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.validationPictureInput,"color":"green lighten-2 white--text"},on:{"click":function($event){return _vm.submitPicture()}}},[_vm._v("Αποστολή φωτογραφίας")])],1),_vm._v(" "),_c('v-layout',{staticClass:"text-xs-center my5",attrs:{"row":"","wrap":"","justify-center":"","align-center":""}},[_c('v-flex',{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{"xs12":""}},[_c('h2',{staticClass:"font-weight-thin"},[_c('v-icon',{attrs:{"large":"","color":"green"}},[_vm._v("insert_drive_file")]),_vm._v(" "+_vm._s(_vm.main.titleFile)+" ")],1)]),_vm._v(" "),_c('div',{staticClass:"dropperPlace"},[(_vm.selectedFile != null)?_c('v-icon',{staticStyle:{"position":"absolute","color":"red","z-index":"1","top":"25px","right":"25px"},on:{"click":function($event){return _vm.removeFile()}}},[_vm._v("close")]):_vm._e(),_vm._v(" "),_c('input',{ref:"inputFile",staticClass:"inputPlace",attrs:{"type":"file"},on:{"change":function($event){return _vm.selectFile($event.target.files[0])}}}),_vm._v(" "),(_vm.selectedFile != null)?_c('p',[_vm._v(" "+_vm._s(_vm.selectedFile.name)+" ")]):_c('p',{staticClass:"pa-4"},[_vm._v(" "+_vm._s(_vm.main.subTitleFile)+" ")])],1),_vm._v(" "),_c('v-btn',{staticClass:"mt-4",staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.validationFileInput,"color":"green lighten-2 white--text"},on:{"click":function($event){return _vm.submitFile()}}},[_vm._v("Αποστολή αρχείου")])],1),_vm._v(" "),_c('v-speed-dial',{staticStyle:{"position":"fixed","bottom":"60px"},attrs:{"bottom":true,"right":true,"absolute":""},model:{value:(_vm.servicesBtn),callback:function ($$v) {_vm.servicesBtn=$$v},expression:"servicesBtn"}},[_c('v-btn',{attrs:{"slot":"activator","dark":"","color":"light-green lighten-1","fab":"","title":"Επιπλέον ενέργειες"},slot:"activator",model:{value:(_vm.servicesBtn),callback:function ($$v) {_vm.servicesBtn=$$v},expression:"servicesBtn"}},[_c('v-icon',[_vm._v("drag_indicator")]),_vm._v(" "),_c('v-icon',[_vm._v("close")])],1),_vm._v(" "),_c('v-btn',{attrs:{"fab":"","dark":"","color":"teal lighten-2","title":"Εμφάνιση των φωτογραφιών του δείγματος"},on:{"click":_vm.goToPicturesPage}},[_c('v-icon',[_vm._v("collections")])],1),_vm._v(" "),_c('v-btn',{attrs:{"fab":"","dark":"","color":"teal lighten-2","title":"Εμφάνιση των αρχείων του δείγματος"},on:{"click":_vm.goToFilesPage}},[_c('v-icon',[_vm._v("file_copy")])],1),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"fab":"","dark":"","color":"orange lighten-2","title":"Εμφάνιση των Δειγμάτων X Ειδών του δείγματος"},on:{"click":_vm.goToXEidhPage}},[_vm._v("\n            Είδη\n          ")]),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"fab":"","dark":"","color":"orange lighten-2","title":"Εμφάνιση των Δειγμάτων X Πιέσεων του δείγματος"},on:{"click":_vm.goToXPressThreatsPage}},[_vm._v("\n            Πιέσεις\n          ")])],1)],1)]):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/_id/index.vue?vue&type=template&id=1f9c5858&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/deigma-ornithopanida/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Δείγμα Ορνιθοπανίδας - Προβολή | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Προβολή συγκεκριμένου Δείγματος Ορνιθοπανίδας για τη διαχείρηση δεδομένων των Δειγμάτων Ορνιθοπανίδας για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Αναζήτηση Δείγματος Ορνιθοπανίδας με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Δείγμα Ορνιθοπανίδας που επιθυμείτε',
        titlePicture: 'Προσθέστε νέα φωτογραφία για το Δείγμα Ορνιθοπανίδας',
        subTitlePicture: 'Πατήστε για να επιλέξετε ή μεταφέρετε εδώ την φωτογραφία',
        titleFile: 'Προσθέστε νέο αρχείο (pdf / excel / word) για το Δείγμα Ορνιθοπανίδας',
        subTitleFile: 'Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το αρχείο'
      },
      noElements: null,
      deigma: {},
      selectedPicture: null,
      selectedFile: null,
      servicesBtn: false,
      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },

  computed: {
    getByIdUrl() {
      return this.$store.getters.getDeigmaOrnithopanidaByIdUrl;
    },

    id() {
      return this.$route.params.id;
    },

    addPictureUrl() {
      return this.$store.getters.getDeigmaOrnithopanidaByIdUrl + this.id + '/addPicture';
    },

    addFileUrl() {
      return this.$store.getters.getDeigmaOrnithopanidaByIdUrl + this.id + '/addFile';
    },

    // Validating for the btn depending on the file -null or not-
    validationPictureInput() {
      if (this.selectedPicture != null) {
        return true;
      } else {
        return false;
      }
    },

    // Validating for the btn depending on the file -null or not-
    validationFileInput() {
      if (this.selectedFile != null) {
        return true;
      } else {
        return false;
      }
    }

  },

  mounted() {
    this.restCall(this.id);
  },

  methods: {
    checkForPrevPage(pageNumber) {
      if (pageNumber == 0) {
        this.prevPage = false;
      } else {
        this.prevPage = true;
      }
    },

    restCall(id) {
      this.loading = true;
      this.$axios.get(this.getByIdUrl + id).then(response => {
        // console.log(response.data)
        if (response.data == "") {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Δείγμα Θηλαστικών που επιθυμείτε';
          this.snackbar = true;
        } else {
          this.noElements = false; // TODO: Important : what happens if still it comes null for ct or deigmathhlastikwn (not the id and eidos but ctThhlastikaEidh and deigmaThhlastikwn themselves!) I should be checking this somehow maybe make a checkForNulls as for `edit` page?

          this.deigma = response.data;
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

    toIdEditPage(id) {
      this.$router.push('/ornithopanida/deigma-ornithopanida/' + id + '/edit');
    },

    deleteById() {
      this.$axios.delete(this.getByIdUrl + this.id).then(response => {
        if (response.data == true) {
          this.snackbarColor = 'green';
          this.snackbarText = 'Η διαγραφή ολοκληρώθηκε επιτυχώς';
          this.snackbar = true;
          this.$router.push('/');
        } else if (response.data == false) {
          this.snackbarColor = 'red';
          this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την διαγραφή';
          this.snackbar = true;
        }
      }).catch(err => {
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την διαγραφή';
        this.snackbar = true;
        throw err;
      });
    },

    selectPicture(file) {
      // console.log(file)
      this.selectedPicture = file;
    },

    removePicture() {
      this.selectedPicture = null;
      this.$refs.inputPicture.value = '';
    },

    submitPicture() {
      const formData = new FormData();
      formData.append('file', this.selectedPicture);
      this.$axios.patch(this.addPictureUrl, formData).then(response => {
        if (response.data == true) {
          this.snackbarColor = 'success';
          this.snackbarText = 'Το αρχείο στάλθηκε και οι νέες εγγραφές δημιουργήθηκαν επιτυχώς';
          this.snackbar = true;
          this.removePicture();
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
    },

    selectFile(file) {
      // console.log(file)
      this.selectedFile = file;
    },

    removeFile() {
      this.selectedFile = null;
      this.$refs.inputFile.value = '';
    },

    submitFile() {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      this.$axios.patch(this.addFileUrl, formData).then(response => {
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
    },

    goToPicturesPage() {
      this.$router.push('/ornithopanida/deigma-ornithopanida/' + this.id + '/pictures/');
    },

    goToFilesPage() {
      this.$router.push('/ornithopanida/deigma-ornithopanida/' + this.id + '/files/');
    },

    goToXEidhPage() {
      this.$router.push('/ornithopanida/deigma-ornithopanida/' + this.id + '/x-eidh/');
    },

    goToXPressThreatsPage() {
      this.$router.push('/ornithopanida/deigma-ornithopanida/' + this.id + '/x-press-threats/');
    }

  }
});
// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var deigma_ornithopanida_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/_id/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(149)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  deigma_ornithopanida_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "545d5b7a"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map