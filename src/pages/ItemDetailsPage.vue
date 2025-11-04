<template>
  <section v-if="item">
    <h2>{{ item.title }}</h2>
    <p>{{ item.description }}</p>
    <router-link to="/items">← Back to Catalog</router-link>
  </section>
  <p v-else>Item not found.</p>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const item = ref(null);

onMounted(async () => {
  const res = await fetch('/data.json');
  const data = await res.json();
  item.value = data.find((el) => el.id === Number(route.params.id));
});
</script>
