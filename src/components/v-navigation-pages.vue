<template>
    <div class="main-body-bottom">
        <ul>
            <li><a>&lt;</a></li>
            <li><a>1</a></li>
            <li><a>2</a></li>
            <li><a>3</a></li>
            <li><a>&gt;</a></li>
        </ul>
        <div class="post-for-page">
            <input type="text"
                   name="countPosts"
                   id="countPosts"
                   placeholder="5"
            >
            <label for="countPosts">Число постов на странице</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "VNavigationPages"
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
    border: royalblue solid 1px;
    list-style-type: none;
    padding: 5px 10px 5px 10px;
    margin: 10px 0 10px 0;
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
</style>