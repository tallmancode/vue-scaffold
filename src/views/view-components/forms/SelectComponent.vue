<template>
    <div class="row card-row">
        <div class="col-4">
            <v-scaff-form>
                <v-scaff-select name="select_input"
                                label="Select Input"
                                v-model="value"
                                v-model:error="error"
                                :options="options"
                                :helperText="'some helper text'"></v-scaff-select>
                <div class="input-example">
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

        </div>
    </div>
</template>

<script>
export default {
    name: "SelectComponent",
    data() {
        return {
            error: null,
            value: null,
            options: [
                {id:1, name:'something'},
                {id:2, name:'something else'},
                {id:3, name:'another thing'},
            ]
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