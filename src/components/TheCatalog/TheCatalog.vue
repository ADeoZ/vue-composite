<template>
  <section class="catalog">
    <div class="catalog__controls">
      <catalog-sort />
    </div>
    <ul class="catalog__list">
      <catalog-item />
    </ul>
  </section>
</template>

<script>
import CatalogSort from '@/components/TheCatalog/CatalogSort';
import CatalogItem from '@/components/TheCatalog/CatalogItem';

export default {
  components: { CatalogSort, CatalogItem },

  name: "TheCatalog",
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
