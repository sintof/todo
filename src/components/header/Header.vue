<template>
    <header>
        <nav class="container">
          <h1>My Todos</h1>
          <ul class="nav-routes">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </ul>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
header {
  background-color: #f1f1f1;
}
nav {
  display: flex;
  align-items: center;
  padding: 25px;
}
h1 {
  font-size: 24px;
}
.nav-routes {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 12px;
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
    


</style>