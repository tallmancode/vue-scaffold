import optionsApi from "./optionsApi.js";
import uuid from "./uuid/uuid.js";
import { shallowReactive } from "vue";

export function defineApi(options) {
    let _modalComponent = null

    const mergedOptions = { ...optionsApi, ...options };

    const sidebarOptions = shallowReactive({
        docked: mergedOptions.sidebarDocked,
        expanded: true,
    });

    const inputOptions = shallowReactive({
        labelType: mergedOptions.labelType,
    });

    const dynamicModals = shallowReactive([]);

    const modals = shallowReactive([]);

    const getModal = (...names) => {
        return modals.filter(modal => names.includes(modal.props.name))
    }

    const triggerModal = (modal, ...args) => {
        return Promise.allSettled([
            new Promise((resolve, reject) => {
                const defaultModal = {
                    value: true,
                    id: Symbol("v-scaff-modal"),
                    component: _modalComponent,
                    bind: {},
                    slots: {},
                    on: {},
                    params: args[0],
                    reject,
                    opened() {
                        resolve("show");
                    }
                }
                dynamicModals.push(
                    shallowReactive(Object.assign(defaultModal, modal))
                );

            })
        ])
    }

    const toggleModal = (name) => {
        const modals = getModal(name);
        Promise.allSettled(modals.map(modal => modal.toggle()));
    }

    return {
        uuid: uuid,
        sidebar: sidebarOptions,
        inputs: inputOptions,
        dynamicModals: dynamicModals,
        openedModals: [],
        modals: modals,
        triggerModal: triggerModal,
        toggleModal: toggleModal,
        meta: mergedOptions.meta
    };
}

export function bindApi(component, api) {
    const _component = { ...component, props: { ...component.props } };
    Object.assign(_component.props, {
        api: { type: Object, default: () => api },
    });
    return _component;
}
