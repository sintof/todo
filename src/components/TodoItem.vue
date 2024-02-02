<template>
    <div class="todoItem" :class="{ 'isCompleted': todo.isCompleted }">
        <input
            type="checkbox"
            :checked="todo.isCompleted"
            @click="tgleCompleted(todo.id)">
        <p
        v-if="!todo.isEditing"
        line-clamp="2"
        class="todoText" >
            {{ todo.text }}
        </p>
        <textarea v-else type="text"
        v-model="todo.text"
        class="todoEdit"
        maxlength="50">
        </textarea>

        <div class="buttons">
            <button class="edit" v-if="!todo.isEditing" @click="editTodo(todo.id)">Edit</button>
            <button class="done" v-else @click="editTodo(todo.id)">Done</button>
            <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
        </div>

    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia';

const props = defineProps({
    id: String
})
const todoStore = useTodoStore()
const { todoList } = storeToRefs(todoStore)
const todo = reactive(todoStore.getTodoById(props.id))

const tgleCompleted = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id)
  todoList.value[index].isCompleted = !todoList.value[index].isCompleted
}

const editTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id)
  todoList.value[index].isEditing = !todoList.value[index].isEditing
}

const deleteTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id)
  todoList.value.splice(index, 1)
}
</script>

<style>
.isCompleted p{
    text-decoration: line-through black 2px;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #41b080;
    margin-right: 10px;
}

.todoItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    gap: 10px;
    margin-bottom: 10px;
    border: 1px solid #41b080;
    border-radius: 8px;
    padding: 8px 16px;

}

.buttons{
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.todoText{
    font-size: 18px;
    font-weight: 400;
    color: #41b080;
    padding: 5px;
    line-clamp: 2;
    overflow:hidden;
    text-overflow:ellipsis;
    
}

.todoEdit{
    font-size: 18px;
    font-weight: 400;
    color: #41b080;
    padding: 2px;
    border: 1px solid #2b7a58;
    accent-color: #41b080;
    border-radius: 12px;
}

.edit, .delete, .done{
    padding: 5px 10px;
    background-color: #41b080;
    color: white;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 0 0 3px rgba(37, 126, 87, 0.07);
    border: 1px solid #2b7a58;
}

.edit:hover, .delete:hover, .done:hover{
    opacity: 0.9;
    box-shadow: 0 0 0 3px rgba(37, 126, 87, 0.2);
}
</style>

