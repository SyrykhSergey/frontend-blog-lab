<template>
    <div class="main_page">
        <form
            class="login-form"
            action="javascript:void(0);"
        >
            <div class="form-input-material">
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="name@example.com"
                    autocomplete="off"
                    class="form-control-material"
                    required
                >
                <label for="email">Email</label>
            </div>
            <div class="form-input-material">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Иванов Иван Иванович"
                    autocomplete="off"
                    class="form-control-material"
                    required
                >
                <label for="name">ФИО</label>
            </div>
            <div class="form-input-material">
                <v-phone-input v-model="phone.value" />
                <label for="phone_number">Телефон</label>
            </div>
            <div class="form-input-material">
                <select>
                    <option>Мужчина</option>
                    <option>Женщина</option>
                </select>
                <label>Пол</label>
            </div>
            <div class="form-input-material">
                <input
                    type="date"
                    name="date"
                    id="date"
                    autocomplete="off"
                    class="form-control-material"
                    required
                >
                <label for="date">Дата рождения</label>
            </div>
            <button type="submit"
                    class="btn_sign_in">Сохранить
            </button>

        </form>
    </div>
</template>

<script>
import VPhoneInput from "@/components/UI/v-phone-input.vue";

export default {
    name: "VProfileEditForm",
    components: {VPhoneInput},
    data(){
        return{
            phone: ''
        }
    }
}
</script>

<style scoped>
.form-number input{
    height: 30px;
    margin-top: 2px;
    padding-left: 8px;
}
.main_page{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    overflow: auto;
    padding-bottom: 50px;
    padding-top: 20px;
    margin-top: 50px;
}
select{
    height: 30px;
    padding-left: 5px;
}
.btn_sign_in {
    margin-right: 0;
    margin-left: auto;
    padding: 8px 20px;
    border-radius: 5px;
    overflow: hidden;
    color: white;
    background: dodgerblue;


}

.form-input-material {
    --input-default-border-color: white;
    --input-border-bottom-color: white;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    margin: 12px 0;


}
.form-input-material input{
    height: 30px;
    margin-top: 2px;
    padding-left: 8px;
    padding-top: 2px;
}

.login-form {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 10px;
    color: black;
    width: 70%;
    border-radius: 5px;
    box-shadow: 0 0 8px 4px rgba(34, 60, 80, 0.2);
}
h1{
    margin: 0 0 24px 0;
}

</style>