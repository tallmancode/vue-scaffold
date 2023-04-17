<template>
    <div class="v-scaff__modal-container">
        <component
            :is="modal.component"
            :key="modal.id"
            v-on="modal.on"
            v-model="modal.value"
            v-for="(modal, index) in api.dynamicModals"
            @_closed="slice(index)"
            @_opened="modal.opened"
            @_beforeOpen="e => beforeOpen(e, modal)"
        >
            <template v-for="(slot, key) in modal.slots" #[key] :key="key">
                <!-- eslint-disable vue/no-v-html -->
                <component :is="slot.component" v-bind="slot.bind" v-on="slot.on || {}" />
            </template>
        </component>
    </div>
</template>

<script>
export default {
    name: "VScaffDynamicModalContainer",
    methods: {
        async beforeOpen(e, modal, index) {
            // e.ref.params.value = modal.params
            // console.log(e, modal, index)
            // await this.$nextTick()
            // await this.$nextTick()
            // if (!modal.value) {
            //     this.slice(index)
            //     modal.reject('show')
            // }
        },
        isString(val) {
            return typeof val === 'string'
        },
        slice(index) {
            this.api.dynamicModals.splice(index, 1)
        },
    }
}
</script>

<style scoped>

</style>