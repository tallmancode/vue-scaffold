<template>
    <div class="v-scaff__page" v-bind:class="{ dark: api.darkMode }">
        <div v-if="title" class="scaffold-page__title">
            <slot name="title-inner">
                <h3 v-if="title">{{ title }}</h3>
            </slot>
            <slot name="title-after"></slot>
        </div>
        <slot></slot>
        <v-scaff-page-loader :message="loadingMessage" v-if="loading"/>
    </div>
</template>

<script>
export default {
    name: "VScaffPage",
    components: {},
    props: {
        options: {
            type: Array,
            default() {
                return [];
            },
        },
        fluid: {
            type: Boolean,
            default: false,
        },
        title: {
            type: [String, Boolean],
            default: false,
        },
        loading: {
            type: [Boolean],
            default: false,
        },
        loadingMessage: {
            type: [String],
            default: "Loading",
        },
    },
    computed: {

    },
};
</script>

<style scoped></style>
