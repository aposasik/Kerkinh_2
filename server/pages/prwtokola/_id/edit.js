exports.ids = [49];
exports.modules = {

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/prwtokola/_id/edit.vue?vue&type=template&id=15eab419&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('div',{staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('v-form',{ref:"form",model:{value:(_vm.validation),callback:function ($$v) {_vm.validation=$$v},expression:"validation"}},[_c('v-layout',{attrs:{"wrap":"","justify-space-between":"","pa-4":""}},[_c('v-flex',{attrs:{"xs12":"","md5":"","xl3":"","my-3":""}},[_c('v-textarea',{attrs:{"label":"Περιγραφή","color":"green","counter":255,"rules":_vm.perigrafhRules,"required":"","rows":"5"},model:{value:(_vm.prwtokola.perigrafh),callback:function ($$v) {_vm.$set(_vm.prwtokola, "perigrafh", $$v)},expression:"prwtokola.perigrafh"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","xl3":"","my-3":""}},[_c('v-textarea',{attrs:{"label":"Πίνακας δεδομένων","color":"green","counter":255,"rules":_vm.pinakasRules,"rows":"5"},model:{value:(_vm.prwtokola.pinakasDedomenwn),callback:function ($$v) {_vm.$set(_vm.prwtokola, "pinakasDedomenwn", $$v)},expression:"prwtokola.pinakasDedomenwn"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":"","xl3":"","my-3":""}},[_c('v-textarea',{attrs:{"label":"Παράθυρο δεδομένων","color":"green","counter":255,"rules":_vm.parathuroRules,"rows":"5"},model:{value:(_vm.prwtokola.parathuroDedomenwn),callback:function ($$v) {_vm.$set(_vm.prwtokola, "parathuroDedomenwn", $$v)},expression:"prwtokola.parathuroDedomenwn"}})],1),_vm._v(" "),_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(_vm.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"light-green lighten-1","dark":""},on:{"click":function($event){return _vm.saveChanges()}}},[_vm._v("Αποθήκευση αλλαγών "),_c('v-icon',{attrs:{"small":"","right":""}},[_vm._v("save")])],1)],1)],1)],1)],1)]):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/prwtokola/_id/edit.vue?vue&type=template&id=15eab419&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/prwtokola/_id/edit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: 'Πρωτόκολλο - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Επεξεργασία συγκεκριμένου Πρωτοκόλλου για τη διαχείρηση δεδομένων των Πρωτοκόλλων για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Αναζήτηση πρωτοκόλλου με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το πρωτόκολλο που επιθυμείτε'
      },
      noElements: null,
      prwtokola: {
        id: '',
        perigrafh: '',
        pinakasDedomenwn: '',
        parathuroDedomenwn: ''
      },
      returnedObject: {
        id: '',
        perigrafh: null,
        pinakasDedomenwn: null,
        parathuroDedomenwn: null
      },
      validation: false,
      perigrafhRules: [v => !!v || 'Συμπληρώστε το πεδίο περιγραφή', v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      parathuroRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      pinakasRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },

  computed: {
    getByIdUrl() {
      return this.$store.getters.getPrwtokolaByIdUrl;
    },

    id() {
      return this.$route.params.id;
    }

  },

  mounted() {
    this.restCall(this.id);
  },

  methods: {
    // Timeout the submit method and re-validate
    submitTimeout() {
      this.validation = false;
      setTimeout(() => {
        this.validation = this.$refs.form.validate();
      }, 10000);
    },

    checkForNulls(data) {
      // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
      if (data.perigrafh != null && data.pinakasDedomenwn != null && data.parathuroDedomenwn != null) {
        this.prwtokola = JSON.parse(JSON.stringify(data));
        this.returnedObject = JSON.parse(JSON.stringify(data));
      } else {
        if (data.perigrafh != null) {
          this.prwtokola.perigrafh = JSON.parse(JSON.stringify(data.perigrafh));
          this.returnedObject.perigrafh = JSON.parse(JSON.stringify(data.perigrafh));
        }

        if (data.pinakasDedomenwn != null) {
          this.prwtokola.pinakasDedomenwn = JSON.parse(JSON.stringify(data.pinakasDedomenwn));
          this.returnedObject.pinakasDedomenwn = JSON.parse(JSON.stringify(data.pinakasDedomenwn));
        }

        if (data.parathuroDedomenwn != null) {
          this.prwtokola.parathuroDedomenwn = JSON.parse(JSON.stringify(data.parathuroDedomenwn));
          this.returnedObject.parathuroDedomenwn = JSON.parse(JSON.stringify(data.parathuroDedomenwn));
        }

        this.prwtokola.id = JSON.parse(JSON.stringify(data.id));
        this.returnedObject.id = JSON.parse(JSON.stringify(data.id));
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
      if ((this.prwtokola.perigrafh == this.returnedObject.perigrafh || this.prwtokola.perigrafh == '' && this.returnedObject.perigrafh == null) && (this.prwtokola.parathuroDedomenwn == this.returnedObject.parathuroDedomenwn || this.prwtokola.parathuroDedomenwn == '' && this.returnedObject.parathuroDedomenwn == null) && (this.prwtokola.pinakasDedomenwn == this.returnedObject.pinakasDedomenwn || this.prwtokola.pinakasDedomenwn == '' && this.returnedObject.pinakasDedomenwn == null)) {
        return true;
      }
    },

    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData() {
      let patchedPrwtokola = {
        id: this.prwtokola.id
      }; // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)

      if (this.prwtokola.perigrafh == '' && this.returnedObject.perigrafh != null) {
        patchedPrwtokola.perigrafh = '';
      } else if (this.prwtokola.perigrafh != '' && this.prwtokola.perigrafh != this.returnedObject.perigrafh) {
        patchedPrwtokola.perigrafh = this.prwtokola.perigrafh;
      }

      if (this.prwtokola.pinakasDedomenwn == '' && this.returnedObject.pinakasDedomenwn != null) {
        patchedPrwtokola.pinakasDedomenwn = '';
      } else if (this.prwtokola.pinakasDedomenwn != '' && this.prwtokola.pinakasDedomenwn != this.returnedObject.pinakasDedomenwn) {
        patchedPrwtokola.pinakasDedomenwn = this.prwtokola.pinakasDedomenwn;
      }

      if (this.prwtokola.parathuroDedomenwn == '' && this.returnedObject.parathuroDedomenwn != null) {
        patchedPrwtokola.parathuroDedomenwn = '';
      } else if (this.prwtokola.parathuroDedomenwn != '' && this.prwtokola.parathuroDedomenwn != this.returnedObject.parathuroDedomenwn) {
        patchedPrwtokola.parathuroDedomenwn = this.prwtokola.parathuroDedomenwn;
      }

      return patchedPrwtokola;
    },

    saveChanges() {
      // Checking for the values that will be Patched after the user's changes
      if (this.checkForSavingTheSame() == true) {
        this.snackbarColor = 'red';
        this.snackbarText = 'Δεν πραγματοποιήσατε καμία αλλαγή στα πεδία';
        this.snackbar = true;
      } else {
        // Checking for null - '' values and doing the request
        let patchedPrwtokola = this.checkValuesOfSendingData();
        this.$axios.patch(this.getByIdUrl + this.id, patchedPrwtokola).then(response => {
          if (response.data == false) {
            this.snackbarColor = 'red';
            this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν';
            this.snackbar = true;
          } else if (response.data == true) {
            this.snackbarColor = 'green';
            this.snackbarText = 'Οι αλλαγές σας αποθηκεύθηκαν επιτυχώς';
            this.snackbar = true;
            this.$router.push('/prwtokola/' + this.id);
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
// CONCATENATED MODULE: ./pages/prwtokola/_id/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/prwtokola/_id/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1da2c87a"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=edit.js.map