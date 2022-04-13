<template>
  <div id="app">
    <InvoicesCalcPage />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InvoicesCalcPage from "@/views/InvoicesCalcPage.vue";

export default Vue.extend({
  components: {
    InvoicesCalcPage,
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  font-family: "Caveat", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.container {
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 40px;
  align-self: flex-start;
  margin: 50px 0 0 25px;
}
</style>
