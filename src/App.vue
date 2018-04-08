<template>
  <main>
    <router-view />
  </main>
</template>

<style>
@import-normalize;

@custom-media --viewport-medium (max-width: 1000px);

.center-content {
  align-items: center;
  background: var(--bgColor);
  display: flex;
  justify-content: center;
  flex-direction: column;;

  @media (--viewport-medium) {
    background: var(--mainColor);
  }
}
</style>
