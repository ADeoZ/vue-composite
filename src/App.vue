<template>
  <main class="main">
    <aside class="controls">
      <header class="controls__title"><h2>Добавление товара</h2></header>
      <form class="form_add-item">
        <label class="form__label form__label_required">
          <div class="form__label__text">Наименование товара</div>
          <input
            type="text"
            name="item-name"
            placeholder="Введите наименование товара"
            class="form__input form__invalid"
          />
          <div class="form__error">Поле является обязательным</div>
        </label>
        <label class="form__label">
          <div class="form__label__text">Описание товара</div>
          <textarea
            name="item-description"
            placeholder="Введите описание товара"
            class="form__textarea form__invalid"
          ></textarea>
          <div class="form__error">Поле является обязательным</div>
        </label>
        <label class="form__label form__label_required">
          <div class="form__label__text">Ссылка на изображение товара</div>
          <input type="text" name="item-image" placeholder="Введите ссылку" class="form__input" />
          <div class="form__error">Поле является обязательным</div>
        </label>
        <label class="form__label form__label_required">
          <div class="form__label__text">Цена товара</div>
          <input type="text" name="item-price" placeholder="Введите цену" class="form__input" />
          <div class="form__error"></div>
        </label>
        <button class="form__button" type="submit">Добавить товар</button>
      </form>
    </aside>
    <the-catalog />
  </main>
</template>

<script>
import TheCatalog from "@/components/TheCatalog";

export default {
  name: "App",

  components: { TheCatalog },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.main {
  @include flex(left, stretch);
  gap: 1rem;
  padding: 2rem 2rem;

  @include media_undo("tablet-small") {
    flex-direction: column;
    align-items: center;
  }

  @include media_undo("phone") {
    padding: 1rem 1rem;
  }
}

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
