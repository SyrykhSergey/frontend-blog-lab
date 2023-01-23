<template>
    <div class="main-body">
        <div class="head-post">
            <h6>{{post.author}} - {{createTime}}</h6>
            <router-link :to="'/post/'+ post.id">{{post.title}}</router-link>
        </div>
        <div class="description-post">
            <h6>{{description}}</h6>
            <router-link :to="'/post/'+ post.id"
                         v-if="showAllDesc">Читать полностью</router-link>
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
                 v-if="!liked"
                 @click="Like">
            <img src="@/icons/filledHeart.png"
                 v-if="liked"
                 @click="unLike">
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "VPosts",
    props: ['post'],
    data() {
        return {
            description: '',
            showAllDesc: false,
            liked: false,
            createTime: ''
        }
    },
    mounted() {
        this.remakeDateTime();
        this.removeOverCharacter()
    },
    methods: {
        remakeDateTime() {// переделываем крейтед тайм для подходящего варианта
            let time = this.post.createTime;
            this.createTime = time.replace('T', ' ').substring(0, 16).replace('-','.');
        },
        removeOverCharacter() { // Вот это чудо, обрезает слишком большие описания для поста
            let desc = this.post.description;
            if(desc.length >= 1000){
                desc = desc.substring(0,1000);
                if(desc.lastIndexOf('\n') !== -1 || desc.lastIndexOf('\r') !== -1){
                    if(desc.lastIndexOf('\n' ) !== -1){
                        let ending = desc.lastIndexOf("\n");
                        desc = desc.substring(0, ending);
                    } else{
                        let ending = desc.lastIndexOf("\r");
                        desc = desc.substring(0, ending);
                    }
                }
                this.showAllDesc = true;
            }
            this.description = desc;
// В чём логика, если больше 1000 символов описание, оно обрезает текст до первого (с конца) переноса строки
        },//И если переноса строки не было, просто обрезает до 1000 символов, и вызывает показывание "читать полностью"
        Like(){
            if(this.$store.state.is_login) {
                this.liked = !this.liked
                let config = {
                    headers: {
                        Authorization: 'Bearer ' + this.$store.state.token
                    }
                }
                //запрос не работает
                let url = 'https://retakeweb2022.kreosoft.space/api/post/' + this.post.id + '/like'
                axios.post(url, config)
                    .then(response => {
                        this.$store.commit('setLogout');
                        console.log("All is okay in logout", response)
                    })
                    .catch(error => {
                        this.errorMessage = error.message;
                        console.log(config.headers)
                        console.error("There was an error!", error);
                    });
            }
        },
        unLike(){
            if(this.$store.state.is_login) {
                let config = {
                    headers: {
                        Authorization: 'Bearer ' + this.$store.state.token
                    }
                }
                let url = 'https://retakeweb2022.kreosoft.space/api/post/' + this.post.id + '/like'
                //запрос не работает т.к. я не знаю в какой хедер пихать токен
                axios.delete(url, config)
                    .then(response => {
                        console.log("All is okay in logout", response)
                    })
                    .catch(error => {
                        this.errorMessage = error.message;
                        console.log(config.headers)
                        console.error("There was an error!", error);
                    });
                this.liked = !this.liked
            }
        }
    }
}
</script>

<style scoped>
.main-body{
    margin-top: 20px;
    display: flex;
    width: 50%;
    border: black solid 1px;
}
.head-post, .description-post{
    display: flex;
    flex-direction: column;
    width: 100%;
    white-space: pre-wrap;

}
.head-post a{
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
    margin-right: auto;
    margin-top: 10px;
    font-weight: normal;
    font-size: 14px

}
a{
    font-weight: normal;
    font-size: 14px;
    margin: 10px auto 10px 10px;
    text-decoration: none;
    color: royalblue;
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