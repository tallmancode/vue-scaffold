<template>
    <v-scaff-page>
        <div class="row card-row">
            <div class="col-4">
                <v-scaff-form>
                    <div class="input-example">
                        <v-scaff-input
                            name="text_input"
                            label="Text Input"
                            v-model="textInput.value"
                            v-model:error="textInput.error"
                            :helperText="'somehelper text'"
                        ></v-scaff-input>
                        <div class="input-buttons">
                            <v-scaff-button
                                btnClass="danger"
                                @click="addError('textInput')"
                                >Trigger Error</v-scaff-button
                            >
                            <v-scaff-button
                                btnClass="info"
                                @click="clearError('textInput')"
                                >Clear Error</v-scaff-button
                            >
                        </div>
                    </div>
                </v-scaff-form>
            </div>
            <div class="col-4">
                <div class="input-output">
                    <label>Text Output Value</label>
                    <div v-text="textInput.value"></div>
                </div>
            </div>
            <div class="col-4">

            </div>
        </div>
    </v-scaff-page>
</template>

<script>
export default {
    name: "FormsView",
    components: {},
    data() {
        return {
            textInput: {
                error: null,
                value: null,
            },
        };
    },
    methods: {
        addError(inputName) {
            this[inputName].error = "This is a error message";
        },
        clearError(inputName) {
            this[inputName].error = null;
        },
    },
};
</script>

<style scoped lang="scss">
.input-buttons {
    display: flex;
    justify-content: space-between;
}
.input-output {
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
