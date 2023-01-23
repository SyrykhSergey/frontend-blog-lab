<template>
    <div class="main_page">
        <form
            class="login-form"
            action="javascript:void(0);"
        >
            <h2>Регистрация</h2>
            <h3 class="successful"
                v-if="registrationIsGood == 'Yea'">Успешно зарегестрирован</h3>
            <h3 class="unsuccessful"
                v-if="registrationIsGood == 'No'">Ошибка регистрации</h3>
            <div class="form-input-material">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Иванов Иван Иванович"
                    autocomplete="off"
                    class="form-control-material"
                    v-model="fullName"
                    required
                >
                <label for="name">ФИО</label>
            </div>
            <div class="form-input-material">
                <input
                    type="datetime-local"
                    name="date"
                    id="date"
                    autocomplete="off"
                    class="form-control-material"
                    v-model="birthData"
                    required
                >
                <label for="date">Дата рождения</label>
            </div>
            <div class="form-input-material">
                <select v-model="gender">
                    <option>Мужчина</option>
                    <option>Женщина</option>
                </select>
                <label>Пол</label>
            </div>
            <div class="form-number">
                <v-phone-input :value="phone"
                               @newNumber="phoneVal"/>
                <label for="phone_number">Телефон</label>
            </div>
            <div class="form-input-material">
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="name@example.com"
                    autocomplete="off"
                    class="form-control-material"
                    v-model="email"
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
                    v-model="password"
                    required
                >
                <label for="password">Пароль</label>
            </div>
            <button type="submit"
                    class="btn_sign_in"
                    @click="submit">Зарегестрироваться
            </button>

        </form>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import VPhoneInput from "@/components/UI/v-phone-input.vue";
import axios from "axios";

export default defineComponent({
    components: {VPhoneInput},
    data(){
        return{
            phone: '',
            fullName:'',
            birthData:'',
            gender:'',
            email:'',
            password: '',
            registrationIsGood: ''
        }
    },
    methods:{
         submit(){
             let genderForJSON
             if(this.gender == 'Мужчина') genderForJSON = 'Male';
             else genderForJSON = 'Female';
            const article = {
                fullName: this.fullName,
                password: this.password,
                email: this.email,
                birthDate: this.birthData+':11.111Z',
                gender: genderForJSON,
                phoneNumber: this.phone
            };

             axios.post("https://retakeweb2022.kreosoft.space/api/account/register", article)
                 .then(response => {
                     this.$store.commit('setLogin', response, this.email);
                     this.registrationIsGood = 'Yea';
                 })
                 .catch(error => {
                     this.errorMessage = error.message;
                     this.registrationIsGood = 'No';
                     console.error("There was an error!", error);
                 });
        },
        phoneVal(value){
            this.phone = value
        }
    }
})
</script>

<style scoped>
.successful{
    color:green;
}
.unsuccessful{
    color: red;
}
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