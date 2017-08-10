import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
var WebFont = require('webfontloader');

WebFont.load({
  typekit: {
    id: 'umg8lyi'
  },
  loading: function() {
    console.log("web fonts loaded");
  }
});

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
