import { defineStore } from "pinia";
import { computed, ref, reactive } from "vue";
import { uid } from 'uid';

export const useTodoStore = defineStore("todo", () => {
  const todoList = reactive([])
  const err = ref(false);

  const getSavedTodos = () => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos && !todoList.length) {
      todoList.push(...JSON.parse(savedTodos))
    }
  }

  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todoList))
  }

  const getTodoById = (id) => todoList.find((todo) => todo.id === id)

  const createTodo = (todo) => {
    if (todo.trim() !== '') {
      todoList.push({
        id: uid(),
        text: todo,
        isCompleted: false,
        isEditing: null
        })
      err.value = false
    } else {
      err.value = true;
    }
  }

  return { todoList, err, getSavedTodos, saveTodos, createTodo, getTodoById }
})