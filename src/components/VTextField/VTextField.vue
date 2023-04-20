<template>
  <label :class="['label', { label_required: required }]">
    <div class="label__text" v-if="!!label">{{ label }}</div>
    <component
      :is="fieldType"
      :type="fieldType === 'input' ? 'text' : null"
      :placeholder="placeholder"
      :class="[fieldType, { invalid: !!error && touched }]"
      :aria-invalid="error || null"
      :value="modelValue"
      @input="setValue"
      @blur="$emit('update:touched', true)"
    />
    <div class="error" v-if="!!error && touched">
      {{ error }}
    </div>
  </label>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  modelModifiers: {
    default: () => ({}),
  },
  touched: {
    type: Boolean,
    required: true,
  },
  fieldType: {
    validator: (type) => ["input", "textarea"].includes(type),
    default: "input",
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
  validation: {
    type: Array,
    default: () => [],
  },
  format: {
    type: Function,
    default: null,
  },
});
const emit = defineEmits(["update:modelValue", "update:error", "update:touched"]);

// validation
const error = ref("");
const validate = (checkingValue) => {
  error.value = "";
  for (const rule of props.validation) {
    if (!rule.check(checkingValue.trim())) {
      error.value = rule.error;
      emit("update:error", true);
      return;
    }
  }
  emit("update:error", false);
};
watch(
  () => props.modelValue,
  validate,
  { immediate: true }
);

// emit input value
const setValue = (event) => {
  let value = event.target.value;
  // formatting value
  if (props.modelModifiers.format) {
    value = props.format(value);
  }
  emit("update:touched", true);
  emit("update:modelValue", value);
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

.input,
.textarea {
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
}

.textarea {
  display: block;
  height: 6.75rem;
  resize: none;
}

.invalid {
  margin-bottom: 0.25rem;
  outline: 1px solid $salmon;
}

.invalid + .error {
  display: block;
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
