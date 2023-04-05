<template>
    <div class="row card-row">
        <div class="col-4">
            <v-scaff-form>
                <div class="input-example">
                    <v-scaff-input
                        name="text_input"
                        label="Text Input"
                        v-model="value"
                        v-model:error="error"
                        :helperText="'some helper text'"
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
                <div v-text="value"></div>
            </div>
        </div>
        <div class="col-4">

        </div>
    </div>
</template>

<script>
export default {
    name: "TextInputComponent",
    data() {
        return {
            error: null,
            value: null,
        };
    },
    methods: {
        addError() {
            this.error = "This is a error message";
        },
        clearError() {
            this.error = null;
        },
    },
}
</script>