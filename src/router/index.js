import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
const HomeView = r =>
  require.ensure(
    [],
    () => r(require("@/views/home/HomeView.vue")),
    "HomeView"
  );
const welcome = r =>
  require.ensure(
    [],
    () => r(require("@/views/home/welcome.vue")),
    "welcome"
);
const requestApi = r =>
require.ensure(
  [],
  () => r(require("@/views/requestApi/index.vue")),
  "requestApi"
);
const routes = [
  {
    path: '/',
    name: 'home',
    component:HomeView,
    children:[
      {
        path: '',
        name: 'home',
        component: welcome,
      },
      {
        path: '/requestApi',
        name: 'requestApi',
        component: requestApi,
      }
    ]
  },
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]
console.log("process.env.BASE_URL",process.env.BASE_URL)
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
