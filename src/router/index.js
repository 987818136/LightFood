import Vue from 'vue'
import Router from 'vue-router'
import calc from '@/components/calc'
import train from '@/components/train'
import detail from "@/components/detail"
import mine from "@/components/mine"
import card from "@/components/card"
import history from "@/components/history"
import reverse from "@/components/reverse"
import message from "@/components/message"
import login from "@/components/login"
import reg from "@/components/reg"
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
    {
      path:"/mine/history",
      component:history
    },
    {
      path:"/mine/reverse",
      component:reverse
    },
    {
      path:"/login",
      component:login
    }, 
    {
      path:"/reg",
      component:reg
    },
     {
      path:"/message",
      component:message
    },
  ]
})
