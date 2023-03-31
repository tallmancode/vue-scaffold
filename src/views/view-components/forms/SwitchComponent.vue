<template>
    <div class="row card-row">
        <div class="col-4">
            <v-scaff-form>
                <div class="input-example">
                    <v-scaff-switch
                        name="switch_input"
                        label="Switch Input"
                        v-model="value"
                        v-model:error="error"
                        :helperText="'some helper text'"></v-scaff-switch>
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
        <div class="col-4" v-if="value">
            Switch is active
        </div>
        <div class="col-4" v-else>
            Switch is not active
        </div>
    </div>
</template>

<script>
export default {
    name: "SwitchComponent",
    components: {},

    data() {
        return {
            error: null,
            value: null,
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
}
</script>

<style scoped lang="scss">
.card-row{
    padding: 2rem 0;
    border-top: 1px #7d7d7d solid;
}
</style>