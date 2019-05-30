<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="hihi">适配移动端</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus" scoped>
  h1{
    color red;
  }
  .hihi{
    width: 200px;
    height: 200px;
    font-size: 36px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid green;
  }
</style>


