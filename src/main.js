import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ArticleForm from './components/ArticleForm.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'

// import mdiVue from 'mdi-vue/v2'
// import * as mdijs from '@mdi/js'

// json-server --port 10000 --delay 1000 --watch articles.json

Vue.component('ArticleForm', ArticleForm);
Vue.config.productionTip = false
Vue.use(VueAxios, axios)


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
