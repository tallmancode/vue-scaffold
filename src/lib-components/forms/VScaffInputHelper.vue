<template>
    <span class="v-scaff__input-helper">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="inherit"
            v-html="icon.path"
        />
        <span class="tooltip">
            {{helperText}}
        </span>
    </span>
</template>

<script>
import { infoCircle as icon } from "@/lib/scaff-icons";
export default {
    name: "VScaffInputHelper",
    props: {
        helperText: {
            type: [Boolean, String],
            default: () => false,
        },
    },
    data() {
        return {
            icon : icon,
        };
    }
};
</script>

<style scoped lang="scss">

</style>
