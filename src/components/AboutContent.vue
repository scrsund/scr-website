<template>
  <div class="section-two">
    <div class="grid-container">
      <HoverCard v-for="(entry, index) in entries" :key="entry.title">
        <div class="grid-item" :class="getBorderClass(index)">
          <HoverCardTrigger>
            <div class="trigger-content">
              <i v-if="entry.icon" :class="entry.icon"></i>
              <img v-else :src="meImage" class="me-image" />
              <h1 :class="getTitleClass(index)">{{ entry.title }}</h1>
            </div>
          </HoverCardTrigger>
          <HoverCardContent
            class="hover-card-content"
            v-if="entry.title !== 'Me'"
          >
            <div class="hover-card-inner">
              <h4 class="hover-card-duration">{{ entry.duration }}</h4>
              <p class="hover-card-description">
                {{ entry.description }}
              </p>
            </div>
          </HoverCardContent>
        </div>
      </HoverCard>
    </div>
  </div>
</template>

<script>
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/UI/hover-card";
import { mapState } from "vuex";
import meImage from "@/assets/me.jpg";

export default {
  components: {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  },
  data() {
    return {
      meImage,
    };
  },
  computed: {
    ...mapState(["entries"]),
  },
  methods: {
    getBorderClass(index) {
      switch (index) {
        case 0:
          return "border-bottom-right";
        case 1:
          return "border-left-right";
        case 2:
          return "border-bottom-left";
        case 3:
          return "border-top-bottom";
        case 4:
          return "border-none";
        case 5:
          return "border-top-bottom";
        case 6:
          return "border-top-right";
        case 7:
          return "border-left-right";
        case 8:
          return "border-top-left";
        default:
          return "";
      }
    },
    getTitleClass(index) {
      return index === 4 ? "me-title" : "hover-title";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}

.section-two {
  padding: 2rem;
  background-color: var(--clr-5);
  display: grid;
  place-content: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 35px;
  width: 140vh;
  height: 80vh;
}

.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-5);
  border: none;
  padding: 20px;
  text-align: center;
  position: relative;
  border: 1px solid transparent;
}

.trigger-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s;
  cursor: pointer;
}

.grid-item i {
  color: white;
  font-size: 1rem;
  transition:
    font-size 0.5s,
    transform 0.5s;
}

.grid-item:hover i {
  font-size: 1rem;
  transform: scale(1.2);
}

.hover-title {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  transition: font-size 0.5s;
}

.grid-item:hover .hover-title {
  font-size: 18px;
}

.me-title {
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
}

.me-image {
  width: 100px; /* Adjust size as needed */
  height: auto;
}

.hover-card-content {
  opacity: 0;
  visibility: hidden;
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 110px; /* Adjust this value to control vertical positioning */
  left: 68%;
  z-index: 1000;
  width: 180px;
  color: black;
  transition:
    opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;
  animation: fadeInUp 1.1s forwards;
  pointer-events: none; /* Prevents interaction when not visible */
}

.grid-item:hover .hover-card-content {
  opacity: 1;
  pointer-events: auto; /* Enables interaction when visible */
  visibility: visible;
}

.grid-item:not(:hover) .hover-card-content {
  animation: fadeOutDown 0.6s forwards;
}

.hover-card-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hover-card-description {
  font-size: 12px;
  margin-bottom: 10px;
}

.hover-card-duration {
  font-size: 10px;
  margin-bottom: 5px;
}

.border-top-left {
  border-top: 1px solid #fff;
  border-left: 1px solid #fff;
}

.border-top-bottom {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.border-top-right {
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
}

.border-left-right {
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}

.border-bottom-left {
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
}

.border-bottom-right {
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff;
}

.border-none {
  border: none;
}
</style>
