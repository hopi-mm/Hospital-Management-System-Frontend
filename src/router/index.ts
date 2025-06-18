import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

import Index from "@/views/Index.vue";
import Home from "@/views/Home/Index.vue";
import Appointment from "@/views/Appointment/Index.vue";
import Test from "@/views/Appointment/Test.vue";
import Auth from "@/views/Auth/Index.vue";

const routes : RouteRecordRaw[] = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/appointment",
        name: "Appointment",
        component: Appointment,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
    },
    {
        path: '/auth',
        name: "Auth",
        component: Auth,
        meta: { layout: 'auth' }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
    