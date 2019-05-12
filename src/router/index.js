import Vue from 'vue'
import Router from 'vue-router'
import Foo from '@/components/Foo'
import StravaGetAuth from '@/components/strava/StravaGetAuth'
import StravaAuthorised from '@/components/strava/StravaAuthorised'
import StravaRedirect from '@/components/strava/StravaRedirect'
import Profile from '@/components/profile/Profile'
import Logout from '@/components/Logout'
import Bikes from '@/components/bikes/Bikes'
import BikeDetails from '@/components/bike-details/BikeDetails'
import BikeCheckAdd from '@/components/bike-check-add/BikeCheckAdd'
import Dashboard from '@/components/dashboard/Dashboard'
import Activities from '@/components/activities/Activities'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: '/bikestats/',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
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
        requiresAuth: false
      }
    },
    {
      path: '/strava/authorised',
      name: 'StravaAuthorised',
      component: StravaAuthorised,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/strava/redirect',
      name: 'StravaRedirect',
      component: StravaRedirect,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/bikes',
      name: 'Bikes',
      component: Bikes,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/bike/:id',
      name: 'BikeDetails',
      component: BikeDetails,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/bike/:id/bikeCheck/add',
      name: 'BikeCheckAdd',
      component: BikeCheckAdd,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    let stravaAuthenticationToken = localStorage.getItem('stravaAccessToken')
    if (!stravaAuthenticationToken) {
      next({ name: 'StravaRedirect', replace: true })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
