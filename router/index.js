import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  
    {
      path: "/courses",
      name: "courses",
      component: () => import("../views/CoursesView.vue"),
    },
    {
      path: "/enrollments",
      name: "enrollments",
      component: () => import("../views/EnrollmentView.vue"),
    },
    {
      path: "/mycourse",
      name: "mycourse",
      component: () => import("../views/MyCourseView.vue"),
    },
  ],
});

export default router;
