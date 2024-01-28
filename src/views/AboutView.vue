<template>
  <div class="about">
    <h1>About Todo App</h1>
    <p>This is a Todo App created with Vue 3 by Komronbek</p>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  margin-top: 40px;
}

h1 {
  font-size: 32px;
  font-weight: 500;
  transition: 250ms ease in-out;
}

h1:hover{
  opacity: 0.8;
  transform: scale(1.05);
}

p {
  margin-top: 16px;
  color: #41b080;
  font-size: 18px;
}

p:hover{
  opacity: 0.8;
  transform: scale(1.05);
}
</style>
