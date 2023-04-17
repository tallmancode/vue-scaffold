import { bindApi, defineApi } from "@/lib/core";
import * as components from "@/lib-components/index";
import "@/scss/v-scaff.scss";
const _key = "$vScaff";
// install function executed by Vue.use()
const install = function installVueScaffold(app, options) {
    let api = defineApi(options);

    Object.entries(components).forEach(([componentName, component]) => {
        component = bindApi(component, api);
        app.component(componentName, component);
    });

    Object.defineProperty(app.config.globalProperties, _key, {
        get() {
            return api
        }
    })
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from "@/lib-components/index";
