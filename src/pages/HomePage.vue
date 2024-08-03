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
              <i
                class="fa-solid fa-music"
                :class="['hidden-load', getIconClass(1)]"
              ></i>
              <i
                class="fa-solid fa-graduation-cap"
                :class="getIconClass(2)"
              ></i>
              <i class="fa-solid fa-dumbbell" :class="getIconClass(3)"></i>
              <i class="fa-solid fa-trophy" :class="getIconClass(4)"></i>
              <i class="fa-solid fa-people-group" :class="getIconClass(5)"></i>
              <i class="fa-solid fa-code" :class="getIconClass(6)"></i>
              <i class="fa-solid fa-drum" :class="getIconClass(7)"></i>
            </div>
          </hover-card-content>
        </hover-card>
      </div>
      <div class="text-container">
        <h1 class="title">Aspiring Web Developer</h1>
        <h2 class="subtitle">Vue.js · postgreSQL · Python</h2>
      </div>
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
      return `icon-position-${index} ${this.iconState}`;
    },
  },
};
</script>

<style scoped>
@keyframes slideOut1 {
  0% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-1000%, 630%);
  }
}

@keyframes slideIn1 {
  0% {
    opacity: 1;
    transform: translate(-1000%, 630%);
  }
  100% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
}

@keyframes slideOut2 {
  0% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-1080%, 100%);
  }
}

@keyframes slideIn2 {
  0% {
    opacity: 1;
    transform: translate(-1080%, 100%);
  }
  100% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
}

@keyframes slideOut3 {
  0% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-1040%, -500%);
  }
}

@keyframes slideIn3 {
  0% {
    opacity: 1;
    transform: translate(-1040%, -500%);
  }
  100% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
}

@keyframes slideOut4 {
  0% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-570%, -750%);
  }
}

@keyframes slideIn4 {
  0% {
    opacity: 1;
    transform: translate(-570%, -750%);
  }
  100% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
}

@keyframes slideOut5 {
  0% {
    opacity: 0;
    transform: translate(-500%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-0%, -530%);
  }
}

@keyframes slideIn5 {
  0% {
    opacity: 1;
    transform: translate(-0%, -530%);
  }
  100% {
    opacity: 0;
    transform: translate(-500%, -50%);
  }
}

@keyframes slideOut6 {
  0% {
    opacity: 0;
    transform: translate(-500%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(70%, 60%);
  }
}

@keyframes slideIn6 {
  0% {
    opacity: 1;
    transform: translate(70%, 60%);
  }
  100% {
    opacity: 0;
    transform: translate(-500%, -50%);
  }
}

@keyframes slideOut7 {
  0% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
  100% {
    opacity: 1;
    transform: translate(-250%, 610%);
  }
}

@keyframes slideIn7 {
  0% {
    opacity: 1;
    transform: translate(-250%, 610%);
  }
  100% {
    opacity: 0;
    transform: translate(-630%, -50%);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.icon-container {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.box:hover .icon-container {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
}

.box:not(:hover) .icon-container {
  animation: fadeOut 1s forwards;
}

i {
  position: absolute;
  font-size: 28px;
  color: rgba(245, 245, 245, 0.618);
  opacity: 0;
  transition: all 0.4s ease;
}

.box:hover .icon-position-1 {
  animation: slideOut1 1.8s ease forwards;
}

.box:hover .icon-position-2 {
  animation: slideOut2 1.8s ease forwards;
}

.box:hover .icon-position-3 {
  animation: slideOut3 1.8s ease forwards;
}

.box:hover .icon-position-4 {
  animation: slideOut4 1.8s ease forwards;
}

.box:hover .icon-position-5 {
  animation: slideOut5 1.8s ease forwards;
}

.box:hover .icon-position-6 {
  animation: slideOut6 1.8s ease forwards;
}

.box:hover .icon-position-7 {
  animation: slideOut7 1.8s ease forwards;
}

.box .icon-position-1 {
  animation: slideIn1 1s ease forwards;
}

.box .icon-position-2 {
  animation: slideIn2 1s ease forwards;
}

.box .icon-position-3 {
  animation: slideIn3 1s ease forwards;
}

.box .icon-position-4 {
  animation: slideIn4 1s ease forwards;
}

.box .icon-position-5 {
  animation: slideIn5 1s ease forwards;
}

.box .icon-position-6 {
  animation: slideIn6 1s ease forwards;
}

.box .icon-position-7 {
  animation: slideIn7 1s ease forwards;
}

main {
  min-height: 74vh;
  padding: 2rem;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
}

.box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 6rem;
}

.box a {
  text-decoration: none;
  padding: 0.5rem;
  font-size: 32px;
  color: whitesmoke;
  font-weight: 700;
  font-family: "Raleway", sans-serif;
}

.text-container {
  margin-top: 4rem;
  width: 25rem;
  margin-left: 3rem;
}

.title {
  position: relative;
  font-size: 2rem;
  color: whitesmoke;
  text-align: left;
}

.subtitle {
  font-size: 1.5rem;
  background: #3c3b3f;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  text-align: right;
}

@media (max-width: 1000px) {
  .container {
    display: grid;
  }

  .box {
    margin-bottom: 0;
  }

  .text-container {
    margin-top: 4rem;
    text-align: center;
  }

  .title {
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }
}

@media (max-width: 480px) {
  .container {
    display: grid;
  }

  .box {
    margin-bottom: 0;
  }

  .text-container {
    text-align: center;
    margin-top: 3rem;
  }

  .title {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-right: 1rem;
  }

  i {
    display: none;
  }

  .box a {
    font-size: 28px;
  }
}

/*
CIRCLE CALCULATION

center (450%, -700%)

findPoints() {
      const C_x = 450; // Center x-coordinate in percentage
      const C_y = -700; // Center y-coordinate in percentage
      const Point1 = { x: -250, y: -700 }; // Given point1
      const n = 5; // Total number of points

      // Calculate the radius of the circle
      const r = Math.abs(C_x - Point1.x); // Since Point1 and Point2 lie on the same horizontal line

      // Calculate the angles for the given points
      const angle1 = Math.atan2(Point1.y - C_y, Point1.x - C_x);

      // Calculate the angular step between each point
      const step = (2 * Math.PI) / n;

      const points = [];

      for (let i = 0; i < n; i++) {
        const angle = angle1 + i * step;
        const x = C_x + r * Math.cos(angle);
        const y = C_y + r * Math.sin(angle);
        points.push({ x, y });
      }

      this.points = points;
      console.log(this.points);
    },

original -
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
  */
</style>
