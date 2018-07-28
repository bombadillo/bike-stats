import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import StravaGetAuth from '@/components/strava/StravaGetAuth'
import StravaAuthorised from '@/components/strava/StravaAuthorised'
import Profile from '@/components/profile/Profile'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: '/bikestats/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        guest: true
      }
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/strava/getauth',
      name: 'StravaGetAuth',
      component: StravaGetAuth,
      meta: {
        guest: true
      }
    },
    {
      path: '/strava/authorised',
      name: 'StravaAuthorised',
      component: StravaAuthorised,
      meta: {
        guest: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
