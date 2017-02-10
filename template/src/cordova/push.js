{{#vuex}}
import store from '../store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import * as types from '../store/mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
class Notification {
  constructor (e) {
    this.foreground = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.sound = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.title = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.content = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.type = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.url = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this._original = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    this.coldstart = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    if (e) {
      // La aplicacion esta abierta y en pantalla
      this.foreground = e.additionalData.foreground{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.sound = e.additionalData.sound ? e.additionalData.sound : ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.title = e.title ? e.title : ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.content = e.body ? e.body : (e.message ? e.message : ''){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.type = e.additionalData.type ? e.additionalData.type : ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.url = e.additionalData.url ? e.additionalData.url : ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.coldstart = e.additionalData.coldstart{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this._original = e{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  init () {
    var push = window.PushNotification.init({
      android: {
        clearBadge: true,
        senderID: {{sender_id}},
        icon: 'icon',
        iconColor: '#6E00A0'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      },
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      },
      ios: {
        'sound': true,
        'alert': true,
        'badge': true,
        'clearBadge': true,
        'categories': {
        }
      },
      windows: {}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    // Registro Exitoso
    push.on('registration', function (data) {
      console.log('Device register successfully', data.registrationId){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      {{#vuex}}
      store.commit('cordova/' + types.CORDOVA_DEVICE_REGISTER, data.registrationId){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      {{/vuex}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    push.on('notification', function (data) {
      var n = new Notification(data){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      console.log('Notificacion recived', n){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    // Registro fail
    push.on('error', function (e, f) {
      console.log('notification error', e, f){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

