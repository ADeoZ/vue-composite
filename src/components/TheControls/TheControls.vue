<template>
  <aside class="controls">
    <header class="controls__title">
      <h2>Добавление товара</h2>
    </header>
    <form-add-item />
  </aside>
</template>

<script setup>
import FormAddItem from "@/components/TheControls/FormAddItem";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
.controls {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20.75rem;

  &__title h2 {
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.75rem;
    line-height: 1.25em;
  }
}
</style>
