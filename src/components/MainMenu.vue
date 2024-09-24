<template>
  <section class="main-menu">
    <button class="menu-item" v-for="genre in genres" :key="genre.id">{{genre.name}}</button>
  </section>
</template>

<script setup lang="ts">
const genres = [
  {"id": 1, "name": "Action"},
  {"id": 2, "name": "Adventure"},
  {"id": 3, "name": "Animation"},
  {"id": 4, "name": "Comedy"},
  {"id": 5, "name": "Crime"},
  {"id": 6, "name": "Documentary"},
  {"id": 7, "name": "Drama"},
  {"id": 8, "name": "Family"},
  {"id": 9, "name": "Fantasy"},
  {"id": 10, "name": "History"},
  {"id": 11, "name": "Horror"},
  {"id": 12, "name": "Music"},
  {"id": 13, "name": "Mystery"},
  {"id": 14, "name": "Romance"},
  {"id": 15, "name": "Science Fiction"},
  {"id": 16, "name": "TV Movie"},
  {"id": 17, "name": "Thriller"},
  {"id": 18, "name": "War"},
  {"id": 19, "name": "Western"},
  {"id": 20, "name": "Biography"},
  {"id": 21, "name": "Sport"}
]

</script>

<style scoped>
.main-menu {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3px;
  padding: 10px;
  border-bottom: 1px solid #2c2c2c;
}

.menu-item {
  background-color: #181818;
  color: #999;
  text-align: center;
  margin: 5px;
  cursor: pointer;
  border: none;
  padding: 5px 20px;
  height: 25px;
  overflow: hidden;
  border-radius: 3px;
}

.menu-item:hover {
  background-color: #333;
  color: #ccc;
}
</style>
