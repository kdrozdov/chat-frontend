export default function (router, store) {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters['accounts/isAuthenticated']) {
        next({ path: '/login' })
      } else {
        next()
      }
    } else {
      next() // всегда так или иначе нужно вызвать next()!
    }
  })
}
