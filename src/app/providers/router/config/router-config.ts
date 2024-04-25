import {createRouter, createWebHistory} from "vue-router";
import {routes} from "./router"

export const routerConfig = createRouter({
    history: createWebHistory(),
    routes
})