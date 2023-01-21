<template>
    <div>
        <v-head-menu />
        <div class="main-body">
            <v-authors-list v-for="author in allAuthors"
                            :key="author.fullName"
                            :author="author"
            />
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
    data(){
        return{
            topAuth: []
        }
    },
    computed:{
        allAuthors(){
            return this.$store.getters.getAuthors
        }
    },
    //updated() {
        //this.topAuthors()
    //},
    beforeMount() {
        this.fetchAuthors()
    },
    methods: {
        ...mapActions(['fetchAuthors'])
        /*topAuthors() {// Не работает :(
            const arr = this.allAuthors
            if(this.topAuth.length == 0) return 0;
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
            this.topAuth = top

        }*/
    }
}
</script>

<style scoped>
.main-body{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>