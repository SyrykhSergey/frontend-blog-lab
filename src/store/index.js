import { createStore } from 'vuex'

export default createStore({
  state: () =>({
    // Главная страница
    posts_list: [],

    // Общее
    is_login: false
  }),
  getters: {
    // Главная страница
    getPostList(state){
      return state.posts_list.posts
    }
    // Общее
  },
  mutations: {
    // Главная страница
    setPosts(state, new_list) {
      state.posts_list = new_list
    }
    // Общее
  },
  actions: {
    // Главная страница
    async fetchPosts(ctx){
      const result = await fetch('https://retakeweb2022.kreosoft.space/api/post')
      const posts = await result.json()

      ctx.commit('setPosts', posts)
    }

    // Общее
  },
  modules: {

  }
})
