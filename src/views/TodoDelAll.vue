<script>
import { useToDoStore } from '../stores/toDo'
import { mapState, mapActions } from 'pinia';

export default {
    methods: {
        ...mapActions(useToDoStore, ['clearAll']),
        clearAllTodos() {
            if (confirm('¿Deseas borrar todos los ToDos?')) {
                this.clearAll()
            }
        }
    }
}
</script>

<template>
    <button @click="clearAllTodos">Borrar toda la lista</button>
</template>