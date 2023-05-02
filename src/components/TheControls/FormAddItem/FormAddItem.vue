<template>
  <form class="form_add-item" @submit.prevent="submitForm">
    <v-text-field
      v-model="formModel.name"
      :validation="[validations.required]"
      label="Наименование товара"
      placeholder="Введите наименование товара"
      required
    />
    <v-text-field
      field-type="textarea"
      v-model="formModel.description"
      :validation="[]"
      label="Описание товара"
      placeholder="Введите описание товара"
    />
    <v-text-field
      v-model="formModel.image"
      :validation="[validations.required]"
      label="Ссылка на изображение товара"
      placeholder="Введите ссылку"
      required
    />
    <v-text-field
      v-model="formModel.price"
      :validation="[validations.required, validations.isNumber]"
      label="Цена товара"
      placeholder="Введите цену"
      :format="format.price"
      required
    />
    <transition name="mode-shake" mode="out-in">
      <v-button class="form__status" label="&#128077;&#127995;" disabled v-if="showStatus" />
      <v-button label="Добавить товар" submitButton :disabled="!isFormValid || isLoading" v-else />
    </transition>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { validations, format } from "@/components/TheControls/FormAddItem/helpers";
import VTextField from "@/components/VTextField";
import VButton from "@/components/VButton";
import { useFetchData, useFormModel } from "@/components/hooks";

const initialForm = { name: "", description: "", image: "", price: "" };
const { formModel, getFormValues, isFormValid, resetForm } = useFormModel(initialForm);

const showStatus = ref(false);
const setSuccessStatus = () => {
  showStatus.value = true;
  setTimeout(() => (showStatus.value = false), 3000);
};

const { addItem, isLoading } = useFetchData();
const submitForm = () => {
  if (!isFormValid.value) return;
  addItem(getFormValues());
  setSuccessStatus();
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

  & .form__status {
    background-color: $yellow;
    cursor: default;
  }
}
</style>
