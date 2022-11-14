import optionsApi from "./optionsApi";
import {ref, shallowReactive} from "vue";

export function defineApi(options){

    const mergedOptions = {...optionsApi, ...options}

    const sidebarOptions = shallowReactive({
        docked: mergedOptions.sidebarDocked,
        expanded: true
    });

    return {
        sidebar: sidebarOptions
    }
}

export function bindApi(component, api) {
    const _component = { ...component, props: { ...component.props } }
    Object.assign(_component.props, {
        api: { type: Object, default: () => api }
    })
    return _component
}