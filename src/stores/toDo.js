import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const SERVER = 'http://localhost:3000'

export const useToDoStore = defineStore('todo', {
  state() {
    return {
      todos: []
    }
  },
  // getters: {
  //   finishedTodos: (state) => this.state.todos.filter((todo) => todo.done),
  //   unfinishedTodos: (state) => this.state.todos.filter((todo) => !todo.done),
  // },
  actions: {
    async loadData() {
      const dataTodo = await axios.get(`${SERVER}/todos`)
      this.todos = dataTodo.data
    },

    async addTodo(newValue) {
      try {
        const dataTodo = await axios.post(`${SERVER}/todos`, {
          title: newValue,
          done: false
        })
        this.todos.push(dataTodo.data);
      } catch (err) {
        throw err
      }
    },

    async clearAll() {
      this.todos.forEach(todo => this.delTodo(todo.id))
      this.todos.splice(0, this.todos.length)
    },

    async delTodo(id) {
      await axios.delete(`${SERVER}/todos/${id}`)
      this.todos = this.todos.filter(todo => todo.id !== id)

    },

    async changeDone(todo) {
      let response = await axios.put(`${SERVER}/todos/${todo.id}`, {
        title: todo.title,
        done: !todo.done
      })
      let index = this.todos.findIndex(item => item.id === todo.id)
      console.log(index)
      this.todos[index] = response.data
    }
  },
})
