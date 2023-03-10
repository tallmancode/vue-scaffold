<template>
    <div class="v-scaff-modal__slide-section">
        <div class="v-scaff-modal__slide-section-header" v-if="title">
            {{ title }}
        </div>
        <div class="v-scaff-modal__slide-section-content">
            <slot> </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "VScaffSlideSection",
    props: {
        title: { String, default: null },
    },
};
</script>

<style scoped></style>
