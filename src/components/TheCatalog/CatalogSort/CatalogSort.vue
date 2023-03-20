<template>
  <div class="sort">
    <select class="sort__select">
      <option>По наименованию</option>
      <option>По цене min</option>
      <option>По цене max</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CatalogSort",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
.sort {
  position: relative;

  &__select {
    padding: 0.625rem 1rem;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: 0.75rem;
    line-height: 1.25em;
    color: $font-main;
    @include select-arrow(1rem, $font-main);
    background-color: $whitey;
    box-shadow: 0 0.125rem 0.3125rem rgba(0, 0, 0, 0.1);
    border-radius: $bradius;
    cursor: pointer;
    transition: background-color 0.2s ease-in;

    &:disabled {
      color: $font-disabled;
      @include select-arrow(1rem, $font-disabled);
    }

    &:focus {
      @include focused;
    }

    &:hover {
      background-color: darker($creamy, 1);
    }
  }
}
</style>
