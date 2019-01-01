<template>
  <main class="app">
    <Hello>
      <h1>Hello World</h1>
    </Hello>
  </main>
</template>

<script>
import Hello from 'components/Hello'

export default {
  name: 'App',

  components: {
    Hello,
  },
}
</script>
