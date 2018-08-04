// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/header/Header'
import Hamburger from './components/header/Hamburger'
import HeaderMobileMenu from './components/header/HeaderMobileMenu'
import StravaGetAuth from './components/strava/StravaGetAuth'
import Profile from './components/profile/Profile'
import Card from './components/elements/Card'
import StravaRedirect from './components/strava/StravaRedirect'
import Dashboard from './components/dashboard/Dashboard'
import RecentStats from './components/stats/RecentStats'
import VueContentPlaceholders from 'vue-content-placeholders'
import Logout from './components/Logout'
import Bikes from './components/bikes/Bikes'
import Loading from './components/loading/Loading'
import LatestActivity from './components/latestActivity/LatestActivity'

import store from './store'

Vue.config.productionTip = false
Vue.use(VueContentPlaceholders)

Vue.component('Header', Header)
Vue.component('Hamburger', Hamburger)
Vue.component('HeaderMobileMenu', HeaderMobileMenu)
Vue.component('StravaGetAuth', StravaGetAuth)
Vue.component('Profile', Profile)
Vue.component('Card', Card)
Vue.component('StravaRedirect', StravaRedirect)
Vue.component('Dashboard', Dashboard)
Vue.component('RecentStats', RecentStats)
Vue.component('Logout', Logout)
Vue.component('Bikes', Bikes)
Vue.component('Loading', Loading)
Vue.component('LatestActivity', LatestActivity)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
