<template>
  <button class="form__button" :type="submitButton ? 'submit' : null">{{ label }}</button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  label: {
    type: String,
    required: true,
  },
  submitButton: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
.form__button {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.625rem 1rem 0.6875rem;
  @include button($green);
  font-family: "Inter", "Source Sans Pro", Verdana, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.25em;
  color: #ffffff;
  transition: background-color 0.2s ease-in;

  &:disabled {
    background-color: $button-disabled;
    color: $font-disabled;
  }

  &:not(:disabled):focus {
    @include focused;
  }

  &:not(:disabled):hover {
    background-color: darker($green, 1);
  }

  &:not(:disabled):active {
    background-color: lighter($green, 1);
  }
}
</style>
