import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as actions from './actions'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as getters from './getters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import auth from './modules/auth'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import cordova from './modules/cordova'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
    cordova{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
