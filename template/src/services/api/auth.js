import Network from '../network.js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  login (creds) {
        return Network.get("login", creds){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  register () {

  },
  logout () {

  },
  refresh () {

  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
