<template>
    <div class="row card-row">
        <div class="col-4">
            <v-scaff-form>
                <div class="input-example">
                    <v-scaff-textarea
                        name="textarea_input"
                        label="Textarea Input"
                        v-model="value"
                        v-model:error="error"
                        :helperText="'some helper text'"></v-scaff-textarea>
                    <div class="input-buttons">
                        <v-scaff-button
                            btnClass="danger"
                            @click="addError()"
                        >Trigger Error</v-scaff-button
                        >
                        <v-scaff-button
                            btnClass="info"
                            @click="clearError()"
                        >Clear Error</v-scaff-button
                        >
                    </div>
                </div>
            </v-scaff-form>
        </div>
        <div class="col-4">
            <div class="input-output">
                <label>Textarea Output Value</label>
                <div v-text="value"></div>
            </div>
        </div>
        <div class="col-4">

        </div>
    </div>
</template>

<script>
export default {
    name: "TextareaComponent",
    components: {},

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

<style scoped lang="scss">
.card-row{
    padding: 2rem 0;
    border-top: 1px #7d7d7d solid;
}
</style>