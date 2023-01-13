import { createStore } from 'vuex'

export default createStore({
  state: () =>({
    // Главная страница
    posts_list: [],
    // Авторы
    authors_list:[],
    // Общее
    is_login: false
  }),
  getters: {
    // Главная страница
    getPostList(state){
      return state.posts_list.posts
    },
    // Авторы
    getAuthors(state){
      return state.authors_list
    }
    // Общее
  },
  mutations: {
    // Главная страница
    setPosts(state, new_list) {
      state.posts_list = new_list
    },
    // Авторы
    setAuthors(state, new_list) {
      state.authors_list = new_list
    }
    // Общее
  },
  actions: {
    // Главная страница
    async fetchPosts(ctx){
      const result = await fetch('https://retakeweb2022.kreosoft.space/api/post')
      const posts = await result.json()

      ctx.commit('setPosts', posts)
    },
    // Авторы
    async fetchAuthors(ctx){
      const result = await fetch('https://retakeweb2022.kreosoft.space/api/author/list')
      const authors = await result.json()

      ctx.commit('setAuthors', authors)
    }

    // Общее
  },
  modules: {

  }
})
