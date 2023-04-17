<template>
    <div v-if="visible" v-show="visible" ref="root" class="v-scaff__modal">
        <transition
            name="vsm"
            @before-enter="beforeOverlayEnter"
            @after-enter="afterOverlayEnter"
            @before-leave="beforeOverlayLeave"
            @after-leave="afterOverlayLeave"
        >
            <div v-if="visibility.overlay" class="v-scaff__modal-overlay"></div>
        </transition>
        <transition @after-leave="afterModalLeave">
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
import { ref, reactive, computed, onMounted, watch } from "vue";

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
            mounted();
        });

        const mounted = () => {
            if (props.modelValue) {
                emit('_before-open', createModalEvent({ type: '_before-open' }))
            }
            visible.value = true;
            startTransitionEnter();
        };

        const createModalEvent = (eventProps = {}) => {
            return {
                ref: getModalInfo(),
                ...eventProps
            }
        }

        const getModalInfo = () => {
            return {
                uid,
                props,
                emit,
                visibility,
                params
            }
        }

        const startTransitionEnter = () => {
            visibility.overlay = true;
            visibility.modal = true;
            emit("_opened");
        };
        const close = () => {
            visibility.overlay = false;
            visibility.modal = false;
        };

        const computedOverlayTransition = computed(() => {
            if (typeof props.overlayTransition === "string") {
                return { name: props.overlayTransition };
            }

            return { ...props.overlayTransition };
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
            close,
            uid,
        };
    },
    props: {
        overlayTransition: {
            type: [String, Object],
            default: "vsm",
        },
        modelValue: { type: Boolean, default: false },
    },
    emits: ["update:modelValue", "_opened", "_closed", "_before-open"],
};
</script>

<style lang="scss" scoped>
.v-scaff {
    &__modal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;

        .v-scaff__modal {
            &-overlay {
                background-color: rgba(0, 0, 0, 0.5);
                height: 100%;
                width: 100%;
            }
            &-wrapper {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &-content {
                position: relative;
                display: flex;
                flex-direction: column;
                margin: 0 1rem;
                padding: 1rem;
                border: 1px solid #e2e8f0;
                border-radius: 0.25rem;
                background: #fff;
                max-width: 600px;
                width: var(--max-width);
            }
        }
    }
}

//transitions
.vsm-enter-active,
.vsm-leave-active {
    opacity: 1;
}

.vsm-enter-from,
.vsm-leave-to {
    opacity: 0;
}
</style>
