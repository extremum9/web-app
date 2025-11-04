import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ItemsListPage from '../pages/ItemsListPage.vue';
import ItemDetailsPage from '../pages/ItemDetailsPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/items', component: ItemsListPage },
  { path: '/items/:id', component: ItemDetailsPage }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
