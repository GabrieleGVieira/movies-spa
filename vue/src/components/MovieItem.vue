<template>
    <div class="movie">
        <img
      v-if="movie.poster_path"
      :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`"
      alt=""
    />
        <h3> {{ movie.title }} </h3>
        <p> 
        <RouterLink :to="`/movies/${movie.id}`" class="detailsBtn">
        Ver detalhes
      </RouterLink>
        </p>
    </div>
</template>

<script setup>

defineProps({
    movie: Object
})

</script>

<style>

.movie {
    background: white;
    border-radius: 5px;
    padding: 10px;
    width: 200px;
    margin-right: 20px;
    margin-bottom: 50px;
}

.detailsBtn {
    text-decoration: none;
    font-weight: bold;
    color: darkblue
}

.detailsBtn:hover {
    color: blue
}

</style>
