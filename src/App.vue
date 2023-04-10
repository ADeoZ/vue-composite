<template>
  <main class="main">
    <the-controls />
    <the-catalog />
  </main>
</template>

<script>
import TheCatalog from "@/components/TheCatalog";
import TheControls from "@/components/TheControls";

export default {
  name: "App",

  components: { TheCatalog, TheControls },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.main {
  @include flex(left, stretch);
  gap: 1rem;
  padding: 2rem 2rem;

  @include media_undo("tablet-small") {
    flex-direction: column;
    align-items: center;
  }

  @include media_undo("phone") {
    padding: 1rem 1rem;
  }
}
</style>
