import { post } from "jquery"

export const state = () => ({
  totalPosts:0,
  perPagePosts:0,
  posts:[]
})

export const getters = {
  totalPosts:(state) => {
    return state.totalPosts
  },
  perPagePosts:(state) => {
    return state.perPagePosts
  },
  allPosts:(state) => {
    return state.posts
  },
  postStatus:(state) => (id) => {
    if(!state.posts) {
      return
    }
    let post = state.posts.find(post => post.id == id)

    return post.is_live;
  }
}

export const mutations = {
  SET_POSTS(state, payload){
    state.posts = payload
  },
  SET_TOTAL(state, payload){
    state.totalPosts = payload
  },
  SET_PER_PAGE(state, payload){
    state.perPagePosts = payload
  },
  SET_POST_STATUS(state, payload){
    let post = state.posts.find(post => post.id === payload.id)
    post.is_live = payload.state
  }
}

export const actions = {
  posts({commit}, payload){
    if(payload && payload.hasOwnProperty('data')){
      payload = payload.data
    }
    commit('SET_POSTS', payload)
  },
  totalPosts({ commit}, payload){
    if(payload && payload.hasOwnProperty('meta')){
      payload = payload.meta.total
    }
    commit('SET_TOTAL', payload)
  },
  perPagePosts({ commit}, payload){
    if(payload && payload.hasOwnProperty('meta')){
      payload = payload.meta.per_page
    }
    commit('SET_PER_PAGE', payload)
  },
  postStatus({commit}, payload){
    if(payload && payload.hasOwnProperty('id') && payload.hasOwnProperty('state')){
      commit('SET_POST_STATUS', payload);
    }
  },
  clear({commit}){
    commit('SET_TOTAL', 0)
    commit('SET_PER_PAGE', 0)
    commit('SET_POSTS', [])
  }
}
