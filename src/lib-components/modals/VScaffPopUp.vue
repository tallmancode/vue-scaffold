<template>
    <vue-final-modal
        v-slot="{ close }"
        classes="v-scaff-modal__container v-scaff__popup"
        content-class="v-scaff-modal__content"
        v-bind="$attrs"
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
    name: "v-scaff-popup",
    inheritAttrs: false,
    components: { VueFinalModal },
};
</script>
