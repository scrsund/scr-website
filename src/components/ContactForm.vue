<template>
  <form>
    <div class="form-control">
      <label>Name:</label>
      <input text="text" />
      <label>Email:</label>
      <input text="email" />
      <label>Message:</label>
      <textarea rows="5"></textarea>

      <button>Submit</button>
    </div>
  </form>
</template>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  display: block;
  text-align: left;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid #fff;
  font: inherit;
  padding: 0.5rem;
  background: transparent;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    border-radius 0.5s ease;
  color: #fff;
}

textarea {
  margin-top: 1.2rem;
  border: none;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
}

input:focus,
textarea:focus {
  outline: none;
  border-bottom-color: var(--clr-5);
  background-color: var(--clr-6);
  border-radius: 0.5rem;
}

textarea:focus {
  outline: none;
  border-color: var(--clr-5);
  background-color: var(--clr-6);
  border-radius: 0.5rem;
}

button {
  border-color: #e6fcfd;
  background-color: transparent;
  padding: 0.4rem;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  font-size: 15px;
  margin-top: 1rem;
  color: whitesmoke;
  border-radius: 0.5rem;
}

/*
input,
textarea {
  display: block;
  width: 100%;
  background-color: rgb(74, 74, 74);
  color: whitesmoke;
  font: inherit;
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: border 0.3s ease;
  border: none;
}

input:focus,
textarea:focus {
  outline: none;
  border: 3px solid transparent;
  border-color: var(--clr-5);
}
*/
</style>
