<template>
  <div class="full-width center-content">
    <router-view />
  </div>
</template>

<style>
@import-normalize;

@custom-media --viewport-medium (max-width: 1000px);

.full-width: {
  width: 100%;
}

.center-content {
  align-items: center;
  background: var(--bgColor);
  display: flex;
  justify-content: center;
  flex-direction: column;;
  transform: translate3d(0, 0, 100px);

  @media (--viewport-medium) {
    background: #ccc;
  }
}
</style>
