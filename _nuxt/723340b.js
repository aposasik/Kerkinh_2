(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{227:function(e,t,r){"use strict";var n=r(6),o=r(21),l=r(29),c=r(133),d=r(68),m=r(12),v=r(53).f,f=r(69).f,x=r(11).f,h=r(228).trim,y=n.Number,_=y,k=y.prototype,E="Number"==l(r(88)(k)),S="trim"in String.prototype,N=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,l=(t=S?t.trim():h(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,m=c.length;i<m;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof y&&(E?m((function(){k.valueOf.call(r)})):"Number"!=l(r))?c(new _(N(t)),r,y):N(t)};for(var w,P=r(10)?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;P.length>$;$++)o(_,w=P[$])&&!o(y,w)&&x(y,w,f(_,w));y.prototype=k,k.constructor=y,r(13)(n,"Number",y)}},228:function(e,t,r){var n=r(8),o=r(30),l=r(12),c=r(229),d="["+c+"]",m=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),f=function(e,t,r){var o={},d=l((function(){return!!c[e]()||"​"!="​"[e]()})),m=o[e]=d?t(x):c[e];r&&(o[r]=m),n(n.P+n.F*d,"String",o)},x=f.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(m,"")),2&t&&(e=e.replace(v,"")),e};e.exports=f},229:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},354:function(e,t,r){"use strict";r.r(t);r(227);var n={head:function(){return{title:"Δείγματα Ορνιθοπανίδας - Αναζήτηση | Φορέας Διαχείρισης Λίμνης Κερκίνης",meta:[{hid:"description",name:"description",content:"Αναζήτηση (δεδομένων) Δειγμάτων Ορνιθοπανίδας για τον Φορέα Διαχείρισης Λίμνης Κερκίνης."}]}},data:function(){return{main:{title:"Αναζήτηση Δειγμάτων Ορνιθοπανίδας",emptyElements:"Δεν υπάρχουν αποθηκευμένα δεδομένα"},noElements:null,returnedData:{},page:null,numberOfElements:0,prevPage:!1,nextPage:!1,totalPages:0,totalElements:0,size:null,loading:null,snackbar:!1,snackbarText:"",snackbarColor:""}},computed:{searchUrl:function(){return this.$store.getters.getDeigmaOrnithopanidaSearchUrl},paramPage:function(){return Number(this.$route.params.number)},currentPage:function(){return this.$route.params.number-1}},mounted:function(){this.restCall(this.currentPage)},methods:{checkForPrevPage:function(e){this.prevPage=0!=e},checkForNextPage:function(e){this.nextPage=1!=e},restCall:function(e){var t=this;this.loading=!0,this.$axios.get(this.searchUrl+"/"+e).then((function(e){0==e.data.totalElements?(t.noElements=!0,t.snackbarColor="red",t.snackbarText="Δεν βρέθηκαν αποθηκευμένα δεδομένα μέσω της αναζήτησης",t.snackbar=!0):0!=e.data.totalElements&&0==e.data.numberOfElements?t.noElements=!0:(t.noElements=!1,t.returnedData=e.data,t.checkForPrevPage(e.data.pageable.pageNumber),t.checkForNextPage(e.data.last)),t.loading=!1})).catch((function(e){throw t.loading=!1,t.snackbarColor="red",t.snackbarText="Υπήρξε κάποιο σφάλμα στην αναζήτηση",t.snackbar=!0,e}))},toIdPage:function(e){this.$router.push("/ornithopanida/deigma-ornithopanida/"+e)},getPrevPage:function(){this.$router.push("/ornithopanida/deigma-ornithopanida/search/page/"+(this.paramPage-1))},getNextPage:function(){this.$router.push("/ornithopanida/deigma-ornithopanida/search/page/"+(this.paramPage+1))}}},o=r(4),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[r("h2",{staticClass:"headline"},[e._v(" "+e._s(e.main.title)+" ")])]),e._v(" "),1==e.loading?r("v-flex",{staticClass:"text-xs-center mt-5",attrs:{xs8:"",sm6:"",md2:""}},[r("v-progress-circular",{attrs:{indeterminate:"",size:"45",color:"green lighten-1"}})],1):e._e(),e._v(" "),1==e.noElements?r("v-flex",{staticClass:"text-xs-center text-md-left",staticStyle:{"margin-top":"130px"},attrs:{xs12:"",lg11:""}},[r("h3",{staticClass:"font-weight-regular"},[e._v(" "+e._s(e.main.emptyElements)+" ")])]):0==e.noElements?r("v-flex",{staticStyle:{"margin-top":"100px"},attrs:{xs12:"",lg10:""}},[r("div",[r("h3",{staticClass:"my-4 text-xs-center text-md-left font-weight-regular"},[e._v("Σύνολο Δειγμάτων θηλαστικών : "+e._s(this.returnedData.totalElements)+" ")])]),e._v(" "),e._l(e.returnedData.content,(function(t){return r("div",{key:t.id,staticClass:"my-5"},[r("v-card",{attrs:{"my-2":""}},[r("div",{staticClass:"green lighten-4",staticStyle:{width:"100%",height:"8px"}}),e._v(" "),r("div",{staticClass:"pa-4"},[r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Κωδικός δειγματοληψίας",color:"green",counter:255,readonly:"",required:""},model:{value:t.kodikosDeigmatolipsias,callback:function(r){e.$set(t,"kodikosDeigmatolipsias",r)},expression:"deigma.kodikosDeigmatolipsias"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Χρηματοδότηση",color:"green",counter:255,readonly:""},model:{value:t.xrhmatodothsh,callback:function(r){e.$set(t,"xrhmatodothsh",r)},expression:"deigma.xrhmatodothsh"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Ερευνητής",color:"green","append-icon":"account_box",counter:255,readonly:""},model:{value:t.ereunhths,callback:function(r){e.$set(t,"ereunhths",r)},expression:"deigma.ereunhths"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Τοποθεσία",color:"green","append-icon":"location_searching",counter:255,readonly:""},model:{value:t.topothesia,callback:function(r){e.$set(t,"topothesia",r)},expression:"deigma.topothesia"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Ημερομηνία (Έτος-Μήνας-Ημέρα)",color:"green","append-icon":"date_range",hint:"YYYY-MM-DD | Παράδειγμα 2019-06-23",readonly:""},model:{value:t.date,callback:function(r){e.$set(t,"date",r)},expression:"deigma.date"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Ώρα",color:"green","append-icon":"access_time",hint:"HH:MM:SS | Παράδειγμα 20:32:10",readonly:""},model:{value:t.time,callback:function(r){e.$set(t,"time",r)},expression:"deigma.time"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Διάρκεια",color:"green",counter:40,readonly:""},model:{value:t.diarkeia,callback:function(r){e.$set(t,"diarkeia",r)},expression:"deigma.diarkeia"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Επιφάνεια δειγματοληψίας",color:"green",counter:255,readonly:""},model:{value:t.epifaneiaDeigmatolhpsias,callback:function(r){e.$set(t,"epifaneiaDeigmatolhpsias",r)},expression:"deigma.epifaneiaDeigmatolhpsias"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Τύπος βλάστησης",color:"green",counter:255,readonly:""},model:{value:t.tuposVlasthshs,callback:function(r){e.$set(t,"tuposVlasthshs",r)},expression:"deigma.tuposVlasthshs"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Τύπος οικοτόπου",color:"green",counter:255,readonly:""},model:{value:t.tuposOikotopou,callback:function(r){e.$set(t,"tuposOikotopou",r)},expression:"deigma.tuposOikotopou"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Γεωγραφικό πλάτος EGSA",color:"green","append-icon":"edit_location",counter:255,readonly:""},model:{value:t.latitudeEGSA,callback:function(r){e.$set(t,"latitudeEGSA",r)},expression:"deigma.latitudeEGSA"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Γεωγραφικό μήκος EGSA",color:"green","append-icon":"edit_location",counter:255,readonly:""},model:{value:t.longitudeEGSA,callback:function(r){e.$set(t,"longitudeEGSA",r)},expression:"deigma.longitudeEGSA"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Γεωγραφικό πλάτος WGS84",color:"green","append-icon":"edit_location",counter:255,readonly:""},model:{value:t.latitudeWGS84,callback:function(r){e.$set(t,"latitudeWGS84",r)},expression:"deigma.latitudeWGS84"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Γεωγραφικό μήκος WGS84",color:"green","append-icon":"edit_location",counter:255,readonly:""},model:{value:t.longitudeWGS84,callback:function(r){e.$set(t,"longitudeWGS84",r)},expression:"deigma.longitudeWGS84"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Κελί πλέγματος",color:"green",counter:30,readonly:""},model:{value:t.gridCell,callback:function(r){e.$set(t,"gridCell",r)},expression:"deigma.gridCell"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Κωδικός Natura",color:"green",counter:40,readonly:""},model:{value:t.kodikosNatura,callback:function(r){e.$set(t,"kodikosNatura",r)},expression:"deigma.kodikosNatura"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Μέθοδος δειγματοληψίας",color:"green",counter:255,readonly:""},model:{value:t.methodosDeigmatolhpsias,callback:function(r){e.$set(t,"methodosDeigmatolhpsias",r)},expression:"deigma.methodosDeigmatolhpsias"}})],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md4:"","my-4":""}},[r("v-text-field",{attrs:{label:"Νομός",color:"green",counter:255,readonly:""},model:{value:t.nomos,callback:function(r){e.$set(t,"nomos",r)},expression:"deigma.nomos"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:"","justify-space-around":""}},[r("v-flex",{attrs:{xs12:"",md8:"","my-4":""}},[r("v-textarea",{attrs:{label:"Παρατηρήσεις",color:"green",counter:255,readonly:"",rows:"6"},model:{value:t.parathrhseis,callback:function(r){e.$set(t,"parathrhseis",r)},expression:"deigma.parathrhseis"}})],1)],1),e._v(" "),r("v-layout",[r("h3",{staticClass:"font-weight-medium mt-2"},[e._v("Id: "+e._s(t.id)+" ")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{color:"green",dark:""},on:{click:function(r){return e.toIdPage(t.id)}}},[e._v("Εμφάνιση")])],1)],1)])],1)})),e._v(" "),0==e.noElements?r("div",{staticStyle:{"margin-top":"100px","margin-bottom":"20px"}},[r("v-layout",[r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{disabled:!e.prevPage,color:"green",flat:"",title:"Προηγούμενη σελίδα"},on:{click:e.getPrevPage}},[r("v-icon",{attrs:{left:""}},[e._v("arrow_back")]),e._v("\n            Σελίδα\n          ")],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticStyle:{"text-transform":"none"},attrs:{disabled:!e.nextPage,color:"green",flat:"",title:"Επόμενη σελίδα"},on:{click:e.getNextPage}},[e._v("\n            Σελίδα\n            "),r("v-icon",{attrs:{right:""}},[e._v("arrow_forward")])],1)],1)],1):e._e()],2):e._e()],1),e._v(" "),r("v-snackbar",{attrs:{timeout:14e3,color:e.snackbarColor,"multi-line":!0,"auto-height":!0},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[r("p",{staticClass:"pt-2"},[e._v(" "+e._s(e.snackbarText)+" ")])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);