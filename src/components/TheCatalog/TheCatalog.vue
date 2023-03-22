<template>
  <section class="catalog">
    <div class="catalog__controls">
      <catalog-sort :sortModel="selectedSort" :options="sortOptions" @update:sortModel="setSelectedSort" />
    </div>
    <ul class="catalog__list">
      <catalog-item v-for="item in sortedItemList" :item="item" :key="item.id" @delete="deleteItem" />
    </ul>
  </section>
</template>

<script>
// сделать preloader
// сохранение списка в localStorage
import { getItemList } from "@/api/catalogAPI";
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
    itemList: [],
  }),

  methods: {
    setSelectedSort(value) {
      this.selectedSort = value;
    },
    deleteItem(id) {
      const itemIndex = this.itemList.findIndex((item) => item.id === id);
      this.itemList.splice(itemIndex, 1);
    },
    async fetchItemList() {
      try {
        const response = await getItemList();
        this.itemList = response;
      } catch (e) {
        console.error("Ошибка загрузки");
      }
    },
  },

  computed: {
    sortedItemList() {
      const compare = {
        name: (a, b) => a.name.localeCompare(b.name),
        priceUp: (a, b) => a.price - b.price,
        priceDown: (a, b) => b.price - a.price,
      };
      return [...this.itemList].sort(compare[this.selectedSort || "name"]);
    },
  },

  mounted() {
    this.fetchItemList();
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
