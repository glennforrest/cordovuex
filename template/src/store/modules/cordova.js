import * as types from '../mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// initial state
const state = {
  deviceReady: false,
  deviceOnline: false,
  device: null,
  deviceId: null{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// getters
const getters = {
  device: state => state.device,
  networkState: state => state.deviceOnline,
  deviceReady: state => state.deviceReady,
  deviceId: state => state.deviceId{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// actions
const actions = {

}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// mutations
const mutations = {
  [types.CORDOVA_DEVICEREADY] (state) {
    state.deviceReady = true
  },
  [types.CORDOVA_ONLINE] (state) {
    state.deviceOnline = true
  },
  [types.CORDOVA_OFFLINE] (state) {
    state.deviceOnline = false
  },
  [types.CORDOVA_SET_DEVICE] (state, device) {
    state.device = device
  },
  [types.CORDOVA_DEVICE_REGISTER] (state, id) {
    state.deviceId = id
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
