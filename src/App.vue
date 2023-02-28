<template>
  <main class="main">
    <aside class="controls">
      <header class="controls__title"><h2>Добавление товара</h2></header>
      <form class="form_add-item">
        <label
          >Наименование товара<input
            type="text"
            name="item-name"
            placeholder="Введите наименование товара"
            class="form__input"
        /></label>
        <label
          >Описание товара<textarea
            name="item-description"
            placeholder="Введите описание товара"
            class="form__textarea"
          ></textarea>
        </label>
        <label
          >Ссылка на изображение товара<input
            type="text"
            name="item-image"
            placeholder="Введите ссылку"
            class="form__input"
        /></label>
        <label
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
            <img src="@/assets/images/photo.png" alt="Фото товара">
          </div>
          <header class="item__name">Наименование товара</header>
          <div class="item__description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
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
</style>
