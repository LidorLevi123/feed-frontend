import Vuex from 'vuex'

import { commentStore } from './comment.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    commentStore,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
