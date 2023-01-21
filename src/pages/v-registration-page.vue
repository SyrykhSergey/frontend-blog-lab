<template>
    <div class="main_page">
        <v-head-menu />
        <v-registration-form />
    </div>
</template>

<script>
import VHeadMenu from "@/components/v-head-menu.vue";
import VRegistrationForm from "@/components/v-registration-form.vue";

export default {
    components: {VRegistrationForm, VHeadMenu}

}
</script>

<style scoped>

</style>