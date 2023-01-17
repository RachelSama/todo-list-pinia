<script>
import TodoItem from '../components/TodoItem.vue';
import { useToDoStore } from '../stores/toDo'
import { mapState, mapActions } from 'pinia';

export default {

    props: ['title'],
    components: {
        TodoItem
    },
    computed: {
        ...mapState(useToDoStore, {
            todos: 'todos',
        })
    },
    data() {
        return {
            msg: this.title,
        }
    }
}
</script>

<template>
    <h2 class="">{{ msg }}</h2>
    <ul v-if="this.todos.length">
        <todo-item v-for="todo in this.todos" :todo="todo"></todo-item>
    </ul>
    <p v-else>No hay tareas que mostrar</p>
</template>