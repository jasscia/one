import Vue from 'vue'
import Router from 'vue-router'
import movieList from '@/components/movie/movieList'
import movie from '@/components/movie/movie'
import Reading from '@/components/Reading'
import Artical from '@/components/Artical'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',
    redirect:'/movies/list'
  },
  //电影
  {
    path: '/movies/list',
    name: 'movie_list',
    component: movieList
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: movie
  },
  //文章
    {
      path: '/reading/list',
      name: 'Reading_list',
      component: Reading
    },
    {
      path: '/reading/artical/:id',
      name: 'Artical',
      component: Artical
    }
  ]
})
