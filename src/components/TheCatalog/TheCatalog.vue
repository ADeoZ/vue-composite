<template>
  <section class="catalog">
    <div class="catalog__controls">
      <catalog-sort v-model="selectedSort" :options="sortOptions" />
    </div>
    <ul class="catalog__list">
      <catalog-item v-for="item in sortedList" :item="item" :key="item.id" @delete="deleteItem" />
    </ul>
  </section>
</template>

<script setup>
// сделать preloader
// сохранение списка в localStorage
import { onMounted, ref } from "vue";
import { getItemList } from "@/api/catalogAPI";
import CatalogSort from "@/components/TheCatalog/CatalogSort";
import CatalogItem from "@/components/TheCatalog/CatalogItem";
import { useSort } from "@/components/TheCatalog/hooks";

const itemList = ref([]);
const { sortOptions, selectedSort, sortedList } = useSort(itemList);

const deleteItem = (deleteId) => {
  const itemIndex = itemList.value.findIndex((item) => item.id === deleteId);
  itemList.value.splice(itemIndex, 1);
};

const fetchItemList = async () => {
  try {
    const response = await getItemList();
    itemList.value = response;
  } catch (e) {
    console.error("Ошибка загрузки");
  }
};
onMounted(fetchItemList);
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
