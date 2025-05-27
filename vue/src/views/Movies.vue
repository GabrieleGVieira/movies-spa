<template>
    <section>
        <h1> Filmes Populares </h1>
        <div class="movieList"> 
            <MovieItem
                v-for="movie in movies"
                :key="movie.id"
                :movie="movie"
            />
        </div>
    </section>
</template>

<script setup>
import MovieItem from '../components/MovieItem.vue'
import { useMovies } from '@/composables/useMovies'
import { computed } from 'vue'

const { movies } = useMovies()

</script>

<style>

.movieList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
