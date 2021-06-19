<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
#app {
  font-family: "Rubik";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;
  margin-top: 60px;*/
}
</style>
