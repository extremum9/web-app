<template>
  <div class="wrapper">
    <AppHeader />
    <main class="container">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

.container {
  max-width: 1200px;
  padding-inline: 1rem;
}
</style>
