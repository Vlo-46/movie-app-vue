<template>
  <div>
    <h1>Welcome to Movie Database</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
          {{ movie.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

const movies = [
  { id: 1, title: 'Movie 1' },
  { id: 2, title: 'Movie 2' },
]

</script>
