import Vue from 'vue'
import Router from 'vue-router'
import Reading from '@/components/Reading'
import Artical from '@/components/Artical'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/reading/list',
      name: 'Reading_list',
      component: Reading
    },
    {
      path: '/reading/artical',
      name: 'Artical',
      component: Artical
    }
  ]
})
