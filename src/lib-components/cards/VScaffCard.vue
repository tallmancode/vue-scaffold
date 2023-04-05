<template>
    <div class="v-scaff__card">
        <div :class="['v-scaff__card-header', { 'image-header': headerImg }]">
            <slot name="header">
                <h4 v-if="headerText" class="title">{{ headerText }}</h4>
                <div class="header-image" v-if="headerImg">
                    <img :src="headerImg" alt="" />
                </div>
            </slot>
        </div>
        <div class="v-scaff__card-content">
            <slot> </slot>
        </div>
        <div class="v-scaff__card-footer">
            <slot name="footer"> </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "VScaffCard",
    props: {
        headerText: {
            type: [String, Boolean],
            default: false,
        },
        headerImg: {
            type: [String, Boolean],
            default: false,
        },
    },
};
</script>

<style scoped></style>
