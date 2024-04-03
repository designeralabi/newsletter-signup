<script setup>
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
import { ref } from "vue";

const lists = ref([
  {
    text: "Product discovery and building what matters",
  },
  {
    text: "Measuring to ensure updates are a success",
  },
  {
    text: "And much more!",
  },
]);

let validateEmail = "";

const emailValue = ref("");

function emailChecker() {
  if (emailRegex.test(emailValue.value)) {
    validateEmail = "valid email";
    console.log("valid email");
  } else {
    validateEmail = "invalid email";
    console.log("invalid email");
  }
}

function handleEmailSubmit() {
  emailChecker();
  // router.push({ name: "/success" });
  console.log("submit clicked");
}
</script>

<template>
  <div class="mainContainer">
    <div class="illustration_mobile_wrapper"></div>
    <div class="section_2">
      <h2 id="header_text">Stay updated!</h2>
      <h3>Join 60,000+ product managers receiving monthly updates on:</h3>
      <ul>
        <li
          v-for="list in lists"
          class="list-wrapper"
        >
          <img
            src="./assets/icon-list.svg"
            alt="icon-list"
          />
          <h4 key="list.text">{{ list.text }}</h4>
        </li>
      </ul>
      <div class="email_container">
        <span style="display: flex; justify-content: space-between"
          ><label for="Email">Email address</label>
          <span
            :class="validateEmail === 'valid email' ? 'success' : 'error_msg'"
            style="font-size: 0.85rem"
            >{{ validateEmail }}</span
          >
        </span>

        <input
          type="email"
          id="Email"
          placeholder="email@company.com"
          v-model="emailValue"
          @input.keypress="emailChecker"
        />
        <button
          @click="handleEmailSubmit"
          type="submit"
        >
          Subscribe to monthly newsletter
        </button>
        <!-- Sign-up form end -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainContainer {
  display: flex;
  flex-direction: column;
  background: #fff;
  height: auto;

  .illustration_mobile_wrapper {
    background: url("./assets/illustration-sign-up-mobile.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 350px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .section_2 {
    padding: 20px 25px;
  }

  ul li {
    margin: 17px 0;
  }

  ul li img {
    margin-right: 12px;
  }
  .success {
    color: green;
  }
  .error_msg {
    color: red;
  }
  #header_text {
    font-size: 2rem;
    margin: 14px 0px;
    font-weight: 700;
  }

  .list-wrapper {
    display: flex;
  }

  .email_container {
    display: flex;
    flex-direction: column;
    margin-top: 22px;

    :placeholder-shown {
      font-size: 0.7rem;
    }

    label {
      font-size: 0.9rem;
      font-weight: 700;
    }

    input {
      border: 1px solid hsl(234, 29%, 20%);
      padding: 20px;
      border-radius: 10px;
      outline: none;
      margin: 10px 0;
    }
  }
  button {
    background: hsl(234, 29%, 20%);
    color: white;
    outline: none;
    border-radius: 10px;
    border: none;
    padding: 20px;
    width: 100%;
    transition: all 0.15s linear;
    cursor: pointer;
    margin-top: 10px;
  }

  button:hover {
    background: hsl(4, 100%, 67%);
  }
}

@media screen and (min-width: 600px) {
  .mainContainer {
    width: 88%;
    margin: 150px auto;
    flex-direction: row-reverse;
    max-width: 700px;
    padding: 20px;
    border-radius: 25px;

    .section_2 {
      padding: 30px 25px;
      height: 100%;
      width: 100%;
    }

    .illustration_mobile_wrapper {
      background: url("./assets/illustration-sign-up-desktop.svg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      display: block;
      height: auto;
      min-height: auto;
      border-radius: 20px;
    }
  }
}
</style>
