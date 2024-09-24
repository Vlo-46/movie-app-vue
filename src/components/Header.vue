<template>
  <section class="header">
    <div class="logo">CineRoom</div>
    <div class="search-field">
      <input type="text" class="search-input" placeholder="Search...">
      <button class="search-btn">Search</button>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #2c2c2c;
  margin-bottom: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.search-field {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.search-input {
  outline: none;
  background-color: #333;
  color: #fff;
  border: 2px solid #313043;
  padding: 10px 22px;
}

.search-btn {
  outline: none;
  background-color: #333;
  color: #fff;
  border: 2px solid #333;
  border-left: 1px solid #333;
  cursor: pointer;
  margin-left: 2px;
  font-size: 13px;
}

.search-input,
.search-btn {
  height: 25px;
  padding: 0 10px;
  border: none;
}

</style>
