exports.ids = [61];
exports.modules = {

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/ct-press-threats/_id/index.vue?vue&type=template&id=5cb7856e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('div',{staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"6px"}}),_vm._v(" "),_c('div',{staticClass:"pa-4"},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τύπος Πίεσης","color":"green","counter":50,"readonly":""},model:{value:(_vm.ct.actCode),callback:function ($$v) {_vm.$set(_vm.ct, "actCode", $$v)},expression:"ct.actCode"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-between":""}},[_c('v-flex',{attrs:{"xs12":"","md5":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Περιγραφή","color":"green","counter":255,"readonly":"","rows":"6"},model:{value:(_vm.ct.descriptionEn),callback:function ($$v) {_vm.$set(_vm.ct, "descriptionEn", $$v)},expression:"ct.descriptionEn"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Παρατηρήσεις","color":"green","counter":255,"readonly":"","rows":"6"},model:{value:(_vm.ct.remarks),callback:function ($$v) {_vm.$set(_vm.ct, "remarks", $$v)},expression:"ct.remarks"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(_vm.ct.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"green","dark":""},on:{"click":function($event){return _vm.toIdEditPage(_vm.ct.id)}}},[_vm._v("Επεξεργασία"),_c('v-icon',{attrs:{"small":"","right":""}},[_vm._v("edit")])],1)],1)],1)]),_vm._v(" "),_c('v-layout',{staticClass:"text-xs-center my-5",attrs:{"justify-center":"","align-center":""}},[_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"error lighten-1","title":"Οριστική διαγραφή"},on:{"click":_vm.deleteById}},[_vm._v("Διαγραφή"),_c('v-icon',{attrs:{"small":"","right":""}},[_vm._v("delete")])],1)],1)],1)]):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/thhlastika/ct-press-threats/_id/index.vue?vue&type=template&id=5cb7856e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/ct-press-threats/_id/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: 'Ct Πιέσεις Θηλαστικών - Προβολή | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Προβολή συγκεκριμένου Ct Πιέσης Θηλαστικών για τη διαχείρηση δεδομένων των Ct Πιέσεις Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Αναζήτηση Ct Πίεσης με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Ct Πίεσης που επιθυμείτε'
      },
      noElements: null,
      ct: {},
      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },

  computed: {
    getByIdUrl() {
      return this.$store.getters.getThhlastikaCtPressThreatsByIdUrl;
    },

    id() {
      return this.$route.params.id;
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
        // console.log(response)
        if (response.data == "") {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Ct Πίεσης που επιθυμείτε';
          this.snackbar = true;
        } else {
          this.noElements = false;
          this.ct = response.data;
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
      this.$router.push('/thhlastika/ct-press-threats/' + id + '/edit');
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
    }

  }
});
// CONCATENATED MODULE: ./pages/thhlastika/ct-press-threats/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var ct_press_threats_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/thhlastika/ct-press-threats/_id/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ct_press_threats_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d3f5db4c"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map