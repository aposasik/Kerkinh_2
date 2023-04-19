exports.ids = [43,46];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_browser_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var vue_browser_geolocation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_browser_geolocation__WEBPACK_IMPORTED_MODULE_1__);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_browser_geolocation__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  methods: {
    recenterMapLocation() {
      this.$emit('recenterMapLocation');
    }

  }
}));

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/deigma-ornithopanida/map.vue?vue&type=template&id=0c56a280&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1>Your coordinates</h1> <p>"+_vm._ssrEscape(_vm._s(_vm.coordinates.lat)+" Latitude, "+_vm._s(_vm.coordinates.lng)+" Longitude")+"</p> "),_c('GmapMap',{staticStyle:{"width":"1920px","height":"850px"},attrs:{"center":_vm.coordinates,"zoom":_vm.zoom,"map-type-id":"terrain"},on:{"update:center":function($event){_vm.coordinates=$event},"update:zoom":function($event){_vm.zoom=$event}}},_vm._l((_vm.mapMarkers),function(marker){return _c('GmapMarker',{key:marker.id,attrs:{"title":marker.title,"animation":marker.animation,"icon":marker.icon,"position":_vm.coordinates}})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/map.vue?vue&type=template&id=0c56a280&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: ./pages/ornithopanida/eventBus.js
var eventBus = __webpack_require__(101);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ornithopanida/deigma-ornithopanida/map.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var mapvue_type_script_lang_js_ = ({
  data() {
    return {
      mapCenter: {
        lat: 0,
        lng: 0
      },
      mapTypeId: "terrain",
      zoom: 14,
      coordinates: {
        lat: 0,
        lng: 0
      },
      mapMarkers: [{
        position: {
          lat: 0,
          lng: 0
        }
      }],
      mapMarkerIconSize: null,
      ignoreCenterOnSelectedStore: false
    };
  },

  computed: {
    selectedLocation() {
      return this.$store.getters.selectedLocation;
    },

    selectedStore: {
      get() {
        return this.$store.getters.selectedStore;
      },

      set(value) {
        this.updateSelectedStore(value);
      }

    },

    stores() {
      return this.$store.getters.stores;
    },

    mapIcons() {
      return this.$store.getters.mapIcons;
    }

  },

  created() {
    this.$getLocation({}).then(coordinates => {
      this.coordinates = coordinates;
    });
  }

});
// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/map.vue?vue&type=script&lang=js&
 /* harmony default export */ var deigma_ornithopanida_mapvue_type_script_lang_js_ = (mapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/ornithopanida/deigma-ornithopanida/map.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  deigma_ornithopanida_mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "36bab826"
  
)

/* harmony default export */ var map = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=map.js.map