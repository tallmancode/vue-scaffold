const confirm = async ($this, value) => {
    return new Promise((resolve, reject) => {
        const confirmEvent = (response) => {
            resolve(response);
        };
        const denyEvent = () => {
            reject("denied");
        };
        $this.$vfm.show({
            component: "v-scaff-confirm-modal",
            bind: { name: "v_scaff_confirm_modal", data: value },
            on: { confirm: confirmEvent, deny: denyEvent },
        });
    });
};

export { confirm };
