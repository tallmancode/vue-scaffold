<template>
    <div class="v-scaff__main-header-nav">
        <v-scaff-icon-button icon="bell-school" :border="false" />
        <slot name="something"></slot>
    </div>
</template>

<script>
export default {
    name: "VScaffMainHeaderNav",
};
</script>

<style scoped></style>
