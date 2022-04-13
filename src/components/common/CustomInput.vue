<template>
  <div class="input-wrapper">
    <input
      class="input"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="input"
      :class="{ 'input-error': error }"
    />
    <div v-show="error" class="error-text">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomInput",

  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: [String, Number],
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    input(event: any) {
      this.$emit("input", event.target.value);
    },
  },
});
</script>

<style scoped lang="scss">
.input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
}

.input {
  width: 100%;

  border: 3px solid #000;
  border-radius: 5px;

  color: #000;

  padding: 10px 16px;

  &::placeholder {
    font-family: "Caveat", cursive;
    font-size: 16px;
    color: #000;
  }

  &:focus-visible {
    outline: none;
  }
}

.input-error {
  border-color: #f10606;
  color: #f10606;

  &:hover {
    border-color: #f10606;
  }

  &:focus {
    border-color: #f10606;
  }

  &:active {
    border-color: #f10606;
  }
}

.error-text {
  color: #f10606;
  text-align: left;

  font-size: 12px;
  line-height: 14px;

  position: absolute;
  left: 0px;
  bottom: -25px;
  min-width: 120px;
}
</style>
