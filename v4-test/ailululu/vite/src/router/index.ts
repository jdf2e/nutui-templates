/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2022-12-29 15:48:22
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-01-07 16:14:32
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/button",
      name: "button",
      component: () => import("../views/Button.vue"),
    },
    {
      path: "/audio",
      name: "audio",
      component: () => import("../views/Audio.vue"),
    },
    {
      path: "/layout",
      name: "layout",
      component: () => import("../views/Layout.vue"),
    },
    {
      path: "/notify",
      name: "notify",
      component: () => import("../views/Notify.vue"),
    },
    {
      path: "/picker",
      name: "picker",
      component: () => import("../views/Picker.vue"),
    },
    {
      path: "/circleprogress",
      name: "circleprogress",
      component: () => import("../views/CircleProgress.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/Menu.vue"),
    },
    {
      path: "/checkbox",
      name: "checkbox",
      component: () => import("../views/Checkbox.vue"),
    },
    {
      path: "/actionsheet",
      name: "actionsheet",
      component: () => import("../views/Actionsheet.vue"),
    },
    {
      path: "/drag",
      name: "drag",
      component: () => import("../views/Drag.vue"),
    },
    {
      path: "/popup",
      name: "popup",
      component: () => import("../views/Popup.vue"),
    },
    {
      path: "/elevator",
      name: "elevator",
      component: () => import("../views/Elevator.vue"),
    },
    {
      path: "/steps",
      name: "steps",
      component: () => import("../views/Steps.vue"),
    },
    {
      path: "/swiper",
      name: "swiper",
      component: () => import("../views/Swiper.vue"),
    },
    {
      path: "/swipe",
      name: "swipe",
      component: () => import("../views/Swipe.vue"),
    },
    {
      path: "/video",
      name: "video",
      component: () => import("../views/Video.vue"),
    },
    {
      path: "/infiniteLoading",
      name: "infiniteLoading",
      component: () => import("../views/InfiniteLoading.vue"),
    },
  ],
});

export default router;