<template>
    <main class="v-scaff__main"
          v-bind:class="
          {
              'float': !api.sidebar.docked,
              'collapse' : api.sidebar.expanded,
              'full' : !api.sidebar.expanded
          }">
        <v-scaff-main-header></v-scaff-main-header>
        <div class="v-scaff__main-content">
            <router-view v-slot="{ Component }">
                <transition mode="out-in" name="fade">
                    <component :is="Component"/>
                </transition>
            </router-view>
        </div>
        <v-scaff-main-footer></v-scaff-main-footer>
        <ModalsContainer></ModalsContainer>
    </main>
</template>

<script>
export default {
    name: "VScaffMain",
    props: {
        options: {
            type: Array,
            default: []
        },
    },
    computed: {
        // computedOptions(){
        //     return {...this.$vScaff, ...this.options};
        // },
    },
    mounted() {
        console.log(this.api)
    }

}
</script>

<style scoped>

</style>