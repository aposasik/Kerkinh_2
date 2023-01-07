
import Vue from 'vue'
import VueGeolocation from 'vue-browser-geolocation'

Vue.use(VueGeolocation);

export default new Vue({
    methods: {
        recenterMapLocation () {
            this.$emit('recenterMapLocation')
        }
    }
})