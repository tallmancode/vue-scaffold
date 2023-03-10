<template>
    <button class="v-scaff__icon-button" v-bind:class="{ bordered: border }">
        <v-scaff-icon :name="icon"></v-scaff-icon>
    </button>
</template>

<script>
export default {
    name: "VScaffIconButton",
    props: {
        icon: {
            type: String,
            required: true,
        },
        border: {
            type: Boolean,
            default: true,
        },
    },
};
</script>

<style scoped lang="scss"></style>
