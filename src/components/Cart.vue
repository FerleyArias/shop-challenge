<template>
  <div class="cart">
    <button @click="()=>{visibleCart= !visibleCart}" class="cart__button">
      <font-awesome-icon icon="shopping-cart"/>
    </button>
    <div class="cart__card" :class="visibleCart&&'cart__card--visible'">
      <div class="cart__pointer"/>
      <div>
        <ul class="cart__container">
          <h3 class="cart__null" v-if="cart.length === 0">!Que esperas para añadir un nuevo Comic!</h3>
          <car-item v-else v-for="(comic,index) in cart" :index="index" :key="index" :comic="comic"/>
          <h3 v-show="cart.length != 0">Total: ${{totalCart.toFixed(2)}} USD</h3>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CarItem from './CartItem.vue'
import {mapState, mapGetters} from "vuex"
export default {
  data() {
    return {
      visibleCart: false
    }
  },
  components: {
    CarItem
  },
  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'totalCart'
    ])
  },
}
</script>

<style lang="scss">
  .cart {
    position: relative;
    &__null {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      height: min-content;
      text-align: center;
      width: 10rem;
    }
    &__button {
      background: #EC0000;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      color: #FFF;
      transition-duration: 400ms;
      cursor: pointer;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition-property: transform;
      &:hover {
        transform: scale(1.1);
        transition-duration: 400ms;
        transition-property: transform;
      }
    }
    &__card {
      right: -2rem;
      top: 3.5rem;
      position: absolute;
      background-color: white;
      box-shadow: 0 0 .5rem rgba($color: #000000, $alpha: .25);
      border-radius: .5rem;
      transition-duration: 300ms;
      transition-property: transform;
      transform: scaleY(0);
      transform-origin: center -.3rem;
      &--visible {
        transition-duration: 300ms;
        transition-property: transform;
        transform: scaleY(1);
      }
    }
    &__pointer {
      width: 1rem;
      height: 1rem;
      top: -.3rem;
      right: 3rem;
      transform: rotate(45deg);
      position: absolute;
      background-color: white;
    }
    &__container {
      color: black;
      position: relative;
      width: 25rem;
      height: 25rem;
      z-index: 10;
      padding: 1rem;
      overflow: auto;
      list-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  @media screen and (min-width: 640px) {
    .cart {
      &__card {
        right: 0;
      }
      &__pointer {
        right: 1rem;
      }
    }
  }
</style>