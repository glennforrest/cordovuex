import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from 'components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Admin from 'components/Admin'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import m from './middleware.js'

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      beforeEnter: m.auth,
      component: Admin{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
