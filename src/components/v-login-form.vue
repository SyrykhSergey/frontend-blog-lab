<template>
    <div class="main_page">
        <form
            class="login-form"
            action="javascript:void(0);"
        >
            <h1>Вход</h1>
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
                    class="btn_sign_in">Войти</button>
            <button type="submit"
                    class="btn_sign_up">Зарегестрироваться</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    background: #eceffc;
}
.main_page{
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    overflow: auto;
    padding-bottom: 50px;
    padding-top: 20px;
    margin-top: 10%;
}

.btn_sign_in {
    padding: 8px 20px;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    margin: 18px 0 9px 0;
    color: white;
    background: dodgerblue;

}
.btn_sign_up {
    padding: 8px 20px;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    margin: 18px 0 9px 0;
    color: white;
    background: gray;

}

.form-input-material {
    --input-default-border-color: white;
    --input-border-bottom-color: white;
    display: flex;
    flex-direction: column-reverse;
    width: 400px;


}
.form-input-material input{
    height: 20px;
    margin-top: 2px;
}

.login-form {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 20px;
    color: black;

    border-radius: 1px;
    box-shadow: 0 0 8px 4px rgba(34, 60, 80, 0.2);
}
h1{
    margin: 0 0 24px 0;
}

.form-input-material{
    margin: 12px 0;
}



</style>