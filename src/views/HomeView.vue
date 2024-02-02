<script setup>
import TodoCreator from '@/components/TodoCreator.vue';
import TodoItem from '@/components/TodoItem.vue';
import { useTodoStore } from '@/stores/todoStore';

const todoStore = useTodoStore();
todoStore.getSavedTodos()

onbeforeunload = () => {
  todoStore.saveTodos()
}
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator />
    <div>
      <ul class="todo-list">
        <TodoItem
        v-for="todo in todoStore.todoList"
        :key="todo.id"
        :id="todo.id" />
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