<template>
    <div>
        <v-head-menu />
        <v-login-form />
    </div>
</template>

<script>
import VHeadMenu from "@/components/v-head-menu.vue";
import VLoginForm from "@/components/v-login-form.vue";

export default {
    components: {VLoginForm, VHeadMenu}

}
</script>

<style scoped>

</style>