(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{260:function(t,e,r){var content=r(286);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("584d3ae5",content,!0,{sourceMap:!1})},285:function(t,e,r){"use strict";r(260)},286:function(t,e,r){(e=r(40)(!1)).push([t.i,".dropperPlace{margin-top:20px;background-color:#fff;transition:.15s linear;color:grey;display:flex;justify-content:center;align-items:center;box-shadow:0 3px 5px #aaa;position:relative}.dropperPlace,.inputPlace{height:30vh;width:100%;border-radius:20px}.inputPlace{opacity:0;position:absolute}.dropperPlace:hover{background-color:#eee;transition:.15s linear}",""]),t.exports=e},327:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"Πρωτόκολλο - Δημιουργία | Φορέας Διαχείρισης Λίμνης Κερκίνης",meta:[{hid:"description",name:"description",content:"Δημιουργία και αποθήκευση νέων δεδομένων τύπου Πρωτοκόλλου -μέσω φόρμας ή αρχείου excel- για τον Φορέα Διαχείρισης Λίμνης Κερκίνης."}]}},data:function(){return{main:{title:"Εγγραφή νέου πρωτοκόλλου",titleForm:"Για εγγραφή μέσω φόρμας συμπληρώστε παρακάτω",titleExcel:"Για εγγραφές μέσω excel (.xlsx) αρχείου εισάγετε το αρχείο",subTitleExcel:"Πατήστε για να επιλέξετε ή μεταφέρετε εδώ το excel"},form:{perigrafh:"",pinakasDedomenwn:"",parathuroDedomenwn:""},validation:!1,perigrafhRules:[function(t){return!!t||"Συμπληρώστε το πεδίο περιγραφή"},function(t){return t.length<=255||"Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες"}],parathuroRules:[function(t){return t.length<=255||"Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες"}],pinakasRules:[function(t){return t.length<=255||"Το πεδίο πρέπει να είναι λιγότερο από 255 χαρακτήρες"}],selectedFile:null,snackbar:!1,snackbarText:"",snackbarColor:""}},computed:{addFormUrl:function(){return this.$store.getters.getPrwtokolaAddUrl},addFromExcelUrl:function(){return this.$store.getters.getPrwtokolaAddFromExcelUrl},validationExcelInput:function(){return null!=this.selectedFile}},methods:{submitTimeout:function(){var t=this;this.validation=!1,setTimeout((function(){t.validation=t.$refs.form.validate()}),1e4)},submitForm:function(){var t=this,e={perigrafh:null,pinakasDedomenwn:null,parathuroDedomenwn:null};""==!this.form.perigrafh&&(e.perigrafh=this.form.perigrafh),""==!this.form.pinakasDedomenwn&&(e.pinakasDedomenwn=this.form.pinakasDedomenwn),""==!this.form.parathuroDedomenwn&&(e.parathuroDedomenwn=this.form.parathuroDedomenwn),this.$axios.post(this.addFormUrl,e).then((function(e){t.$router.push("/prwtokola/"+e.data.id)})).catch((function(e){throw t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο πρόβλημα με την νέα εγγραφή με αποτέλεσμα να ακυρωθεί",t.snackbar=!0,t.submitTimeout(),e}))},selectExcel:function(t){this.selectedFile=t},removeFile:function(){this.selectedFile=null,this.$refs.inputFile.value=""},submitExcel:function(){var t=this,e=new FormData;e.append("file",this.selectedFile),this.$axios.post(this.addFromExcelUrl,e).then((function(e){1==e.data?(t.snackbarColor="success",t.snackbarText="Το αρχείο στάλθηκε και οι νέες εγγραφές δημιουργήθηκαν επιτυχώς",t.snackbar=!0,t.removeFile()):0==e.data&&(t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε",t.snackbar=!0)})).catch((function(e){t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο σφάλμα με το αρχείο που στείλατε",t.snackbar=!0}))}}},o=(r(285),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[r("h2",{staticClass:"headline"},[t._v(" "+t._s(t.main.title)+" ")])]),t._v(" "),r("v-flex",{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{xs12:""}},[r("h2",{staticClass:"font-weight-thin"},[r("v-icon",{attrs:{large:"",color:"green"}},[t._v("list_alt")]),t._v(" "+t._s(t.main.titleForm)+" ")],1)]),t._v(" "),r("v-card",{staticClass:"my-4",staticStyle:{width:"100%"}},[r("div",{staticClass:"green lighten-4",staticStyle:{width:"100%",height:"8px"}}),t._v(" "),r("v-form",{ref:"form",staticClass:"py-5 px-4",model:{value:t.validation,callback:function(e){t.validation=e},expression:"validation"}},[r("v-layout",{attrs:{wrap:"","justify-space-between":""}},[r("v-flex",{attrs:{xs12:"",md5:"",xl3:"","my-3":""}},[r("v-textarea",{attrs:{label:"Περιγραφή",color:"green",counter:255,rules:t.perigrafhRules,required:"",rows:"6"},model:{value:t.form.perigrafh,callback:function(e){t.$set(t.form,"perigrafh",e)},expression:"form.perigrafh"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md5:"",xl3:"","my-3":""}},[r("v-textarea",{attrs:{label:"Πίνακας δεδομένων",color:"green",counter:255,rules:t.pinakasRules,rows:"6"},model:{value:t.form.pinakasDedomenwn,callback:function(e){t.$set(t.form,"pinakasDedomenwn",e)},expression:"form.pinakasDedomenwn"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md12:"",xl3:"","my-3":""}},[r("v-textarea",{attrs:{label:"Παράθυρο δεδομένων",color:"green",counter:255,rules:t.parathuroRules,rows:"6"},model:{value:t.form.parathuroDedomenwn,callback:function(e){t.$set(t.form,"parathuroDedomenwn",e)},expression:"form.parathuroDedomenwn"}})],1)],1),t._v(" "),r("v-layout",{attrs:{"justify-space-around":"","mt-5":""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs6:"",md5:""}},[r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{disabled:!t.validation,color:"green lighten-2 white--text"},on:{click:t.submitForm}},[t._v("\n                Εγγραφή\n            ")])],1)],1)],1)],1),t._v(" "),r("v-flex",{staticClass:"text-md-left text-xs-center",staticStyle:{"margin-top":"150px"},attrs:{xs12:""}},[r("h2",{staticClass:"font-weight-thin"},[r("v-icon",{attrs:{large:"",color:"green"}},[t._v("cloud_upload")]),t._v(" "+t._s(t.main.titleExcel)+" ")],1)]),t._v(" "),r("div",{staticClass:"dropperPlace"},[null!=t.selectedFile?r("v-icon",{staticStyle:{position:"absolute",color:"red","z-index":"1",top:"25px",right:"25px"},on:{click:function(e){return t.removeFile()}}},[t._v("close")]):t._e(),t._v(" "),r("input",{ref:"inputFile",staticClass:"inputPlace",attrs:{type:"file"},on:{change:function(e){return t.selectExcel(e.target.files[0])}}}),t._v(" "),null!=t.selectedFile?r("p",[t._v(" "+t._s(t.selectedFile.name)+" ")]):r("p",{staticClass:"pa-4"},[t._v(" "+t._s(t.main.subTitleExcel)+" ")])],1),t._v(" "),r("v-btn",{staticClass:"mt-4",staticStyle:{"text-transform":"none"},attrs:{disabled:!t.validationExcelInput,color:"green lighten-2 white--text"},on:{click:function(e){return t.submitExcel()}}},[t._v("Αποστολή excel αρχείου")])],1),t._v(" "),r("v-snackbar",{attrs:{timeout:14e3,color:t.snackbarColor,"multi-line":!0,"auto-height":!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[r("p",{staticClass:"pt-2"},[t._v(" "+t._s(t.snackbarText)+" ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);