exports.ids = [40];
exports.modules = {

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/deigma-ornithopanida/_id/x-press-threats/index.vue?vue&type=template&id=3a9102ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-btn',{staticClass:"mt-4 mb-3",staticStyle:{"text-transform":"none"},attrs:{"dark":"","round":"","color":"light-green lighten-2","title":"Πλοήγηση πίσω στη σελίδα του δείγματος"},on:{"click":_vm.goBack}},[_c('v-icon',[_vm._v("arrow_back_ios")]),_vm._v("Πίσω")],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('div',[_c('h3',{staticClass:"my-4 text-xs-center text-md-left font-weight-regular"},[_vm._v("Σύνολο Δειγμάτων X Πιέσεων του δείγματος : "+_vm._s(this.numberOfElements)+" ")])]),_vm._v(" "),_vm._l((_vm.returnedData),function(deigmaXPressThreat){return _c('div',{key:deigmaXPressThreat.id,staticClass:"my-5"},[_c('v-card',{attrs:{"my-2":""}},[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"7px"}}),_vm._v(" "),_c('div',{staticClass:"pa-4"},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Δείγμα Θηλαστικών Id","color":"green","readonly":""},model:{value:(deigmaXPressThreat.deigmaornithopanidaID),callback:function ($$v) {_vm.$set(deigmaXPressThreat, "deigmaornithopanidaID", $$v)},expression:"deigmaXPressThreat.deigmaornithopanidaID"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ct Πίεσης","color":"green","readonly":""},model:{value:(deigmaXPressThreat.ctActCode),callback:function ($$v) {_vm.$set(deigmaXPressThreat, "ctActCode", $$v)},expression:"deigmaXPressThreat.ctActCode"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","lg3":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Κωδικός είδους","color":"green","readonly":""},model:{value:(deigmaXPressThreat.kodikos),callback:function ($$v) {_vm.$set(deigmaXPressThreat, "kodikos", $$v)},expression:"deigmaXPressThreat.kodikos"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","lg3":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τύπος πίεσης","color":"green","readonly":""},model:{value:(deigmaXPressThreat.type),callback:function ($$v) {_vm.$set(deigmaXPressThreat, "type", $$v)},expression:"deigmaXPressThreat.type"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md6":"","lg3":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Σημασία","color":"green","readonly":""},model:{value:(deigmaXPressThreat.importance),callback:function ($$v) {_vm.$set(deigmaXPressThreat, "importance", $$v)},expression:"deigmaXPressThreat.importance"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(deigmaXPressThreat.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"green","dark":""},on:{"click":function($event){return _vm.toIdPage(deigmaXPressThreat.id)}}},[_vm._v("Εμφάνιση")])],1)],1)])],1)})],2):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/_id/x-press-threats/index.vue?vue&type=template&id=3a9102ee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/deigma-ornithopanida/_id/x-press-threats/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var x_press_threatsvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Δειγματοληψίες Χ Πιέσεων Δείγματος Θηλαστικών - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Αναζήτηση Δειγματοληψιών Χ Πιέσεων συνδεδεμένων με συγκεκριμένο Δείγμα Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Αναζήτηση Δειγμάτων X Πιέσεων του δείγματος',
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
    searchUrl() {
      return this.$store.getters.getOrnithopanidaXPressThreatsByDeigmaOrnithopanidaIdIs;
    },

    id() {
      return this.$route.params.id;
    }

  },

  mounted() {
    this.restCall();
  },

  methods: {
    goBack() {
      this.$router.push("/ornithopanida/deigma-ornithopanida/" + this.id);
    },

    restCall() {
      this.loading = true;
      this.$axios.get(this.searchUrl + '/' + this.id).then(response => {
        if (response.data.length == 0) {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της αναζήτησης';
          this.snackbar = true;
        } else {
          this.noElements = false;
          this.returnedData = response.data;
          this.numberOfElements = response.data.length;
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
      this.$router.push('/ornithopanida/deigma-ornithopanida-x-press-threats/' + id);
    }

  }
});
// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/_id/x-press-threats/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_x_press_threatsvue_type_script_lang_js_ = (x_press_threatsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/_id/x-press-threats/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_x_press_threatsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "faf748d0"
  
)

/* harmony default export */ var x_press_threats = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map