<template>
  <form class="form_add-item" @submit.prevent="submitForm">
    <v-text-field
      v-model="formModel.name.value"
      v-model:error="formModel.name.error"
      v-model:touched="formModel.name.touched"
      :validation="[validations.required]"
      label="Наименование товара"
      placeholder="Введите наименование товара"
      required
    />
    <v-text-field
      field-type="textarea"
      v-model="formModel.description.value"
      v-model:error="formModel.description.error"
      v-model:touched="formModel.description.touched"
      :validation="[]"
      label="Описание товара"
      placeholder="Введите описание товара"
    />
    <v-text-field
      v-model="formModel.image.value"
      v-model:error="formModel.image.error"
      v-model:touched="formModel.image.touched"
      :validation="[validations.required]"
      label="Ссылка на изображение товара"
      placeholder="Введите ссылку"
      required
    />
    <v-text-field
      v-model.format="formModel.price.value"
      v-model:error="formModel.price.error"
      v-model:touched="formModel.price.touched"
      :validation="[validations.required, validations.isNumber]"
      label="Цена товара"
      placeholder="Введите цену"
      :format="format.price"
      required
    />
    <v-button label="Добавить товар" submitButton :disabled="!isFormValid || isLoading" />
  </form>
</template>

<script setup>
import { validations, format } from "@/components/TheControls/FormAddItem/helpers";
import VTextField from "@/components/VTextField";
import VButton from "@/components/VButton";
import { useFetchData, useFormModel } from "@/components/hooks";

const initialForm = { name: "", description: "", image: "", price: "" };
const { formModel, getFormValues, isFormValid, resetForm } = useFormModel(initialForm);

const { addItem, isLoading } = useFetchData();
const submitForm = () => {
  if (!isFormValid.value) return;
  addItem(getFormValues());
  resetForm();
};
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
