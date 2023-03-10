<template>
    <div class="v-scaff__main-header">
        <div class="header-inner v-scaff__main-header-inner">
            <div class="v-scaff__main-header-left">
                <v-scaff-sidebar-controls></v-scaff-sidebar-controls>
                <v-scaff-main-header-page-title></v-scaff-main-header-page-title>
            </div>

            <v-scaff-main-header-nav></v-scaff-main-header-nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "VScaffMainHeader",
};
</script>

<style scoped></style>
