<template>
    <span class="v-scaff__icon">
        <!--        <unicon :name="name"-->
        <!--                :height="height"-->
        <!--                :width="width"-->
        <!--                :fill="fill">-->
        <!--        </unicon>-->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            :width="width"
            :height="height"
            :viewBox.camel="viewBox"
            :fill="localFill"
            v-bind="$attrs"
            @click="$emit('click')"
            @mouseover="onHover"
            @mouseout="onLeave"
            v-html="icon"
        />
    </span>
</template>

<script>
import { Icons as iconLib } from "@/lib/scaff-icons";
export default {
    name: "VScaffIcon",
    props: {
        name: {
            type: String,
            default: "",
        },
        width: {
            type: [String, Number],
            default: 24,
        },
        height: {
            type: [String, Number],
            default: 24,
        },
        fill: {
            type: String,
            default: "inherit",
        },
        hoverFill: {
            type: String,
            default: null,
        },
        viewBox: {
            type: String,
            default: "0 0 24 24",
        },
    },
    data() {
        return {
            localFill: this.fill,
        };
    },
    watch: {
        fill(newColor) {
            this.localFill = newColor;
        },
    },
    methods: {
        onHover() {
            if (this.hoverFill) {
                this.localFill = this.hoverFill;
            }
        },
        onLeave() {
            if (this.hoverFill) {
                this.localFill = this.fill;
            }
        },
    },
    computed: {
        icon() {
            const icon = iconLib.find((i) => i.name === this.name);
            if (icon) {
                return icon.path;
            } else {
                console.error(`Name '${this.name}' of the icon is not correct`);
                return undefined;
            }
        },
    },
};
</script>
