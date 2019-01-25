<template>
  <div class="hello">
    <h1 class="title">Wine push notifications POC</h1>
    <span class="wine-glass" role="img">🍷</span>
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

.wine-glass {
  font-size: 200px;
  vertical-align: middle;
  line-height: 2;
}
</style>
