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
        meta: { title: "主界面", icon: "dashboard" }
      }
    ]
  },
  {
    path: "/upload",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Upload",
        component: () => import("@/views/upload/index"),
        meta: { title: "图片上传", icon: "form" }
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
        meta: { title: "Json格式化", icon: "form" }
      }
    ]
  },
  {
    path: "/transfor",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Transfor",
        component: () => import("@/views/transfor/index"),
        meta: { title: "进制转换", icon: "form" }
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
        meta: { title: "翻译", icon: "form" }
      }
    ]
  },
  {
    path: "/others",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Others",
        component: () => import("@/views/others/index"),
        meta: { title: "常用网站", icon: "form" }
      }
    ]
  },
  {
    path: "external-link1",
    component: Layout,
    children: [
      {
        path: "https://robinloveslife.cn/",
        meta: { title: "个人博客", icon: "link" }
      }
    ]
  },
  {
    path: "external-link2",
    component: Layout,
    children: [
      {
        path: "https://www.cnblogs.com/huangbinlooksgood/",
        meta: { title: "博客园", icon: "link" }
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
