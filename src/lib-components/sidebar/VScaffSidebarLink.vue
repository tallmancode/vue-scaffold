<template>
    <li class="v-scaff__sidebar-item">
        <a :href="location" class="v-scaff__sidebar-item-link">
            <v-scaff-icon :name="icon" :width="25" :height="25"></v-scaff-icon>
            <p>{{ label }}</p>
        </a>
    </li>
</template>

<script>
export default {
    name: "VScaffSidebarLink",
    props: {
        label: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            default: "#",
        },
        icon: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss"></style>
