<template>
  <div class="container">
    <div>hello world</div>
    <div>hello world</div>
    <img src="./assets/test.png" alt />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(process.env.NODE_ENV)
    Object.assign({ a: 1 })
  }
}
</script>

<style>
</style>