<template>
    <header>
        <h3>Блог №415</h3>
        <ul>
            <li><a href="/">Главная</a> </li>
            <li><a href="/authors">Авторы</a> </li>
        </ul>
        <div class="login"
             v-if="this.$store.state.is_login">
            <p>{{this.$store.state.email}}</p>
            <details>
                <summary/>
                <a href="/profile">Редактировать</a>
                <p class="pointer"
                   @click="exit">Выйти</p>
            </details>
        </div>
        <div class="login"
             v-else>
            <a href="/login">Вход</a>
        </div>

    </header>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            isLog: this.$store.state.is_login,
            email: this.$store.state.email
        }
    },
    methods:{
        exit(){//'https://retakeweb2022.kreosoft.space/api/account/logout'
            let config = {
                headers:{
                    Authorization: 'Bearer ' + this.$store.state.token
                }
            }
            this.$store.commit('setLogout');// Это здесь чтобы визуально логаут работал
            axios.post('https://retakeweb2022.kreosoft.space/api/account/logout', config)
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
    }
}
</script>

<style  scoped>
header{
    display: flex;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: black solid 1px;
    padding-left: 30px;

}
ul{
    padding-inline-start: 10px;
}
li{
    display: inline-block;
    padding-left: 10px;

}

a{
    text-decoration: none;
    color: black;
}
p.pointer{
    cursor: pointer;
    margin-top: 5px;
}
.login{
    margin-right: 30px;
    margin-left: auto;
    display: flex;
}
h3{
    font-weight: normal;
}
details{
    width: 70px;
    height: 10px;
    margin-left: 5px;
    margin-top: 1px;
}
summary{
    margin-bottom: 10px;
}
*{
    margin: 0;
}


</style>