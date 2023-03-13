<template>
  <main class="main">
    <aside class="controls">
      <header class="controls__title"><h2>Добавление товара</h2></header>
      <form class="form_add-item">
        <label class="form__label form__label_required">
          <div>Наименование товара</div>
          <input type="text" name="item-name" placeholder="Введите наименование товара" class="form__input" />
        </label>
        <label class="form__label">
          <div>Описание товара</div>
          <textarea
            name="item-description"
            placeholder="Введите описание товара"
            class="form__textarea"
          ></textarea>
        </label>
        <label class="form__label form__label_required">
          <div>Ссылка на изображение товара</div>
          <input type="text" name="item-image" placeholder="Введите ссылку" class="form__input" />
        </label>
        <label class="form__label form__label_required">
          <div>Цена товара</div>
          <input type="text" name="item-price" placeholder="Введите цену" class="form__input" />
        </label>
        <button class="form__button" type="submit">Добавить товар</button>
      </form>
    </aside>
    <section class="catalog">
      <div class="catalog__controls">
        <div class="catalog__sort sort">
          <select class="sort__select">
            <option>По наименованию</option>
            <option>По цене min</option>
            <option>По цене max</option>
          </select>
        </div>
      </div>
      <ul class="catalog__list">
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/70382.jpeg" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
        </li>
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/photo.png" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
        </li>
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/70382.jpeg" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
        </li>
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/photo.png" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
        </li>
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/70382.jpeg" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
        </li>
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/photo.png" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
        </li>
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/70382.jpeg" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
        </li>
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/photo.png" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
        </li>
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/70382.jpeg" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
        </li>
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/photo.png" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
        </li>
        <li class="catalog__item item">
          <div class="item__image">
            <img src="@/assets/images/photo.png" alt="Фото товара" />
          </div>
          <div class="item__content">
            <header class="item__name">Наименование товара</header>
            <div class="item__description">
              Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание
              товара в несколько строк
            </div>
            <div class="item__price">10 000 руб.</div>
            <div class="item__delete"><button></button></div>
          </div>
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
  @include flex(left, stretch);
  gap: 1rem;
  padding: 2rem 2rem;
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
}

.form {
  &__label {
    color: $font-form;
    font-size: 0.625rem;
    line-height: 1.3em;
    letter-spacing: -0.02em;

    & > div {
      display: inline-block;
      vertical-align: top;
      position: relative;

      // &::after {
      //   content: "";
      //   position: absolute;
      //   right: 0;
      //   width: 0.25rem;
      //   height: 0.25rem;
      //   border-radius: 50%;
      //   background-color: $salmon;
      // }
    }
  }

  &__input,
  &__textarea {
    width: 100%;
    margin: 0.25rem 0 1rem;
    padding: 0.625rem 1rem;
    background-color: $whitey;
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
    border-radius: $bradius;

    font-size: 0.75rem;
    line-height: 1.25em;
    color: $font-main;

    &::placeholder {
      color: $font-disabled;
    }
  }

  &__textarea {
    height: 6.75rem;
    resize: none;
  }

  &__button {
    width: 100%;
    margin-top: .5rem;
    padding: 0.625rem 0;
    @include button($green);
    font-family: "Inter", "Source Sans Pro", Verdana, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.25em;
    color: #ffffff;

    &:disabled {
      background-color: $button-disabled;
      color: $font-disabled;
    }
  }
}

.catalog {
  flex-grow: 1;

  &__controls {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, 20.75rem);
  }

  &__sort {
    grid-column: 1 / -1;
    justify-self: end;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 20.75rem);
    gap: 1rem;
    margin-top: 1rem;
  }

  &__item {
    display: flex;
    flex-direction: column;
    @include card;
    position: relative;
  }
}

.sort {
  position: relative;

  &__select {
    padding: 0.625rem 1rem;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25em;
    @include select-arrow(1rem);
    background-color: $whitey;
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
    border-radius: $bradius;
    cursor: pointer;

    &:disabled {
      color: $font-disabled;
      @include select-arrow(1rem, $font-disabled);
    }
  }
}

.item {
  &__image {
    height: 12.5rem;
    border-top-left-radius: $bradius;
    border-top-right-radius: $bradius;
    overflow: auto;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 1rem 1rem 1.5rem;
  }

  &__name {
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.25em;
  }

  &__description {
    flex-grow: 1;
    line-height: 1.25em;
  }

  &__price {
    margin-top: 2rem;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.25em;
  }

  &__delete {
    display: none;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 2rem;
    height: 2rem;
    @include button($salmon);

    button {
      width: 100%;
      height: 100%;
    }

    &::after {
      content: "";
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_4_349)'%3E%3Cpath d='M10.207 5.79688C9.99998 5.79688 9.83224 5.96462 9.83224 6.17158V13.2535C9.83224 13.4604 9.99998 13.6283 10.207 13.6283C10.4139 13.6283 10.5817 13.4604 10.5817 13.2535V6.17158C10.5817 5.96462 10.4139 5.79688 10.207 5.79688Z' fill='white'/%3E%3Cpath d='M5.78544 5.79688C5.57848 5.79688 5.41074 5.96462 5.41074 6.17158V13.2535C5.41074 13.4604 5.57848 13.6283 5.78544 13.6283C5.99241 13.6283 6.16015 13.4604 6.16015 13.2535V6.17158C6.16015 5.96462 5.99241 5.79688 5.78544 5.79688Z' fill='white'/%3E%3Cpath d='M2.56294 4.76335V13.9953C2.56294 14.541 2.76303 15.0534 3.11256 15.4211C3.46048 15.7898 3.94467 15.9991 4.4514 16H11.541C12.0478 15.9991 12.532 15.7898 12.8798 15.4211C13.2293 15.0534 13.4294 14.541 13.4294 13.9953V4.76335C14.1242 4.57893 14.5745 3.90768 14.4815 3.19471C14.3884 2.48189 13.7811 1.94867 13.0622 1.94852H11.1437V1.48014C11.1459 1.08626 10.9902 0.708039 10.7113 0.42979C10.4325 0.151688 10.0537 -0.0031709 9.65982 4.92333e-05H6.33255C5.93867 -0.0031709 5.55986 0.151688 5.28103 0.42979C5.00219 0.708039 4.84646 1.08626 4.84865 1.48014V1.94852H2.93019C2.21122 1.94867 1.60393 2.48189 1.51084 3.19471C1.4179 3.90768 1.86813 4.57893 2.56294 4.76335V4.76335ZM11.541 15.2506H4.4514C3.81075 15.2506 3.31236 14.7002 3.31236 13.9953V4.79629H12.68V13.9953C12.68 14.7002 12.1816 15.2506 11.541 15.2506ZM5.59806 1.48014C5.59558 1.28503 5.67227 1.09724 5.81074 0.959502C5.94906 0.821768 6.13729 0.746095 6.33255 0.749461H9.65982C9.85508 0.746095 10.0433 0.821768 10.1816 0.959502C10.3201 1.09709 10.3968 1.28503 10.3943 1.48014V1.94852H5.59806V1.48014ZM2.93019 2.69793H13.0622C13.4347 2.69793 13.7367 2.99989 13.7367 3.3724C13.7367 3.74491 13.4347 4.04687 13.0622 4.04687H2.93019C2.55768 4.04687 2.25571 3.74491 2.25571 3.3724C2.25571 2.99989 2.55768 2.69793 2.93019 2.69793V2.69793Z' fill='white'/%3E%3Cpath d='M7.9962 5.79688C7.78923 5.79688 7.62149 5.96462 7.62149 6.17158V13.2535C7.62149 13.4604 7.78923 13.6283 7.9962 13.6283C8.20317 13.6283 8.37091 13.4604 8.37091 13.2535V6.17158C8.37091 5.96462 8.20317 5.79688 7.9962 5.79688Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_4_349'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    }
  }

  &:hover &__delete {
    display: block;
  }
}
</style>
