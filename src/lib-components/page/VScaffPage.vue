<template>
    <div class="v-scaff__page" v-bind:class="{ dark: api.darkMode }">
        <div class="scaffold-page__title" v-if="title">
            <slot name="title-inner">
                <h3 v-if="title">{{ title }}</h3>
            </slot>
            <slot name="title-after"></slot>
        </div>
        <slot></slot>
        <!--        <transition name="fade">-->
        <!--            <v-scaff-page-loader v-if="loading || $globalLoading.value" :message="loadingMessage"></v-scaff-page-loader>-->
        <!--        </transition>-->
    </div>
</template>

<script>
export default {
    name: "VScaffPage",
    components: {},
    mounted() {
        console.log(this.api);
    },
    props: {
        options: {
            type: Array,
            default: [],
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
        computedOptions() {
            // return  {...this.$vScaff.options, ...this.options};
        },
    },
};
</script>

<style scoped></style>
