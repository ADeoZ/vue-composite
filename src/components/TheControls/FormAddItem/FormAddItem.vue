<template>
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
</template>

<script setup>
import { ref } from "vue";
import VTextField from "@/components/VTextField";
import VButton from "@/components/VButton";

const itemForm = ref({ name: "", description: "", image: "", price: "" });
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
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
