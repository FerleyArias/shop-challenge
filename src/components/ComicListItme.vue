<template>
  <router-link :to="`/comic/${comic.id}`" class="comic-item">
    <img class="comic-item__image" :src="comic.images.length === 0 ? 'https://via.placeholder.com/216x324' : `${comic && comic.images[0].path}.${comic && comic.images[0].extension}`" alt="">
    <div class="comic-item__information">
      <div class="comic-item__information-container">
        <h4 class="comic-item__title">{{comic.title}}</h4>
        <p class="comic-item__description">{{comic.description}}</p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props:{
    comic: Object
  }
}
</script>
<style lang="scss">
  .comic-item {
    box-shadow: 0 0 1rem rgba($color: #000000, $alpha: .25);
    background: yellow;
    max-width: 15rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    transition-property: transform;
    transition-duration: 100ms;
    &:hover {
      transform: scale(1.2);
      transition-property: transform;
      transition-duration: 100ms;
      & .comic-item__information {
        transition-duration: 300ms;
        transition-property: bottom;
        bottom: 0;
      }
    }
    &__image {
      width: 100%;
    }
    &__information {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: -100%;
      padding: 1rem;
      color: white;
      background: rgba($color: #000, $alpha: .50);
      transition-duration: 300ms;
      transition-property: bottom;
    }
    &__information-container {
      overflow: hidden;
      height: 100%;
    }
    &__title {
      text-align: center;
      font-size: 1.5rem;
    }
    &__description {
      overflow-wrap: break-word;
    }
  }
</style>