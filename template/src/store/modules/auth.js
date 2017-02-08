
import * as types from '../mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import api from 'services/api'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// initial state
// shape: [{ id, quantity }]
const state = {
    user:null,
    token:null,
    checkoutStatus: null,
    auth: false{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// getters
const getters = {
    getUser: state => state.user,
    getToken: state => state.token,
    checkLogin: state => state.auth{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// actions
const actions = {
    loggin ({ commit, state },credentials) { 
        commit(types.AUTH_REQUESTING){{#if_eq lintConfig "airbnb"}};{{/if_eq}}     
        api.$auth.login(credentials)
                 .done((data) => commit(types.AUTH_SUCCESS, data))
                 .fail(() => commit(types.AUTH_FAIL)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// mutations
const mutations = {
    [types.AUTH_REQUESTING] (state) {
        state.checkoutStatus = 'requesting'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    [types.AUTH_FAIL] (state) {
        state.checkoutStatus = null{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    [types.AUTH_SUCCESS] (state, {user,token} ) {
        state.user = user{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        state.token = token{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        state.auth = true{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        state.checkoutStatus = null{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}