exports.ids = [60];
exports.modules = {

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/ct-press-threats/_id/edit.vue?vue&type=template&id=6744f832&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('div',{staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"6px"}}),_vm._v(" "),_c('v-form',{ref:"form",staticClass:"pa-4",model:{value:(_vm.validation),callback:function ($$v) {_vm.validation=$$v},expression:"validation"}},[_c('v-layout',{attrs:{"wrap":"","justify-space-between":""}},[_c('v-flex',{attrs:{"xs12":"","md5":"","xl3":"","my-3":""}},[_c('v-textarea',{attrs:{"label":"Τύπος Πίεσης","color":"green","counter":50,"rules":_vm.actCodeRules,"required":"","rows":"5"},model:{value:(_vm.ct.actCode),callback:function ($$v) {_vm.$set(_vm.ct, "actCode", $$v)},expression:"ct.actCode"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","xl3":"","my-3":""}},[_c('v-textarea',{attrs:{"label":"Περιγραφή","color":"green","counter":255,"rules":_vm.descriptionEnRules,"rows":"5"},model:{value:(_vm.ct.descriptionEn),callback:function ($$v) {_vm.$set(_vm.ct, "descriptionEn", $$v)},expression:"ct.descriptionEn"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md12":"","xl3":"","my-3":""}},[_c('v-textarea',{attrs:{"label":"Παρατηρήσεις","color":"green","counter":255,"rules":_vm.remarksRules,"rows":"5"},model:{value:(_vm.ct.remarks),callback:function ($$v) {_vm.$set(_vm.ct, "remarks", $$v)},expression:"ct.remarks"}})],1),_vm._v(" "),_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(_vm.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"light-green lighten-1","dark":""},on:{"click":function($event){return _vm.saveChanges()}}},[_vm._v("Αποθήκευση αλλαγών "),_c('v-icon',{attrs:{"small":"","right":""}},[_vm._v("save")])],1)],1)],1)],1)],1)]):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/thhlastika/ct-press-threats/_id/edit.vue?vue&type=template&id=6744f832&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/ct-press-threats/_id/edit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: 'Ct Πίεσης Θηλαστικών - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Επεξεργασία συγκεκριμένου Ct Πίεσης Θηλαστικών για τη διαχείρηση δεδομένων των Ct Πιέσεων Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
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
      ct: {
        id: '',
        actCode: '',
        descriptionEn: '',
        remarks: ''
      },
      returnedObject: {
        id: '',
        actCode: null,
        descriptionEn: null,
        remarks: null
      },
      validation: false,
      actCodeRules: [v => !!v || 'Συμπληρώστε το πεδίο περιγραφή', v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'],
      descriptionEnRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      remarksRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
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
    // Timeout the submit method and re-validate
    submitTimeout() {
      this.validation = false;
      setTimeout(() => {
        this.validation = this.$refs.form.validate();
      }, 10000);
    },

    checkForNulls(data) {
      // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
      if (data.actCode != null && data.descriptionEn != null && data.remarks != null) {
        this.ct = JSON.parse(JSON.stringify(data));
        this.returnedObject = JSON.parse(JSON.stringify(data));
      } else {
        if (data.actCode != null) {
          this.ct.actCode = JSON.parse(JSON.stringify(data.actCode));
          this.returnedObject.actCode = JSON.parse(JSON.stringify(data.actCode));
        }

        if (data.descriptionEn != null) {
          this.ct.descriptionEn = JSON.parse(JSON.stringify(data.descriptionEn));
          this.returnedObject.descriptionEn = JSON.parse(JSON.stringify(data.descriptionEn));
        }

        if (data.remarks != null) {
          this.ct.remarks = JSON.parse(JSON.stringify(data.remarks));
          this.returnedObject.remarks = JSON.parse(JSON.stringify(data.remarks));
        }

        this.ct.id = JSON.parse(JSON.stringify(data.id));
        this.returnedObject.id = JSON.parse(JSON.stringify(data.id));
      }
    },

    restCall(id) {
      this.loading = true;
      this.$axios.get(this.getByIdUrl + id).then(response => {
        if (response.data == "") {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Ct Πίεσης που επιθυμείτε';
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
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση του Ct Πίεσης';
        this.snackbar = true;
        throw err;
      });
    },

    // Checking if the user is submitting to send the same data
    checkForSavingTheSame() {
      if ((this.ct.actCode == this.returnedObject.actCode || this.ct.actCode == '' && this.returnedObject.actCode == null) && (this.ct.descriptionEn == this.returnedObject.descriptionEn || this.ct.descriptionEn == '' && this.returnedObject.descriptionEn == null) && (this.ct.remarks == this.returnedObject.remarks || this.ct.remarks == '' && this.returnedObject.remarks == null)) {
        return true;
      }
    },

    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData() {
      let patchedCt = {}; // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)

      if (this.ct.actCode == '' && this.returnedObject.actCode != null) {
        patchedCt.actCode = '';
      } else if (this.ct.actCode != '' && this.ct.actCode != this.returnedObject.actCode) {
        patchedCt.actCode = this.ct.actCode;
      }

      if (this.ct.descriptionEn == '' && this.returnedObject.descriptionEn != null) {
        patchedCt.descriptionEn = '';
      } else if (this.ct.descriptionEn != '' && this.ct.descriptionEn != this.returnedObject.descriptionEn) {
        patchedCt.descriptionEn = this.ct.descriptionEn;
      }

      if (this.ct.remarks == '' && this.returnedObject.remarks != null) {
        patchedCt.remarks = '';
      } else if (this.ct.remarks != '' && this.ct.remarks != this.returnedObject.remarks) {
        patchedCt.remarks = this.ct.remarks;
      }

      return patchedCt;
    },

    saveChanges() {
      // Checking for the values that will be Patched after the user's changes
      if (this.checkForSavingTheSame() == true) {
        this.snackbarColor = 'red';
        this.snackbarText = 'Δεν πραγματοποιήσατε καμία αλλαγή στα πεδία';
        this.snackbar = true;
      } else {
        // Checking for null - '' values and doing the request
        let patchedCt = this.checkValuesOfSendingData(); // console.log(patchedCt)

        this.$axios.patch(this.getByIdUrl + this.id, patchedCt).then(response => {
          if (response.data == false) {
            this.snackbarColor = 'red';
            this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν';
            this.snackbar = true;
          } else if (response.data == true) {
            this.snackbarColor = 'green';
            this.snackbarText = 'Οι αλλαγές σας αποθηκεύθηκαν επιτυχώς';
            this.snackbar = true;
            this.$router.push('/thhlastika/ct-press-threats/' + this.id);
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
// CONCATENATED MODULE: ./pages/thhlastika/ct-press-threats/_id/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/thhlastika/ct-press-threats/_id/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1b7e5db2"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=edit.js.map