<template>
  <header>
    <router-link link to="/home" class="logo">S</router-link>
    <div class="right-menu">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: transparent;
}

.logo {
  font-size: 27px;
  color: whitesmoke;
  cursor: pointer;
  text-decoration: none;
}

.right-menu {
  display: flex;
  gap: 20px;
}

.right-menu a {
  text-decoration: none;
  color: whitesmoke;
  display: flex;
  align-items: center;
  transition: 0.3s;
}

.right-menu a:hover {
  color: #bcbcbc;
}
</style>
