<template>
  <div class="container">
    <div>hello world</div>
    <div>hello world</div>
  </div>
</template>

<script>
import 'core-js/stable/object/assign'
export default {
  mounted() {
    console.log(process.env.NODE_ENV)
    Object.assign({ a: 1 })
  }
}
</script>

<style>
</style>