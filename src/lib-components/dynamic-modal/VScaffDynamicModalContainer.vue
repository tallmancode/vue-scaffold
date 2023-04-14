<template>
    <div class="v-scaff__modal-container">
        <component
            :is="modal.component"
            :key="modal.id"
            :message="modal.message"
            :wrapperClass="modal.params.wrapperClass"
            v-on="modal.on"
            v-for="(modal, index) in api.modals"
            @_closed="slice(index)"
        >
        </component>
    </div>
</template>

<script>
export default {
    name: "VScaffDynamicModalContainer",
    mounted() {
        console.log(this.api.modals)
    }
}
</script>

<style scoped>

</style>