<template>
  <form @submit.prevent="submitData">
    <div class="form-control">
      <label>Name:</label>
      <input v-model="name" type="text" required />
      <label>Email:</label>
      <input v-model="email" type="email" required />
      <label>Message:</label>
      <textarea v-model="message" rows="5" required></textarea>

      <button type="submit">Submit</button>
    </div>
  </form>
  <!-- <div v-if="error" class="error">{{ error }}</div> --><!-- Display error message if exists -->
  <!-- <form @submit.prevent="submitData">
    <div class="form-control">
      <label>Name:</label>
      <input v-model="formData.name" type="text" required />
      <label>Email:</label>
      <input v-model="formData.email" type="email" required />
      <label>Message:</label>
      <textarea v-model="formData.message" rows="5" required></textarea>

      <button type="submit">Submit</button>
    </div>
    <div v-if="error" class="error">{{ error }}</div> Display error message if exists
  </form> -->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      error: null,
      responseMessage: "",
    };
  },
  // https://my-website-ten-jet-20.vercel.app/contact
  // http://localhost:3000/contact

  methods: {
    async submitForm() {
      // const BACKEND_URL = "https://my-website-ten-jet-20.vercel.app/api/contact"
      const BACKEND_URL = "http://localhost:3000/contact";
      try {
        const response = await fetch(BACKEND_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });

        // DEBUGGING;
        const responseText = await response.text();
        console.log("Response status:", response.status);
        console.log("Response body:", responseText);

        const result = JSON.parse(responseText);

        // const result = await response.json();

        if (response.ok) {
          alert(result.message);
          this.name = "";
          this.email = "";
          this.message = "";
          this.error = null;
        } else {
          this.error = result.message;
          alert("Response Error: " + this.error);
        }
      } catch (err) {
        this.error = err.message;
        alert("Catch Error :" + this.error);
      }
    },
    async submitData() {
      try {
        const BACKEND_URL =
          "https://my-website-ten-jet-20.vercel.app/api/contact";
        // const BACKEND_URL = "http://localhost:3000/contact";
        const formData = {
          name: this.name,
          email: this.email,
          message: this.message,
        };
        console.log("Submitting : ", formData);
        const response = await axios.post(
          BACKEND_URL,
          { formData },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        this.responseMessage = response.data.message;
        this.errorMessage = "";
        alert("Submitted form successfully!");
      } catch (error) {
        console.error("Error:", error);
        this.responseMessage = "";
        this.errorMessage = error.response
          ? error.response.data.message
          : "Network Error";
      }
    },
  },
};
</script>

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
