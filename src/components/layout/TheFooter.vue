<template>
  <footer>
    <a
      href="https://github.com/scrsund"
      target="_blank"
      rel="noopener"
      class="footer-icon"
    >
      <i class="fab fa-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/sarah-sund-24ab83280/"
      target="_blank"
      rel="noopener"
      class="footer-icon"
    >
      <i class="fab fa-linkedin"></i>
    </a>
    <a
      href="https://www.facebook.com/sarah.katigbak.7/"
      target="_blank"
      rel="noopener"
      class="footer-icon"
    >
      <i class="fab fa-facebook"></i>
    </a>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--clr-1);
  transition: 0.3s;
  /*padding: 1rem;
  position: fixed;
  width: 100%;
  bottom: 0;*/
}

.footer-icon {
  color: rgb(96, 96, 96);
  margin: 0 0.5rem;
  font-size: 1.5rem;
  text-decoration: none;
}

.footer-icon:hover {
  color: #ddd;
}
</style>
