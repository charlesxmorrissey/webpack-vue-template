<template>
  <div class="hello">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Hello',
}
</script>

<style scoped>
.hello {
  background: red;
}
</style>
