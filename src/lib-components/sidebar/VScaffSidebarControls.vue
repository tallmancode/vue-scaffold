<template>
    <div class="sidebar-controls">
        <v-scaff-icon-button
            @click="api.sidebar.expanded = !api.sidebar.expanded"
            icon="list-ui-alt"
            :border="false"
        />
    </div>
</template>

<script>
export default {
    name: "VScaffSidebarControls",
};
</script>

<style scoped></style>
