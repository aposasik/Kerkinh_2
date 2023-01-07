exports.ids = [84];
exports.modules = {

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn/dynamic-search/page/_number/index.vue?vue&type=template&id=0b504dca&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":"","align-center":"","justify-center":""}},[_c('v-flex',{staticClass:"text-xs-center",attrs:{"xs12":"","mt-5":""}},[_c('h2',{staticClass:"headline"},[_vm._v(" "+_vm._s(_vm.main.title)+" ")])]),_vm._v(" "),_c('v-layout',{attrs:{"mt-4":"","mb-3":""}},[_c('v-spacer'),_vm._v(" "),_c('v-dialog',{attrs:{"persistent":"","max-width":"800px"},model:{value:(_vm.dialog),callback:function ($$v) {_vm.dialog=$$v},expression:"dialog"}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"slot":"activator","color":"green lighten-2","outline":"","dark":"","title":"Επιλέξτε φίλτρα για τη δυναμική αναζήτηση"},on:{"click":function($event){_vm.dialog = true}},slot:"activator"},[_vm._v("Φίλτρα"),_c('v-icon',{attrs:{"right":""}},[_vm._v("dvr")])],1),_vm._v(" "),_c('v-card',[_c('div',{staticStyle:{"position":"absolute","top":"0px","right":"0px"}},[_c('v-btn',{attrs:{"icon":""},on:{"click":function($event){_vm.dialog = false}}},[_c('v-icon',{attrs:{"medium":"","color":"red lighten-1"}},[_vm._v("close")])],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","wrap":"","row":"","justify-center":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":""}},[_c('div',{staticClass:"text-xs-center"},[_c('h2',{staticClass:"font-weight-medium grey--text text--darken-1"},[_vm._v("Φίλτρα")])])])],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","wrap":"","row":"","justify-space-between":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Κωδικός δειγματοληψίας","color":"green lighten-2","multiple":"","items":_vm.autocompletes.kwdikosDeigmatolhpsiasList},model:{value:(_vm.dialogKwdikosDeigmatolhpsiasList),callback:function ($$v) {_vm.dialogKwdikosDeigmatolhpsiasList=$$v},expression:"dialogKwdikosDeigmatolhpsiasList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Χρηματοδότηση","color":"green lighten-2","multiple":"","hint":"Λίστα όλων των Ct Ειδών","persisten-hint":true,"items":_vm.autocompletes.xrhmatodothshList},model:{value:(_vm.dialogXrhmatodothshList),callback:function ($$v) {_vm.dialogXrhmatodothshList=$$v},expression:"dialogXrhmatodothshList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Ερευνητής","color":"green lighten-2","multiple":"","items":_vm.autocompletes.ereunhthsList},model:{value:(_vm.dialogEreunhthsList),callback:function ($$v) {_vm.dialogEreunhthsList=$$v},expression:"dialogEreunhthsList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Τοποθεσία","color":"green lighten-2","multiple":"","items":_vm.autocompletes.topothesiaList},model:{value:(_vm.dialogTopothesiaList),callback:function ($$v) {_vm.dialogTopothesiaList=$$v},expression:"dialogTopothesiaList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-dialog',{attrs:{"full-width":"","width":"290px","lazy":""},model:{value:(_vm.openDateFromDialog),callback:function ($$v) {_vm.openDateFromDialog=$$v},expression:"openDateFromDialog"}},[_c('v-text-field',{staticClass:"mt-3 mb-5",attrs:{"slot":"activator","label":"Ημερομηνία -Από- (Έτος-Μήνας-Ημέρα)","color":"green","append-icon":"date_range","clearable":"","hint":"YYYY-MM-DD | Παράδειγμα 2019-06-23","readonly":""},slot:"activator",model:{value:(_vm.dialogDateFrom),callback:function ($$v) {_vm.dialogDateFrom=$$v},expression:"dialogDateFrom"}}),_vm._v(" "),_c('v-date-picker',{attrs:{"color":"green lighten-2","scrollable":"","max":new Date().toISOString().substr(0, 10),"min":"1950-01-01"},model:{value:(_vm.dialogDateFrom),callback:function ($$v) {_vm.dialogDateFrom=$$v},expression:"dialogDateFrom"}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-dialog',{attrs:{"full-width":"","width":"290px","lazy":""},model:{value:(_vm.openDateToDialog),callback:function ($$v) {_vm.openDateToDialog=$$v},expression:"openDateToDialog"}},[_c('v-text-field',{staticClass:"mt-3 mb-5",attrs:{"slot":"activator","label":"Ημερομηνία -Εώς- (Έτος-Μήνας-Ημέρα)","color":"green","append-icon":"date_range","clearable":"","hint":"YYYY-MM-DD | Παράδειγμα 2019-06-23","readonly":""},slot:"activator",model:{value:(_vm.dialogDateTo),callback:function ($$v) {_vm.dialogDateTo=$$v},expression:"dialogDateTo"}}),_vm._v(" "),_c('v-date-picker',{attrs:{"color":"green lighten-2","scrollable":"","max":new Date().toISOString().substr(0, 10),"min":"1950-01-01"},model:{value:(_vm.dialogDateTo),callback:function ($$v) {_vm.dialogDateTo=$$v},expression:"dialogDateTo"}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-dialog',{attrs:{"lazy":"","full-width":"","width":"290px"},model:{value:(_vm.openTimeFromDialog),callback:function ($$v) {_vm.openTimeFromDialog=$$v},expression:"openTimeFromDialog"}},[_c('v-text-field',{staticClass:"mt-3 mb-5",attrs:{"slot":"activator","label":"Ώρα -Από-","color":"green","clearable":"","append-icon":"access_time","hint":"HH:MM:SS | Παράδειγμα 20:32:10"},slot:"activator",model:{value:(_vm.dialogTimeFrom),callback:function ($$v) {_vm.dialogTimeFrom=$$v},expression:"dialogTimeFrom"}}),_vm._v(" "),_c('v-time-picker',{attrs:{"color":"green lighten-2","scrollable":"","format":"24hr"},model:{value:(_vm.dialogTimeFrom),callback:function ($$v) {_vm.dialogTimeFrom=$$v},expression:"dialogTimeFrom"}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-dialog',{attrs:{"lazy":"","full-width":"","width":"290px"},model:{value:(_vm.openTimeToDialog),callback:function ($$v) {_vm.openTimeToDialog=$$v},expression:"openTimeToDialog"}},[_c('v-text-field',{staticClass:"mt-3 mb-5",attrs:{"slot":"activator","label":"Ώρα -Εώς-","color":"green","clearable":"","append-icon":"access_time","hint":"HH:MM:SS | Παράδειγμα 20:32:10"},slot:"activator",model:{value:(_vm.dialogTimeTo),callback:function ($$v) {_vm.dialogTimeTo=$$v},expression:"dialogTimeTo"}}),_vm._v(" "),_c('v-time-picker',{attrs:{"color":"green lighten-2","scrollable":"","format":"24hr"},model:{value:(_vm.dialogTimeTo),callback:function ($$v) {_vm.dialogTimeTo=$$v},expression:"dialogTimeTo"}})],1)],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-text-field',{staticClass:"mt-3 mb-5",attrs:{"label":"Επιφάνεια δειγματοληψίας -Από-","color":"green lighten-2","rules":_vm.epifaneiaDeigmatolhpsiasRules},model:{value:(_vm.dialogEpifaneiaDeigmatolhpsiasFrom),callback:function ($$v) {_vm.dialogEpifaneiaDeigmatolhpsiasFrom=$$v},expression:"dialogEpifaneiaDeigmatolhpsiasFrom"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-text-field',{staticClass:"mt-3 mb-5",attrs:{"label":"Επιφάνεια δειγματοληψίας -Εώς-","color":"green lighten-2","rules":_vm.epifaneiaDeigmatolhpsiasRules},model:{value:(_vm.dialogEpifaneiaDeigmatolhpsiasTo),callback:function ($$v) {_vm.dialogEpifaneiaDeigmatolhpsiasTo=$$v},expression:"dialogEpifaneiaDeigmatolhpsiasTo"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Γεωγραφικό πλάτος EGSA","color":"green lighten-2","multiple":"","items":_vm.autocompletes.latitudeEGSAList},model:{value:(_vm.dialogLatitudeEGSAList),callback:function ($$v) {_vm.dialogLatitudeEGSAList=$$v},expression:"dialogLatitudeEGSAList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Γεωγραφικό μήκος EGSA","color":"green lighten-2","multiple":"","items":_vm.autocompletes.longitudeEGSAList},model:{value:(_vm.dialogLongitudeEGSAList),callback:function ($$v) {_vm.dialogLongitudeEGSAList=$$v},expression:"dialogLongitudeEGSAList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Γεωγραφικό πλάτος WGS84","color":"green lighten-2","multiple":"","items":_vm.autocompletes.latitudeWGS84List},model:{value:(_vm.dialogLatitudeWGS84List),callback:function ($$v) {_vm.dialogLatitudeWGS84List=$$v},expression:"dialogLatitudeWGS84List"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Γεωγραφικό μήκος WGS84","color":"green lighten-2","multiple":"","items":_vm.autocompletes.longitudeWGS84List},model:{value:(_vm.dialogLongitudeWGS84List),callback:function ($$v) {_vm.dialogLongitudeWGS84List=$$v},expression:"dialogLongitudeWGS84List"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Κελί πλέγματος","color":"green lighten-2","multiple":"","items":_vm.autocompletes.gridCellList},model:{value:(_vm.dialogGridCellList),callback:function ($$v) {_vm.dialogGridCellList=$$v},expression:"dialogGridCellList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Κωδικός Natura","color":"green lighten-2","multiple":"","items":_vm.autocompletes.kwdikosNaturaList},model:{value:(_vm.dialogKwdikosNaturaList),callback:function ($$v) {_vm.dialogKwdikosNaturaList=$$v},expression:"dialogKwdikosNaturaList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Μέθοδος δειγματοληψίας","color":"green lighten-2","multiple":"","items":_vm.autocompletes.methodosDeigmatolhpsiasList},model:{value:(_vm.dialogMethodosDeigmatolhpsiasList),callback:function ($$v) {_vm.dialogMethodosDeigmatolhpsiasList=$$v},expression:"dialogMethodosDeigmatolhpsiasList"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":""}},[_c('v-autocomplete',{staticClass:"mt-3 mb-5",attrs:{"label":"Νομός","color":"green lighten-2","multiple":"","items":_vm.autocompletes.nomosList},model:{value:(_vm.dialogNomosList),callback:function ($$v) {_vm.dialogNomosList=$$v},expression:"dialogNomosList"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","row":"","wrap":"","justify-space-between":"","align-center":""}},[_c('v-flex',{attrs:{"xs12":"","md5":"","my-2":""}},[_c('v-autocomplete',{attrs:{"label":"Αριθμός δεδομένων","color":"green lighten-2","items":_vm.sizesList},model:{value:(_vm.dialogSize),callback:function ($$v) {_vm.dialogSize=$$v},expression:"dialogSize"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md5":"","my-2":""}},[_c('v-autocomplete',{attrs:{"label":"Ταξινόμηση","color":"green lighten-2","items":_vm.sortsList,"hint":"Φθίνουσα - Desc | Αύξουσα - Asc","persistent-hint":true},model:{value:(_vm.dialogSort),callback:function ($$v) {_vm.dialogSort=$$v},expression:"dialogSort"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"pa-4":"","row":"","wrap":"","justify-center":"","align-center":""}},[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"dark":"","color":"green lighten-2"},on:{"click":_vm.filterAndSearch}},[_vm._v("Δυναμική Αναζήτηση")])],1)],1)],1)],1),_vm._v(" "),(_vm.storedChips.length != 0 || _vm.storedChips != null)?_c('v-flex',{attrs:{"xs12":""}},_vm._l((this.storedChips),function(chip){return _c('v-chip',{key:chip,staticClass:"mb-3"},[_vm._v(_vm._s(chip))])}),1):_vm._e(),_vm._v(" "),(_vm.loading == true)?_c('v-flex',{staticClass:"text-xs-center mt-5",attrs:{"xs8":"","sm6":"","md2":""}},[_c('v-progress-circular',{attrs:{"indeterminate":"","size":"45","color":"green lighten-1"}})],1):_vm._e(),_vm._v(" "),(_vm.noElements == true)?_c('v-flex',{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{"xs12":"","lg11":""}},[_c('h3',{staticClass:"font-weight-regular"},[_vm._v(" "+_vm._s(_vm.main.emptyElements)+" ")])]):(_vm.noElements == false)?_c('v-flex',{staticStyle:{"margin-top":"100px"},attrs:{"xs12":"","lg10":""}},[_c('v-btn',{staticStyle:{"text-transform":"none","margin-left":"0px"},attrs:{"href":_vm.generatedDownloadRequest,"disabled":_vm.downloadDisable,"color":"green lighten-1","dark":"","title":"Λήψη δεδομένων σε μορφή xlsx excel μέσω της δυναμικής αναζήτησης"},on:{"click":_vm.onDownloadClicked}},[_vm._v("Λήψη excel"),_c('v-icon',{attrs:{"right":""}},[_vm._v("save_alt")])],1),_vm._v(" "),(_vm.downloadDisable == true)?_c('div',[_c('v-progress-linear',{staticStyle:{"width":"150px"},attrs:{"color":"green lighten-1","indeterminate":""}})],1):_vm._e(),_vm._v(" "),_c('div',[_c('h3',{staticClass:"my-4 text-xs-center text-md-left font-weight-regular"},[_vm._v("Σύνολο Δειγμάτων Θηλαστικών : "+_vm._s(this.returnedData.totalResults)+" ")]),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_vm._l((_vm.returnedData.deigmaThhlastikwnList),function(deigma){return _c('div',{key:deigma.id,staticClass:"my-5"},[_c('v-card',[_c('div',{staticClass:"green lighten-4",staticStyle:{"width":"100%","height":"8px"}}),_vm._v(" "),_c('div',{staticClass:"pa-4"},[_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Κωδικός δειγματοληψίας","color":"green","counter":255,"readonly":"","required":""},model:{value:(deigma.kwdikosDeigmatolhpsias),callback:function ($$v) {_vm.$set(deigma, "kwdikosDeigmatolhpsias", $$v)},expression:"deigma.kwdikosDeigmatolhpsias"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Χρηματοδότηση","color":"green","counter":255,"readonly":""},model:{value:(deigma.xrhmatodothsh),callback:function ($$v) {_vm.$set(deigma, "xrhmatodothsh", $$v)},expression:"deigma.xrhmatodothsh"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ερευνητής","color":"green","append-icon":"account_box","counter":255,"readonly":""},model:{value:(deigma.ereunhths),callback:function ($$v) {_vm.$set(deigma, "ereunhths", $$v)},expression:"deigma.ereunhths"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τοποθεσία","color":"green","append-icon":"location_searching","counter":255,"readonly":""},model:{value:(deigma.topothesia),callback:function ($$v) {_vm.$set(deigma, "topothesia", $$v)},expression:"deigma.topothesia"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ημερομηνία (Έτος-Μήνας-Ημέρα)","color":"green","append-icon":"date_range","hint":"YYYY-MM-DD | Παράδειγμα 2019-06-23","readonly":""},model:{value:(deigma.date),callback:function ($$v) {_vm.$set(deigma, "date", $$v)},expression:"deigma.date"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Ώρα","color":"green","append-icon":"access_time","hint":"HH:MM:SS | Παράδειγμα 20:32:10","readonly":""},model:{value:(deigma.time),callback:function ($$v) {_vm.$set(deigma, "time", $$v)},expression:"deigma.time"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Διάρκεια","color":"green","counter":40,"readonly":""},model:{value:(deigma.diarkeia),callback:function ($$v) {_vm.$set(deigma, "diarkeia", $$v)},expression:"deigma.diarkeia"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Επιφάνεια δειγματοληψίας","color":"green","counter":255,"readonly":""},model:{value:(deigma.epifaneiaDeigmatolhpsias),callback:function ($$v) {_vm.$set(deigma, "epifaneiaDeigmatolhpsias", $$v)},expression:"deigma.epifaneiaDeigmatolhpsias"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τύπος βλάστησης","color":"green","counter":255,"readonly":""},model:{value:(deigma.tuposVlasthshs),callback:function ($$v) {_vm.$set(deigma, "tuposVlasthshs", $$v)},expression:"deigma.tuposVlasthshs"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Τύπος οικοτόπου","color":"green","counter":255,"readonly":""},model:{value:(deigma.tuposOikotopou),callback:function ($$v) {_vm.$set(deigma, "tuposOikotopou", $$v)},expression:"deigma.tuposOikotopou"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό πλάτος EGSA","color":"green","append-icon":"edit_location","counter":255,"readonly":""},model:{value:(deigma.latitudeEGSA),callback:function ($$v) {_vm.$set(deigma, "latitudeEGSA", $$v)},expression:"deigma.latitudeEGSA"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό μήκος EGSA","color":"green","append-icon":"edit_location","counter":255,"readonly":""},model:{value:(deigma.longitudeEGSA),callback:function ($$v) {_vm.$set(deigma, "longitudeEGSA", $$v)},expression:"deigma.longitudeEGSA"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό πλάτος WGS84","color":"green","append-icon":"edit_location","counter":255,"readonly":""},model:{value:(deigma.latitudeWGS84),callback:function ($$v) {_vm.$set(deigma, "latitudeWGS84", $$v)},expression:"deigma.latitudeWGS84"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Γεωγραφικό μήκος WGS84","color":"green","append-icon":"edit_location","counter":255,"readonly":""},model:{value:(deigma.longitudeWGS84),callback:function ($$v) {_vm.$set(deigma, "longitudeWGS84", $$v)},expression:"deigma.longitudeWGS84"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Κελί πλέγματος","color":"green","counter":30,"readonly":""},model:{value:(deigma.gridCell),callback:function ($$v) {_vm.$set(deigma, "gridCell", $$v)},expression:"deigma.gridCell"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Κωδικός Natura","color":"green","counter":40,"readonly":""},model:{value:(deigma.kwdikosNatura),callback:function ($$v) {_vm.$set(deigma, "kwdikosNatura", $$v)},expression:"deigma.kwdikosNatura"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Μέθοδος δειγματοληψίας","color":"green","counter":255,"readonly":""},model:{value:(deigma.methodosDeigmatolhpsias),callback:function ($$v) {_vm.$set(deigma, "methodosDeigmatolhpsias", $$v)},expression:"deigma.methodosDeigmatolhpsias"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs12":"","md4":"","my-4":""}},[_c('v-text-field',{attrs:{"label":"Νομός","color":"green","counter":255,"readonly":""},model:{value:(deigma.nomos),callback:function ($$v) {_vm.$set(deigma, "nomos", $$v)},expression:"deigma.nomos"}})],1)],1),_vm._v(" "),_c('v-layout',{attrs:{"wrap":"","justify-space-around":""}},[_c('v-flex',{attrs:{"xs12":"","md8":"","my-4":""}},[_c('v-textarea',{attrs:{"label":"Παρατηρήσεις","color":"green","counter":255,"readonly":"","rows":"6"},model:{value:(deigma.parathrhseis),callback:function ($$v) {_vm.$set(deigma, "parathrhseis", $$v)},expression:"deigma.parathrhseis"}})],1)],1),_vm._v(" "),_c('v-layout',[_c('h3',{staticClass:"font-weight-medium mt-2"},[_vm._v("Id: "+_vm._s(deigma.id)+" ")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"color":"green","dark":""},on:{"click":function($event){return _vm.toIdPage(deigma.id)}}},[_vm._v("Εμφάνιση")])],1)],1)])],1)}),_vm._v(" "),(_vm.noElements == false)?_c('div',{staticStyle:{"margin-top":"100px","margin-bottom":"20px"}},[_c('v-layout',[_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.returnedData.hasPreviousPage,"color":"green","flat":"","title":"Προηγούμενη σελίδα"},on:{"click":_vm.getPreviousPage}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("arrow_back")]),_vm._v("\n            Σελίδα\n          ")],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{staticStyle:{"text-transform":"none"},attrs:{"disabled":!_vm.returnedData.hasNextPage,"color":"green","flat":"","title":"Επόμενη σελίδα"},on:{"click":_vm.getNextPage}},[_vm._v("\n            Σελίδα\n            "),_c('v-icon',{attrs:{"right":""}},[_vm._v("arrow_forward")])],1)],1)],1):_vm._e()],2):_vm._e()],1),_vm._v(" "),_c('v-snackbar',{attrs:{"timeout":14000,"color":_vm.snackbarColor,"multi-line":true,"auto-height":true},model:{value:(_vm.snackbar),callback:function ($$v) {_vm.snackbar=$$v},expression:"snackbar"}},[_c('p',{staticClass:"pt-2"},[_vm._v(" "+_vm._s(_vm.snackbarText)+" ")])])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/dynamic-search/page/_number/index.vue?vue&type=template&id=0b504dca&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/thhlastika/deigma-thhlastikwn/dynamic-search/page/_number/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _numbervue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Δείγματα Θηλαστικών - Δυναμική Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Δυναμική Αναζήτηση (δεδομένων) Δειγμάτων Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης.'
      }]
    };
  },

  data() {
    return {
      main: {
        title: 'Δυναμική Αναζήτηση Δειγμάτων Θηλαστικών',
        emptyElements: 'Δεν υπάρχουν αποθηκευμένα δεδομένα'
      },
      noElements: null,
      downloadDisable: false,
      // For filtering dialog
      dialog: false,
      openDateFromDialog: false,
      openDateToDialog: false,
      openTimeFromDialog: false,
      openTimeToDialog: false,
      dialogSize: null,
      dialogSort: null,
      dialogKwdikosDeigmatolhpsiasList: [],
      dialogXrhmatodothshList: [],
      dialogEreunhthsList: [],
      dialogTopothesiaList: [],
      dialogDateFrom: null,
      dialogDateTo: null,
      dialogTimeFrom: null,
      dialogTimeTo: null,
      dialogDiarkeiaList: [],
      dialogTuposVlasthshsList: [],
      dialogTuposOikotopouList: [],
      dialogEpifaneiaDeigmatolhpsiasFrom: null,
      dialogEpifaneiaDeigmatolhpsiasTo: null,
      dialogLatitudeEGSAList: [],
      dialogLongitudeEGSAList: [],
      dialogLatitudeWGS84List: [],
      dialogLongitudeWGS84List: [],
      dialogGridCellList: [],
      dialogKwdikosNaturaList: [],
      dialogMethodosDeigmatolhpsiasList: [],
      dialogNomosList: [],
      sizesList: [10, 15, 20, 40, 100],
      sortsList: ['Desc', 'Asc'],
      epifaneiaDeigmatolhpsiasRules: [v => !isNaN(v) || 'Το πεδίο πρέπει να είναι αριθμός'],
      // The Eidh values list that we get trough the getAutocompletes Request when mounted()
      autocompletes: {
        kwdikosDeigmatolhpsiasList: [],
        xrhmatodothshList: [],
        ereunhthsList: [],
        topothesiaList: [],
        diarkeiaList: [],
        tuposVlasthshsList: [],
        tuposOikotopouList: [],
        latitudeEGSAList: [],
        longitudeEGSAList: [],
        latitudeWGS84List: [],
        longitudeWGS84List: [],
        gridCellList: [],
        kwdikosNaturaList: [],
        methodosDeigmatolhpsiasList: [],
        nomosList: []
      },
      returnedData: {
        deigmaThhlastikwnList: [{
          id: null
        }],
        totalReturnedResults: 0,
        hasPreviousPage: false,
        hasNextPage: false,
        totalPages: 0,
        totalResults: 0,
        page: null,
        size: null
      },
      // Url objects
      searchUrl: '?search=',
      getSearchRequest: '',
      getDownloadRequest: '',
      loading: null,
      snackbar: false,
      snackbarText: '',
      snackbarColor: ''
    };
  },

  computed: {
    getAutocompletesUrl() {
      return this.$store.getters.getDeigmaThhlastikwnAutocompletes;
    },

    dynamicSearchUrl() {
      return this.$store.getters.getDeigmaThhlastikwnDynamicSearchUrl;
    },

    dynamicDownloadUrl() {
      return this.$store.getters.getDeigmaThhlastikwnDynamicDownloadUrl;
    },

    paramPage() {
      return Number(this.$route.params.number);
    },

    currentPage() {
      return this.$route.params.number - 1;
    },

    storedChips: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getChipsList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setChipsList', value);
      }
    },
    storedSize: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getSize'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setSize', value);
      }
    },
    storedSort: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getSort'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setSort', value);
      }
    },
    storedKwdikosDeigmatolhpsiasList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getKwdikosDeigmatolhpsiasList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setKwdikosDeigmatolhpsiasList', value);
      }
    },
    storedXrhmatodothshList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getXrhmatodothshList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setXrhmatodothshList', value);
      }
    },
    storedEreunhthsList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getEreunhthsList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setEreunhthsList', value);
      }
    },
    storedTopothesiaList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getTopothesiaList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setTopothesiaList', value);
      }
    },
    storedDateFrom: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getDateFrom'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setDateFrom', value);
      }
    },
    storedDateTo: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getDateTo'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setDateTo', value);
      }
    },
    storedTimeFrom: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getTimeFrom'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setTimeFrom', value);
      }
    },
    storedTimeTo: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getTimeTo'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setTimeTo', value);
      }
    },
    storedDiarkeiaList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getDiarkeiaList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setDiarkeiaList', value);
      }
    },
    storedTuposVlasthshsList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getTuposVlasthshsList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setTuposVlasthshsList', value);
      }
    },
    storedTuposOikotopouList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getTuposOikotopouList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setTuposOikotopouList', value);
      }
    },
    storedEpifaneiaDeigmatolhpsiasFrom: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getEpifaneiaDeigmatolhpsiasFrom'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setEpifaneiaDeigmatolhpsiasFrom', value);
      }
    },
    storedEpifaneiaDeigmatolhpsiasTo: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getEpifaneiaDeigmatolhpsiasTo'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setEpifaneiaDeigmatolhpsiasTo', value);
      }
    },
    storedLatitudeEGSAList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getLatitudeEGSAList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setLatitudeEGSAList', value);
      }
    },
    storedLongitudeEGSAList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getLongitudeEGSAList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setLongitudeEGSAList', value);
      }
    },
    storedLatitudeWGS84List: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getLatitudeWGS84List'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setLatitudeWGS84List', value);
      }
    },
    storedLongitudeWGS84List: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getLongitudeWGS84List'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setLongitudeWGS84List', value);
      }
    },
    storedGridCellList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getGridCellList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setGridCellList', value);
      }
    },
    storedKwdikosNaturaList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getKwdikosNaturaList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setKwdikosNaturaList', value);
      }
    },
    storedMethodosDeigmatolhpsiasList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getMethodosDeigmatolhpsiasList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setMethodosDeigmatolhpsiasList', value);
      }
    },
    storedNomosList: {
      get: function () {
        return this.$store.getters['thhlastika/deigma-thhlastikwn/getNomosList'];
      },
      set: function (value) {
        this.$store.commit('thhlastika/deigma-thhlastikwn/setNomosList', value);
      }
    },

    sizeUrl() {
      return '&size=' + this.storedSize;
    },

    sortUrl() {
      return '&sort=' + this.storedSort;
    },

    pageUrl() {
      return '&page=' + this.currentPage;
    },

    // Automatically generated request urls for search and download calls
    generatedSearchRequest() {
      return this.genGetSearchRequest();
    },

    generatedDownloadRequest() {
      return this.genGetDownloadRequest();
    }

  },

  mounted() {
    this.getAutocompletes();
    this.initDialogLists();
    this.restSearchCall();
  },

  methods: {
    // Getting the Autocompletes for the filtering form
    getAutocompletes() {
      this.$axios.get(this.getAutocompletesUrl).then(response => {
        if (response.data.kwdikosDeigmatolhpsiasList.length == 0 && response.data.xrhmatodothshList.length == 0 && response.data.ereunhthsList.length == 0 && response.data.topothesiaList.length == 0 && response.data.getDiarkeiaList.length == 0 && response.data.tuposVlasthshsList.length == 0 && response.data.tuposOikotopouList.length == 0 && response.data.gridCellList.length == 0 && response.data.kwdikosNaturaList.length == 0 && response.data.methodosDeigmatolhpsiasList.length == 0 && response.data.latitudeEGSAList.length == 0 && response.data.longitudeEGSAList.length == 0 && response.data.latitudeWGS84List.length == 0 && response.data.longitudeWGS84List.length == 0 && response.data.nomosList.length == 0) {
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα για όλες τις λίστες της φόρμας φίλτρων';
          this.snackbar = true;
        } else {
          this.autocompletes = response.data;
        }
      }).catch(err => {
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα στη φόρτωση λιστών για τη φόρμα φίλτρων';
        this.snackbar = true;
        throw err;
      });
    },

    // Getting the Stored values whether they are the deafults or saved from previous search or paging
    initDialogLists() {
      this.dialogSize = this.storedSize;
      this.dialogSort = this.storedSort;
      this.dialogKwdikosDeigmatolhpsiasList = this.storedKwdikosDeigmatolhpsiasList;
      this.dialogXrhmatodothshList = this.storedXrhmatodothshList;
      this.dialogEreunhthsList = this.storedEreunhthsList;
      this.dialogTopothesiaList = this.storedDiarkeiaList;
      this.dialogDateFrom = this.storedDateFrom;
      this.dialogDateTo = this.storedDateTo;
      this.dialogTimeFrom = this.storedTimeFrom;
      this.dialogTimeTo = this.storedTimeTo;
      this.dialogDiarkeiaList = this.storedDiarkeiaList;
      this.dialogTuposVlasthshsList = this.storedTuposVlasthshsList;
      this.dialogTuposOikotopouList = this.storedTuposOikotopouList;
      this.dialogEpifaneiaDeigmatolhpsiasFrom = this.storedEpifaneiaDeigmatolhpsiasFrom;
      this.dialogEpifaneiaDeigmatolhpsiasTo = this.storedEpifaneiaDeigmatolhpsiasTo;
      this.dialogLatitudeEGSAList = this.storedLatitudeEGSAList;
      this.dialogLongitudeEGSAList = this.storedLongitudeEGSAList;
      this.dialogLatitudeWGS84List = this.storedLatitudeWGS84List;
      this.dialogLongitudeWGS84List = this.storedLongitudeWGS84List;
      this.dialogGridCellList = this.storedGridCellList;
      this.dialogKwdikosNaturaList = this.storedKwdikosNaturaList;
      this.dialogMethodosDeigmatolhpsiasList = this.storedMethodosDeigmatolhpsiasList;
      this.dialogNomosList = this.storedNomosList;
    },

    // Generating the Get request
    genGetSearchRequest() {
      let search = this.generateArguments(); // console.log(this.dynamicSearchUrl + search + this.sizeUrl + this.pageUrl + this.sortUrl)

      return this.dynamicSearchUrl + search + this.sizeUrl + this.pageUrl + this.sortUrl;
    },

    genGetDownloadRequest() {
      let search = this.generateArguments();
      return this.dynamicDownloadUrl + search + this.sortUrl;
    },

    // Generating the String for the arguments (filtered or not)
    generateArguments() {
      let search = this.searchUrl;

      if (this.storedKwdikosDeigmatolhpsiasList.length != 0) {
        search = search + 'kwdikosDeigmatolhpsias~';
        this.storedKwdikosDeigmatolhpsiasList.forEach(kwdikosDeigmatolhpsias => {
          search = search + kwdikosDeigmatolhpsias + ';';
        });
        search = search + '@';
      }

      if (this.storedXrhmatodothshList.length != 0) {
        search = search + 'xrhmatodothsh~';
        this.storedXrhmatodothshList.forEach(xrhmatodothsh => {
          search = search + xrhmatodothsh + ';';
        });
        search = search + '@';
      }

      if (this.storedEreunhthsList.length != 0) {
        search = search + 'ereunhths~';
        this.storedEreunhthsList.forEach(ereunhths => {
          search = search + ereunhths + ';';
        });
        search = search + '@';
      }

      if (this.storedTopothesiaList.length != 0) {
        search = search + 'topothesia~';
        this.storedTopothesiaList.forEach(topothesia => {
          search = search + topothesia + ';';
        });
        search = search + '@';
      }

      if (this.storedDateFrom != null) {
        search = search + 'date>' + this.storedDateFrom + '@';
      }

      if (this.storedDateTo != null) {
        search = search + 'date<' + this.storedDateTo + '@';
      }

      if (this.storedTimeFrom != null) {
        search = search + 'time>' + this.storedTimeFrom + '@';
      }

      if (this.storedTimeTo != null) {
        search = search + 'time<' + this.storedTimeTo + '@';
      }

      if (this.storedDiarkeiaList.length != 0) {
        search = search + 'diarkeia~';
        this.storedDiarkeiaList.forEach(diarkeia => {
          search = search + diarkeia + ';';
        });
        search = search + '@';
      }

      if (this.storedTuposVlasthshsList.length != 0) {
        search = search + 'tuposVlasthshs~';
        this.storedTuposVlasthshsList.forEach(tuposVlasthshs => {
          search = search + tuposVlasthshs + ';';
        });
        search = search + '@';
      }

      if (this.storedTuposOikotopouList.length != 0) {
        search = search + 'tuposOikotopou~';
        this.storedTuposOikotopouList.forEach(tuposOikotopou => {
          search = search + tuposOikotopou + ';';
        });
        search = search + '@';
      }

      if (this.storedEpifaneiaDeigmatolhpsiasFrom != null && this.storedEpifaneiaDeigmatolhpsiasFrom != '') {
        search = search + 'epifaneiaDeigmatolhpsias>' + this.storedEpifaneiaDeigmatolhpsiasFrom + '@';
      }

      if (this.storedEpifaneiaDeigmatolhpsiasTo != null && this.storedEpifaneiaDeigmatolhpsiasTo != '') {
        search = search + 'epifaneiaDeigmatolhpsias<' + this.storedEpifaneiaDeigmatolhpsiasTo + '@';
      }

      if (this.storedLatitudeEGSAList.length != 0) {
        search = search + 'latitudeEGSA~';
        this.storedLatitudeEGSAList.forEach(latitudeEGSA => {
          search = search + latitudeEGSA + ';';
        });
        search = search + '@';
      }

      if (this.storedLongitudeEGSAList.length != 0) {
        search = search + 'longitudeEGSA~';
        this.storedLongitudeEGSAList.forEach(longitudeEGSA => {
          search = search + longitudeEGSA + ';';
        });
        search = search + '@';
      }

      if (this.storedLatitudeWGS84List.length != 0) {
        search = search + 'latitudeWGS84~';
        this.storedLatitudeWGS84List.forEach(latitudeWGS84 => {
          search = search + latitudeWGS84 + ';';
        });
        search = search + '@';
      }

      if (this.storedLongitudeWGS84List.length != 0) {
        search = search + 'longitudeWGS84~';
        this.storedLongitudeWGS84List.forEach(longitudeWGS84 => {
          search = search + longitudeWGS84 + ';';
        });
        search = search + '@';
      }

      if (this.storedGridCellList.length != 0) {
        search = search + 'gridCell~';
        this.storedGridCellList.forEach(gridCell => {
          search = search + gridCell + ';';
        });
        search = search + '@';
      }

      if (this.storedKwdikosNaturaList.length != 0) {
        search = search + 'kwdikosNatura~';
        this.storedKwdikosNaturaList.forEach(kwdikosNatura => {
          search = search + kwdikosNatura + ';';
        });
        search = search + '@';
      }

      if (this.storedMethodosDeigmatolhpsiasList.length != 0) {
        search = search + 'methodosDeigmatolhpsias~';
        this.storedMethodosDeigmatolhpsiasList.forEach(methodosDeigmatolhpsias => {
          search = search + methodosDeigmatolhpsias + ';';
        });
        search = search + '@';
      }

      if (this.storedNomosList.length != 0) {
        search = search + 'nomos~';
        this.storedNomosList.forEach(nomos => {
          search = search + nomos + ';';
        });
        search = search + '@';
      }

      return search;
    },

    // Search Get Request
    restSearchCall() {
      this.loading = true;
      this.$axios.get(this.generatedSearchRequest).then(response => {
        // console.log(response)
        if (response.data.totalResults == 0) {
          this.noElements = true;
          this.snackbarColor = 'red';
          this.snackbarText = 'Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της δυναμικής αναζήτησης';
          this.snackbar = true;
        } else if (response.data.totalReturnedResults == 0) {
          this.noElements = true;
        } else {
          this.noElements = false;
          this.returnedData = response.data;
        }

        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.snackbarColor = 'red';
        this.snackbarText = 'Υπήρξε κάποιο σφάλμα στη δυναμική αναζήτηση';
        this.snackbar = true;
        throw err;
      });
    },

    // Triggered when the user submits the filtering
    filterAndSearch() {
      this.updateFiltering();
      this.generateNewChips();
      this.restSearchCall();
      this.dialog = false;
    },

    // Updating the Vuex store with new filter values (so that the Get Requests will have the updated search arguments)
    updateFiltering() {
      this.storedSize = this.dialogSize;
      this.storedSort = this.dialogSort;
      this.storedKwdikosDeigmatolhpsiasList = this.dialogKwdikosDeigmatolhpsiasList;
      this.storedXrhmatodothshList = this.dialogXrhmatodothshList;
      this.storedEreunhthsList = this.dialogEreunhthsList;
      this.storedTopothesiaList = this.dialogTopothesiaList;
      this.storedDateFrom = this.dialogDateFrom;
      this.storedDateTo = this.dialogDateTo;
      this.storedTimeFrom = this.dialogTimeFrom;
      this.storedTimeTo = this.dialogTimeTo;
      this.storedDiarkeiaList = this.dialogDiarkeiaList;
      this.storedTuposVlasthshsList = this.dialogTuposVlasthshsList;
      this.storedTuposOikotopouList = this.dialogTuposOikotopouList;
      this.storedEpifaneiaDeigmatolhpsiasFrom = this.dialogEpifaneiaDeigmatolhpsiasFrom;
      this.storedEpifaneiaDeigmatolhpsiasTo = this.dialogEpifaneiaDeigmatolhpsiasTo;
      this.storedLatitudeEGSAList = this.dialogLatitudeEGSAList;
      this.storedLongitudeEGSAList = this.dialogLongitudeEGSAList;
      this.storedLatitudeWGS84List = this.dialogLatitudeWGS84List;
      this.storedLongitudeWGS84List = this.dialogLongitudeWGS84List;
      this.storedGridCellList = this.dialogGridCellList;
      this.storedKwdikosNaturaList = this.dialogKwdikosNaturaList;
      this.storedMethodosDeigmatolhpsiasList = this.dialogMethodosDeigmatolhpsiasList;
      this.storedNomosList = this.dialogNomosList;
    },

    // Updating the Vuex ChipsList by generating the new one from the submitted filtering
    generateNewChips() {
      let list = [];

      if (this.dialogKwdikosDeigmatolhpsiasList.length != 0) {
        this.dialogKwdikosDeigmatolhpsiasList.forEach(kwdikosDeigmatolhpsias => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (kwdikosDeigmatolhpsias.length > 20) {
            kwdikosDeigmatolhpsias = kwdikosDeigmatolhpsias.substring(0, 20);
            kwdikosDeigmatolhpsias = kwdikosDeigmatolhpsias + '...';
          }

          list.push('Κωδικός δειγματοληψίας = ' + kwdikosDeigmatolhpsias);
        });
      }

      if (this.dialogXrhmatodothshList.length != 0) {
        this.dialogXrhmatodothshList.forEach(xrhmatodothsh => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (xrhmatodothsh.length > 20) {
            xrhmatodothsh = xrhmatodothsh.substring(0, 20);
            xrhmatodothsh = xrhmatodothsh + '...';
          }

          list.push('Χρηματοδότηση = ' + xrhmatodothsh);
        });
      }

      if (this.dialogEreunhthsList.length != 0) {
        this.dialogEreunhthsList.forEach(ereunhths => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (ereunhths.length > 30) {
            ereunhths = ereunhths.substring(0, 30);
            ereunhths = ereunhths + '...';
          }

          list.push('Ερευνητής = ' + ereunhths);
        });
      }

      if (this.dialogTopothesiaList.length != 0) {
        this.dialogTopothesiaList.forEach(topothesia => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (topothesia.length > 30) {
            topothesia = topothesia.substring(0, 30);
            topothesia = topothesia + '...';
          }

          list.push('Τοποθεσία = ' + topothesia);
        });
      }

      if (this.dialogDateFrom != null) {
        list.push('Ημερομηνία >= ' + this.dialogDateFrom);
      }

      if (this.dialogDateTo != null) {
        list.push('Ημερομηνία <= ' + this.dialogDateTo);
      }

      if (this.dialogTimeFrom != null) {
        list.push('Ώρα >= ' + this.dialogTimeFrom);
      }

      if (this.dialogTimeTo != null) {
        list.push('Ώρα <= ' + this.dialogTimeTo);
      }

      if (this.dialogDiarkeiaList.length != 0) {
        this.dialogDiarkeiaList.forEach(diarkeia => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (diarkeia.length > 30) {
            diarkeia = diarkeia.substring(0, 30);
            diarkeia = diarkeia + '...';
          }

          list.push('Διάρκεια = ' + diarkeia);
        });
      }

      if (this.dialogTuposVlasthshsList.length != 0) {
        this.dialogTuposVlasthshsList.forEach(tuposVlasthshs => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (tuposVlasthshs.length > 20) {
            tuposVlasthshs = tuposVlasthshs.substring(0, 20);
            tuposVlasthshs = tuposVlasthshs + '...';
          }

          list.push('Τύπος βλάστησης = ' + tuposVlasthshs);
        });
      }

      if (this.dialogTuposOikotopouList.length != 0) {
        this.dialogTuposOikotopouList.forEach(tuposOikotopou => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (tuposOikotopou.length > 20) {
            tuposOikotopou = tuposOikotopou.substring(0, 20);
            tuposOikotopou = tuposOikotopou + '...';
          }

          list.push('Τύπος οικοτόπου = ' + tuposOikotopou);
        });
      }

      if (this.dialogEpifaneiaDeigmatolhpsiasFrom != null && this.dialogEpifaneiaDeigmatolhpsiasFrom != '') {
        list.push('Επιφάνεια δειγματοληψίας >= ' + this.dialogEpifaneiaDeigmatolhpsiasFrom);
      }

      if (this.dialogEpifaneiaDeigmatolhpsiasTo != null && this.dialogEpifaneiaDeigmatolhpsiasTo != '') {
        list.push('Επιφάνεια δειγματοληψίας <= ' + this.dialogEpifaneiaDeigmatolhpsiasTo);
      }

      if (this.dialogLatitudeEGSAList.length != 0) {
        this.dialogLatitudeEGSAList.forEach(latitudeEGSA => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (latitudeEGSA.length > 20) {
            latitudeEGSA = latitudeEGSA.substring(0, 20);
            latitudeEGSA = latitudeEGSA + '...';
          }

          list.push('Γεωγρ. πλάτος EGSA = ' + latitudeEGSA);
        });
      }

      if (this.dialogLongitudeEGSAList.length != 0) {
        this.dialogLongitudeEGSAList.forEach(longitudeEGSA => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (longitudeEGSA.length > 20) {
            longitudeEGSA = longitudeEGSA.substring(0, 20);
            longitudeEGSA = longitudeEGSA + '...';
          }

          list.push('Γεωγρ. μήκος EGSA = ' + longitudeEGSA);
        });
      }

      if (this.dialogLatitudeWGS84List.length != 0) {
        this.dialogLatitudeWGS84List.forEach(latitudeWGS84 => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (latitudeWGS84.length > 20) {
            latitudeWGS84 = latitudeWGS84.substring(0, 20);
            latitudeWGS84 = latitudeWGS84 + '...';
          }

          list.push('Γεωγρ. πλάτος WGS84 = ' + latitudeWGS84);
        });
      }

      if (this.dialogLongitudeWGS84List.length != 0) {
        this.dialogLongitudeWGS84List.forEach(longitudeWGS84 => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (longitudeWGS84.length > 20) {
            longitudeWGS84 = longitudeWGS84.substring(0, 20);
            longitudeWGS84 = longitudeWGS84 + '...';
          }

          list.push('Γεωγρ. μήκος WGS84 = ' + longitudeWGS84);
        });
      }

      if (this.dialogGridCellList.length != 0) {
        this.dialogGridCellList.forEach(gridCell => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (gridCell.length > 20) {
            gridCell = gridCell.substring(0, 20);
            gridCell = gridCell + '...';
          }

          list.push('Κελί πλέγματος = ' + gridCell);
        });
      }

      if (this.dialogKwdikosNaturaList.length != 0) {
        this.dialogKwdikosNaturaList.forEach(kwdikosNatura => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (kwdikosNatura.length > 20) {
            kwdikosNatura = kwdikosNatura.substring(0, 20);
            kwdikosNatura = kwdikosNatura + '...';
          }

          list.push('Κωδικός Natura = ' + kwdikosNatura);
        });
      }

      if (this.dialogMethodosDeigmatolhpsiasList.length != 0) {
        this.dialogMethodosDeigmatolhpsiasList.forEach(methodosDeigmatolhpsias => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (methodosDeigmatolhpsias.length > 20) {
            methodosDeigmatolhpsias = methodosDeigmatolhpsias.substring(0, 20);
            methodosDeigmatolhpsias = methodosDeigmatolhpsias + '...';
          }

          list.push('Μέθοδος δειγματοληψίας = ' + methodosDeigmatolhpsias);
        });
      }

      if (this.dialogNomosList.length != 0) {
        this.dialogNomosList.forEach(nomos => {
          // Cutting the chip's text if more than 35 characters to ensure Web Design UI persistence
          if (nomos.length > 20) {
            nomos = nomos.substring(0, 20);
            nomos = nomos + '...';
          }

          list.push('Νομός = ' + nomos);
        });
      }

      if (list.length != 0) {
        this.storedChips = list;
      } else {
        list.push('Χωρίς φίλτρα');
        this.storedChips = list;
      }
    },

    // Timeout for download btn so that the user wont be able to click it again for some time
    onDownloadClicked() {
      this.snackbarColor = 'green lighten-1';
      this.snackbarText = 'Δημιουργείται το excel αρχείο : Μπορεί να διαρκέσει λίγη ώρα ανάλογα τον όγκο των δεδομένων. Μετά την λήψη μεταβείτε στον φάκελο λήψεις του συστήματός σας.';
      this.snackbar = true;
      this.downloadDisable = true;
      setTimeout(() => {
        this.downloadDisable = false;
      }, 10000);
    },

    toIdPage(id) {
      this.$router.push('/thhlastika/deigma-thhlastikwn/' + id);
    },

    getPreviousPage() {
      this.$router.push('/thhlastika/deigma-thhlastikwn/dynamic-search/page/' + (this.paramPage - 1));
    },

    getNextPage() {
      this.$router.push('/thhlastika/deigma-thhlastikwn/dynamic-search/page/' + (this.paramPage + 1));
    }

  }
});
// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/dynamic-search/page/_number/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var page_numbervue_type_script_lang_js_ = (_numbervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/thhlastika/deigma-thhlastikwn/dynamic-search/page/_number/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  page_numbervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "63378fd2"
  
)

/* harmony default export */ var _number = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map