export default function(router) {
  router.map({
    '/': {
      name: 'home',
      component: require('./components/Home/index.vue')
    }

  })

}
