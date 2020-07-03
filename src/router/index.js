/*
 * @Date: 2020-07-01 14:42:43
 * @LastEditors: Lee
 * @LastEditTime: 2020-07-01 14:55:43
 */ 
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      component: resolve => require(["@/views/home"],resolve),
      name: 'home',
      meta:{auth: true}
    }
  ]
})
