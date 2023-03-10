<template>
    <div class="v-scaff__page-loader" :style="cssProps">
        <div class="v-scaff__page-loader__inner">
            <span class="indy"></span>
            <span class="message">
                {{ message }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "VScaffPageLoader",
    props: {
        message: {
            type: [String],
            required: true,
        },
        bgColor: {
            type: [String],
            default: "#FFFFFF",
        },
    },
    computed: {
        cssProps() {
            return {
                "--loader-bg": this.bgColor,
            };
        },
    },
};
</script>
