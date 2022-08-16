import { createStore } from 'vuex'

export default createStore({
  state: {
    searchQuery:''
  },
  mutations: {
    setSearchQuery(state, value){
      state.searchQuery = value
    }
  },
  actions: {
    setSearchQuery: function(context, value) {
      context.commit('setSearchQuery', value)
    },
  }
})
