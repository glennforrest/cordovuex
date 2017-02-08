import Auth from './auth.js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

let Api = {
  $auth: Auth{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default Api{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
