<template>
    <v-scaff-popup
        ref="v_scaff_confirm_modal"
        name="v_scaff_confirm_modal"
        @before-close="$emit('deny')"
    >
        <template v-if="titleText" v-slot:title>
            {{ titleText }}
        </template>
        <template v-slot:content>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        {{ contentText }}
                    </div>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <v-scaff-loading-button
                :isLoading="loading"
                btnClass="btn btn__primary btn__fill"
                loadingText="Logging In"
                @click="confirm"
            >
                Yes I'm Sure.
            </v-scaff-loading-button>
        </template>
    </v-scaff-popup>
</template>

<script>
export default {
    name: "confirmModal",
    components: {},

    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        titleText: {
            type: [String, Boolean],
            default: false,
        },
        contentText: {
            type: [String],
            default: "Are you sure?",
        },
    },
    mounted() {},
    methods: {
        confirm() {
            this.$emit("confirm");
        },
    },
};
</script>

<style scoped></style>
