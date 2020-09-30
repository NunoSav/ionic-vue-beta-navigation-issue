import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Devices from "../views/Devices.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "devices",
    component: Devices,
    meta: {
      isPublic: true,
    },
  },
  {
    path: "/device",
    name: "device",
    component: () => import("../views/Device.vue"),
    meta: {
      stateCode: "0x00",
    },
  },
  {
    path: "/device/config",
    name: "config",
    component: () => import("../views/Config.vue"),
    meta: {
      stateCode: "0x04",
    },
  },
  {
    path: "/device/gps",
    name: "gps",
    component: () => import("../views/GPS.vue"),
    meta: {
      stateCode: "0x02",
    },
  },
  {
    path: "/device/information",
    name: "information",
    component: () => import("../views/Information.vue"),
    meta: {
      stateCode: "0x05",
    },
  },
  {
    path: "/device/lora",
    name: "lora",
    component: () => import("../views/LoRa.vue"),
    meta: {
      stateCode: "0x03",
    },
  },
  {
    path: "/device/ultrasonic",
    name: "ultrasonic",
    component: () => import("../views/Ultrasonic.vue"),
    meta: {
      stateCode: "0x01",
    },
  },
  {
    path: "/device/reset",
    name: "reset",
    component: () => import("../views/Reset.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
