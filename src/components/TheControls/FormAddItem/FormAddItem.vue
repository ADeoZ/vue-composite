<template>
  <form class="form_add-item" @submit.prevent="submitForm">
    <v-text-field
      v-model="itemsForm.name"
      v-model:error="errorsForm.name"
      :validation="[validations.required]"
      label="Наименование товара"
      placeholder="Введите наименование товара"
      required
    />
    <v-text-field
      field-type="textarea"
      v-model="itemsForm.description"
      label="Описание товара"
      placeholder="Введите описание товара"
    />
    <v-text-field
      v-model="itemsForm.image"
      v-model:error="errorsForm.image"
      :validation="[validations.required]"
      label="Ссылка на изображение товара"
      placeholder="Введите ссылку"
      required
    />
    <v-text-field
      v-model.format="itemsForm.price"
      v-model:error="errorsForm.price"
      :validation="[validations.required, validations.isNumber]"
      label="Цена товара"
      placeholder="Введите цену"
      :format="format.price"
      required
    />
    <v-button label="Добавить товар" submitButton :disabled="isValidForm" />
  </form>
</template>

<script setup>
import { computed, ref } from "vue";
import { validations, format } from "@/components/TheControls/FormAddItem/helpers";
import VTextField from "@/components/VTextField";
import VButton from "@/components/VButton";
import { useFetchData } from "@/components/hooks";

const itemsForm = ref({ name: "", description: "", image: "", price: "" });
const errorsForm = ref({ name: true, image: true, price: true });
const isValidForm = computed(() => Object.values(errorsForm.value).some(Boolean));

const { addItem } = useFetchData();
const submitForm = () => addItem(itemsForm);
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
