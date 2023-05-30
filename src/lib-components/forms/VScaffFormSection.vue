<template>
    <div :class="['v-scaff__form-section']">
        <div v-if="title" class="v-scaff__form-section-title">
            <slot name="title">
                <h3>{{ title }}</h3>
            </slot>
            <v-scaff-input-helper
                v-if="helperText"
                :helper-text="helperText"
            ></v-scaff-input-helper>
        </div>
        <div class="v-scaff__form-section-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import VScaffInputHelper from "./VScaffInputHelper.vue";
import {computed, ref} from "vue";

export default {
    name: "VScaffFormSection",
    components: {VScaffInputHelper},
    props: {
        title: {
            type: [String, Boolean],
            default: () => false,
        },
        helperText: {
            type: [String, Boolean],
            default: () => false,
        },
    },

};
</script>
