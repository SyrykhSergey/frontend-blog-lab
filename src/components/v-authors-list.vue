<template>
    <div class="an-author">

        <img src="@/icons/user-man.png"
             v-if="author.gender == 'Male'">
        <img src="@/icons/user-woman.png"
             v-if="author.gender == 'Female'">
        <span v-if="topPos == 0"
              class="gold-crone" />
        <span v-if="topPos == 1"
              class="silver-crone" />
        <span v-if="topPos == 2"
              class="bronze-crone" />
        <div class="description">
            <div class="inside-body">
                <p class="full-name">{{author.fullName}}</p>
                <p class="created-date">Создан: {{createdDate}}</p>
            </div>
            <div class="inside-body">
                <p class="text-birthday">Дата рождения</p>
                <p class="birthday-date">{{birthDate}}</p>
            </div>
        </div>
        <div class="information">
            <p class="likes-posts">Постов: {{author.posts}}</p>
            <p class="likes-posts">Лайков: {{author.likes}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "VAuthorsList",
    props:['author'],
    data() {
        return {
            createdDate: '',
            birthDate: '',
            topPos: 3
        }
    },
    computed:{
        top(){
            return this.$store.getters.getTop
        }
    },
    updated() {

    },
    mounted() {
        this.remakeDate()
        this.checkTop()
    },
    methods:{
        remakeDate(){
            this.createdDate = this.author.created.substring(0, 10);
            this.birthDate = this.author.birthDate.substring(0, 10);
        },
        checkTop(){
            const a = this.top
            let b = this.author.fullName
            if(a[0] == b) this.topPos = 0;
            if(a[1] == b) this.topPos = 1;
            if(a[2] == b) this.topPos = 2;// FOREACH HERE DOESN'T WORK, I DON'T KNOW WHY
        }


    }
}
</script>

<style scoped>
.full-name{
    font-weight: bold;
    font-size: 17px;
}
.created-date{
    color: dimgray;
    font-style: italic;
    font-weight: bolder;
}
.text-birthday{
    color: #4f4f4f;
    font-weight: bold;
}
.an-author{
    border-bottom: black solid 1px;
    display: flex;
    width: 80%;
    margin-top: 20px;
}
.inside-body{
    display: flex;
    padding: 8px;
}
p{
    margin-right: 5px;
}
.description{
    display: flex;
    flex-direction: column;
}
.information{
    margin-right: 10px;
    margin-left: auto;
    display: flex;
}
.likes-posts{
    background-color: royalblue;
    color: whitesmoke;
    height: 23px;
    border-radius: 5px;
    padding: 3px 5px 0 5px;
}
img{
    width: 80px;
    height: 80px;
}
.gold-crone{
    position: relative;
    width: 30px;
    height: 30px;
    left: -2%;
    background-image: url("@/icons/gold-crone.png");
}
.silver-crone{
    position: relative;
    width: 30px;
    height: 30px;
    left: -2%;
    background-image: url("@/icons/silver-crone.png");
}
.bronze-crone{
    position: relative;
    width: 30px;
    height: 30px;
    left: -2%;
    background-image: url("@/icons/bronze-crone.png");
}
</style>