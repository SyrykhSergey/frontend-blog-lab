<template>
    <div>
        <v-head-menu />
        <div class="main-body">
            <v-filter-posts />
            <v-posts v-for="post in allPosts"
                     :key="post.id"
                     :post="post"/>
            <v-navigation-pages />
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
            currentPage: 1
        }
    },
    computed: {
        allPosts() {
            return this.$store.getters.getPostList;
        }
    },
    mounted(){// Делаем запрос
        this.fetchPosts()//
    },
    methods: mapActions(['fetchPosts'])


}
</script>

<style scoped>
.main-body{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>