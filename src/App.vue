<template>
  <div>
    <router-view v-slot="{ Component }">
      <TheHeader v-if="showHeader" />
      <transition name="fade" mode="out-in">
        <component :is="Component" class="transition-component" />
      </transition>
      <TheFooter />
    </router-view>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    const route = useRoute();
    const showHeader = computed(() => route.path !== "/start");

    return {
      showHeader,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap");

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Raleway", sans-serif;
  background-color: var(--clr-1);
  color: whitesmoke;
}

:root {
  --clr-1: rgb(21, 21, 21);
  --clr-2: black;
  --clr-3: #0e4b50;
  --clr-4: #2d8f85;
  --clr-5: #637c54;
  --clr-6: #3c3b3f;
}

.transition-component {
  background-color: var(--clr-1);
}

.fade-enter-active {
  transition: opacity 0.7s ease-out;
}
.fade-leave-active {
  transition: opacity 0.4s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
