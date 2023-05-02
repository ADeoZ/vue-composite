<template>
  <section class="catalog">
    <div class="catalog__controls">
      <catalog-sort v-model="selectedSort" :options="sortOptions" />
    </div>
    <preloader-content v-if="isLoading" />
    <transition-group name="list-item" tag="ul" class="catalog__list" v-else>
      <catalog-item v-for="item in sortedList" :item="item" :key="item.id" @delete="deleteItem" />
    </transition-group>
  </section>
</template>

<script setup>
import CatalogSort from "@/components/TheCatalog/CatalogSort";
import CatalogItem from "@/components/TheCatalog/CatalogItem";
import PreloaderContent from "@/components/PreloaderContent";
import { useFetchData, useSort } from "@/components/hooks";

const { itemList, isLoading, deleteItem } = useFetchData();
const { sortOptions, selectedSort, sortedList } = useSort(itemList);
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
