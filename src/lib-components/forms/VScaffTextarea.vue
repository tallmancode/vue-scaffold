<template>
    <div :class="['v-scaff__form-group', { error: errorValue }]">
        <textarea
            :id="uuid"
            v-model="inputValue"
            :name="name"
            class="v-scaff__input"
            rows="10"
        ></textarea>
        <label
            v-if="label"
            :data-error="errorValue"
            :data-label="label"
            :for="uuid"
            class="v-scaff__label"
        >
            {{ api.inputs.labelType === "standard" ? label : "" }}
        </label>
        <v-scaff-input-helper v-if="helperText" :helper-text="helperText"></v-scaff-input-helper>
    </div>
</template>

<script>
import { computed, ref } from "vue";
import VScaffInputHelper from "./VScaffInputHelper.vue";
export default {
    name: "VScaffTextarea",
    components: { VScaffInputHelper },
    props: {
        modelValue: null,
        id: {
            type: [Number, String, Boolean],
            default: () => false,
        },
        label: {
            type: [String, Boolean],
            default: () => false,
        },
        name: {
            required: true,
            type: String,
        },
        error: {
            type: [String, Boolean],
            default: () => false,
        },
        helperText: {
            type: [String, Boolean],
            default: () => false,
        },
    },
    setup(props, { emit }) {
        let idValue = ref([]);

        const uuid = computed({
            get: () => idValue.value,
            set: (value) => (idValue.value = value),
        });

        const inputValue = computed({
            get: () => props.modelValue,
            set: (value) => emit("update:modelValue", value),
        });

        const errorValue = computed({
            get: () => props.error,
            set: (value) => emit("update:error", value),
        });

        return {
            inputValue,
            errorValue,
            uuid,
        };
    },
    beforeMount() {
        if (!this.id) {
            this.uuid = this.api.uuid.generateId(this);
        } else {
            this.uuid = this.id;
        }
    },
    watch: {
        inputValue(newValue, oldValue) {
            if (oldValue !== newValue && this.errorValue) {
                this.errorValue = false;
            }

            if (newValue === "") {
                this.inputValue = null;
            }
        },
    },
}
</script>

<style scoped lang="scss">
.card-row{
    padding: 2rem 0;
    border-top: 1px #7d7d7d solid;
}
</style>