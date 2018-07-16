import Vue from 'vue'
import Router from 'vue-router'
import calc from '@/components/calc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calc',
      component: calc
    }
  ]
})
