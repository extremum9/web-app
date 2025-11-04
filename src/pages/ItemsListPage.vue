<template>
  <section>
    <h2>Project Catalog</h2>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id">
        <router-link :to="`/items/${item.id}`">{{ item.title }}</router-link>
      </li>
    </ul>
    <p v-else>Loading...</p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const items = ref([]);

onMounted(async () => {
  const res = await fetch('/data.json');
  items.value = await res.json();
});
</script>
