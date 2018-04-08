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
