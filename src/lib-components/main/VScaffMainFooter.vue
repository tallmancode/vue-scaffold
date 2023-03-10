<template>
    <div class="v-scaff__main-footer">
        <div class="footer__left">
            <slot name="v_scaff_footer_left">
                <p>&copy; Vue Scaffold 2023</p>
            </slot>
        </div>
        <div class="footer__right">
            <slot name="v_scaff_footer_right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "VScaffMainFooter",
};
</script>

<style scoped></style>
