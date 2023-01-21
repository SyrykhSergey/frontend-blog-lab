<template>
    <div class="main-body-comm">
        <p class="author-date"
           v-if="comment.deleteDate == null"
        >{{comment.author}}</p>
        <p class="author-date"
           v-else
        >[Коментарий удален]</p>
        <p class="content"
           v-if="comment.deleteDate == null"
        >{{comment.content}}</p>
        <p class="content"
           v-else
        >[Коментарий удален]</p>
        <div class="date-answer">
            <p class="author-date">{{createTime}}</p>
            <p class="answer">Ответить</p>
        </div>
        <p class="show-all"
           v-if="comment.subComments != 0"
        >Раскрыть ответы</p>
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
.content{
    margin-top: 8px;
}
.main-body-comm{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
}
.author-date{
    font-size: 13px;
}
.date-answer{
    font-size: 13px;
    display: flex;
    margin-top: 8px;
}
.show-all{
    color: royalblue;
    margin-top: 8px;
    font-size: 13px;
}
.answer{
    margin-left: 10px;
    color: royalblue;
}
</style>