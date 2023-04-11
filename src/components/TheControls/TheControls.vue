<template>
  <aside class="controls">
    <header class="controls__title">
      <h2>Добавление товара</h2>
    </header>
    <form class="form_add-item">
      <v-text-field
        v-model="itemForm.name"
        label="Наименование товара"
        placeholder="Введите наименование товара"
        required
      />
      <v-text-field
        field-type="textarea"
        v-model="itemForm.description"
        label="Описание товара"
        placeholder="Введите описание товара"
        error
      />
      <v-text-field
        v-model="itemForm.image"
        label="Ссылка на изображение товара"
        placeholder="Введите ссылку"
        required
      />
      <v-text-field v-model="itemForm.price" label="Цена товара" placeholder="Введите цену" required />
      <v-button label="Добавить товар" submitButton />
    </form>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import VTextField from "@/components/VTextField";
import VButton from "@/components/VButton";

const itemForm = ref({ name: "", description: "", image: "", price: "" });
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

.form_add-item {
  position: sticky;
  top: 1.5rem;
  padding: 1.5rem;
  @include card;

  @media (max-height: 460px) {
    position: inherit;
  }
}
</style>
