(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{265:function(t,e,n){var content=n(294);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("0bef1743",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n(265)},294:function(t,e,n){(e=n(40)(!1)).push([t.i,".dropperPlace{margin-top:20px;background-color:#fff;transition:.15s linear;color:grey;display:flex;justify-content:center;align-items:center;box-shadow:0 3px 5px #aaa;position:relative}.dropperPlace,.inputPlace{height:30vh;width:100%;border-radius:20px}.inputPlace{opacity:0;position:absolute}.dropperPlace:hover{background-color:#eee;transition:.15s linear}",""]),t.exports=e},336:function(t,e,n){"use strict";n.r(e);var o={head:function(){return{title:"Δειγματοληψία Χ Πίεσης Ορνιθοπανίδας - Δημιουργία | Φορέας Διαχείρισης Λίμνης Κερκίνης",meta:[{hid:"description",name:"description",content:"Δημιουργία και αποθήκευση νέων δεδομένων τύπου Δειγματοληψίας Χ Πίεσης Ορνιθοπανίδας -μέσω φόρμας ή αρχείου excel- για τον Φορέα Διαχείρισης Λίμνης Κερκίνης."}]}},data:function(){return{main:{title:"Εγγραφή νέου Δείγματος X Πίεσης",titleForm:"Για εγγραφή μέσω φόρμας συμπληρώστε παρακάτω",titleExcel:"Για εγγραφές μέσω excel (.xlsx) αρχείου εισάγετε το αρχείο",subTitleExcel:"Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το excel"},form:{deigmaornithopanidaID:"",ctActCode:"",kodikos:"",type:"",importance:""},ctActCodesList:[],validation:!1,deigmaOrnithopanidaIdRules:[function(t){return!!t||"Συμπληρώστε το πεδίο Δείγματος θηλαστικού"},function(t){return!isNaN(t)||"Το πεδίο πρέπει να είναι αριθμός"}],ctActCodeRules:[function(t){return!!t||"Συμπληρώστε το πεδίο Ct Τύπου Πίεσης"},function(t){return t.length<=50||"Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες"}],kodikosRules:[function(t){return t.length<=50||"Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες"}],typeRules:[function(t){return t.length<=50||"Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες"}],importanceRules:[function(t){return t.length<=50||"Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες"}],selectedFile:null,snackbar:!1,snackbarText:"",snackbarColor:""}},computed:{getDistinctUrl:function(){return this.$store.getters.getOrnithopanidaCtPressThreatsDistinctUrl},addFormUrl:function(){return this.$store.getters.getOrnithopanidaXPressThreatsAddUrl},addFromExcelUrl:function(){return this.$store.getters.getOrnithopanidaXPressThreatsAddFromExcelUrl},validationExcelInput:function(){return null!=this.selectedFile}},mounted:function(){this.getCtActCodes()},methods:{getCtActCodes:function(){var t=this;this.$axios.get(this.getDistinctUrl).then((function(e){e.data.length==[]?(t.snackbarColor="red",t.snackbarText="Δεν βρέθηκαν αποθηκευμένα Ct Πιέσεις.",t.snackbar=!0):t.ctActCodesList=e.data})).catch((function(e){throw t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο σφάλμα κατά την εύρεση Ct Πιέσεων.",t.snackbar=!0,e}))},submitTimeout:function(){var t=this;this.validation=!1,setTimeout((function(){t.validation=t.$refs.form.validate()}),1e4)},submitForm:function(){var t=this,e={deigmaornithopanidaID:null,ctActCode:null,kodikos:null,type:null,importance:null};e.deigmaornithopanidaID=this.form.deigmaornithopanidaID,e.ctActCode=this.form.ctActCode,""==!this.form.kodikos&&(e.kodikos=this.form.kodikos),""==!this.form.type&&(e.type=this.form.type),""==!this.form.importance&&(e.importance=this.form.importance),this.$axios.post(this.addFormUrl,e).then((function(e){t.$router.push("/ornithopanida/deigma-ornithopanida-x-press-threats/"+e.data.id)})).catch((function(e){throw t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο πρόβλημα με την νέα εγγραφή με αποτέλεσμα να ακυρωθεί",t.snackbar=!0,t.submitTimeout(),e}))},selectExcel:function(t){this.selectedFile=t},removeFile:function(){this.selectedFile=null,this.$refs.inputFile.value=""},submitExcel:function(){var t=this,e=new FormData;e.append("file",this.selectedFile),this.$axios.post(this.addFromExcelUrl,e).then((function(e){1==e.data?(t.snackbarColor="success",t.snackbarText="Το αρχείο στάλθηκε και οι νέες εγγραφές δημιουργήθηκαν επιτυχώς",t.snackbar=!0,t.removeFile()):0==e.data&&(t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε",t.snackbar=!0)})).catch((function(e){throw t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε",t.snackbar=!0,e}))}}},r=(n(293),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[n("h2",{staticClass:"headline"},[t._v(" "+t._s(t.main.title)+" ")])]),t._v(" "),n("v-flex",{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{xs12:""}},[n("h2",{staticClass:"font-weight-thin"},[n("v-icon",{attrs:{large:"",color:"green"}},[t._v("list_alt")]),t._v(" "+t._s(t.main.titleForm)+" ")],1)]),t._v(" "),n("v-card",{staticClass:"my-5",staticStyle:{width:"100%"}},[n("div",{staticClass:"green lighten-4",staticStyle:{width:"100%",height:"7px"}}),t._v(" "),n("v-form",{ref:"form",staticClass:"py-5 px-4",model:{value:t.validation,callback:function(e){t.validation=e},expression:"validation"}},[n("v-layout",{attrs:{wrap:"","justify-space-around":""}},[n("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[n("v-text-field",{attrs:{label:"Δείγμα Ορνιθοπανίδας Id",color:"green",rules:t.deigmaOrnithopanidaIdRules,required:""},model:{value:t.form.deigmaornithopanidaID,callback:function(e){t.$set(t.form,"deigmaornithopanidaID",e)},expression:"form.deigmaornithopanidaID"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[n("v-autocomplete",{attrs:{label:"Ct Πίεσης",color:"green",items:t.ctActCodesList,rules:t.ctActCodeRules,"no-data-text":"Δεν βρέθηκαν δεδομένα",required:""},model:{value:t.form.ctActCode,callback:function(e){t.$set(t.form,"ctActCode",e)},expression:"form.ctActCode"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:"","justify-space-around":""}},[n("v-flex",{attrs:{xs12:"",md4:"",lg3:"","my-4":""}},[n("v-text-field",{attrs:{label:"Κωδικός είδους",color:"green",counter:50,rules:t.kodikosRules},model:{value:t.form.kodikos,callback:function(e){t.$set(t.form,"kodikos",e)},expression:"form.kodikos"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:"",lg3:"","my-4":""}},[n("v-text-field",{attrs:{label:"Τύπος πίεσης",color:"green",counter:50,rules:t.typeRules},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md6:"",lg3:"","my-4":""}},[n("v-text-field",{attrs:{label:"Σημασία",color:"green",counter:50,rules:t.importanceRules},model:{value:t.form.importance,callback:function(e){t.$set(t.form,"importance",e)},expression:"form.importance"}})],1)],1),t._v(" "),n("v-layout",{attrs:{"justify-space-around":"","mt-5":""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs6:"",md5:""}},[n("v-btn",{staticStyle:{"text-transform":"none"},attrs:{disabled:!t.validation,color:"green lighten-2 white--text"},on:{click:t.submitForm}},[t._v("\n                Εγγραφή\n            ")])],1)],1)],1)],1),t._v(" "),n("v-flex",{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{xs12:""}},[n("h2",{staticClass:"font-weight-thin"},[n("v-icon",{attrs:{large:"",color:"green"}},[t._v("cloud_upload")]),t._v(" "+t._s(t.main.titleExcel)+" ")],1)]),t._v(" "),n("div",{staticClass:"dropperPlace"},[null!=t.selectedFile?n("v-icon",{staticStyle:{position:"absolute",color:"red","z-index":"1",top:"25px",right:"25px"},on:{click:function(e){return t.removeFile()}}},[t._v("close")]):t._e(),t._v(" "),n("input",{ref:"inputFile",staticClass:"inputPlace",attrs:{type:"file"},on:{change:function(e){return t.selectExcel(e.target.files[0])}}}),t._v(" "),null!=t.selectedFile?n("p",[t._v(" "+t._s(t.selectedFile.name)+" ")]):n("p",{staticClass:"pa-4"},[t._v(" "+t._s(t.main.subTitleExcel)+" ")])],1),t._v(" "),n("v-btn",{staticClass:"mt-4",staticStyle:{"text-transform":"none"},attrs:{disabled:!t.validationExcelInput,color:"green lighten-2 white--text"},on:{click:function(e){return t.submitExcel()}}},[t._v("Αποστολή excel αρχείου")])],1),t._v(" "),n("v-snackbar",{attrs:{timeout:14e3,color:t.snackbarColor,"multi-line":!0,"auto-height":!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("p",{staticClass:"pt-2"},[t._v(" "+t._s(t.snackbarText)+" ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);