<template>
    <button :class="['v-scaff__button', btnClass]" type="button">
        <slot>
            {{ text }}
        </slot>
    </button>
</template>

<script>
export default {
    name: "VScaffButton",
    props: {
        btnClass: {
            type: String,
            default: "btn btn__primary",
        },
    },
};
</script>

<style scoped></style>
