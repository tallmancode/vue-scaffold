<template>
    <v-scaff-page>
        <div class="row">
            <div class="col-4">
                <h4>V Scaff Buttons</h4>
                <v-scaff-button btnClass="primary">Primary Button</v-scaff-button>
                <v-scaff-button btnClass="secondary">Secondary Button</v-scaff-button>
                <v-scaff-button btnClass="info">Info Button</v-scaff-button>
                <v-scaff-button btnClass="danger">Danger Button</v-scaff-button>
            </div>
            <div class="col-8">
                <h4>V Scaff Buttons</h4>
                <div class="row">
                    <div class="col-6">
                        <v-scaff-loading-button :is-loading="false" btnClass="primary">Primary Button</v-scaff-loading-button>
                        <v-scaff-loading-button :is-loading="false" btnClass="secondary">Secondary Button</v-scaff-loading-button>
                        <v-scaff-loading-button :is-loading="false" btnClass="info">Info Button</v-scaff-loading-button>
                        <v-scaff-loading-button :is-loading="false" btnClass="danger">Danger Button</v-scaff-loading-button>
                    </div>
                    <div class="col-6">
                        <v-scaff-loading-button :is-loading="true" btnClass="primary">Primary Button</v-scaff-loading-button>
                        <v-scaff-loading-button :is-loading="true" btnClass="secondary">Secondary Button</v-scaff-loading-button>
                        <v-scaff-loading-button :is-loading="true" btnClass="info">Info Button</v-scaff-loading-button>
                        <v-scaff-loading-button :is-loading="true" btnClass="danger">Danger Button</v-scaff-loading-button>
                    </div>
                </div>

            </div>
        </div>
    </v-scaff-page>
</template>

<script>
export default {
    name: "ButtonsView",
};
</script>

<style lang="scss" scoped>
button {
    margin-bottom: 0.5rem;
}
</style>
