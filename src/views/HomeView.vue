<template>
  <section class="home-view">
    <MainMenu/>
    <div class="recommended-movies">
      <MovieCard v-for="movie in movies" :movie="movie"/>
    </div>
  </section>
</template>

<script lang="ts" setup>

import MainMenu from "../components/MainMenu.vue";
import MovieCard from "../components/MovieCard.vue";
import {IMovie} from "../interfaces";


const movies: IMovie[] = [
  {
    "id": 1,
    "name": "The Shawshank Redemption",
    "title": "The Shawshank Redemption",
    "img": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
    "year": 1994
  },
  {
    "id": 2,
    "name": "The Godfather",
    "title": "The Godfather",
    "img": "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
    "year": 1972
  },
  {
    "id": 3,
    "name": "The Dark Knight",
    "title": "The Dark Knight",
    "img": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    "year": 2008
  },
  {
    "id": 4,
    "name": "Pulp Fiction",
    "title": "Pulp Fiction",
    "img": "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_.jpg",
    "year": 1994
  },
  {
    "id": 5,
    "name": "Schindler's List",
    "title": "Schindler's List",
    "img": "https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg",
    "year": 1993
  },
  {
    "id": 6,
    "name": "Fight Club",
    "title": "Fight Club",
    "img": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
    "year": 1999
  },
  {
    "id": 7,
    "name": "Forrest Gump",
    "title": "Forrest Gump",
    "img": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
    "year": 1994
  },
  {
    "id": 8,
    "name": "Inception",
    "title": "Inception",
    "img": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    "year": 2010
  }
]

</script>

<style scoped>
.home-view {
  margin: auto;
  width: 50%;
  background-color: #111111;
  border-radius: 5px;
}

.recommended-movies {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
  margin-top: 20px;
}
</style>