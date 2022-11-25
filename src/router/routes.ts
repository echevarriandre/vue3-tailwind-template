import type { RouteRecordRaw } from "vue-router";

export enum RouteNames {
  Home = "home",
}

export const Routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: RouteNames.Home,
    component: () => import("../views/HomeView.vue"),
  },
];
