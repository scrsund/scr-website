<template>
  <body>
    <div class="layout">
      <HoverCardDefault></HoverCardDefault>
      <!-- Demonstration of Hover Card -->
      <!-- <div class="hover-card-container">
        <HoverCard>
          <HoverCardTrigger>
            <h1 class="hover-button">Hover over me</h1>
          </HoverCardTrigger>
          <HoverCardContent class="hover-card-content">
            <div class="hover-card-inner">
              <h4 class="hover-card-title">@vuejs</h4>
              <p class="hover-card-description">
                Progressive JavaScript framework for building modern web
                interfaces.
              </p>
              <div class="hover-card-details">
                <span>Joined January 2014</span>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div> -->
    </div>
  </body>
</template>
<!-- <template> -->
<!-- <router-link class="link" link to="/home" @click="animateLink"
    >Enter Here</router-link
  > -->
<!-- </template> -->

<script>
// import HomeCard from "../components/UI/HomeCard.vue";
import {} from // HoverCard,
// HoverCardContent,
// HoverCardTrigger,
"@/components/UI/hover-card";
import HoverCardDefault from "@/components/UI/hover-card/HoverCardDefault.vue";

export default {
  components: {
    // HomeCard,
    // HoverCard,
    // HoverCardContent,
    // HoverCardTrigger,
    HoverCardDefault,
  },
  methods: {
    animateLink(event) {
      event.preventDefault();
      const link = event.target;
      link.classList.add("clicked");
      setTimeout(() => {
        this.$router.push("/home");
      }, 500);
    },
  },
};
</script>

<style scoped>
body {
  background: var(--clr-1);
  min-height: 100vh;
  display: grid;
  place-content: center;
  color: #333;
  margin: 0;
}

.layout {
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.hover-card-container {
  position: relative;
  display: flex;
  align-items: flex;

  gap: 20px;
}

.hover-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--clr-3);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
}

.hover-card-content {
  display: none;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 40px; /* Adjust this value to control vertical positioning */
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  z-index: 1000; /* Ensure the hover card appears above other content */
  width: 250px;
}

.hover-card-container:hover .hover-card-content {
  display: block;
}

.hover-card-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.hover-card-info {
  margin-left: 10px;
}

.hover-card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hover-card-description {
  font-size: 14px;
  margin-bottom: 10px;
}

.hover-card-details {
  font-size: 12px;
  color: #ccc;
}

.hover-card-details svg {
  margin-right: 5px;
}
</style>

<!-- <style scoped>
.link {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.link.clicked {
  transform: scale(0.1);
  opacity: 0;
}
</style> -->
