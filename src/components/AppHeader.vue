<template>
  <header class="header">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/items">Catalog</router-link>
    </nav>
  </header>
</template>

<style>
.header {
  background: #f5f5f5;
  padding: 1rem;
  text-align: center;
}
a {
  text-decoration: none;
  color: #333;
}
.router-link-active {
  font-weight: bold;
  color: #42b883;
}
</style>
