<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  background-color: #f5f5f5;
}

h1,h2,h3,h4,h5,h6,figure,figcaption {
  margin: 0;
  padding: 0;
}

li{
  list-style: none;
}
</style>
