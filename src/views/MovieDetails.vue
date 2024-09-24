<template>
  <div>
    <h1>Movie Details</h1>
    <p>Movie ID: {{ id }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id as string
</script>
