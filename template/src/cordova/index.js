{{#vuex}}
import store from '../store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as types from '../store/mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

import push from './push.js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

let onDeviceReady = () => {
  console.log('Device ready'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  {{#vuex}}
  store.commit('cordova/' + types.CORDOVA_DEVICEREADY){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  store.commit('cordova/' + types.CORDOVA_SET_DEVICE, window.device){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  {{/vuex}}
  if (window.PushNotification) {
    push.init(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

let onOnline = () => {
  console.log('Device online'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  {{#vuex}}
  store.commit('cordova/' + types.CORDOVA_ONLINE){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  {{/vuex}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

let onOffline = () => {
  console.log('Device offline'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  {{#vuex}}
  store.commit('cordova/' + types.CORDOVA_OFFLINE){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  {{/vuex}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//  cordova.fireDocumentEvent('backbutton'); for testing in console
let onBackbutton = () => {
  console.log('Backbutton'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

let onPause = () => {

}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

let onResumen = () => {

}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

document.addEventListener('deviceready', onDeviceReady, false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
document.addEventListener('online', onOnline, false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
document.addEventListener('offline', onOffline, false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
document.addEventListener('backbutton', onBackbutton, false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
document.addEventListener('pause', onPause, false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
document.addEventListener('resumen', onResumen, false){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
