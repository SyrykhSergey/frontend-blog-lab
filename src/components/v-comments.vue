<template>
    <div class="main-body-comm">
        <p class="author-date">{{comment.author}}</p>
        <p class="content">{{comment.content}}</p>
        <div class="date-answer">
            <p class="author-date">{{createTime}}</p>
            <p class="answer">Ответить</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "VComments",
    props: ['comment'],
    data(){
        return{
            createTime: ''
        }
    },
    computed:{
        post(){
            return this.$store.getters.getPost
        }
    },
    mounted() {
        this.remakeDateTime()
    },
    methods:{
        remakeDateTime() {// переделываем крейтед тайм для подходящего варианта
            let time = this.comment.createTime;
            this.createTime = time.replace('T', ' ').substring(0, 16).replace('-','.');
        }
    }
}
</script>

<style scoped>
.main-body-comm{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
}
.date-answer{
    display: flex;
}
.answer{
    margin-left: 10px;
    color: royalblue;
}
</style>