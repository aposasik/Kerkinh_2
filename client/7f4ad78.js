(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{269:function(t,e,r){var content=r(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("2ce076a8",content,!0,{sourceMap:!1})},301:function(t,e,r){"use strict";r(269)},302:function(t,e,r){(e=r(40)(!1)).push([t.i,".dropperPlace{margin-top:20px;background-color:#fff;transition:.15s linear;color:grey;display:flex;justify-content:center;align-items:center;box-shadow:0 3px 5px #aaa;position:relative}.dropperPlace,.inputPlace{height:30vh;width:100%;border-radius:20px}.inputPlace{opacity:0;position:absolute}.dropperPlace:hover{background-color:#eee;transition:.15s linear}",""]),t.exports=e},341:function(t,e,r){"use strict";r.r(e);var o={head:function(){return{title:"Δειγματοληψία Χ Είδους Θηλαστικών - Δημιουργία | Φορέας Διαχείρισης Λίμνης Κερκίνης",meta:[{hid:"description",name:"description",content:"Δημιουργία και αποθήκευση νέων δεδομένων τύπου Δειγματοληψίας Χ Είδους Θηλαστικών -μέσω φόρμας ή αρχείου excel- για τον Φορέα Διαχείρισης Λίμνης Κερκίνης."}]}},data:function(){return{main:{title:"Εγγραφή νέου Δείγματος X Είδους",titleForm:"Για εγγραφή μέσω φόρμας συμπληρώστε παρακάτω",titleExcel:"Για εγγραφές μέσω excel (.xlsx) αρχείου εισάγετε το αρχείο",subTitleExcel:"Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το excel"},form:{deigmaThhlastikwnId:"",ctEidos:"",sxetikhAfthonia:"",parathrhseis:"",hlikia:"",fulo:"",plhthos:"",eokParII:"",eokParIV:"",eokParV:""},ctEidhList:[],eokParList:[!0,!1],validation:!1,deigmaThhlastikwnIdRules:[function(t){return!!t||"Συμπληρώστε το πεδίο Δείγματος θηλαστικού"},function(t){return!isNaN(t)||"Το πεδίο πρέπει να είναι αριθμός"}],ctEidosRules:[function(t){return!!t||"Συμπληρώστε το πεδίο Ct Είδους"},function(t){return t.length<=50||"Το πεδίο πρέπει να είναι λιγότερο από 50 χαρακτήρες"}],sxetikhAfthoniaRules:[function(t){return t.length<=255||"Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες"}],parathrhseisRules:[function(t){return t.length<=255||"Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες"}],hlikiaRules:[function(t){return t.length<=255||"Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες"}],fuloRules:[function(t){return t.length<=255||"Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες"}],plhthosRules:[function(t){return!isNaN(t)||"Το πεδίο πρέπει να είναι αριθμός"}],selectedFile:null,snackbar:!1,snackbarText:"",snackbarColor:""}},computed:{getDistinctUrl:function(){return this.$store.getters.getThhlastikaCtEidosDistinctUrl},addFormUrl:function(){return this.$store.getters.getThhlastikaXEidhAddUrl},addFromExcelUrl:function(){return this.$store.getters.getThhlastikaXEidhAddFromExcelUrl},validationExcelInput:function(){return null!=this.selectedFile}},mounted:function(){this.getCtEidh()},methods:{getCtEidh:function(){var t=this;this.$axios.get(this.getDistinctUrl).then((function(e){e.data.length==[]?(t.snackbarColor="red",t.snackbarText="Δεν βρέθηκαν αποθηκευμένα Ct Είδη.",t.snackbar=!0):t.ctEidhList=e.data})).catch((function(e){throw t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο σφάλμα κατά την εύρεση Ct Ειδών.",t.snackbar=!0,e}))},submitTimeout:function(){var t=this;this.validation=!1,setTimeout((function(){t.validation=t.$refs.form.validate()}),1e4)},submitForm:function(){var t=this,e={deigmaThhlastikwnId:null,ctEidos:null,sxetikhAfthonia:null,parathrhseis:null,hlikia:null,fulo:null,plhthos:null,eokParII:null,eokParIV:null,eokParV:null};e.deigmaThhlastikwnId=this.form.deigmaThhlastikwnId,e.ctEidos=this.form.ctEidos,""==!this.form.sxetikhAfthonia&&(e.sxetikhAfthonia=this.form.sxetikhAfthonia),""==!this.form.parathrhseis&&(e.parathrhseis=this.form.parathrhseis),""==!this.form.hlikia&&(e.hlikia=this.form.hlikia),""==!this.form.fulo&&(e.fulo=this.form.fulo),""==!this.form.plhthos&&(e.plhthos=this.form.plhthos),"string"!=typeof this.form.eokParII&&(e.eokParII=this.form.eokParII),"string"!=typeof this.form.eokParIV&&(e.eokParIV=this.form.eokParIV),"string"!=typeof this.form.eokParV&&(e.eokParV=this.form.eokParV),this.$axios.post(this.addFormUrl,e).then((function(e){t.$router.push("/thhlastika/deigma-thhlastikwn-x-eidh/"+e.data.id)})).catch((function(e){throw t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο πρόβλημα με την νέα εγγραφή με αποτέλεσμα να ακυρωθεί",t.snackbar=!0,t.submitTimeout(),e}))},selectExcel:function(t){this.selectedFile=t},removeFile:function(){this.selectedFile=null,this.$refs.inputFile.value=""},submitExcel:function(){var t=this,e=new FormData;e.append("file",this.selectedFile),this.$axios.post(this.addFromExcelUrl,e).then((function(e){1==e.data?(t.snackbarColor="success",t.snackbarText="Το αρχείο στάλθηκε και οι νέες εγγραφές δημιουργήθηκαν επιτυχώς",t.snackbar=!0,t.removeFile()):0==e.data&&(t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε",t.snackbar=!0)})).catch((function(e){throw t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε",t.snackbar=!0,e}))}}},l=(r(301),r(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[r("h2",{staticClass:"headline"},[t._v(" "+t._s(t.main.title)+" ")])]),t._v(" "),r("v-flex",{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{xs12:""}},[r("h2",{staticClass:"font-weight-thin"},[r("v-icon",{attrs:{large:"",color:"green"}},[t._v("list_alt")]),t._v(" "+t._s(t.main.titleForm)+" ")],1)]),t._v(" "),r("v-card",{staticClass:"my-5",staticStyle:{width:"100%"}},[r("div",{staticClass:"green lighten-4",staticStyle:{width:"100%",height:"8px"}}),t._v(" "),r("v-form",{ref:"form",staticClass:"py-5 px-4",model:{value:t.validation,callback:function(e){t.validation=e},expression:"validation"}},[r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Δείγμα Θηλαστικών Id",color:"green",rules:t.deigmaThhlastikwnIdRules,required:""},model:{value:t.form.deigmaThhlastikwnId,callback:function(e){t.$set(t.form,"deigmaThhlastikwnId",e)},expression:"form.deigmaThhlastikwnId"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-autocomplete",{attrs:{label:"Ct Είδους",color:"green",items:t.ctEidhList,rules:t.ctEidosRules,"no-data-text":"Δεν βρέθηκαν δεδομένα",required:""},model:{value:t.form.ctEidos,callback:function(e){t.$set(t.form,"ctEidos",e)},expression:"form.ctEidos"}})],1)],1),t._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Σχετική αφθονία",color:"green",counter:255,rules:t.sxetikhAfthoniaRules},model:{value:t.form.sxetikhAfthonia,callback:function(e){t.$set(t.form,"sxetikhAfthonia",e)},expression:"form.sxetikhAfthonia"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Αριθμός ατόμων",color:"green",rules:t.plhthosRules},model:{value:t.form.plhthos,callback:function(e){t.$set(t.form,"plhthos",e)},expression:"form.plhthos"}})],1)],1),t._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Ηλικία",color:"green",counter:255,rules:t.hlikiaRules},model:{value:t.form.hlikia,callback:function(e){t.$set(t.form,"hlikia",e)},expression:"form.hlikia"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Φύλο",color:"green",counter:255,rules:t.fuloRules},model:{value:t.form.fulo,callback:function(e){t.$set(t.form,"fulo",e)},expression:"form.fulo"}})],1)],1),t._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md2:"","my-4":""}},[r("v-autocomplete",{attrs:{label:"ΕΟΚ Παρ II",color:"green",items:t.eokParList},model:{value:t.form.eokParII,callback:function(e){t.$set(t.form,"eokParII",e)},expression:"form.eokParII"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md2:"","my-4":""}},[r("v-autocomplete",{attrs:{label:"ΕΟΚ Παρ IV",color:"green",items:t.eokParList},model:{value:t.form.eokParIV,callback:function(e){t.$set(t.form,"eokParIV",e)},expression:"form.eokParIV"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md2:"","my-4":""}},[r("v-autocomplete",{attrs:{label:"ΕΟΚ Παρ V",color:"green",items:t.eokParList},model:{value:t.form.eokParV,callback:function(e){t.$set(t.form,"eokParV",e)},expression:"form.eokParV"}})],1)],1),t._v(" "),r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs12:"",md10:"","my-4":""}},[r("v-textarea",{attrs:{label:"Παρατηρήσεις",color:"green",counter:255,rules:t.parathrhseisRules,rows:"6"},model:{value:t.form.parathrhseis,callback:function(e){t.$set(t.form,"parathrhseis",e)},expression:"form.parathrhseis"}})],1)],1),t._v(" "),r("v-layout",{attrs:{"justify-space-around":"","mt-5":""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs6:"",md5:""}},[r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{disabled:!t.validation,color:"green lighten-2 white--text"},on:{click:t.submitForm}},[t._v("\n                Εγγραφή\n            ")])],1)],1)],1)],1),t._v(" "),r("v-flex",{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{xs12:""}},[r("h2",{staticClass:"font-weight-thin"},[r("v-icon",{attrs:{large:"",color:"green"}},[t._v("cloud_upload")]),t._v(" "+t._s(t.main.titleExcel)+" ")],1)]),t._v(" "),r("div",{staticClass:"dropperPlace"},[null!=t.selectedFile?r("v-icon",{staticStyle:{position:"absolute",color:"red","z-index":"1",top:"25px",right:"25px"},on:{click:function(e){return t.removeFile()}}},[t._v("close")]):t._e(),t._v(" "),r("input",{ref:"inputFile",staticClass:"inputPlace",attrs:{type:"file"},on:{change:function(e){return t.selectExcel(e.target.files[0])}}}),t._v(" "),null!=t.selectedFile?r("p",[t._v(" "+t._s(t.selectedFile.name)+" ")]):r("p",{staticClass:"pa-4"},[t._v(" "+t._s(t.main.subTitleExcel)+" ")])],1),t._v(" "),r("v-btn",{staticClass:"mt-4",staticStyle:{"text-transform":"none"},attrs:{disabled:!t.validationExcelInput,color:"green lighten-2 white--text"},on:{click:function(e){return t.submitExcel()}}},[t._v("Αποστολή excel αρχείου")])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:14e3,color:t.snackbarColor,"multi-line":!0,"auto-height":!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[r("p",{staticClass:"pt-2"},[t._v(" "+t._s(t.snackbarText)+" ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);