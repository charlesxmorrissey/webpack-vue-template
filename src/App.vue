<template>
  <div class="full-width center-content">
    <hello>
      <h1>Hello World!</h1>
    </hello>
    <p v-html="text" />
  </div>
</template>

<script>
import Hello from 'components/Hello'

export default {
  components: {
    Hello,
  },
  data () {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <a href="#">incididunt ut</a> labore et dolore magna aliqua. Ut enim ad minim veniam.',
    }
  },
}
</script>

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
