import * as types from './mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const dummy = ({ commit }) => {
  console.log('Dummy actions' + types.AUTH_SUCCESS){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
