import type { RouteRecordRaw } from "vue-router";

export enum RouteNames {
  Home = "Home",
  NotFound = "NotFound",
}

export const Routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: RouteNames.Home,
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: RouteNames.NotFound,
    component: () => import("@/views/NotFoundView.vue"),
  },
];
