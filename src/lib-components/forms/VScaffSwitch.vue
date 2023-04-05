<template>
    <div :class="['v-scaff__form-group switch', { error: errorValue }]">
        <input
            :id="uuid"
            v-model="inputValue"
            :name="name"
            type="checkbox"
            class="v-scaff__switch"
        />
        <label
            v-if="label"
            :data-error="errorValue"
            :data-label="label"
            :for="uuid"
            class="v-scaff__switch-label"
        >
            {{ label }}
        </label>
        <v-scaff-input-helper v-if="helperText" :helper-text="helperText"></v-scaff-input-helper>
    </div>
</template>

<script>
import VScaffInputHelper from "./VScaffInputHelper.vue";
import {computed, ref} from "vue";

export default {
    name: "VScaffSwitch",
    components: { VScaffInputHelper },
    props: {
        modelValue: null,
        id: {
            type: [Number, String, Boolean],
            default: () => false,
        },
        type: {
            type: String,
            default: () => "text",
            validator(value) {
                return ["text", "password", "number"].includes(value);
            },
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
