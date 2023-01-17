<script>
import { useToDoStore } from '../stores/toDo'
import { mapState, mapActions } from 'pinia';

export default {
  props: ['todo'],
  methods: {
    ...mapActions(useToDoStore, ['delTodo', 'loadData', 'makeFinishOrUnfinish']),
    delTodoFromStore(id) {
      this.delTodo(id)
    }
  },
}
</script>

<template>
  <li @dblclick="delTodo(todo.id)">
    <label>
      <input type="checkbox" v-model="todo.done">
      <del v-if="todo.done">
        {{ todo.title }}
      </del>
      <span v-else>
        {{ todo.title }}
      </span>
    </label>
  </li>
</template>