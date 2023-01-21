import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: () =>({
    // Главная страница
    posts_list: [],
    pagesList: [],
    paginationArr: [],
    post: [],
    top: [],
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
    },
    getTop(state){
      return state.top
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
      const arr = new_list
      let top = [];
      let maxPosts = 0;
      let maxLikes = 0;
      let maxAuthor = "";

      let secondMaxPosts = 0;
      let secondMaxLikes = 0;
      let secondMaxAuthor = "";

      let thirdMaxPosts = 0;
      let thirdMaxLikes = 0;
      let thirdMaxAuthor = "";

      arr.forEach(function (author)
      {
        if (author.posts >= maxPosts) {// first
          if (author.posts > maxPosts) {
            secondMaxPosts = maxPosts;
            secondMaxLikes = maxLikes;
            secondMaxAuthor = maxAuthor;

            maxPosts = author.posts;
            maxAuthor = author.fullName;
            maxLikes = author.Likes;
          } else {
            if (author.likes > maxLikes) {
              maxPosts = author.posts;
              maxAuthor = author.fullName;
              maxLikes = author.Likes;
            }
          }
        }else{
          if (author.posts >= secondMaxPosts) {// second
            if (author.posts > secondMaxPosts) {
              thirdMaxPosts = secondMaxPosts;
              thirdMaxLikes = secondMaxLikes;
              thirdMaxAuthor = secondMaxAuthor;

              secondMaxPosts = author.posts;
              secondMaxAuthor = author.fullName;
              secondMaxLikes = author.Likes;
            } else {
              if (author.likes > secondMaxLikes) {
                secondMaxPosts = author.posts;
                secondMaxAuthor = author.fullName;
                secondMaxLikes = author.Likes;
              }
            }
          }else{
            if (author.posts >= thirdMaxPosts) {// third
              if (author.posts > thirdMaxPosts) {
                thirdMaxPosts = author.posts;
                thirdMaxAuthor = author.fullName;
                thirdMaxLikes = author.Likes;
              } else {
                if (author.likes > thirdMaxLikes) {
                  thirdMaxPosts = author.posts;
                  thirdMaxAuthor = author.fullName;
                  thirdMaxLikes = author.Likes;
                }
              }
            }
          }
        }
      })
      top.push(maxAuthor, secondMaxAuthor, thirdMaxAuthor);
      state.top = top
    }
    // Общее
  },
  actions: {
    // Главная страница
    async fetchPosts(ctx, addParams = ''){
      let url = 'https://retakeweb2022.kreosoft.space/api/post' + addParams
      axios.get(url)
          .then(response => {
            ctx.commit('setPosts', response.data)

          })
          .catch(e => {
            console.log(e)
          })
      /*const result = await fetch(url)
      const posts = await result.json()*/
      console.log("Fetched :", url)
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
