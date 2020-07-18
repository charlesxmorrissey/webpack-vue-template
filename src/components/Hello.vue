<template>
  <div :class="$style.hello">
    <slot />
    <p class="hello-emphasize">Hello text</p>
    <p class="hello-text">Hello text</p>
  </div>
</template>

<script>
export default {
  name: 'Hello',
}
</script>

// Example of using CSS Modules
<style module>
.underline {
  text-decoration: underline;
}

.hello {
  composes: underline;
  composes: defaultPadding from '../assets/css/shared.css';

  background: lavender;

  @media (--viewport-medium) {
    background: var(--bgColor);
  }
}
</style>

// Example of using Scoped Styles
<style scoped>
.hello-emphasize {
  color: orange;

  @media (--viewport-medium) {
    color: lime;
  }
}
</style>

// Example of using plain CSS
<style>
.hello-text {
  color: green;

  @media (--viewport-medium) {
    color: var(--mainColor);
  }
}
</style>
