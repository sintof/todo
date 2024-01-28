<template>
    <div>
        <div :class="{ 'input-err': err }" class="input-wrap">
            <input 
            type="text"
            v-model="todo" 
            @keydown.exact.enter="$emit('create-todo', todo), todo = ''"
            maxlength="50">
            <button @click="$emit('create-todo', todo), todo = ''">Create</button>
        </div>
    </div>
    <sub class="err" v-if="err">Todo cannot be empty</sub>
</template>

<script setup>
import { ref } from "vue"

const todo = ref('')

defineProps({
  err: Boolean
})

const emit = defineEmits(['create-todo'])

</script>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-err {
    border-color: red;
  }

  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    border: none;
    background-color: #41b080;
    color: white;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    }
  }
}

.err {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>