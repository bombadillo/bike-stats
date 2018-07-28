// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/header/Header'
import Hamburger from './components/header/Hamburger'
import HeaderMobileMenu from './components/header/HeaderMobileMenu'

Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('Hamburger', Hamburger)
Vue.component('HeaderMobileMenu', HeaderMobileMenu)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
