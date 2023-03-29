import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "animate.css/animate.css"
import BaseText from "./components/BaseText";

Vue.component("BaseText", BaseText)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
