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
    beforeMount() {
        this.fetchAuthors()
    },
    methods: {
        ...mapActions(['fetchAuthors'])
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