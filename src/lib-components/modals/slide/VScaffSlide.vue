<template>
    <vue-final-modal
        v-slot="{ close }"
        v-bind="$attrs"
        classes="v-scaff-modal__container v-scaff__slide"
        content-class="v-scaff-modal__content"
        transition="slide-modal"
        :style="cssProps"
    >
        <div class="v-scaff-modal__header">
            <span class="v-scaff-modal__title">
                <slot name="title"></slot>
            </span>
            <v-scaff-icon-button
                :border="false"
                class="v-scaff-modal__close"
                icon="times-circle"
                @click="close"
            />
        </div>
        <div class="v-scaff-modal__inner-content">
            <slot name="content"></slot>
        </div>
        <div class="v-scaff-modal__footer">
            <slot name="footer"></slot>
        </div>
    </vue-final-modal>
</template>

<script>
import { VueFinalModal } from "vue-final-modal";
export default {
    name: "VScaffSlide",
    components: { VueFinalModal },
    computed: {
        cssProps() {
            if (typeof this.$attrs.slideWidth !== "undefined") {
                return {
                    "--max-width": this.$attrs.slideWidth,
                };
            } else {
                return {
                    "--max-width": "50%",
                };
            }
        },
    },
};
</script>

<!--<style scoped lang="scss">-->
<!--@import "assets/scss/vue-helper";-->
<!--:deep(.modal-container) {-->
<!--    display: flex;-->
<!--    width: 100%;-->
<!--    position: fixed;-->
<!--}-->
<!--:deep(.modal-content) {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    border: 1px solid #e2e8f0;-->
<!--    background: #fff;-->
<!--    padding: 1rem;-->

<!--    position: absolute;-->
<!--    right: 0;-->
<!--    top:0;-->
<!--    bottom: 0;-->
<!--    border-top-left-radius: 16px;-->
<!--    border-bottom-left-radius: 16px;-->
<!--    width: var(&#45;&#45;max-width);-->

<!--    .slide-modal__header{-->
<!--        position: relative;-->
<!--        border-bottom: 2px solid rgba($grey-light, 0.7);-->
<!--        padding-bottom: 1rem;-->
<!--        .slide-modal__title {-->
<!--            margin: 0 2rem 0 0;-->
<!--            font-size: 1.2rem;-->
<!--            font-weight: 700;-->
<!--            color: $grey-light;-->
<!--        }-->
<!--        .slide-modal__close {-->
<!--            position: absolute;-->
<!--            display: block;-->
<!--            top: 0;-->
<!--            right: 0.5rem;-->
<!--            cursor: pointer;-->
<!--            i{-->
<!--                color: $grey-light;-->
<!--                font-size: 30px;-->
<!--                fill: $grey-light;-->
<!--                transition: fill 0.3s ease-in-out;-->
<!--                &:hover{-->
<!--                    color: #F08029;-->
<!--                    fill: $primary;-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--    .slide-modal__content{-->
<!--        height: 100%;-->
<!--        padding: 1rem 0;-->
<!--        overflow-y: auto;-->
<!--        overflow-x: hidden;-->
<!--    }-->
<!--}-->
<!--</style>-->
