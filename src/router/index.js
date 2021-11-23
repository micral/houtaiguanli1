import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import layout from "../components/First.vue";
// 私有路由
const privateRoutes = [
  {
    path: "/app",
    component: layout,
    redirect: "/app/manage",
    meta: {
      title: "用户",
      icon: "personnel",
    },
    children: [
      {
        path: "/app/manage",
        component: () => import("@/views/user-manage/index"),
        meta: {
          title: "用户管理",
          icon: "personnel-manage",
        },
      },
      {
        path: "/app/role",
        component: () => import("@/views/role-list/index"),
        meta: {
          title: "用户清单",
          icon: "role",
        },
      },
      {
        path: "/app/permission",
        component: () => import("@/views/permission-list/index"),
        meta: {
          title: "用户权限",
          icon: "permission",
        },
      },
      {
        path: "/app/info/:id",
        name: "userInfo",
        component: () => import("@/views/user-info/index"),
        meta: {
          title: "userInfo",
        },
      },
      {
        path: "/app/import",
        name: "import",
        component: () => import("@/views/import/index"),
        meta: {
          title: "excelImport",
        },
      },
    ],
  },
  {
    path: "/article",
    component: layout,
    redirect: "/article/ranking",
    meta: {
      title: "文章",
      icon: "article",
    },
    children: [
      {
        path: "/article/ranking",
        component: () => import("@/views/article-ranking/index"),
        meta: {
          title: "文章排名",
          icon: "article-ranking",
        },
      },
      {
        path: "/article/:id",
        component: () => import("@/views/article-detail/index"),
        meta: {
          title: "articleDetail",
        },
      },
      {
        path: "/article/create",
        component: () => import("@/views/article-create/index"),
        meta: {
          title: "创建文章",
          icon: "article-create",
        },
      },
      {
        path: "/article/editor/:id",
        component: () => import("@/views/article-create/index"),
        meta: {
          title: "articleEditor",
        },
      },
    ],
  },
];
const publicRoutes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/app',
    component: () => import(/* webpackChunkName: "about" */ '../components/First.vue'),
    redirect: "/app/manage",
    children: [
      {
        path: "/app/profile",
        name: "profile",
        component: () => import("@/views/profile/index"),
        meta: {
          title: "首页",
          icon: "begin2",
        },
      },
      {
        path: "/app/404",
        name: "404",
        component: () => import("@/views/error-page/404"),
      },
      {
        path: "/app/401",
        name: "401",
        component: () => import("@/views/error-page/401"),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...publicRoutes, ...privateRoutes],
})

export default router
