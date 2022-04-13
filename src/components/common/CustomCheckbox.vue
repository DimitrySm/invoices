<template>
  <label
    class="checkbox-label"
    :class="{ 'checkbox-label-unchecked': !checked }"
  >
    <input
      type="checkbox"
      class="checkbox"
      @change="check"
      :checked="checked"
    />
    <div class="checkbox-icon__wrapper">
      <img
        src="@/assets/icons/check-icon.svg"
        alt="check-icon"
        class="custom-checkbox__icon"
      />
    </div>
  </label>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CustomCheckbox",
  model: {
    prop: "checked",
    event: "check",
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    check(event: any) {
      this.$emit("check", event.target.checked);
    },
  },
});
</script>

<style lang="scss" scoped>
.checkbox-label {
  display: flex;
  cursor: pointer;

  &:hover {
    .checkbox-icon__wrapper {
      border: 2px solid #000;
      transition: 0.3s ease-in;
    }
  }
}

.checkbox {
  display: none;
}

.checkbox-icon__wrapper {
  display: block;
  background-color: transparent;
  text-align: center;
  vertical-align: middle;

  border-radius: 2px;
  border: 2px solid #000;

  height: 15px;
  width: 15px;
  min-width: 15px;
  line-height: 15px;

  .custom-checkbox__icon {
    vertical-align: baseline;
  }
}

.checkbox-label-unchecked {
  .checkbox-icon__wrapper {
    .custom-checkbox__icon {
      display: none;
    }
  }
}
</style>
