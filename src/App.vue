<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import NavMenu from "./components/common/NavMenu.vue";

export default {
  name: 'App',
  components: {NavMenu}
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 10px;*/
  background: url("/src/assets/bg.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

</style>
