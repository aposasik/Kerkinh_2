(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{388:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"Δειγματοληψίες Χ Πιέσεων Δείγματος Θηλαστικών - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης",meta:[{hid:"description",name:"description",content:"Αναζήτηση Δειγματοληψιών Χ Πιέσεων συνδεδεμένων με συγκεκριμένο Δείγμα Θηλαστικών για τον Φορέα Διαχείρισης Λίμνης Κερκίνης."}]}},data:function(){return{main:{title:"Αναζήτηση Δειγμάτων X Πιέσεων του δείγματος",emptyElements:"Δεν υπάρχουν αποθηκευμένα δεδομένα"},noElements:null,returnedData:{},numberOfElements:0,loading:null,snackbar:!1,snackbarText:"",snackbarColor:""}},computed:{searchUrl:function(){return this.$store.getters.getOrnithopanidaXPressThreatsByDeigmaOrnithopanidaIdIs},id:function(){return this.$route.params.id}},mounted:function(){this.restCall()},methods:{goBack:function(){this.$router.push("/ornithopanida/deigma-ornithopanida/"+this.id)},restCall:function(){var t=this;this.loading=!0,this.$axios.get(this.searchUrl+"/"+this.id).then((function(e){0==e.data.length?(t.noElements=!0,t.snackbarColor="red",t.snackbarText="Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της αναζήτησης",t.snackbar=!0):(t.noElements=!1,t.returnedData=e.data,t.numberOfElements=e.data.length),t.loading=!1})).catch((function(e){throw t.loading=!1,t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο σφάλμα στην αναζήτηση",t.snackbar=!0,e}))},toIdPage:function(t){this.$router.push("/ornithopanida/deigma-ornithopanida-x-press-threats/"+t)}}},l=n(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-btn",{staticClass:"mt-4 mb-3",staticStyle:{"text-transform":"none"},attrs:{dark:"",round:"",color:"light-green lighten-2",title:"Πλοήγηση πίσω στη σελίδα του δείγματος"},on:{click:t.goBack}},[n("v-icon",[t._v("arrow_back_ios")]),t._v("Πίσω")],1),t._v(" "),n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[n("h2",{staticClass:"headline"},[t._v(" "+t._s(t.main.title)+" ")])]),t._v(" "),1==t.loading?n("v-flex",{staticClass:"text-xs-center mt-5",attrs:{xs8:"",sm6:"",md2:""}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"45",color:"green lighten-1"}})],1):t._e(),t._v(" "),1==t.noElements?n("v-flex",{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{xs12:"",lg11:""}},[n("h3",{staticClass:"font-weight-regular"},[t._v(" "+t._s(t.main.emptyElements)+" ")])]):0==t.noElements?n("v-flex",{staticStyle:{"margin-top":"100px"},attrs:{xs12:"",lg10:""}},[n("div",[n("h3",{staticClass:"my-4 text-xs-center text-md-left font-weight-regular"},[t._v("Σύνολο Δειγμάτων X Πιέσεων του δείγματος : "+t._s(this.numberOfElements)+" ")])]),t._v(" "),t._l(t.returnedData,(function(e){return n("div",{key:e.id,staticClass:"my-5"},[n("v-card",{attrs:{"my-2":""}},[n("div",{staticClass:"green lighten-4",staticStyle:{width:"100%",height:"7px"}}),t._v(" "),n("div",{staticClass:"pa-4"},[n("v-layout",{attrs:{wrap:"","justify-space-around":""}},[n("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[n("v-text-field",{attrs:{label:"Δείγμα Θηλαστικών Id",color:"green",readonly:""},model:{value:e.deigmaornithopanidaID,callback:function(n){t.$set(e,"deigmaornithopanidaID",n)},expression:"deigmaXPressThreat.deigmaornithopanidaID"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[n("v-text-field",{attrs:{label:"Ct Πίεσης",color:"green",readonly:""},model:{value:e.ctActCode,callback:function(n){t.$set(e,"ctActCode",n)},expression:"deigmaXPressThreat.ctActCode"}})],1)],1),t._v(" "),n("v-layout",{attrs:{wrap:"","justify-space-around":""}},[n("v-flex",{attrs:{xs12:"",md4:"",lg3:"","my-4":""}},[n("v-text-field",{attrs:{label:"Κωδικός είδους",color:"green",readonly:""},model:{value:e.kodikos,callback:function(n){t.$set(e,"kodikos",n)},expression:"deigmaXPressThreat.kodikos"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md4:"",lg3:"","my-4":""}},[n("v-text-field",{attrs:{label:"Τύπος πίεσης",color:"green",readonly:""},model:{value:e.type,callback:function(n){t.$set(e,"type",n)},expression:"deigmaXPressThreat.type"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",md6:"",lg3:"","my-4":""}},[n("v-text-field",{attrs:{label:"Σημασία",color:"green",readonly:""},model:{value:e.importance,callback:function(n){t.$set(e,"importance",n)},expression:"deigmaXPressThreat.importance"}})],1)],1),t._v(" "),n("v-layout",[n("h3",{staticClass:"font-weight-medium mt-2"},[t._v("Id: "+t._s(e.id)+" ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"green",dark:""},on:{click:function(n){return t.toIdPage(e.id)}}},[t._v("Εμφάνιση")])],1)],1)])],1)}))],2):t._e()],1),t._v(" "),n("v-snackbar",{attrs:{timeout:14e3,color:t.snackbarColor,"multi-line":!0,"auto-height":!0},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("p",{staticClass:"pt-2"},[t._v(" "+t._s(t.snackbarText)+" ")])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);