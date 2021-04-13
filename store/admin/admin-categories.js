export const state = () => ({
  totalCategories:0,
  categories:[],
  currentSortKey: null
})

export const getters = {
  totalCategories:(state) => {
    return state.totalCategories
  },
  allCategories:(state) => {
    return state.categories
  },
}

export const mutations = {
  SET_CATEGORIES(state, payload, sortKey = null){
    state.categories = payload
  },
  SET_CATEGORY(state, payload) {
    state.categories.push(payload)
    state.totalCategories++;
  },
  SET_TOTAL(state, payload){
    state.totalCategories = payload
  },

  DELETE_CATEGORY(state, payload) {

  }
}

export const actions = {
  categories({commit}, payload){
    commit('SET_CATEGORIES', payload)
  },
  totalCategories({ commit}, payload){
    commit('SET_TOTAL', payload)
  },

  clear({commit}){
    commit('SET_TOTAL', 0)
    commit('SET_CATEGORIES', [])
  }
}
