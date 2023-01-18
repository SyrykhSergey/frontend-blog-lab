<template>
    <div class="main_page">
        <form
            class="login-form"
            action="javascript:void(0);"
        >
            <h2>Регистрация</h2>
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
            <div class="form-input-material">
                <select>
                    <option>Мужчина</option>
                    <option>Женщина</option>
                </select>
                <label>Пол</label>
            </div>
            <div class="form-number">
                <v-phone-input v-model="phone" />
                <label for="phone_number">Телефон</label>
                <!--<input type="tel"
                       name="name"
                       placeholder="8 (9xx) xxx-xxxx"
                       pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"
                       minlength="18"
                       maxlength="18"
                       v-phone>
                <label for="phone_number">Телефон</label>
                -->
            </div>
            <div class="form-input-material">
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="name@example.com"
                    autocomplete="off"
                    class="form-control-material"
                    required
                >
                <label for="username">Email</label>
            </div>
            <div class="form-input-material">

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" "
                    autocomplete="off"
                    class="form-control-material"
                    required
                >
                <label for="password">Пароль</label>
            </div>
            <button type="submit"
                    class="btn_sign_in">Зарегестрироваться
            </button>

        </form>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import VPhoneInput from "@/components/UI/v-phone-input.vue";

export default defineComponent({
    components: {VPhoneInput},
    data(){
        return{
            phone: ''
        }
    }
})
</script>

<style scoped>

.form-number {
    --input-default-border-color: white;
    --input-border-bottom-color: white;
    display: flex;
    flex-direction: column-reverse;
    width: 400px;
}
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
    padding: 8px 20px;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    margin: 18px 0 5px 0;
    color: white;
    background: dodgerblue;


}

.form-input-material {
    --input-default-border-color: white;
    --input-border-bottom-color: white;
    display: flex;
    flex-direction: column-reverse;
    width: 400px;


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

    border-radius: 5px;
    box-shadow: 0 0 8px 4px rgba(34, 60, 80, 0.2);
}
h1{
    margin: 0 0 24px 0;
}

.form-input-material{
    margin: 12px 0;
}




</style>