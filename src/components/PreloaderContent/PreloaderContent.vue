<template>
  <div class="preloader">
    <div class="preloader__bar">
      <div class="preloader__runner"></div>
      <div class="preloader__runner"></div>
      <div class="preloader__runner"></div>
      <div class="preloader__runner"></div>
      <div class="preloader__runner"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
.preloader {
  @include flex();
  width: 100%;
  height: 100%;

  &__bar {
    width: 100%;
    max-width: 20rem;
    height: 1.5rem;
    margin: 2rem 0;
    border: 1px solid $font-form;
    border-radius: 0.625rem;
    background: $focused;
    box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
  }

  &__bar > &__runner {
    height: 100%;
    background-color: lighter($focused, 3);
    position: absolute;
    transform: skewX(-20deg);
    animation: run 800ms ease-in-out infinite alternate;
  }

  @for $i from 1 through 5 {
    &__runner:nth-child(#{$i}) {
      width: $i * 1rem;
      left: $i * -1.1rem;
      background-color: lighter($focused, $i);
      animation-delay: $i * 200ms;
    }
  }

  @keyframes run {
    100% {
      left: 100%;
    }
  }
}
</style>
