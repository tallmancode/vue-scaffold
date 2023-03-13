<template>
    <div :class="['v-scaff__form-group v-scaff__select', {
        error: errorValue,
        'disabled' : disabled || loading,
        'open' : isActive
    }]">
        <div class="v-scaff__select-toggle"
             @focus="activate"
             @focusin="activate"
             @focusout="deactivate">
            <input
                :id="uuid"
                :name="name"
                type="text"
                class="v-scaff__input"
                :placeholder="placeholder"
                :value="labelBy && inputValue ? itemProxy[labelBy] : inputValue"
                readonly
            />
            <label
                v-if="label"
                :data-error="errorValue"
                :data-label="label"
                :for="uuid"
                class="v-scaff__label"
            >
                {{ api.inputs.labelType === "standard" ? label : "" }}
            </label>
            <button class="v-scaff__select-clear" type="button" @mousedown.prevent="clearSelect">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18" height="18" viewBox="0 0 24 24" fill="inherit"
                    v-html="clearIcon.path"
                />
            </button>
            <v-scaff-input-helper v-if="helperText" :helper-text="helperText"></v-scaff-input-helper>
        </div>
        <v-scaff-height-transition>
        <div class="v-scaff__select-dropdown" v-if="showOptions">
            <ul class="v-scaff__select-dropdown-list" >
                <li v-for="(item, index) in selectItems" @mousedown="select(item)" :key="index">
                    {{ labelBy ? item[labelBy] : item }}
                </li>
            </ul>
        </div>
        </v-scaff-height-transition>
    </div>
</template>

<script>
import { computed, ref } from "vue";
import VScaffInputHelper from "./VScaffInputHelper.vue";
import { timesCircle as icon } from "@/lib/scaff-icons";
export default {
    name: "VScaffSelect",
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
        placeholder: {
            type: String,
            default: '- select a option -'
        },
        error: {
            type: [String, Boolean],
            default: () => false,
        },
        labelBy: {
            type: [String, Boolean],
            default: () => 'name'
        },
        valueBy: {
            type: [String, Boolean],
            default: () => false
        },
        options: {
            type: [Object],
            default: () => {}
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

        let selectItems =  ref([])

        if(props.options){
            // eslint-disable-next-line vue/no-setup-props-destructure
            selectItems.value = props.options
        }

        return {
            inputValue,
            errorValue,
            uuid,
            selectItems
        };
    },
    data(){
        return{
            clearIcon : icon,
            showOptions: false,
            loading: false,
            hovered: false,
            isActive: false,
            itemProxy: false,
            disabled: false
        }
    },
    beforeMount() {
        if (!this.id) {
            this.uuid = this.api.uuid.generateId(this);
        } else {
            this.uuid = this.id;
        }
    },
    methods: {
        select(item) {
            this.itemProxy = item
            this.inputValue = this.valueBy ? item[this.valueBy] : item
            console.log(item)
        },
        clearSelect() {
            this.inputValue = null
            this.errorValue = false
            this.itemProxy = false
        },
        activate(event) {
            if(this.disabled) return;
            this.isActive = true;
            // const input = event.target;
            // if (this.searchable) {
            //     input.removeAttribute('readonly')
            //     input.setAttribute('placeholder', 'Type to search')
            // }else{
            //     if(this.valueProxy === null) {
            //         input.removeAttribute('placeholder')
            //     }
            // }
            // if(this.error) {
            //     this.errorValue = null
            // }
            this.showOptions = true
        },

        deactivate(event) {
            // const input = event.target;
            this.isActive = false;
            // if(!this.itemProxy){
            //     input.setAttribute('placeholder', this.placeholder)
            // }
            // if (this.searchable) {
            //     input.setAttribute('readonly', true)
            //     if(this.valueProxy !== null){
            //         this.setValuePlaceholder()
            //     }else{
            //         input.setAttribute('placeholder', this.placeholder)
            //     }
            // }else{
            //     if(this.valueProxy === null){
            //         input.setAttribute('placeholder', this.inputPlaceholder)
            //     }
            // }
            if(this.errorValue === null){
                this.errorValue = this.error
            }
            this.showOptions = false
        },
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

<style scoped>

</style>