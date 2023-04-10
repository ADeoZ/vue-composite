<template>
  <label v-bind:class="['label', { label_required: required }]">
    <div class="label__text" v-if="!!label">{{ label }}</div>
    <input
      type="text"
      name="item-name"
      :placeholder="placeholder"
      v-bind:class="['input', { input_invalid: !!error }]"
      :value="modelValue"
      @input="setValue"
    />
    <div class="error" v-if="!!error">
      {{ typeof error === "string" ? error : "Поле является обязательным" }}
    </div>
  </label>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: [Boolean, String],
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
const setValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
.label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__text {
    position: relative;
    color: $font-form;
    font-size: 0.625rem;
    line-height: 1.3em;
    letter-spacing: -0.02em;
  }

  &_required > &__text::after {
    content: "";
    position: absolute;
    right: -0.3125rem;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: $salmon;
  }
}

.input {
  width: 100%;
  margin: 0.25rem 0 1rem;
  padding: 0.625rem 1rem 0.6875rem;
  background-color: $whitey;
  box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
  border-radius: $bradius;

  font-size: 0.75rem;
  line-height: 1.25em;
  color: $font-main;

  &::placeholder {
    color: $font-disabled;
  }

  &:focus {
    @include focused;
  }

  &_invalid {
    margin-bottom: 0.25rem;
    outline: 1px solid $salmon;
  }

  &_invalid + .error {
    display: block;
  }
}

.error {
  display: none;
  min-height: 0.625rem;
  margin-bottom: 0.125rem;
  overflow: auto;
  font-size: 0.5rem;
  line-height: 1.25em;
  letter-spacing: -0.02em;
  color: $salmon;
}
</style>
