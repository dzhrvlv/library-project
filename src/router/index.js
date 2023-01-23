import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView"
import AboutView from "@/views/AboutView"
import BooksView from "@/views/BooksView"
import AuthView from "@/views/AuthView"
import CabinetView from "@/views/CabinetView"
import store from "../store"


const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuth) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuth) {
    next()
    return
  }
  next('/auth')
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/about",
    name: "About",
    component: AboutView
  },
  {
    path: "/books",
    name: "Books",
    component: BooksView
  },
  {
    path: "/auth",
    name: "Auth",
    component: AuthView,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/cabinet",
    name: "Cabinet",
    component: CabinetView,
    beforeEnter: ifAuthenticated,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
