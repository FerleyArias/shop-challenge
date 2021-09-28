<template>
  <li class="item">
    <router-link :to="`/comic/${comic.id}`" class="item__image-container">
      <img class="item__image" :src="comic.images.length === 0 ? 'https://via.placeholder.com/216x324' : `${comic.images[0].path}.${comic.images[0].extension}`" alt="">
    </router-link>
    <div class="item__content">
      <h4 class="item__title">{{comic.title}}</h4>
      <div>
        <p>Cantidad: {{comic.quantity}}</p>
        <p><b>price:</b> ${{selectPrice(comic.prices)}} USD</p>
      </div>
    </div>
    <button class="item__delete" @click="deleteCartItem(index)">
      <font-awesome-icon icon="times"/>
    </button>
  </li>
</template>

<script>
import { mapActions } from "vuex"
export default {
  props: {
    comic: Object,
    index: Number
  },
  methods: {
    ...mapActions([
      'deleteCartItem'
    ]),
    selectPrice(prices) {
      for(let i = 0; i < prices.length; i++) {
        if(prices[i].price != 0 || i === prices.length -1) {
          return prices[i].price
        }
      }
    }
  },
}
</script>

<style lang="scss">
  .item {
    display: flex;
    position: relative;
    border: 1px solid #EC0000;
    border-radius: .5rem;
    overflow: hidden;
    margin-bottom: 2rem;
    &__delete {
      position: absolute;
      top: 0;
      right: .3rem;
      padding: .3rem;
      cursor: pointer;
      z-index: 20;
      transition-duration: 300ms;
      transition-property: transform;
      &:hover {
        transition-duration: 300ms;
        transition-property: transform;
        transform: scale(1.4);
      }
    }
    &__image {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    &__image-container {
      display: flex;
      position: relative;
      min-height: 12rem;
      height: 100%;
      max-width: 7rem;
      width: 100%;
      overflow: hidden;
      box-shadow: 0 .1rem .6rem rgba($color: #000000, $alpha: .50);
      border-radius: .5rem;
    }
    &__title {
      color: #EC0000;
    }
    &__content {
      width: fit-content;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      padding: .5rem 1.1rem;
    }
  }
</style>