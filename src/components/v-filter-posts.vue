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
                       v-model="author"
                       class="authors"
                >
            </div>
            <div class="filter">
                <label for="">Поиск по тэгам</label>
                <textarea name="tags"
                          placeholder="#tag
                                       #tag
                                       ..."
                          v-model="tags"
                />
            </div>
            <div class="filter">
                <label for="sortingBy">Сортировать</label>
                <select name="sortingBy"
                        v-model="sorting">
                    <option>По дате создания (сначала новые)</option>
                    <option>По дате создания (сначала старые)</option>
                    <option>По колличеству лайков (по убыванию)</option>
                    <option>По колличеству лайков (по возрастанию)</option>
                </select>
            </div>
            <div class="filter">
                <label for="readTimeFrom">Время чтения от</label>
                <input type="text"
                       name="readTimeFrom"
                       v-model="min">
            </div>
            <div class="filter">
                <label for="readTimeTo">Время чтения до</label>
                <input type="text"
                       name="readTimeTo"
                       v-model="max">
            </div>
            <button @click="apply">Применить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "VFilterPosts",
    props:['paramsBack'],
    data(){
        return{
            author: '',
            sorting: '',
            min: null,
            max: null,
            tags:[]

        }
    },
    mounted() {
        this.checkQuery()
    },
    methods:{
        apply(){
            let params = {};
            if (this.author != '') params.author = this.author;
            if (this.sorting !=''){
                if (this.sorting == 'По дате создания (сначала новые)') params.sorting = 'CreateDesc';
                if (this.sorting == 'По дате создания (сначала старые)') params.sorting = 'CreateAsc';
                if (this.sorting == 'По колличеству лайков (по убыванию)') params.sorting = 'LikeDesc';
                if (this.sorting == 'По колличеству лайков (по возрастанию)') params.sorting = 'LikeAsc';
            }
            if (this.min != null) params.min = this.min;
            if (this.max != null) params.max = this.max;
            if (this.tags != []) params.tags = this.tags;

            this.$emit('applyFilters', params)
        },
        checkQuery(){
            if(this.$route.query.author != undefined) this.author = this.$route.query.author;
            if(this.$route.query.min != undefined) this.min = this.$route.query.min;
            if(this.$route.query.max != undefined) this.max = this.$route.query.max;
            if(this.$route.query.sorting != undefined) this.sorting = this.$route.query.sorting;
            if(this.$route.query.tags != undefined) this.tags = this.$route.query.tags;

        }
    }
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