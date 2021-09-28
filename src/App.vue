<template>
  <div id="app">
    <navbar/>
    <main class="main">
      <router-view/>
    </main>
    <my-footer/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  components: {
    Navbar,
    MyFooter
  }
}
</script>

<style lang="scss">
// Importamos las fuentes de google fonts
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,700;1,400&display=swap");
* {
  box-sizing: border-box;
  margin: 0
}
button {
  border: 0;
  background-color: transparent;
  &:focus {
    outline: 0
  }
}
a {
  text-decoration: none;
  color: inherit;
}
html {
  font-family: Poppins;
  font-size: 15px;
}
body {
  background-color: #F8F8F8;
}
#app {
  position: relative;
  min-height: 100vh;
}
.main {
  padding-top: 7rem;
  padding-bottom: 7rem;
  min-height: 100vh;
}
</style>
