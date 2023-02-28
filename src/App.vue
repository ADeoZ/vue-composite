<template>
  <main class="main">
    <aside class="controls">
      <header class="controls__title"><h2>Добавление товара</h2></header>
      <form class="form_add-item">
        <label class="form__label"
          >Наименование товара<input
            type="text"
            name="item-name"
            placeholder="Введите наименование товара"
            class="form__input"
        /></label>
        <label class="form__label"
          >Описание товара<textarea
            name="item-description"
            placeholder="Введите описание товара"
            class="form__textarea"
          ></textarea>
        </label>
        <label class="form__label"
          >Ссылка на изображение товара<input
            type="text"
            name="item-image"
            placeholder="Введите ссылку"
            class="form__input"
        /></label>
        <label class="form__label"
          >Цена товара<input type="text" name="item-price" placeholder="Введите цену" class="form__input"
        /></label>
        <button type="submit">Добавить товар</button>
      </form>
    </aside>
    <section class="catalog">
      <div class="catalog__sort">
        <ul class="sort__options">
          <li>По наименованию</li>
          <li>По цене min</li>
          <li>По цене max</li>
        </ul>
      </div>
      <ul class="catalog__list">
        <li class="catalog__item">
          <div class="item__image">
            <img src="@/assets/images/photo.png" alt="Фото товара" />
          </div>
          <header class="item__name">Наименование товара</header>
          <div class="item__description">
            Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
            товара в несколько строк
          </div>
          <div class="item__price">10 000 руб.</div>
          <div class="item__delete"><button></button></div>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.main {
  @include flex(left);
  padding: 0 2rem;
}

.controls {
  @include flex;
  flex-direction: column;
  max-width: 20.75rem;
}

.form_add-item {
  padding: 1.5rem;
  @include card;
}

.form {
  &__label {
    color: $font-form;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 0.8125rem;
    letter-spacing: -0.02em;
  }
}
</style>
