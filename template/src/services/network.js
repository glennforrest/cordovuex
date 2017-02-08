import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#vuex}}
import store from '../store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}

const API_URL = process.env.API_URL{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

module.exports =   { 
  getAuthHeader() {
    {{#vuex}}
    return {
          'Authorization': 'Bearer ' + store.getters['auth/getToken']{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    {{else}}
    return {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    {{/vuex}}
  },
  get (url, params, headers = {}) {
    let authHeader = this.getAuthHeader(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    Object.assign(headers, authHeader){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    return Vue.http.get(
      API_URL + url,
      {
        params: params,
        headers: headers
      }
    ){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  post (url, body, headers = {}) {
    let authHeader = this.getAuthHeader(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    Object.assign(headers, authHeader)
    return Vue.http.post(
      API_URL + url,
      body,
      {
        headers: headers
      }
    ){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
