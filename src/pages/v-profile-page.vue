<template>
    <div class="main_page">
        <v-head-menu />
        <v-profile-edit-form />
    </div>
</template>

<script>
import VHeadMenu from "@/components/v-head-menu.vue";
import VProfileEditForm from "@/components/v-profile-edit-form.vue";

export default {
    name: "VProfilePage",
    components: {VProfileEditForm, VHeadMenu}
}
</script>

<style scoped>

</style>