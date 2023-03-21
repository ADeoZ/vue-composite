<template>
  <section class="catalog">
    <div class="catalog__controls">
      <catalog-sort :sortModel="selectedSort" :options="sortOptions" @update:sortModel="setSelectedSort" />
    </div>
    {{ selectedSort }}
    <ul class="catalog__list">
      <catalog-item v-for="item in itemList" :item="item" :key="item.id" />
    </ul>
  </section>
</template>

<script>
import CatalogSort from "@/components/TheCatalog/CatalogSort";
import CatalogItem from "@/components/TheCatalog/CatalogItem";

export default {
  components: { CatalogSort, CatalogItem },

  name: "TheCatalog",

  data: () => ({
    sortOptions: [
      { label: "По наименованию", value: "name" },
      { label: "По цене min", value: "priceUp" },
      { label: "По цене max", value: "priceDown" },
    ],
    selectedSort: "",
    itemList: [
      {
        id: 0,
        image: "http://crazymama.ru/images/foto/70/70382.jpeg",
        name: "Наименование товара",
        description:
          "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
        price: 10000,
      },
    ],
  }),
  methods: {
    setSelectedSort(value) {
      this.selectedSort = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
.catalog {
  flex-grow: 1;

  &__controls {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, 20.75rem);

    @include media_undo("phone") {
      grid-template-columns: 1fr;
    }

    & > .sort {
      grid-column: 1 / -1;
      justify-self: end;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 20.75rem);
    gap: 1rem;
    margin-top: 1rem;

    @include media_undo("phone") {
      grid-template-columns: 1fr;
      max-width: 20.75rem;
    }

    & > .item {
      display: flex;
      flex-direction: column;
      @include card;
      position: relative;
    }
  }
}
</style>
