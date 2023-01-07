exports.ids = [66];
exports.modules = {

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/edit.vue?vue&type=template&id=74f6a390&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('div',{staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('v-form',{ref:"form",staticClass:"pa-4",model:{value:(_vm.validation),callback:function ($$v) {_vm.validation=$$v},expression:"validation"}},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Δείγμα Θηλαστικών Id","color":"green","rules":_vm.deigmaThhlastikwnIdRules,"required":""},model:{value:(_vm.deigmaXEidos.deigmaThhlastikwn.id),callback:function ($$v) {_vm.$set(_vm.deigmaXEidos.deigmaThhlastikwn, "id", $$v)},expression:"deigmaXEidos.deigmaThhlastikwn.id"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-autocomplete',{attrs:{"label":"Ct Είδους","color":"green","items":_vm.ctEidhList,"rules":_vm.ctEidosRules,"no-data-text":"Δεν βρέθηκαν δεδομένα","required":""},model:{value:(_vm.deigmaXEidos.ctThhlastikaEidh.eidos),callback:function ($$v) {_vm.$set(_vm.deigmaXEidos.ctThhlastikaEidh, "eidos", $$v)},expression:"deigmaXEidos.ctThhlastikaEidh.eidos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Σχετική αφθονία","color":"green","counter":255,"rules":_vm.sxetikhAfthoniaRules},model:{value:(_vm.deigmaXEidos.sxetikhAfthonia),callback:function ($$v) {_vm.$set(_vm.deigmaXEidos, "sxetikhAfthonia", $$v)},expression:"deigmaXEidos.sxetikhAfthonia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Αριθμός ατόμων","color":"green","rules":_vm.plhthosRules},model:{value:(_vm.deigmaXEidos.plhthos),callback:function ($$v) {_vm.$set(_vm.deigmaXEidos, "plhthos", $$v)},expression:"deigmaXEidos.plhthos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ηλικία","color":"green","counter":255,"rules":_vm.hlikiaRules},model:{value:(_vm.deigmaXEidos.hlikia),callback:function ($$v) {_vm.$set(_vm.deigmaXEidos, "hlikia", $$v)},expression:"deigmaXEidos.hlikia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Φύλο","color":"green","counter":255,"rules":_vm.fuloRules},model:{value:(_vm.deigmaXEidos.fulo),callback:function ($$v) {_vm.$set(_vm.deigmaXEidos, "fulo", $$v)},expression:"deigmaXEidos.fulo"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-autocomplete',{attrs:{"label":"ΕΟΚ Παρ II","color":"green","items":_vm.eokParList},model:{value:(_vm.deigmaXEidos.eokParII),callback:function ($$v) {_vm.$set(_vm.deigmaXEidos, "eokParII", $$v)},expression:"deigmaXEidos.eokParII"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-autocomplete',{attrs:{"label":"ΕΟΚ Παρ IV","color":"green","items":_vm.eokParList},model:{value:(_vm.deigmaXEidos.eokParIV),callback:function ($$v) {_vm.$set(_vm.deigmaXEidos, "eokParIV", $$v)},expression:"deigmaXEidos.eokParIV"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md2":"","my-4":""}},[_c('v-autocomplete',{attrs:{"label":"ΕΟΚ Παρ V","color":"green","items":_vm.eokParList},model:{value:(_vm.deigmaXEidos.eokParV),callback:function ($$v) {_vm.$set(_vm.deigmaXEidos, "eokParV", $$v)},expression:"deigmaXEidos.eokParV"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"justify-center":""}},[_c('v-flex',{attrs:{"xs12":"","md10":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Παρατηρήσεις","color":"green","counter":255,"rules":_vm.parathrhseisRules,"rows":"6"},model:{value:(_vm.deigmaXEidos.parathrhseis),callback:function ($$v) {_vm.$set(_vm.deigmaXEidos, "parathrhseis", $$v)},expression:"deigmaXEidos.parathrhseis"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"justify-space-around":""}},[_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(_vm.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"light-green lighten-1","dark":""},on:{"click":function($event){return _vm.saveChanges()}}},[_vm._v("Αποθήκευση αλλαγών "),_c('v-icon',{attrs:{"small":"","right":""}},[_vm._v("save")])],1)],1)],1)],1)],1)]):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/edit.vue?vue&type=template&id=74f6a390&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/edit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: 'Δειγματοληψία Χ Είδους Θηλαστικών - Επεξεργασία | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Επεξεργασία συγκεκριμένης Δειγματοληψίας Χ Είδους Θηλαστικών για τη διαχείρηση δεδομένων των Δειγματοληψιών Χ Ειδών Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Αναζήτηση Δείγματος X Είδους με id ' + this.$route.params.id,
        emptyElements: 'Δεν βρέθηκε αποθηκευμένο το Δείγμα X Είδος που επιθυμείτε'
      },
      noElements: null,
      deigmaXEidos: {
        id: '',
        deigmaThhlastikwn: {
          id: ''
        },
        ctThhlastikaEidh: {
          eidos: ''
        },
        sxetikhAfthonia: '',
        parathrhseis: '',
        hlikia: '',
        fulo: '',
        plhthos: '',
        eokParII: '',
        eokParIV: '',
        eokParV: ''
      },
      returnedObject: {
        id: '',
        deigmaThhlastikwn: {
          id: ''
        },
        ctThhlastikaEidh: {
          eidos: ''
        },
        sxetikhAfthonia: null,
        parathrhseis: null,
        hlikia: null,
        fulo: null,
        plhthos: null,
        eokParII: null,
        eokParIV: null,
        eokParV: null
      },
      ctEidhList: [],
      eokParList: [true, false],
      validation: false,
      deigmaThhlastikwnIdRules: [v => !!v || 'Συμπληρώστε το πεδίο Δείγματος θηλαστικού', v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      ctEidosRules: [v => !!v || 'Συμπληρώστε το πεδίο Ct Είδους', v => v.length <= 50 || 'Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες'],
      sxetikhAfthoniaRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      parathrhseisRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      hlikiaRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      fuloRules: [v => v.length <= 255 || 'Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες'],
      plhthosRules: [v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },

  computed: {
    // Getting the distinct Ct Eidh for autocomplete list
    getDistinctUrl() {
      return this.$store.getters.getThhlastikaCtEidosDistinctUrl;
    },

    getByIdUrl() {
      return this.$store.getters.getThhlastikaXEidhByIdUrl;
    },

    id() {
      return this.$route.params.id;
    }

  },

  mounted() {
    this.restCall(this.id); // Getting CtEidh

    this.getCtEidh();
  },

  methods: {
    // Getting CtEidh for select lists
    getCtEidh() {
      this.$axios.get(this.getDistinctUrl).then(response => {
        if (response.data.length == []) {
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα Ct Είδη.';
          this.snackbar = true;
        } else {
          // Filling the CtEidh list for the user
          this.ctEidhList = response.data;
        }
      }).catch(err => {
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα κατά την εύρεση Ct Ειδών.';
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
      if (data.deigmaThhlastikwn != null && data.ctThhlastikaEidh != null && data.sxetikhAfthonia != null && data.parathrhseis != null && data.hlikia != null && data.fulo != null && data.plhthos != null && data.eokParII != null && data.eokParIV != null && data.eokParV != null) {
        // IMPORTANT: Using  JSON.parse to pass by value instead of pass by reference
        this.deigmaXEidos = JSON.parse(JSON.stringify(data));
        this.returnedObject = JSON.parse(JSON.stringify(data));
      } else {
        if (data.deigmaThhlastikwn != null) {
          this.deigmaXEidos.deigmaThhlastikwn.id = JSON.parse(JSON.stringify(data.deigmaThhlastikwn.id));
          this.returnedObject.deigmaThhlastikwn.id = JSON.parse(JSON.stringify(data.deigmaThhlastikwn.id));
        }

        if (data.ctThhlastikaEidh != null) {
          this.deigmaXEidos.ctThhlastikaEidh.eidos = JSON.parse(JSON.stringify(data.ctThhlastikaEidh.eidos));
          this.returnedObject.ctThhlastikaEidh.eidos = JSON.parse(JSON.stringify(data.ctThhlastikaEidh.eidos));
        }

        if (data.sxetikhAfthonia != null) {
          this.deigmaXEidos.sxetikhAfthonia = JSON.parse(JSON.stringify(data.sxetikhAfthonia));
          this.returnedObject.sxetikhAfthonia = JSON.parse(JSON.stringify(data.sxetikhAfthonia));
        }

        if (data.parathrhseis != null) {
          this.deigmaXEidos.parathrhseis = JSON.parse(JSON.stringify(data.parathrhseis));
          this.returnedObject.parathrhseis = JSON.parse(JSON.stringify(data.parathrhseis));
        }

        if (data.hlikia != null) {
          this.deigmaXEidos.hlikia = JSON.parse(JSON.stringify(data.hlikia));
          this.returnedObject.hlikia = JSON.parse(JSON.stringify(data.hlikia));
        }

        if (data.fulo != null) {
          this.deigmaXEidos.fulo = JSON.parse(JSON.stringify(data.fulo));
          this.returnedObject.fulo = JSON.parse(JSON.stringify(data.fulo));
        }

        if (data.plhthos != null) {
          this.deigmaXEidos.plhthos = JSON.parse(JSON.stringify(data.plhthos));
          this.returnedObject.plhthos = JSON.parse(JSON.stringify(data.plhthos));
        }

        if (data.eokParII != null) {
          this.deigmaXEidos.eokParII = JSON.parse(JSON.stringify(data.eokParII));
          this.returnedObject.eokParII = JSON.parse(JSON.stringify(data.eokParII));
        }

        if (data.eokParIV != null) {
          this.deigmaXEidos.eokParIV = JSON.parse(JSON.stringify(data.eokParIV));
          this.returnedObject.eokParIV = JSON.parse(JSON.stringify(data.eokParIV));
        }

        if (data.eokParV != null) {
          this.deigmaXEidos.eokParV = JSON.parse(JSON.stringify(data.eokParV));
          this.returnedObject.eokParV = JSON.parse(JSON.stringify(data.eokParV));
        }
      }
    },

    restCall(id) {
      this.loading = true;
      this.$axios.get(this.getByIdUrl + id).then(response => {
        if (response.data == "") {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκε αποθηκευμένο το Δείγμα X Είδος που επιθυμείτε';
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
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα στην αναζήτηση του Δείγμα X Είδος';
        this.snackbar = true;
        throw err;
      });
    },

    // Checking if the user is submitting to send the same data
    checkForSavingTheSame() {
      if ((this.deigmaXEidos.deigmaThhlastikwn.id == this.returnedObject.deigmaThhlastikwn.id || this.deigmaXEidos.deigmaThhlastikwn.id == '' && this.returnedObject.deigmaThhlastikwn.id == null) && (this.deigmaXEidos.ctThhlastikaEidh.eidos == this.returnedObject.ctThhlastikaEidh.eidos || this.deigmaXEidos.ctThhlastikaEidh.eidos == '' && this.returnedObject.ctThhlastikaEidh.eidos == null) && (this.deigmaXEidos.sxetikhAfthonia == this.returnedObject.sxetikhAfthonia || this.deigmaXEidos.sxetikhAfthonia == '' && this.returnedObject.sxetikhAfthonia == null) && (this.deigmaXEidos.parathrhseis == this.returnedObject.parathrhseis || this.deigmaXEidos.parathrhseis == '' && this.returnedObject.parathrhseis == null) && (this.deigmaXEidos.hlikia == this.returnedObject.hlikia || this.deigmaXEidos.hlikia == '' && this.returnedObject.hlikia == null) && (this.deigmaXEidos.fulo == this.returnedObject.fulo || this.deigmaXEidos.fulo == '' && this.returnedObject.fulo == null) && (this.deigmaXEidos.plhthos == this.returnedObject.plhthos || this.deigmaXEidos.plhthos == '' && this.returnedObject.plhthos == null) && (this.deigmaXEidos.eokParII == this.returnedObject.eokParII || this.deigmaXEidos.eokParII == '' && this.returnedObject.eokParII == null) && (this.deigmaXEidos.eokParIV == this.returnedObject.eokParIV || this.deigmaXEidos.eokParIV == '' && this.returnedObject.eokParIV == null) && (this.deigmaXEidos.eokParV == this.returnedObject.eokParV || this.deigmaXEidos.eokParV == '' && this.returnedObject.eokParV == null)) {
        return true;
      }
    },

    // Checking for the values that will be Patched after the user's changes
    checkValuesOfSendingData() {
      let patchedDeigmaX = {}; // Elses not needed on the checks because sending without the attribute will generate on the back end the null value for it which will be overpassed without persisting (through my checking)
      // Checks of types are being done without `typeof` because the v-model's value changes to String when the user Backspaces the id to type the new one which will be as : '3'. It still works normally but can't use typeof.

      if (this.deigmaXEidos.deigmaThhlastikwn.id === '' && this.returnedObject.deigmaThhlastikwn.id != null) {
        patchedDeigmaX.deigmaThhlastikwnId = '';
      } else if (this.deigmaXEidos.deigmaThhlastikwn.id != this.returnedObject.deigmaThhlastikwn.id) {
        patchedDeigmaX.deigmaThhlastikwnId = this.deigmaXEidos.deigmaThhlastikwn.id;
      }

      if (this.deigmaXEidos.ctThhlastikaEidh.eidos == '' && this.returnedObject.ctThhlastikaEidh.eidos != null) {
        patchedDeigmaX.ctEidos = '';
      } else if (this.deigmaXEidos.ctThhlastikaEidh.eidos != '' && this.deigmaXEidos.ctThhlastikaEidh.eidos != this.returnedObject.ctThhlastikaEidh.eidos) {
        patchedDeigmaX.ctEidos = this.deigmaXEidos.ctThhlastikaEidh.eidos;
      }

      if (this.deigmaXEidos.sxetikhAfthonia == '' && this.returnedObject.sxetikhAfthonia != null) {
        patchedDeigmaX.sxetikhAfthonia = '';
      } else if (this.deigmaXEidos.sxetikhAfthonia != '' && this.deigmaXEidos.sxetikhAfthonia != this.returnedObject.sxetikhAfthonia) {
        patchedDeigmaX.sxetikhAfthonia = this.deigmaXEidos.sxetikhAfthonia;
      }

      if (this.deigmaXEidos.parathrhseis == '' && this.returnedObject.parathrhseis != null) {
        patchedDeigmaX.parathrhseis = '';
      } else if (this.deigmaXEidos.parathrhseis != '' && this.deigmaXEidos.parathrhseis != this.returnedObject.parathrhseis) {
        patchedDeigmaX.parathrhseis = this.deigmaXEidos.parathrhseis;
      }

      if (this.deigmaXEidos.hlikia == '' && this.returnedObject.hlikia != null) {
        patchedDeigmaX.hlikia = '';
      } else if (this.deigmaXEidos.hlikia != '' && this.deigmaXEidos.hlikia != this.returnedObject.hlikia) {
        patchedDeigmaX.hlikia = this.deigmaXEidos.hlikia;
      }

      if (this.deigmaXEidos.fulo == '' && this.returnedObject.fulo != null) {
        patchedDeigmaX.fulo = '';
      } else if (this.deigmaXEidos.fulo != '' && this.deigmaXEidos.fulo != this.returnedObject.fulo) {
        patchedDeigmaX.fulo = this.deigmaXEidos.fulo;
      }

      if (this.deigmaXEidos.plhthos == '' && this.returnedObject.plhthos != null) {
        patchedDeigmaX.plhthos = '';
      } else if (this.deigmaXEidos.plhthos != '' && this.deigmaXEidos.plhthos != this.returnedObject.plhthos) {
        patchedDeigmaX.plhthos = this.deigmaXEidos.plhthos;
      } // We have to use 2 `if` statements instead of `else if` because we it always checks the first if so it doesn't pass through the second (it has to check the first in case of it being null inittially)


      if (this.deigmaXEidos.eokParII === '' && this.returnedObject.eokParII != null) {
        patchedDeigmaX.eokParII = '';
      } else if ((this.deigmaXEidos.eokParII == true || this.deigmaXEidos.eokParII == false) && this.deigmaXEidos.eokParII != this.returnedObject.eokParII) {
        patchedDeigmaX.eokParII = this.deigmaXEidos.eokParII;
      }

      if (this.deigmaXEidos.eokParIV === '' && this.returnedObject.eokParIV != null) {
        patchedDeigmaX.eokParIV = '';
      } else if ((this.deigmaXEidos.eokParIV == true || this.deigmaXEidos.eokParIV == false) && this.deigmaXEidos.eokParIV != this.returnedObject.eokParIV) {
        patchedDeigmaX.eokParIV = this.deigmaXEidos.eokParIV;
      }

      if (this.deigmaXEidos.eokParV === '' && this.returnedObject.eokParV != null) {
        patchedDeigmaX.eokParV = '';
      } else if ((this.deigmaXEidos.eokParV == true || this.deigmaXEidos.eokParV == false) && this.deigmaXEidos.eokParV != this.returnedObject.eokParV) {
        patchedDeigmaX.eokParV = this.deigmaXEidos.eokParV;
      }

      return patchedDeigmaX;
    },

    saveChanges() {
      // Checking for the values that will be Patched after the user's changes
      if (this.checkForSavingTheSame() == true) {
        this.snackbarColor = 'red';
        this.snackbarText = 'Δεν πραγματοποιήσατε καμία αλλαγή στα πεδία';
        this.snackbar = true;
      } else {
        // Checking for null - '' values and doing the request
        let patchedDeigmaX = this.checkValuesOfSendingData();
        this.$axios.patch(this.getByIdUrl + this.id, patchedDeigmaX).then(response => {
          if (response.data == false) {
            this.snackbarColor = 'red';
            this.snackbarText = 'Οι αλλαγές δεν μπόρεσαν να αποθηκευθούν';
            this.snackbar = true;
          } else if (response.data == true) {
            this.snackbarColor = 'green';
            this.snackbarText = 'Οι αλλαγές σας αποθηκεύθηκαν επιτυχώς';
            this.snackbar = true;
            this.$router.push('/thhlastika/deigma-thhlastikwn-x-eidh/' + this.id);
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
// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn-x-eidh/_id/edit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "efecf88c"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=edit.js.map