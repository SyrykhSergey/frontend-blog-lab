<template>
    <div>
        <v-head-menu />
        <div class="main-body">
            <v-authors-list v-for="author in allAuthors"
                            :key="author.fullName"
                            :author="author"/>
        </div>
    </div>
</template>

<script>
import VHeadMenu from "@/components/v-head-menu.vue";
import VAuthorsList from "@/components/v-authors-list.vue";
import {mapActions} from "vuex";

export default {
    name: "VAuthorsPage",
    components: {VAuthorsList, VHeadMenu},
    computed:{
        allAuthors(){
            return this.$store.getters.getAuthors
        }
    },
    mounted() {
        this.$store.dispatch('fetchAuthors')
        //this.topAuthors()
    },
    methods: mapActions(['fetchAuthors'])/*
        topAuthors(){
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

            let author;
            let i;
            this.allAuthors.forEach(author, i, this.allAuthors)
            {
                if(author.posts >= maxPosts){// first
                    if(author.posts > maxPosts){
                        maxPosts = author.posts;
                        maxAuthor = author.fullName;
                        maxLikes = author.Likes;
                    }else{
                        if(author.likes > maxLikes){
                            maxPosts = author.posts;
                            maxAuthor = author.fullName;
                            maxLikes = author.Likes;
                        }
                    }
                }
                if(author.posts >= secondMaxPosts){// second
                    if(author.posts > secondMaxPosts){
                        secondMaxPosts = author.posts;
                        secondMaxAuthor = author.fullName;
                        secondMaxLikes = author.Likes;
                    }else{
                        if(author.likes > secondMaxLikes){
                            secondMaxPosts = author.posts;
                            secondMaxAuthor = author.fullName;
                            secondMaxLikes = author.Likes;
                        }
                    }
                }
                if(author.posts >= thirdMaxPosts){// third
                    if(author.posts > thirdMaxPosts){
                        thirdMaxPosts = author.posts;
                        thirdMaxAuthor = author.fullName;
                        thirdMaxLikes = author.Likes;
                    }else{
                        if(author.likes > thirdMaxLikes){
                            thirdMaxPosts = author.posts;
                            thirdMaxAuthor = author.fullName;
                            thirdMaxLikes = author.Likes;
                        }
                    }
                }
            }
            top.push(maxAuthor, secondMaxAuthor, thirdMaxAuthor);

        }*/
}
</script>

<style scoped>
.main-body{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>