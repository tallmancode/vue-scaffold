<template>
    <v-scaff-page>
        <div class="row">
            <div class="col-4">
                <v-scaff-button btnClass="primary" @click="showModal">Trigger Popup</v-scaff-button>
            </div>
        </div>
    </v-scaff-page>
</template>

<script>
import PopupModal from "./view-components/modals/PopupModal.vue";
import PopupModal2 from "./view-components/modals/PopupModal2.vue";
export default {
    name: "ModalsView",
    methods: {
        showModal(){
            this.$vScaff.triggerModal({
                component: PopupModal,
                bind: {slideWidth: '50%', name: 'FoodMenuSlide'},
                on: {'success' : () => {this.$vScaff.toggleModal('FoodMenuSlide')}},
            })
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
