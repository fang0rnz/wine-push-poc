<template>
  <div class="hello">
    <h1 class="title">Piña colada push notifications POC</h1>
    <span class="pinacolada-glass" role="img">🍹</span>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.title {
  text-align: center;
}

.pinacolada-glass {
  font-size: 200px;
  vertical-align: middle;
  line-height: 2;
}
</style>
