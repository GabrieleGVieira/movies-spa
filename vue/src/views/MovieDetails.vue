<template>
    <section class="movieContainer">
        <figure class="imgContainer"> 
            <img class="imgContainer" v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" />
        </figure>
        <h1> {{movie.title}}</h1>
        <p>{{movie.overview}}</p>
    </section>
</template>

<script setup>
import MovieItem from '../components/MovieItem.vue'
import { useMovie } from '@/composables/useMovies'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { movie } = useMovie(route.params.id)

</script>

<style>

.movieContainer {
    background: white;
    border-radius: 5px;
    padding: 10px;
    width: 800px;
    margin: 0 auto;
    margin-bottom: 50px;
}

.imgContainer {
    text-align: center;
}

.movie h1 {
    text-align: center;
}
</style>
