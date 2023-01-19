<template>
    <div>
        <v-head-menu />
        <div class="main-body">
            <v-post/>
        </div>
    </div>
</template>

<script>
import VHeadMenu from "@/components/v-head-menu.vue";
import VPost from "@/components/v-post.vue";
import {mapActions} from "vuex";

export default {
    name: "VPostPage",
    components: {VPost, VHeadMenu},
    methods:{
        ...mapActions(['fetchPost'])
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