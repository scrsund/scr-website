<!-- DropdownMenu.vue -->
<template>
  <div class="dropdown" @click="toggleDropdown">
    <button class="dropdown-button">☰</button>
    <div v-if="isOpen" class="dropdown-content">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: transparent;
  cursor: pointer;
  border: none;
  color: whitesmoke;
  font-size: xx-large;
  padding: 10px;
}

.dropdown-content {
  display: block;
  position: absolute;
  right: 0;
  background-color: rgb(25, 25, 25);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: whitesmoke;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: 0.25s;
}

.dropdown-content a:hover {
  color: rgb(187, 186, 186);
}

/*.dropdown-content {
  display: block;
  position: absolute;
  right: 0;
  background-color: rgb(247, 247, 247);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}*/
</style>
