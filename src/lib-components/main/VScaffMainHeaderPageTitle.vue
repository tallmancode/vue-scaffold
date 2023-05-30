<template>
    <transition mode="out-in" name="fade">
        <h2 v-if="name" :key="name" class="v-scaff__main-header-title">
            {{ name }}
        </h2>
    </transition>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, watch } from "vue";

export default {
    name: "VScaffMainHeaderPageTitle",
    setup() {
        const route = useRoute();
        const name = ref(false);
        watch(
            () => route.name,
            () => {
                if (route.meta && route.meta.showTitle) {
                    if (route.meta.pageTitle) {
                        name.value = route.meta.pageTitle;
                    } else {
                        name.value = route.name;
                    }
                } else {
                    name.value = false;
                }
            }
        );
        return { name };
    },
};
</script>
