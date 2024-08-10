<template>
  <div class="section-two">
    <div class="grid-container">
      <HoverCard v-for="(entry, index) in entries" :key="entry.title">
        <div class="grid-item" :class="getBorderClass(entry)">
          <HoverCardTrigger>
            <div class="trigger-content">
              <i v-if="entry.icon" :class="entry.icon"></i>
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

export default {
  components: {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["entries"]),
  },
  methods: {
    getBorderClass(entry) {
      entry.hasCustomBorder = true;
      if (entry.hasCustomBorder) {
        return entry.customBorderClass;
      }
      return "";
    },
    getTitleClass(index) {
      return index === 4 ? "me-title" : "grid-title";
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 35px;
  width: 100%;
  height: auto;
  padding: 2rem;
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
  min-width: 0;
}

.grid-item i {
  color: white;
  font-size: 1rem;
  transition: transform 0.5s;
}

.grid-title {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  transition: transform 0.5s;
}

.me-title {
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
}

.grid-item:hover i {
  transform: scale(1.2);
}

.grid-item:hover .grid-title {
  transform: scale(1.2);
}

.grid-item:hover .hover-card-content {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
}

.grid-item:not(:hover) .hover-card-content {
  animation: fadeOutDown 0.6s forwards;
}

.trigger-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s;
  cursor: pointer;
}

.hover-card-content {
  opacity: 0;
  visibility: hidden;
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 110px;
  left: 58%;
  transform: translateX(-35%);
  z-index: 1000;
  width: 180px;
  max-width: 90vw;
  color: black;
  transition:
    opacity 0.5s ease-in-out,
    visibility 0.5s ease-in-out;
  animation: fadeInUp 1.1s forwards;
  pointer-events: none;
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

/*grid-item border classes*/

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

@media (max-width: 768px) {
  .hover-card-content {
    width: 100px;
    height: 100px;
    left: -50%;
  }
}

@media (max-width: 480px) {
  body,
  html {
    overflow-x: hidden;
  }

  .section-two {
    height: auto;
    padding: 1rem;
  }

  .grid-container {
    gap: 13px;
  }

  .grid-title,
  .grid-item i {
    font-size: 0.6rem;
  }

  .me-title {
    font-size: 1rem;
  }

  .hover-card-content {
    width: 100px;
    height: 100px;
    left: -20%;
  }

  .hover-card-description {
    font-size: 8px;
  }

  .hover-card-duration {
    font-size: 6.5px;
  }
}

/*
.me-image {
  width: 100px;
  height: auto;
  border-radius: 2rem;
}
*/
</style>
