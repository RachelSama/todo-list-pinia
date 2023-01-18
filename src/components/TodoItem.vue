<script>
import { useToDoStore } from '../stores/toDo'
import { mapState, mapActions } from 'pinia';

export default {
  props: ['todo'],
  methods: {
    ...mapActions(useToDoStore, ['delTodo', 'loadData', 'changeDone']),
    delTodoFromStore(id) {
      this.delTodo(id)
    },
    changeDoneCheck() {
      this.changeDone(this.todo)
    }
  },
}
</script>

<template>
  <li @dblclick="delTodo(todo.id)">
    <label>
      <input type="checkbox" :checked="todo.done" @change="changeDoneCheck()">
      <del v-if="todo.done">
        {{ todo.title }}
      </del>
      <span v-else>
        {{ todo.title }}
      </span>
    </label>
  </li>
</template>