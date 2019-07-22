import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ProductsManager from '@/components/ProductsManager'
import ProductPage from '@/components/ProductPage'
import Products from '@/components/Products'
import Cart from '@/components/Cart'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/products/manager',
      name: 'ProductsManager',
      component: ProductsManager,
      meta: { requiresAdmin: true }
    },
    {
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  let requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
  if (requiresAdmin) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user.email == "admin@example.com") {
        next()
      } else {
        next({
          path: '/'
        })
      }
    })
  }
})

export default router
