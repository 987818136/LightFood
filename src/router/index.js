import Vue from 'vue'
import Router from 'vue-router'
import calc from '@/components/calc'
import train from '@/components/train'
import detail from "@/components/detail"
import mine from "@/components/mine"
import card from "@/components/card"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calc',
      component: calc
    },
    {
      path: '/train',
      name: 'train',
      component: train
    },
    {
      path:"/train/:id",
      component:detail
    },
    {
      path:"/mine",
      component:mine
    },    
    {
      path:"/card",
      component:card
    },                        
  ]
})
