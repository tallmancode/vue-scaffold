<template>
    <span class="v-scaff__input-helper">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="inherit">
            <path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"/>
        </svg>
        <span class="tooltip">
            {{helperText}}
        </span>
    </span>
</template>

<script>
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

        };
    },
};
</script>

<style scoped lang="scss">

</style>
