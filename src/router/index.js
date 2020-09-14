import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "Dashboard", icon: "dashboard" }
      }
    ]
  },
  {
    path: "/color",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Color",
        component: () => import("@/views/color/index"),
        meta: { title: "Color Extraction", icon: "form" }
      }
    ]
  },
  {
    path: "/json",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Json",
        component: () => import("@/views/json/index"),
        meta: { title: "Json Formatting", icon: "form" }
      }
    ]
  },
  {
    path: "/mockup",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Mockup",
        component: () => import("@/views/mockup/index"),
        meta: { title: "Mockup", icon: "form" }
      }
    ]
  },
  {
    path: "/navigation",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Navigation",
        component: () => import("@/views/navigation/index"),
        meta: { title: "Site Navigation", icon: "form" }
      }
    ]
  },
  {
    path: "/regular",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Regular",
        component: () => import("@/views/regular/index"),
        meta: { title: "Regular Verification", icon: "form" }
      }
    ]
  },
  {
    path: "/search",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Search",
        component: () => import("@/views/search/index"),
        meta: { title: "Problem Search", icon: "form" }
      }
    ]
  },
  {
    path: "/translate",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Translate",
        component: () => import("@/views/translate/index"),
        meta: { title: "Translate", icon: "form" }
      }
    ]
  },
  {
    path: "external-link",
    component: Layout,
    children: [
      {
        path: "https://robinloveslife.cn/",
        meta: { title: "My Blog", icon: "link" }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
