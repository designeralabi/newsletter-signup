<template>
  <div>
    <img
      src="../assets/icon-success.svg"
      alt="icon_success"
    />
    <h3 id="header_text">Thanks for subscribing!</h3>
    <h3>A confirmation email has been sent to ash@loremcompany. {{ email }}</h3>
    <p>
      Please open it and click the button inside to confirm your subscription.
    </p>
    <button>Dismiss message</button>
  </div>
</template>

<script>
export default {
  props: ["email"],
};
</script>

<style scoped>
#header_text {
    font-size: 2rem;
    margin: 14px 0px;
    font-weight: 700;
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
</style>
