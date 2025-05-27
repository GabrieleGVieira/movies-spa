import { createRouter, createWebHistory } from 'vue-router'
import RootLayout from './views/RootLayout.vue'
import Home from './views/Home.vue'
import Movies from './views/Movies.vue'
import MovieDetails from './views/MovieDetails.vue'

export const routes = [
  {
    path: '/',
    component: RootLayout,
    children: [
      { path: '', component: Home },
      { path: 'movies', component: Movies },
      { path: 'movies/:id', component: MovieDetails}
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
