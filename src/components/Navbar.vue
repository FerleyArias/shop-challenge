<template>
  <header class="header">
    <router-link class="logo" to="/">
      <img class="logo__image" :src="require('@/assets/Marvel_Logo.svg')" alt="Logo marvel">
    </router-link>
    <Cart/>
  </header>
</template>
<script>
import Cart from "@/components/Cart.vue"
export default {
  components: {
    Cart
  }
}
</script>
<style lang="scss">
  .header {
    top: 0;
    background: #333;
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    position: fixed;
    z-index: 30;
  }
  .logo {
    height: 3rem;
    &:focus {
      outline: 0;
    }
    &__image {
      height: 100%;
    }
  }
</style>