import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import ButtonsView from "../views/ButtonsView.vue";
import FormsView from "../views/FormsView.vue";
import CardsView from "../views/CardsView.vue";
import ModalsView from "../views/ModalsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: DashboardView,
        },
        {
            path: "/buttons",
            name: "buttons-view",
            component: ButtonsView,
        },
        {
            path: "/forms",
            name: "forms-view",
            component: FormsView,
        },
        {
            path: "/cards",
            name: "cards-view",
            component: CardsView,
        },
        {
            path: "/modals",
            name: "modals-view",
            component: ModalsView,
        },
    ],
});

export default router;
