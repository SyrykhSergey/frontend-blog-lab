<template>
    <div>
        <v-head-menu />
        <div class="main-body">
            <v-post />
            <div class="comments">
                <h3>Комментарии</h3>
                <v-comments
                    v-for="item in post.comments"
                    :key="item.id"
                    :comment="item"
                />
            </div>
        </div>
    </div>
</template>

<script>
import VHeadMenu from "@/components/v-head-menu.vue";
import VPost from "@/components/v-post.vue";
import {mapActions} from "vuex";
import VComments from "@/components/v-comments.vue";

export default {
    name: "VPostPage",
    components: {VComments, VPost, VHeadMenu},
    computed:{
        post(){
            return this.$store.getters.getPost
        }
    },
    methods:{
        ...mapActions(['fetchPost'])
    }
}
</script>

<style scoped>
.main-body{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.comments{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: black solid 1px;
    margin-top: 20px;
    padding-left: 10px;
    width: 49%;
}
h3{
    margin-top: 10px;
}
</style>