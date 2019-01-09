import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'

import App from './App.vue'

Vue.use(Vuetify, {
  iconfont: 'md',
})

Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyDyJUwEpWPLTDZrX9TVeq5m8vGQScqyZCA'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')