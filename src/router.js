import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    /////FESTIVALS/////
    {
      path: "/festivals",
      name: "festivals_index",
      component: () => import("./pages/festivals/Index.vue"),
    },
    {
      path: "/festivals/:id",
      name: "festivals_show",
      component: () => import("./pages/festivals/Show.vue"),
    },
    {
      path: "/festivals/add",
      name: "festivals_add",
      component: () => import("./pages/festivals/Add.vue"),
    },
    {
      path: "/festivals/edit/:id",
      name: "festivals_edit",
      component: () => import("./pages/festivals/Edit.vue"),
    },

    ////ENROLMENTS////
    {
      path: "/enrolments",
      name: "enrolments_index",
      component: () => import("./pages/enrolments/Index.vue"),
    },
    {
      path: "/enrolments/:id",
      name: "enrolments_show",
      component: () => import("./pages/enrolments/Show.vue"),
    },
    {
      path: "/enrolments/add",
      name: "enrolments_add",
      component: () => import("./pages/enrolments/Add.vue"),
    },
    {
      path: "/enrolments/edit/:id",
      name: "enrolments_edit",
      component: () => import("./pages/enrolments/Edit.vue"),
    },
    ////LECTURERS////
    {
      path: "/lecturers",
      name: "lecturers_index",
      component: () => import("./pages/lecturers/Index.vue"),
    },
    {
      path: "/lecturers/:id",
      name: "lecturers_show",
      component: () => import("./pages/lecturers/Show.vue"),
    },
    {
      path: "/lecturers/add",
      name: "lecturers_add",
      component: () => import("./pages/lecturers/Add.vue"),
    },
    {
      path: "/lecturers/edit/:id",
      name: "lecturers_edit",
      component: () => import("./pages/lecturers/Edit.vue"),
    },
    ///////////////////
  ],
});
