import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import StravaGetAuth from '@/components/strava/StravaGetAuth'
import StravaAuthorised from '@/components/strava/StravaAuthorised'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/bikestats/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/strava/getauth',
      name: 'StravaGetAuth',
      component: StravaGetAuth
    },
    {
      path: '/strava/authorised',
      name: 'StravaAuthorised',
      component: StravaAuthorised
    }
  ]
})
