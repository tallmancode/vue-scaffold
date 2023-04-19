<template>
    <div class="v-scaff">
        <slot></slot>
    </div>
</template>

<script>
import { useRoute } from "vue-router";
import { watch } from "vue";

export default {
    name: "VScaff",
    components: {},
    setup(props) {
        const route = useRoute();
        watch(
            () => route.name,
            () => {
                if (route.meta) {
                    if (route.meta.title) {
                        document.title = route.meta.title;
                    }else{
                        document.title = props.api.meta.title;
                    }
                }else{
                    document.title = props.api.meta.title;
                }
            }
        );
        return {};
    },
};
</script>
