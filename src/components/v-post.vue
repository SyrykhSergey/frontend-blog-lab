<template>
    <div class="main-body">
        <div class="head-post">
            <h6>{{post.author}} - {{createTime}}</h6>
            <h4>{{post.title}}</h4>
        </div>
        <div class="description-post">
            <h6>{{String(post.description)}}</h6>
            <div class="tags">
                <h6 v-for="tag in post.tags"
                    :key="tag.id"
                    style="font-weight: bold">#{{tag.name}}</h6>
            </div>
            <h6 style="margin-bottom: 10px"> Время чтения: {{post.readingTime}}.</h6>
        </div>
        <div class="ending-post">
            <h6>{{post.commentsCount}}</h6>
            <img src="@/icons/comment.png">
            <h6 class="likes">{{post.likes}}</h6>
            <img src="@/icons/heart.png"
                 v-if="!liked">
            <img src="@/icons/filledHeart.png"
                 v-if="liked">
        </div>
    </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
    name: "VPost",
    data() {
        return {
            description: '',
            liked: false, //В будущем нужно будет изменять
            createTime: '',
            id: ""
        }
    },
    computed:{
        post(){
            return this.$store.getters.getPost
        }
    },
    beforeMount() {
        this.getId()
    },
    mounted() {
        this.fetchThePost(this.id);
    },
    updated() {
        this.remakeDateTime()
    },

    methods: {
        ...mapActions(['fetchThePost']),
        getId(){
            let url = String(window.location.href);
            let endI = url.length
            let startI = url.lastIndexOf('/', endI-1)

            this.id = url.substring(startI+1, endI)

        },
        remakeDateTime() {// переделываем крейтед тайм для подходящего варианта
            let time = this.post.createTime;
            this.createTime = time.replace('T', ' ').substring(0, 16).replace('-','.');
        }
    }
}
</script>

<style scoped>
.main-body{
    display: flex;
    width: 50%;
    border: black solid 1px;
}
.head-post, .description-post{
    display: flex;
    white-space: pre-wrap;
    flex-direction: column;
    width: 100%;
}

.head-post h4{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: black solid 1px;
    font-size: 20px;
    font-weight: bold;
    color: black;
}
h6{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    font-weight: normal;
    font-size: 14px;


}
.tags{
    display: flex;
}
.tags h6{
    margin: 0 0 0 10px;
}
.ending-post{
    display: flex;
    width: 100%;
    background: whitesmoke;
    border-top: black solid 1px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.ending-post h6{
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 5px;
}
.likes{
    margin-right: 10px;
    margin-left: auto;
}
img{
    width: 15px;
    height: 15px;
    padding-right: 5px;
}

</style>