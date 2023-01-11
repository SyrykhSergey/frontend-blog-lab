<template>
    <div>
        <v-head-menu />
        <div class="main-body">
            <v-filter-posts />
            <v-posts v-for="post in allPosts"
                     :key="post.id"
                     :post="post"/>
        </div>
    </div>
</template>

<script>
import VHeadMenu from "@/components/v-head-menu.vue";
import VFilterPosts from "@/components/v-filter-posts.vue";
import VPosts from "@/components/v-posts.vue";
import {mapActions} from "vuex";

export default {
    components: {VPosts, VFilterPosts, VHeadMenu},
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