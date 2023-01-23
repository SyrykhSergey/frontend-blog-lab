

<template>
    <div class="main-body-bottom">
        <ul>
            <li class="notCurrentPage"
                @click="paginationLeft"><a>&lt;</a></li>
            <li v-for="page in paginationArr"
                :key="page"
                @click="paginationClick(page)"
            ><div v-if="secondCurrentPage == page"
                  class="currentPage"><a>{{page}}</a></div>
                <div v-if="secondCurrentPage != page"
                     class="notCurrentPage"><a>{{page}}</a></div>
            </li>
            <li class="notCurrentPage"
                @click="paginationRight"><a>&gt;</a></li>
        </ul>
        <div class="post-for-page">
            <input type="number"
                   name="countPosts"
                   id="countPosts"
                   placeholder='{{pageSize}}'
                   v-model="postsOnPage"
                   v-if="secondCurrentPage == 1"
            >
            <input type="number"
                   name="countPosts"
                   id="countPosts"
                   placeholder='{{pageSize}}'
                   v-model="postsOnPage"
                   disabled
                   v-else
            >
            <label for="countPosts">Число постов на странице</label>
        </div>
    </div>
</template>

<script>

export default {
    name: "VNavigationPages",
    props:['currentPage', 'pageSize'],
    data(){
        return{
            pages: [],
            postsOnPage: 5,//Зачем это и следующие значения нужны если есть пропсы?
            secondCurrentPage: 1//В том случае если пропсы = null, эти значения выдадутся по умолчанию
        }
    },

    computed:{

        pagination(){// Пагинация в чистом виде который нам передаёт гет запрос с сервера
            return this.$store.getters.getPagination
        },
        paginationArr(){ // Массив циферок для отрисовки страниц
            return this.$store.getters.getPaginationArr
        }


    },//Пагинация переделывается вo vuex
    watch:{
        postsOnPage(value){
            if(this.postsOnPage != ''){
                this.$emit('newPostsOnPage',{
                    value
                })
            }
        }
    },
    updated() {// В mounted не пихать, не срабатывает почему-то
        this.refillData()
    },
    methods:{
        paginationClick(numPage){
            this.$emit('paginationClick',{
                numPage
            })
        },
        paginationLeft(){
            this.$emit('paginationLeft')
        },
        paginationRight(){
            this.$emit('paginationRight')
        },
        refillData(){
            if(this.pageSize != null) {
                this.postsOnPage = this.pageSize
            }
            if(this.currentPage != null){
                this.secondCurrentPage = this.currentPage
            }
        }
    }


}
</script>

<style scoped>
.main-body-bottom{
    display: flex;
    flex-direction: row;
    width: 50%;
    align-items: flex-start;
}
ul{
    display: flex;
    padding-left: 0;
}

li{

    list-style-type: none;
    margin: 10px 0 10px 0;
}
.currentPage a{
    color: white;
}
.currentPage{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3d85ee;
    width: 25px;
    height: 25px;
    border: royalblue solid 1px;
}
.notCurrentPage{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border: royalblue solid 1px;
}
a{
    color: royalblue;
}
.post-for-page{
    display: flex;
    flex-direction: column-reverse;
    margin-right: 0;
    margin-left: auto;
}
label{
    font-size: 10px;
    padding-top: 7px;
}
input{
    width: 105px;
    height: 15px;
}
a{
    text-decoration: none;
}
</style>