<template>
    <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
    >
        <slot/>
    </transition>
</template>

<script>
export default {
    name: "VScaffHeightTransition",
    methods: {
        enter(element) {
            element.style.width = getComputedStyle(element).width;
            element.style.position = 'absolute';
            element.style.visibility = 'hidden';
            element.style.height = 'auto';
            element.style.overflow = 'hidden'
            const height = getComputedStyle(element).height;

            element.style.width = null;
            element.style.position = null;
            element.style.visibility = null;
            element.style.height = 0;
            getComputedStyle(element).height;
            requestAnimationFrame(() => {
                element.style.height = height;
            });
        },
        afterEnter(element) {
            element.style.height = 'auto';
            element.style.overflow = 'auto'
        },
        leave(element) {
            element.style.height = getComputedStyle(element).height;
            element.style.overflow = 'hidden'
            getComputedStyle(element).height;

            requestAnimationFrame(() => {
                element.style.height = 0;
            });
        },
    }
}
</script>

<style scoped lang="scss">

</style>