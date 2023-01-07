exports.ids = [82];
exports.modules = {

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn/_id/x-eidh/index.vue?vue&type=template&id=39fb59d9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-btn',{staticClass:"mt-4 mb-3",staticStyle:{"text-transform":"none"},attrs:{"dark":"","round":"","color":"light-green lighten-2","title":"Πλοήγηση πίσω στη σελίδα του δείγματος"},on:{"click":_vm.goBack}},[_c('v-icon',[_vm._v("arrow_back_ios")]),_vm._v("Πίσω")],1),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('div',[_c('h3',{staticClass:"my-4 text-xs-center text-md-left font-weight-regular"},[_vm._v("Σύνολο Δειγμάτων X Ειδών του δείγματος : "+_vm._s(this.numberOfElements)+" ")])]),_vm._v(" "),_vm._l((_vm.returnedData),function(deigmaXEidos){return _c('div',{key:deigmaXEidos.id,staticClass:"my-5"},[_c('v-card',{attrs:{"my-2":""}},[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('div',{staticClass:"pa-4"},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Δείγμα Θηλαστικών Id","color":"green","readonly":""},model:{value:(deigmaXEidos.deigmaThhlastikwnId),callback:function ($$v) {_vm.$set(deigmaXEidos, "deigmaThhlastikwnId", $$v)},expression:"deigmaXEidos.deigmaThhlastikwnId"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ct Είδους","color":"green","readonly":""},model:{value:(deigmaXEidos.ctEidos),callback:function ($$v) {_vm.$set(deigmaXEidos, "ctEidos", $$v)},expression:"deigmaXEidos.ctEidos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Σχετική αφθονία","color":"green","readonly":""},model:{value:(deigmaXEidos.sxetikhAfthonia),callback:function ($$v) {_vm.$set(deigmaXEidos, "sxetikhAfthonia", $$v)},expression:"deigmaXEidos.sxetikhAfthonia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Αριθμός ατόμων","color":"green","readonly":""},model:{value:(deigmaXEidos.plhthos),callback:function ($$v) {_vm.$set(deigmaXEidos, "plhthos", $$v)},expression:"deigmaXEidos.plhthos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ηλικία","color":"green","readonly":""},model:{value:(deigmaXEidos.hlikia),callback:function ($$v) {_vm.$set(deigmaXEidos, "hlikia", $$v)},expression:"deigmaXEidos.hlikia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Φύλο","color":"green","readonly":""},model:{value:(deigmaXEidos.fulo),callback:function ($$v) {_vm.$set(deigmaXEidos, "fulo", $$v)},expression:"deigmaXEidos.fulo"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"ΕΟΚ Παρ II","color":"green","readonly":""},model:{value:(deigmaXEidos.eokParII),callback:function ($$v) {_vm.$set(deigmaXEidos, "eokParII", $$v)},expression:"deigmaXEidos.eokParII"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"ΕΟΚ Παρ IV","color":"green","readonly":""},model:{value:(deigmaXEidos.eokParIV),callback:function ($$v) {_vm.$set(deigmaXEidos, "eokParIV", $$v)},expression:"deigmaXEidos.eokParIV"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"ΕΟΚ Παρ V","color":"green","readonly":""},model:{value:(deigmaXEidos.eokParV),callback:function ($$v) {_vm.$set(deigmaXEidos, "eokParV", $$v)},expression:"deigmaXEidos.eokParV"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"justify-center":""}},[_c('v-flex',{attrs:{"xs12":"","md10":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Παρατηρήσεις","color":"green","readonly":"","rows":"6"},model:{value:(deigmaXEidos.parathrhseis),callback:function ($$v) {_vm.$set(deigmaXEidos, "parathrhseis", $$v)},expression:"deigmaXEidos.parathrhseis"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(deigmaXEidos.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"green","dark":""},on:{"click":function($event){return _vm.toIdPage(deigmaXEidos.id)}}},[_vm._v("Εμφάνιση")])],1)],1)])],1)})],2):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/_id/x-eidh/index.vue?vue&type=template&id=39fb59d9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn/_id/x-eidh/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var x_eidhvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Δειγματοληψίες Χ Ειδών Δείγματος Θηλαστικών - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Αναζήτηση Δειγματοληψίες Χ Ειδών συνδεδεμένων με συγκεκριμένο Δείγμα Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Αναζήτηση Δειγμάτων X Ειδών του δείγματος',
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
      return this.$store.getters.getThhlastikaXEidhByDeigmaThhlastikwnIdIs;
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
      this.$router.push("/thhlastika/deigma-thhlastikwn/" + this.id);
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
      this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/' + id);
    }

  }
});
// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/_id/x-eidh/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_x_eidhvue_type_script_lang_js_ = (x_eidhvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/_id/x-eidh/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_x_eidhvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1bbb5205"
  
)

/* harmony default export */ var x_eidh = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map