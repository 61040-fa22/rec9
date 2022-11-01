import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoListPage from './TodoList/TodoListPage.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'Home', component: TodoListPage},
];

const router = new VueRouter({routes});

export default router;
