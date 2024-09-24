<template>
  <div class="movie-card">
    <div class="card-header">
      <img :src="movie.img" alt="img" class="card-img">
    </div>
    <div class="card-body">
      <p class="card-title">{{ movie.title }}</p>
      <span class="card-year">{{ movie.year }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>

import {IMovie} from "../interfaces";

interface IMovieCardProps {
  movie: IMovie
}

defineProps<IMovieCardProps>()
</script>

<style scoped>
.movie-card {
  background-color: #2c2c2c;
  min-height: 300px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  margin: 2px;
  padding: 3px;
  border-radius: 3px;
}

.card-header {
  height: 80%;
  cursor: pointer;
}

.card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  padding: 0 10px;
  border-top: 1px solid #2c2c2c;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 15px;
}

.card-year {

}
</style>
