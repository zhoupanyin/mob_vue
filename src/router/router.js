import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({ //主组件路径配置
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: (resolve) => require(['@/pages/Home'],resolve)
    },
    {
      path: '/Recommend',
      name: 'Recommend',
      component: (resolve) => require(['@/pages/Recommend'],resolve)
    },
    {
      path: '/Classify',
      name: 'Classify',
      component: (resolve) => require(['@/pages/Classify'],resolve)
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: (resolve) => require(['@/pages/Chat'],resolve)
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: (resolve) => require(['@/pages/Personal'],resolve)
    },
  ]
})
