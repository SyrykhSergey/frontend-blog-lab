<template>
    <div>
        <v-head-menu />
        <div class="main-body">
            <v-filter-posts />
            <v-posts v-for="post in allPosts"
                     :key="post.id"
                     :post="post"/>
            <v-navigation-pages @paginationClick="paginationClick"
                                :currentPage="currentPage"
                                :pageSize="pageSize"
                                @paginationLeft="paginationLeft"
                                @paginationRight="paginationRight"
                                @newPostsOnPage="postOnPage"/>
        </div>

    </div>
</template>

<script>
import VHeadMenu from "@/components/v-head-menu.vue";
import VFilterPosts from "@/components/v-filter-posts.vue";
import VPosts from "@/components/v-posts.vue";
import {mapActions} from "vuex";
import VNavigationPages from "@/components/v-navigation-pages.vue";

export default {
    components: {VNavigationPages, VPosts, VFilterPosts, VHeadMenu},
    data() {
        return{
            currentPage: 1,
            urlParams: '',
            pageSize: 5
        }
    },
    computed: {
        allPosts() {
            return this.$store.getters.getPostList;
        },
        pagination(){
            return this.$store.getters.getPagination;
        }
    },
    beforeMount(){// Делаем запрос
        this.startFetch()

    },

    methods: {
        ...mapActions(['fetchPosts']),

        startFetch(){
            let url = String(window.location.href);
            let endI = url.length
            let startI = url.lastIndexOf('/', endI-1)
            if(startI != -1){
                this.urlParams = url.substring(startI+1, endI)

                this.fetchPosts(this.urlParams)
            }
            this.currentPage = this.$route.query.page
            this.pageSize = this.$route.query.size
            console.log(this.pageSize)

        },

        paginationClick(numPage){
            this.currentPage = numPage.numPage
            this.$router.push({query: {'page': numPage.numPage, 'size': this.pageSize}}).then(result => {
                console.log(result)
                let url = String(window.location.href);
                let endI = url.length
                let startI = url.lastIndexOf('/', endI-1)

                this.urlParams = url.substring(startI+1, endI)
                console.log(this.urlParams)

                this.fetchPosts(this.urlParams)
                window.scrollTo(0,0);
            })
        },
        paginationLeft(){
            if(this.currentPage > 1){
                this.currentPage -=1
                this.$router.push({query: {'page': this.currentPage, 'size': this.pageSize}}).then(result => {
                    console.log(result)
                    let url = String(window.location.href);
                    let endI = url.length
                    let startI = url.lastIndexOf('/', endI-1)

                    this.urlParams = url.substring(startI+1, endI)
                    console.log(this.urlParams)

                    this.fetchPosts(this.urlParams)
                    window.scrollTo(0,0);
                })
            }
        },
        paginationRight(){
            if(this.currentPage < this.pagination.count){
                this.currentPage += 1
                this.$router.push({query: {'page': this.currentPage, 'size': this.pageSize}}).then(result => {
                    console.log(result)
                    let url = String(window.location.href);
                    let endI = url.length
                    let startI = url.lastIndexOf('/', endI-1)

                    this.urlParams = url.substring(startI+1, endI)
                    console.log(this.urlParams)

                    this.fetchPosts(this.urlParams)
                    window.scrollTo(0,0);
                })
            }
        },

        postOnPage(num){
            this.pageSize = num.value
            this.$router.push({query: {'page': this.currentPage, 'size': this.pageSize}}).then(result => {
                console.log(result)
                let url = String(window.location.href);
                let endI = url.length
                let startI = url.lastIndexOf('/', endI-1)

                this.urlParams = url.substring(startI+1, endI)
                console.log(this.urlParams)

                this.fetchPosts(this.urlParams).then(result =>{
                    console.log(result)
                    window.scrollTo(0, document.body.scrollHeight);
                })

            })
        }

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