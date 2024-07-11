<template>
  <main>
    <div class="container">
      <div class="box">
        <hover-card>
          <hover-card-trigger>
            <home-card>
              <router-link to="/about">Hi, I'm Sarah.</router-link>
            </home-card>
          </hover-card-trigger>
          <hover-card-content>
            <div class="icon-container">
              <i class="fa-solid fa-music" :class="getIconClass(1)"></i>
              <i
                class="fa-solid fa-graduation-cap"
                :class="getIconClass(2)"
              ></i>
              <i class="fa-solid fa-people-group" :class="getIconClass(3)"></i>
              <i class="fa-solid fa-code" :class="getIconClass(4)"></i>
              <i class="fa-solid fa-trophy" :class="getIconClass(5)"></i>
            </div>
          </hover-card-content>
        </hover-card>
      </div>
    </div>
    <div>
      <h1 class="title">Aspiring Web Developer</h1>
      <h2 class="subtitle">Vue.js · postgreSQL · Python</h2>
    </div>
  </main>
</template>

<script>
import HomeCard from "../components/UI/HomeCard.vue";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/UI/hover-card";
import { mapState } from "vuex";

export default {
  components: {
    HomeCard,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  },
  computed: {
    ...mapState(["iconList"]),
  },
  methods: {
    getIconClass(index) {
      return `icon-position-${index}`;
    },
  },
};
</script>

<style scoped>
@keyframes slideIn1 {
  0% {
    opacity: 1;
    transform: translate(-25%, 100%);
  }
  100% {
    opacity: 0;
    transform: translate(150%, -150%);
  }
}

@keyframes slideOut1 {
  0% {
    opacity: 0;
    transform: translate(320%, -485%);
  }
  100% {
    opacity: 1;
    transform: translate(150%, 150%);
  }
}

@keyframes slideOut2 {
  0% {
    opacity: 0;
    transform: translate(320%, -485%);
  }
  100% {
    opacity: 1;
    transform: translate(-220%, -350%);
  }
}

@keyframes slideOut3 {
  0% {
    opacity: 0;
    transform: translate(320%, -485%);
  }
  100% {
    opacity: 1;
    transform: translate(-100%, -1000%);
  }
}

@keyframes slideOut4 {
  0% {
    opacity: 0;
    transform: translate(320%, -485%);
  }

  100% {
    opacity: 1;
    transform: translate(600%, -1000%);
  }
}

@keyframes slideOut5 {
  0% {
    opacity: 0;
    transform: translate(320%, -485%);
  }
  100% {
    opacity: 1;
    transform: translate(850%, -200%);
  }
}

.icon-container {
  position: relative;
  width: 100%;
  height: 100%;
}

i {
  position: absolute;
  font-size: 28px;
  color: rgba(245, 245, 245, 0.618);
  opacity: 0;
  transition: all 0.5s ease;
}

.box:hover .icon-position-1 {
  animation: slideOut1 2s ease forwards;
}

.box:hover .icon-position-2 {
  animation: slideOut2 2s ease forwards;
}

.box:hover .icon-position-3 {
  animation: slideOut3 2s ease forwards;
}

.box:hover .icon-position-4 {
  animation: slideOut4 2s ease forwards;
}

.box:hover .icon-position-5 {
  animation: slideOut5 2s ease forwards;
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

main {
  background: var(--clr-1);
  min-height: 63vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  position: relative;
}

.container {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
}

.box {
  margin-top: 2rem;
  right: 56%;
  position: absolute;
  cursor: pointer;
}

.box-about-pg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box a {
  text-decoration: none;
  font-size: 32px;
  color: whitesmoke;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
}

.title {
  position: absolute;
  top: 41%;
  right: 20%;
  font-size: 2rem;
  color: whitesmoke;
}

.subtitle {
  position: absolute;
  top: 49%;
  right: 15%;
  font-size: 1.5rem;
  background: #3c3b3f;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.subtitle:nth-child(2) {
  bottom: 10%;
}

.subtitle:nth-child(3) {
  bottom: 20%;
}

.subtitle:nth-child(4) {
  bottom: 4%;
}

h2 {
  background: #3c3b3f;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

/*
@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.link {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.link.clicked {
  transform: scale(0.1);
  opacity: 0;
}

.title {
  position: absolute;
  top: 41%;
  right: 20%;
  font-size: 2rem;
  color: whitesmoke;
  animation: slideInFromLeft 1.3s ease;
}

.subtitle {
  opacity: 0;
  position: absolute;
  top: 49%;
  right: 15%;
  font-size: 1.5rem;
  background: #3c3b3f;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: slideInFromRight 1.3s ease;
  animation-fill-mode: forwards;
  animation-delay: 0.7s;
}
  */
</style>
