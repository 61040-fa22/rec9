import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoListPage from './TodoList/TodoListPage.vue';
import TodoStatsPage from './TodoStats/TodoStatsPage.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'Home', component: TodoListPage},
  {path: '/stats', name: 'Stats', component: TodoStatsPage}
];

const router = new VueRouter({routes});

export default router;
