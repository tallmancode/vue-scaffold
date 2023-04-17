<template>
    <v-scaff-dynamic-modal
        v-slot="{ close }"
        classes="v-scaff-modal__container v-scaff__popup"
        content-class="v-scaff-modal__content"
        v-bind="$attrs"
        :style="cssProps"
    >
        <div class="v-scaff-modal__header">
            <span class="v-scaff-modal__title"> Modal 1 </span>
            <a class="modal__close" @click="close">
                <v-scaff-icon name="times-circle" :width="25" :height="25"/>
            </a>
        </div>
        <div class="v-scaff-modal__inner-content">content stuff</div>
        <div class="v-scaff-modal__footer">footer</div>
    </v-scaff-dynamic-modal>
</template>

<script>
export default {
    name: "PopupModal",
    components: {},
    computed: {
        cssProps(){
            return {
                '--max-width'  : '50%'
            }
        }
    }
};
</script>

<style scoped></style>
