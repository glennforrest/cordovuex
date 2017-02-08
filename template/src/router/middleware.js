{{#vuex}}
import store from '../store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

export default {
  auth (to, from, next) {
    {{#vuex}}
    if (store.getters['auth/checkLogin']) {
      next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    } else {
      next('/'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
    {{else}}
      next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    {{/vuex}}
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
