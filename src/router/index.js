import Vue from 'vue'
import Router from 'vue-router'
import musicList from '@/components/music/musicList'
import music from '@/components/music/music'
import movieList from '@/components/movie/movieList'
import movie from '@/components/movie/movie'
import Reading from '@/components/article/Reading'
import Artical from '@/components/article/Artical'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',
    redirect:'/musics/list'
  },
  //电影
  {
    path: '/musics/list',
    name: 'music_list',
    component: musicList
  },
  {
    path: '/music/:id',
    name: 'music',
    component: music
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
