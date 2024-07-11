<template>
  <div class="background">
    <div class="card">
      <h2><span>Let's Chat.</span></h2>
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
};
</script>

<style scoped>
.card {
  padding: 3rem;
  margin: 1rem auto;
  max-width: 35rem;
  border-radius: 4rem;
  background-color: var(--clr-1);
  transition: background-color 0.6s ease-out;
}

.card:hover {
  background-color: var(--clr-6);
}

h2 {
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 2rem;
}

h2 span:hover {
  background-position: 0% 100%;
  cursor: pointer;
}

h2 span {
  background-image: linear-gradient(
    to right,
    var(--clr-3),
    var(--clr-4),
    var(--clr-5)
  );
  background-size: 300% 2px;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  transition: background-position 0.5s;
}
</style>

<!-- <style scoped>
.background {
  background: linear-gradient(
    to top left,
    rgb(100, 100, 100) 2%,
    var(--clr-6) 10%,
    var(--clr-1) 25%
  );
}


div {
  font-family: "Source Code Pro", monospace;
  text-align: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(
    to bottom,
    white 50%,
    rgb(236, 236, 236) 63%,
    rgb(215, 215, 215) 65%,
    rgb(134, 134, 134) 70%,
    rgb(70, 70, 70) 75%,
    rgb(28, 28, 28) 78%,
    rgb(17, 17, 17) 80%
  );
  position: relative;
  overflow: hidden;
}
</style> -->
