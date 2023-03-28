<template>
  <section class="catalog">
    <div class="catalog__controls">
      <catalog-sort v-model="selectedSort" :options="sortOptions" />
    </div>
    <preloader-content v-if="isLoading" />
    <ul class="catalog__list" v-else>
      <catalog-item v-for="item in sortedList" :item="item" :key="item.id" @delete="deleteItem" />
    </ul>
  </section>
</template>

<script setup>
// сделать preloader
import { onMounted } from "vue";
import { getItemList } from "@/api/catalogAPI";
import CatalogSort from "@/components/TheCatalog/CatalogSort";
import CatalogItem from "@/components/TheCatalog/CatalogItem";
import PreloaderContent from "@/components/PreloaderContent";
import { useFetchData, useSort } from "@/components/TheCatalog/hooks";

const { fetchData, data: itemList, isLoading } = useFetchData(getItemList, "catalog");
const { sortOptions, selectedSort, sortedList } = useSort(itemList);

onMounted(fetchData);

const deleteItem = (deleteId) => {
  itemList.value = itemList.value.filter((item) => item.id !== deleteId );
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
