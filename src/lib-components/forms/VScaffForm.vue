<template>
    <form :id="uuid" autocomplete="off" class="v-scaff__form">
        <slot></slot>
    </form>
</template>

<script>
import { computed, ref } from "vue";

export default {
    name: "VScaffForm",
    setup() {
        let itemsValue = ref([]);
        const uuid = computed({
            get: () => itemsValue.value,
            set: (value) => (itemsValue.value = value),
        });

        return {
            uuid,
        };
    },
    beforeMount() {
        if (!this.id) {
            this.uuid = this.api.uuid.generateId(this);
        }
    },
};
</script>

<style scoped></style>
