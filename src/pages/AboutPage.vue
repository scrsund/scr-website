<template>
  <div class="container">
    <section class="one">
      <div class="absolute">
        <div class="absolute inset-0 justify-center">
          <div class="bg-shape1 bg-gold opacity-50 bg-blur"></div>
          <div class="bg-shape2 bg-primary opacity-50 bg-blur"></div>
        </div>
        <div class="container-texts">
          <h2 class="fade-in-container">
            <span class="fade-in-word delay-0">Self Motivated.</span>
            <span class="fade-in-word delay-1">Active Learner.</span>
            <span class="fade-in-word delay-2">Perserverant.</span>
          </h2>
          <h1 class="fade-in-container"></h1>
        </div>
      </div>
    </section>
    <div></div>
    <AboutContent></AboutContent>
  </div>
</template>

<script>
import AboutContent from "@/components/AboutContent.vue";

export default {
  components: {
    AboutContent,
  },
};
</script>

<style scoped>
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100%;
  scroll-behavior: smooth;
}

section {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

.absolute {
  margin-left: 2rem;
  position: absolute;
  top: 60px !important;
  inset: 0;
  justify-content: left;
  display: inline-flex;
  flex-direction: row;
}

.justify-center {
  justify-content: center;
}

.bg-shape1 {
  width: 400px;
  height: 400px;
  border-radius: 9999px;
  position: relative;
}

.bg-shape2 {
  width: 300px;
  height: 300px;
  border-radius: 9999px;
  position: relative;
}

.opacity-50 {
  opacity: 0.5;
}

.bg-blur {
  filter: blur(90px);
}

.bg-primary {
  background-color: var(--clr-4);
}

.bg-gold {
  background-color: var(--clr-5);
}

.container-texts {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.fade-in-container {
  display: inline-block;
}

.fade-in-word {
  opacity: 0;
  display: inline-block;
  animation: fadeIn 1s ease-in-out forwards;
  margin: 0.5rem 0.25rem;
}

.delay-0 {
  animation-delay: 0s;
}

.delay-1 {
  animation-delay: 0.8s;
}

.delay-2 {
  display: block;
  font-size: 35px;
  animation-delay: 1.8s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 480px) {
  section {
    height: 75vh;
  }

  .fade-in-container {
    font-size: 23px;
  }

  .delay-2 {
    font-size: 33px;
  }
}
</style>

<!-- <template>
      <section class="section-two">
      <div class="grid-container">
        <div class="grid-item no-border-top no-border-left">
          <i class="fa-solid fa-music"></i>
          <h1>Musician</h1>
          <p>
            I play the drums, guitar, piano, bass, and write songs. I've played
            for crowds of thousands and have experience as a studio musician.
          </p>
        </div>
        <div class="grid-item no-border-top no-border-bottom">
          <i class="fa-solid fa-coins"></i>
          <h1>Financial Analyst</h1>
          <p>
            Trading Forex, Cryptocurrency, and NFTs through market sentiment and
            technical analysis. I've been able to 20x my portfolio in the last 3
            years.
          </p>
        </div>
        <div class="grid-item no-border-top no-border-right">
          <i class="fa-solid fa-code"></i>
          <h1>Aspiring Developer</h1>
          <p>
            Python, JavaScript/HTML/CSS and postgreSQL. Although I'm open to
            both front and backend development, I've been enjoying frontend
            development recently.
          </p>
        </div>
        <div class="grid-item no-border-left no-border-right">
          <i class="fa-solid fa-graduation-cap"></i>
          <h1>Self-Taught</h1>
          <p>
            I taught myself how to do music, how to understand financial
            markets, and now, how to code. Learning new skills and challenging
            myself is my hobby.
          </p>
        </div>
        <div class="grid-item center-item"><h2>Me</h2></div>
        <div class="grid-item no-border-left no-border-right">
          <i class="fa-solid fa-trophy"></i>
          <h1>Leader</h1>
          <p>
            Experience as a music instructor, youth leader, and preschool
            assistant. I've worked with kids as young as 2 years old to elders
            as old as 60.
          </p>
        </div>
        <div class="grid-item no-border-bottom no-border-left">
          <i class="fa-solid fa-person-running"></i>
          <h1>Growth</h1>
          <p>
            I believe that your mind is your greatest asset. I always want to
            improve and better myself mentally and emotionally by reading books
            and being open to critique.
          </p>
        </div>
        <div class="grid-item no-border-bottom no-border-top">
          <i class="fa-solid fa-people-group"></i>
          <h1>Team Player</h1>
          <p>
            I have a genuine interest in people and find that I can work well
            with almost anyone. My optimistic personality makes it easy to
            collaborate with others and their ideas.
          </p>
        </div>
        <div class="grid-item no-border-bottom no-border-right">
          <i class="fa-solid fa-handshake-angle"></i>
          <h1>Serving</h1>
          <p>
            Helping others and being generous when I can be. I've been
            volunteering my time at various organizations my whole life.
          </p>
        </div>
      </div>
    </section>
</template> -->

<!-- <style scoped>
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100%;
  scroll-behavior: smooth;
}

section {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}

.section-two {
  padding: 2rem;
  background-color: var(--clr-5);
  display: grid;
  place-content: center;
}

.section-two h2 {
  font-size: 35px;
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
  justify-content: flex-start;
  align-items: center;
  background-color: var(--clr-5);
  border: 1px solid #fff;
  padding: 20px;
  text-align: center;
  position: relative;
}

/*.grid-item:hover p {
  display: block;
}

.grid-item p {
  display: none;
}*/

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.center-item {
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
}

.grid-item i {
  font-size: 1rem;
  margin-bottom: 10px;
}

.grid-item h1 {
  font-size: 15px;
  margin-bottom: 2px;
}

.grid-item p {
  padding: 1rem;
  margin-top: 0;
  font-size: 12px;
}
.no-border-top {
  border-top: none;
}

.no-border-right {
  border-right: none;
}

.no-border-left {
  border-left: none;
}

.no-border-bottom {
  border-bottom: none;
}
</style> -->
