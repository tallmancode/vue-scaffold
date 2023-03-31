import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import FormsView from "../views/FormsView.vue";
import CardsView from "../views/CardsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: DashboardView,
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
    ],
});

export default router;
