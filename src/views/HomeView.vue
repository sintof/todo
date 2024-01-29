<script setup>
import TodoCreator from '@/components/TodoCreator.vue';
import TodoItem from '@/components/TodoItem.vue';
import { onUnmounted, provide, reactive, ref } from 'vue';
import { uid } from 'uid';

const getSavedTodos = () => {
  const savedTodos = localStorage.getItem('todos')
  if (savedTodos) {
    todoList.push(...JSON.parse(savedTodos))
  }
}

const todoList = reactive([]);
getSavedTodos()
provide('todoList', todoList)
const err = ref(false);

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todoList))
}


onUnmounted(() => {
  saveTodos()
})

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

const toggleCompleted = (id) => {
  const index = todoList.findIndex((todo) => todo.id === id)
  todoList[index].isCompleted = !todoList[index].isCompleted
}

const editTodo = (id) => {
  const index = todoList.findIndex((todo) => todo.id === id)
  todoList[index].isEditing = !todoList[index].isEditing
}

const deleteTodo = (id) => {
  const index = todoList.findIndex((todo) => todo.id === id)
  todoList.splice(index, 1)
}
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator @create-todo="createTodo($event)" :err="err"/>
    <div>
      <ul class="todo-list">
        <TodoItem
        v-for="todo in todoList"
        :key="todo.id"
        :todo="todo"
        :toogleCompleted="toggleCompleted"
        :editTodo="editTodo"
        :deleteTodo="deleteTodo" />
      </ul>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 24px;
  }

  .todos-msg {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 24px;
  }
}
</style>