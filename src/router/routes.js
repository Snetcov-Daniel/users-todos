import User from '../pages/UserPage.vue'

const routes = [
  {
    path: '/',
    component: User,
    children: [
      { path: '', redirect: '/users/1' },
      { path: '/users/:id', component: User }
    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
]

export default routes
