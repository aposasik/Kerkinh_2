exports.ids = [6];
exports.modules = {

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/deigmata/index.vue?vue&type=template&id=cbcfd34a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-layout',{attrs:{"wrap":""}},[_c('v-flex',{attrs:{"xs12":"","text-xs-center":"","my-5":""}},[_c('h2',{staticClass:"headline font-weight-thin"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","my-5":""}},[_c('v-card',{staticClass:"pa-4"},[_c('h2',{staticClass:"mt-2 mb-5 font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.subTitle)+" ")]),_vm._v(" "),_vm._l((_vm.main.texts),function(text,i){return _c('p',{key:i,staticClass:"my-4 subheading font-weight-thin",domProps:{"innerHTML":_vm._s(text)}})})],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/deigmata/index.vue?vue&type=template&id=cbcfd34a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/deigmata/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var deigmatavue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Δείγματα - Πληροφορίες | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Γενικές πληροφορίες και τρόποι χρήσης για τη διαχείρηση δεδομένων των Δειγμάτων για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Εγχειρίδιο χρήσης δειγμάτων',
        subTitle: 'Γενικές πληροφορίες',
        texts: ['<span class="ml-3"></span>Στο menu παντώντας στο drop-list <b>Δείγματα</b> σας ανοίγονται όλες οι υπάρχουσες επιλογές πλοήγησης. Από εκεί μπορείτε να επιλέξετε μεταξύ <b>Αναζήτησης</b>, <b>Δυναμικής Αναζήτησης</b>,  πλοήγηση προς τα <b>Σχετίκα</b> (πληροφορίες). Νέες εγγραφές δειγμάτων θα δημιουργούνται δυναμικά μέσω της δημιουργίας συγκεκριμένου δείγματος ( π.χ. Δείγμα Θηλαστικών ).', '<span class="ml-3"></span>Πηγαίνοντας στην δημιουργία νέας εγγραφής ( π.χ. Δείγματος Θηλαστικών ) θα υπάρχουν τα απαραίτητα πεδία στην φόρμα και για την δημιουργία νέου Δείγματος με αυτοματοποιημένη την σύνδεση μεταξύ τους. Ισχύει επίσης και για την περίπτωση δημιουργίας μέσω αρχείου excel ( <b class="green--text">xlsx</b> ) ακολουθώντας τους κανόνες για αυτή τη περίπτωση.', '<span class="ml-3"></span>Πηγαίνοντας στη σελίδα <b>Αναζήτηση</b> θα μεταφερθείτε σε μία σελίδα που αυτόματα θα σας εμφανίσει τα 10 τελευταία εγγεγραμμένα δείγματα. Από εκεί θα σας δίνεται η δυνατότητα να μεταφερθείτε στα συγκεκριμένα δείγματα που ζητάτε για παραπάνω ενέργειες. Για την αναζήτηση περισσοτέρων δειγμάτων μπορείτε να πλοηγηθείτε στις επόμενες σελίδες μέσω του Pagination στο κάτω μέρος της σελίδας.', '<span class="ml-3"></span>Πηγαίνοντας στη σελίδα <b>Δυναμική Αναζήτηση</b> θα μεταφερθείτε σε μία σελίδα όπου θα έχετε την επιλογή αναζήτησης με φίλτρα για συγκεκριμένα πρωτόκολλα. Από εκεί όπως και μέσω της Αναζήτησης θα μπορείτε να μεταφερθείτε στο κάθε δείγμα από τα επιστρεφόμενα για την πραγματοποίηση περισσοτέρο επιλογών. Τέλος η δυναμική αναζήτηση υποστηρίζει επίσης σύστημα Pagination στο κάτω μέρος της σελίδας.', '<span class="ml-3"></span>Πλοηγώντας σε συγκεκριμένο δείγμα μέσω της αναζήτησης θα έχετε τις δυνατότητες <span class="light-blue--text">Επεξεργασίας</span> και αποθήκευσης των αλλαγών, <span class="light-blue--text">Διαγραφής</span> (Προσοχή η διαγραφή δεν αναιρείται και συνδεόμενα δεδομένα μπορεί να χαθούν) του δείγματος καθώς και εμφάνισης των <span class="light-blue--text">Δειγμάτων</span> που έχουν συνδεθεί με το συγκεκριμένο δείγμα.', '<span class="ml-3"></span>Καθ όλη την χρήση των εκάστοτε σελίδων υπάρχει ενημέρωση προς τον χρήστη για περιπτώσεις σφαλμάτων, επιτυχών ενεργειών του χρήστη καθώς και βοηθητικά μυνήματα για την συμπλήρωση νέων εγγραφών.']
      }
    };
  }

});
// CONCATENATED MODULE: ./pages/deigmata/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_deigmatavue_type_script_lang_js_ = (deigmatavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/deigmata/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_deigmatavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c521d7a"
  
)

/* harmony default export */ var deigmata = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map