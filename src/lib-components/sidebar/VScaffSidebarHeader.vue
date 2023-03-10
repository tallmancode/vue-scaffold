<template>
    <div class="v-scaff__sidebar-header">
        <div class="v-scaff__sidebar-header-inner">
            <slot name="v_scaff_sidebar_header_inner">
                <h1 class="text-header">Vue Scaffold</h1>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "VScaffSidebarHeader",
};
</script>

<style scoped></style>
