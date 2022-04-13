<template>
  <button class="button" @click="$emit('click', $event)" :type="type">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ButtonOutline",
  props: {
    type: {
      default: "submit",
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.button {
  box-sizing: border-box;

  padding: 15px 20px;

  transition: 0.2s ease-in;

  font-family: "Caveat", cursive;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;

  border: 3px solid #000;
  border-radius: 5px;

  box-shadow: 4px 4px 0px -1px #000000;

  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  &:hover {
    background-color: gray;
  }
}
</style>
