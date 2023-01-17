import { createRouter, createWebHistory } from 'vue-router'

import TodoList from '../views/TodoList.vue'
import TodoAdd from '../views/TodoAdd.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'todoList',
      component: TodoList
    },
    {
      path: '/addTodo',
      name: 'TodoAdd',
      component: TodoAdd
    }
  ]
})

export default router
