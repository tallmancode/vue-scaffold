<template>
    <v-scaff-page>
        <text-input-component></text-input-component>
        <select-component></select-component>
        <auto-complete-component></auto-complete-component>
        <textarea-component></textarea-component>
        <switch-component></switch-component>
    </v-scaff-page>
</template>

<script>
import TextInputComponent from "./view-components/forms/TextInputComponent.vue";
import SelectComponent from "./view-components/forms/SelectComponent.vue";
import AutoCompleteComponent from "./view-components/forms/AutoCompleteComponent.vue";
import TextareaComponent from "./view-components/forms/TextareaComponent.vue";
import SwitchComponent from "./view-components/forms/SwitchComponent.vue";
export default {
    name: "FormsView",
    components: {TextInputComponent, SelectComponent, AutoCompleteComponent, TextareaComponent, SwitchComponent}

};
</script>

<style lang="scss" scoped>
::v-deep(.input-buttons) {
    display: flex;
    justify-content: space-between;
}

::v-deep(.input-output) {
    position: relative;

    label {
        top: -8px;
        position: absolute;
        line-height: 1.25em;
        display: inline-block;
        margin: 0 calc(0.5em + 2px);
        padding: 0 2px;
        white-space: nowrap;
        color: #7d7d7d;
        background-image: linear-gradient(to bottom, #ffffff, #ffffff);
        background-size: 100% 5px;
        background-repeat: no-repeat;
        background-position: center;
        left: 0;
        font-size: 14px;
        transition: color 0.3s;
        z-index: 9;

        + div {
            box-sizing: border-box;
            width: 100%;
            margin: 1em 0 1em;
            padding: 6px;
            border: 1px solid #bababa;
            border-radius: 3px;
            background: #fff;
            font-size: 1rem;
            resize: none;
            outline: none;
            transition: border-color 0.3s;
            min-height: 100px;
        }
    }
}
</style>
