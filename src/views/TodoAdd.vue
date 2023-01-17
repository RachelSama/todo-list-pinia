<script>
import { useToDoStore } from '../stores/toDo'
import { mapState, mapActions } from 'pinia';

export default {
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        ...mapActions(useToDoStore, ['addTodo']),
        addTodoToStore() {
            if (this.newTodo) {
                this.addTodo(this.newTodo)
                this.newTodo = ''
            }
        }
    },
}
</script>

<template>
    <input v-model="newTodo">
    <button @click="addTodoToStore">Añadir</button>
</template>