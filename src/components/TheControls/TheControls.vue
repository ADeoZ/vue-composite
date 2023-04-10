<template>
  <aside class="controls">
    <header class="controls__title"><h2>Добавление товара</h2></header>
    <form class="form_add-item">
      <v-text-field v-model="itemForm.name" label="Наименование товара" placeholder="Введите наименование товара" required />      
      <label class="form__label">
        <div class="form__label__text">Описание товара</div>
        <textarea
          name="item-description"
          placeholder="Введите описание товара"
          class="form__textarea form__invalid"
        ></textarea>
        <div class="form__error">Поле является обязательным</div>
      </label>
      <v-text-field v-model="itemForm.image" label="Ссылка на изображение товара" placeholder="Введите ссылку" required />
      <v-text-field v-model="itemForm.price" label="Цена товара" placeholder="Введите цену" required />
      <button class="form__button" type="submit">Добавить товар</button>
    </form>
  </aside>
</template>

<script setup>
import { ref } from "vue";
import { VTextField } from "@/components/Inputs";

const itemForm = ref({ name: "", image: "", price: "" });
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

.form {
  &__label {
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

  &__input,
  &__textarea {
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

  &__textarea {
    display: block;
    height: 6.75rem;
    resize: none;
  }

  &__invalid {
    margin-bottom: 0.25rem;
    outline: 1px solid $salmon;
  }

  &__error {
    display: none;
    min-height: 0.625rem;
    margin-bottom: 0.125rem;
    overflow: auto;
    font-size: 0.5rem;
    line-height: 1.25em;
    letter-spacing: -0.02em;
    color: $salmon;
  }

  &__invalid + &__error {
    display: block;
  }

  &__button {
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

    &:focus {
      @include focused;
    }

    &:hover {
      background-color: darker($green, 1);
    }

    &:active {
      background-color: lighter($green, 1);
    }
  }
}
</style>
