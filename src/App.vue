<script>
import { useToDoStore } from './stores/toDo'
import { mapState, mapActions } from 'pinia';

import TodoList from './views/TodoList.vue'
import TodoItem from './components/TodoItem.vue';
import TodoAdd from './views/TodoAdd.vue';
import TodoDelAll from './views/TodoDelAll.vue';
import MenuApp from './views/MenuApp.vue';

export default {
  components: {
    MenuApp,
    TodoList,
    TodoAdd,
    TodoDelAll,
    TodoItem
  },
  methods: {
    ...mapActions(useToDoStore, ['loadData'])
  },
  mounted() {
    this.loadData()
  },
}
</script>

<template>
  <menu-app></menu-app>
  <todo-list title="Cosas a hacer este año"></todo-list>
  <todo-add></todo-add>
  <br>
  <todo-del-all></todo-del-all>
</template>