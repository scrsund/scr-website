<template>
  <div>
    <div class="card">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18rem;
  width: 18rem;
  background: var(--clr-2);
  border-radius: 4.5rem;
  position: relative;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  inset: -0.3rem;
  background: conic-gradient(
    from var(--gradient-angle),
    var(--clr-3),
    var(--clr-4),
    var(--clr-5),
    var(--clr-4),
    var(--clr-3),
    var(--clr-4),
    var(--clr-5),
    var(--clr-4),
    var(--clr-3),
    var(--clr-4),
    var(--clr-5),
    var(--clr-4),
    var(--clr-3),
    var(--clr-4),
    var(--clr-5),
    var(--clr-4),
    var(--clr-3)
  );
  border-radius: inherit;
  z-index: -1;
  animation: rotation 7s linear infinite;
}

.card::after {
  filter: blur(3.5rem);
}

@keyframes rotation {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}

@media (max-width: 480px) {
  .card {
    height: 15rem;
    width: 15rem;
    border-radius: 3rem;
    margin-left: 1rem;
  }
}
</style>
