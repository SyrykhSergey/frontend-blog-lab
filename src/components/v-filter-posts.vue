<template>
    <div class="main-body">
        <div class="head-body">
            <p>Фильтры</p>
        </div>
        <div class="filters">
            <div class="filter">
                <label for="authors">Поиск по имени автора</label>
                <input type="text"
                       name="authors"
                       id="authors"
                       class="authors"
                >
            </div>
            <div class="filter">
                <label for="">Поиск по тэгам</label>
                <textarea name="tags"
                          placeholder="#tag
                                       #tag
                                       ..."
                />
            </div>
            <div class="filter">
                <label for="sortingBy">Сортировать</label>
                <select name="sortingBy">
                    <option>По дате создания (сначала новые)</option>
                    <option>По дате создания (сначала старые)</option>
                    <option>По колличеству лайков (по убыванию)</option>
                    <option>По колличеству лайков (по возрастанию)</option>
                </select>
            </div>
            <div class="filter">
                <label for="readTimeFrom">Время чтения от</label>
                <input type="text"
                       name="readTimeFrom">
            </div>
            <div class="filter">
                <label for="readTimeTo">Время чтения до</label>
                <input type="text"
                       name="readTimeTo">
            </div>
            <button>Применить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "VFilterPosts"
}
</script>

<style scoped>
.main-body{

    margin-top: 20px;
    width: 50%;
    border: black solid 1px;
}
.head-body{
    background: whitesmoke;
    width: 100%;
    padding: 7px 0 7px 0;
    border-bottom: black solid 1px;
}
.head-body p{
    margin-left: 10px;
}
.filters{
    display: flex;
    flex-wrap: wrap;
}
.filter{
    display: flex;
    flex-direction: column;
    margin: 10px;
}
button{
    background: dodgerblue;
    color: whitesmoke;
    width: 90px;
    height: 25px;
}
.authors{
    width: 325px;
}
textarea{
    width: 325px;
}
button{
    margin: auto 10px 10px auto;
    border-radius: 3px;
}
select{
    width: 200px;
}

</style>