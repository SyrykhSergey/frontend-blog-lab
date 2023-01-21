<template>
    <header>
        <h3>Блог №415</h3>
        <ul>
            <li><a href="/">Главная</a> </li>
            <li><a href="/authors">Авторы</a> </li>
        </ul>
        <div class="login">
            <a href="/login">{{$store.state.is_login ? "email@example.com" : "Вход"}}</a>
        </div>

    </header>
</template>

<script>
export default {

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
.login{
    margin-right: 30px;
    margin-left: auto;
}
h3{
    font-weight: normal;
}
*{
    margin: 0;
}


</style>