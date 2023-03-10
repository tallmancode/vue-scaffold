<template>
    <div
        class="v-scaff__sidebar"
        v-bind:class="{
            float: !api.sidebar.docked,
            docked: api.sidebar.docked,
            expanded: api.sidebar.expanded,
            collapsed: !api.sidebar.expanded,
        }"
    >
        <slot name="v_scaff_sidebar_header">
            <v-scaff-sidebar-header> </v-scaff-sidebar-header>
        </slot>

        <div class="sidebar-content" v-bind:class="{ loading: contentLoading }">
            <div class="sidebar-content__inner">
                <slot name="v_scaff_sidebar_content"> </slot>
            </div>
        </div>
        <div class="sidebar-footer">
            <slot name="v_scaff_sidebar_footer">
                <ul class="sidebar-nav">
                    <li class="sidebar-nav__item">
                        <v-scaff-sidebar-link
                            label="Logout"
                            icon="sign-out-alt"
                            href="/logout"
                        />
                    </li>
                </ul>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "VScaffSidebar",
    components: {},

    props: {
        options: {
            type: Array,
            default: [],
        },
        contentLoading: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        computedOptions() {
            return { ...this.$vScaff.options, ...this.options };
        },
    },
};
</script>

<style scoped></style>
