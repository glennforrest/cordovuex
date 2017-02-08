import * as types from './mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const dummy = ({ commit }) => {
  console.log('Dummy actions'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}