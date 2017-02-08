/*
    Vue Plugin
    Install all services on Vue System
*/

import Network from './network.js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Auth from './auth.js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Api from './api'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

function plugin (Vue) {

  if (plugin.installed) {
      return{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }

  Vue.prototype.$network = Network{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.prototype.$auth = Auth{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  Vue.prototype.$api = Api{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default plugin{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
