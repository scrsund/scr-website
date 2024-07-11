import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
// import StartPage from "./unused/StartPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    // { path: "/start", component: StartPage },
    { path: "/home", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/contact", component: ContactPage },
  ],
});

export default router;
