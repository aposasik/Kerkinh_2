exports.ids = [3];
exports.modules = {

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/deigmata/_id/edit.vue?vue&type=template&id=571e5dd7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('div',{staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('v-form',{ref:"form",model:{value:(_vm.validation),callback:function ($$v) {_vm.validation=$$v},expression:"validation"}},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":"","pa-4":""}},[_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-text-field',{attrs:{"label":"Δείγμα Id","color":"green","readonly":""},model:{value:(_vm.deigma.id),callback:function ($$v) {_vm.$set(_vm.deigma, "id", $$v)},expression:"deigma.id"}})],1),_vm._v(" "),(_vm.deigma.deigmaThhlastikwn != null)?_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-text-field',{attrs:{"label":"Δείγμα Θηλαστικών Id","color":"green","readonly":""},model:{value:(_vm.deigma.deigmaThhlastikwn.id),callback:function ($$v) {_vm.$set(_vm.deigma.deigmaThhlastikwn, "id", $$v)},expression:"deigma.deigmaThhlastikwn.id"}})],1):_vm._e(),_vm._v(" "),_c('v-flex',{attrs:{"xs8":""}},[_c('v-autocomplete',{attrs:{"label":"Πρωτόκολλο Id","color":"green","items":_vm.prwtokollaList,"rules":_vm.prwtokolaIdRules,"no-data-text":"Δεν βρέθηκαν δεδομένα","required":""},model:{value:(_vm.deigma.prwtokola.id),callback:function ($$v) {_vm.$set(_vm.deigma.prwtokola, "id", $$v)},expression:"deigma.prwtokola.id"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","justify-space-around":""}},[_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(_vm.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"light-green lighten-1","dark":""},on:{"click":function($event){return _vm.saveChanges()}}},[_vm._v("Αποθήκευση αλλαγών "),_c('v-icon',{attrs:{"small":"","right":""}},[_vm._v("save")])],1)],1)],1)],1)],1)]):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/deigmata/_id/edit.vue?vue&type=template&id=571e5dd7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/deigmata/_id/edit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var editvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Δείγματα - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Επεξεργασία συγκεκριμένου Δείγματος για τη διαχείρηση δεδομένων των Δειγμάτων για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Αναζήτηση Δείγματος με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Δείγμα που επιθυμείτε'
      },
      noElements: null,
      deigma: {
        id: '',
        prwtokola: {
          id: ''
        },
        deigmaThhlastikwn: {
          id: ''
        }
      },
      returnedObject: {
        id: '',
        prwtokola: {},
        deigmaThhlastikwn: {}
      },
      // To fill through a mounted Get request
      prwtokollaList: [],
      validation: false,
      prwtokolaIdRules: [v => !!v || 'Συμπληρώστε το πεδίο Πρωτοκόλλου για το δείγμα', v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      loading: null,
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

    getByIdUrl() {
      return this.$store.getters.getDeigmataByIdUrl;
    },

    id() {
      return this.$route.params.id;
    }

  },

  mounted() {
    // Getting Prwtokola for Deigmata Init
    this.getPrwtokolaIdList();
    this.restCall(this.id);
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

    checkForNulls(data) {
      // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
      if (data.prwtokola != null && data.deigmaThhlastikwn != null) {
        this.deigma = JSON.parse(JSON.stringify(data));
        this.returnedObject = JSON.parse(JSON.stringify(data));
      }
    },

    restCall(id) {
      this.loading = true;
      this.$axios.get(this.getByIdUrl + id).then(response => {
        if (response.data == "") {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το πρωτόκολλο που επιθυμείτε';
          this.snackbar = true;
        } else {
          // Check for nulls in the returned data
          this.checkForNulls(response.data);
          this.noElements = false;
        }

        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση του πρωτοκόλλου';
        this.snackbar = true;
        throw err;
      });
    },

    // Checking if the user is submitting to send the same data
    checkForSavingTheSame() {
      if (this.deigma.prwtokola.id == this.returnedObject.prwtokola.id) {
        return true;
      }
    },

    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData() {
      let patchedDeigma = {
        id: this.deigma.id,
        kwdikosPrwtokolou: ''
      }; // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)

      if (this.deigma.prwtokola.id != this.returnedObject.prwtokola.id) {
        patchedDeigma.kwdikosPrwtokolou = this.deigma.prwtokola.id;
      }

      return patchedDeigma;
    },

    saveChanges() {
      // Checking for the values that will be Patched after the user's changes
      if (this.checkForSavingTheSame() == true) {
        this.snackbarColor = 'red';
        this.snackbarText = 'Δεν πραγματοποιήσατε καμία αλλαγή στα πεδία';
        this.snackbar = true;
      } else {
        // Checking for null - '' values and doing the request
        let patchedDeigma = this.checkValuesOfSendingData(); // console.log(patchedDeigma)

        this.$axios.patch(this.getByIdUrl + this.id, patchedDeigma).then(response => {
          // console.log(response.data)
          if (response.data == false) {
            this.snackbarColor = 'red';
            this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν';
            this.snackbar = true;
          } else if (response.data == true) {
            this.snackbarColor = 'green';
            this.snackbarText = 'Οι αλλαγές σας αποθηκεύθηκαν επιτυχώς';
            this.snackbar = true;
            this.$router.push('/deigmata/' + this.id);
          } // Not checking for any other value because there shouldn't exist any different case

        }).catch(err => {
          this.snackbarColor = 'red';
          this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν';
          this.snackbar = true; // Timeout the submit method and re-validate

          this.submitTimeout();
          throw err;
        });
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/deigmata/_id/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/deigmata/_id/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "488a3a74"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=edit.js.map