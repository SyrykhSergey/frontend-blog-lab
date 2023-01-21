import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: () =>({
    // Главная страница
    posts_list: [],
    pagesList: [],
    paginationArr: [],
    post: [],
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
    getPost(state){
      return state.post
    },
    getPagination(state){
      return state.posts_list.pagination
    },
    getPaginationArr(state){
      return state.paginationArr
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
      const num = Number(new_list.pagination.count)
      let arr = [];
      for(let i = 0; i < num; i++){
        arr.push(i+1);
      }
      state.paginationArr = arr
    },
    setPost(state, new_post) {
      state.post = new_post
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
    fetchThePost(ctx, id){
      let url = 'https://retakeweb2022.kreosoft.space/api/post/' + id
      axios.get(url)
          .then(response => {
            ctx.commit('setPost', response.data)

          })
          .catch(e => {
            console.log(e)
          })
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
