<template>
  <div>
    <h1> Movies SPA </h1>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/movies">Filmes</RouterLink></li>
    </ul>

    <router-view />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
