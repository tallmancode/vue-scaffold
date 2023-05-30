<template>
    <div v-if="visible" v-show="visible" ref="root" class="v-scaff__modal">
        <transition
            v-bind="computedOverlayTransition"
            @before-enter="beforeOverlayEnter"
            @after-enter="afterOverlayEnter"
            @before-leave="beforeOverlayLeave"
            @after-leave="afterOverlayLeave"
        >
            <div v-if="visibility.overlay" class="v-scaff__modal-overlay"></div>
        </transition>
        <transition @after-leave="afterModalLeave" v-bind="computedTransition">
            <div
                v-show="visibility.modal"
                ref="vfmContainer"
                class="v-scaff__modal-wrapper"
                :aria-expanded="visibility.modal.toString()"
                role="dialog"
                aria-modal="true"
                tabindex="-1"
            >
                <div class="v-scaff__modal-content">
                    <slot
                        :params="params"
                        :close="() => $emit('update:modelValue', false)"
                    />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ref, reactive, computed, onMounted, watch, nextTick } from "vue";

export default {
    name: "VScaffDynamicModal",
    setup(props, { emit }) {
        const uid = Symbol("vfm");
        const visible = ref(false);
        const params = ref({});
        const visibility = reactive({
            modal: false,
            overlay: false,
        });

        onMounted(() => {
            props.api.modals.push(getModalInfo());
            mounted();
        });

        const mounted = () => {
            if (props.modelValue) {
                emit(
                    "_before-open",
                    createModalEvent({ type: "_before-open" })
                );
            }
            visible.value = true;

            nextTick(() => {
                startTransitionEnter();
            });
        };

        const createModalEvent = (eventProps = {}) => {
            return {
                ref: getModalInfo(),
                ...eventProps,
            };
        };

        const getModalInfo = () => {
            return {
                uid,
                props,
                emit,
                visibility,
                params,
                toggle,
            };
        };

        const startTransitionEnter = () => {
            visibility.overlay = true;
            visibility.modal = true;
            emit("_opened");
        };

        const close = () => {
            visibility.overlay = false;
            visibility.modal = false;
        };

        const toggle = () => {
            emit("update:modelValue", false);
        };

        const computedOverlayTransition = computed(() => {
            if (typeof props.overlayTransition === "string") {
                return { name: props.overlayTransition };
            }

            return { ...props.overlayTransition };
        });

        const computedTransition = computed(() => {
            if (typeof props.transition === "string")
                return { name: props.transition };
            return { ...props.transition };
        });

        const beforeOverlayEnter = () => {};

        const afterOverlayEnter = () => {};

        const beforeOverlayLeave = () => {};

        const afterOverlayLeave = () => {};

        const afterModalLeave = () => {
            emit("_closed");
        };

        watch(
            () => props.modelValue,
            (value) => {
                if (!value) {
                    close();
                }
            }
        );

        return {
            visible,
            params,
            visibility,
            beforeOverlayEnter,
            afterOverlayEnter,
            beforeOverlayLeave,
            afterOverlayLeave,
            afterModalLeave,
            computedOverlayTransition,
            computedTransition,
            close,
            uid,
        };
    },
    props: {
        name: { type: String, default: null },
        overlayTransition: {
            type: [String, Object],
            default: "fade",
        },
        transition: { type: [String, Object], default: "fade" },
        modelValue: { type: Boolean, default: false },
    },
    emits: ["update:modelValue", "_opened", "_closed", "_before-open"],
};
</script>

<style lang="scss" scoped></style>
