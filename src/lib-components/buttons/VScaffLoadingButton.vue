<template>
    <button
        :class="[{ loading: isLoading }, btnClass, 'v-scaff__loading-button']"
        :disabled="isLoading"
    >
        <span class="loading-text" v-html="loadingText"></span>
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: "VScaffLoadingButton",
    props: {
        loadingText: {
            type: String,
            default: "Loading",
        },
        isLoading: {
            type: Boolean,
            default: true,
        },
        btnClass: {
            type: String,
            default: "",
        },
    },
};
</script>
