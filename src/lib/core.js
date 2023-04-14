import optionsApi from "./optionsApi";
import uuid from "./uuid/uuid";
import { shallowReactive } from "vue";

export function defineApi(options) {
    const mergedOptions = { ...optionsApi, ...options };

    const sidebarOptions = shallowReactive({
        docked: mergedOptions.sidebarDocked,
        expanded: true,
    });

    const inputOptions = shallowReactive({
        labelType: mergedOptions.labelType,
    });

    return {
        uuid: uuid,
        sidebar: sidebarOptions,
        inputs: inputOptions,
        modals: [],
    };
}

export function bindApi(component, api) {
    const _component = { ...component, props: { ...component.props } };
    Object.assign(_component.props, {
        api: { type: Object, default: () => api },
    });
    return _component;
}
