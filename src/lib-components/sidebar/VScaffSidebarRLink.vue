<template>
    <li class="v-scaff__sidebar-item">
        <router-link :class="'v-scaff__sidebar-item-link'" :to="to">
            <v-scaff-icon :name="icon" :width="25" :height="25"></v-scaff-icon>
            <p>{{ label }}</p>
        </router-link>
    </li>
</template>

<script>
export default {
    name: "VScaffSidebarRLink",
    props: {
        label: {
            type: String,
            required: true,
        },
        to: {
            type: Object,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss"></style>
