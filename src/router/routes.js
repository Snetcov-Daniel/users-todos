import Vue from "vue";
import Users from "components/Users";
import Index from "src/pages";
import User from "components/User";

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
    {
        path: '/:id',
        component: () => import('components/User')
    }
]

export default routes
