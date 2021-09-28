<template>
  <div>
    <div class="comic-list">
      <comic-list-item v-for="(comic, index) in comics" :key="index" :comic="comic"/>
    </div>
    <div class="comic-list__nav">
      <button :disabled="page === 1" @click="$emit('handlePreview')" :class="page === 1&&'comic-list__button-nav--disabled'" class="comic-list__button-nav">
        <font-awesome-icon icon="angle-left"/>
      </button>
      <button :disabled="page === totalPages" @click="$emit('handleNext')" :class="page === totalPages&&'comic-list__button-nav--disabled'"  class="comic-list__button-nav">
        <font-awesome-icon icon="angle-right"/>
      </button>
    </div>   
  </div>
</template>
<script>
import ComicListItem from './ComicListItme.vue'
import { mapGetters} from "vuex"
export default {
  props:{
    comics: Array,
    page: Number,
  },
  components:{
    ComicListItem
  },
  computed: {
    ...mapGetters([
      'totalPages'
    ])
  }
}
</script>
<style lang="scss">
  .comic-list {
    max-width: 72rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: max-content;
    padding: 1rem;
    grid-gap: 2.5rem;
    justify-content: center;
    &__nav {
      display: flex;
      justify-content: space-between;
      margin: 2rem auto 0;
      width: 6rem;
    }
    &__button-nav {
      color: #DC0000;
      border: 2px solid #DC0000;
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &--disabled {
        cursor: auto;
        color: #999;
        border-color: #999;

      }
    }
  }
  @media screen and (min-width: 640px) {
    .comic-list {
      grid-template-columns: repeat(2,max-content);
    }
  }
  @media screen and (min-width: 768px) {
    .comic-list {
      grid-template-columns: repeat(3,max-content);
    }
  }
  @media screen and (min-width: 1024px) {
    .comic-list {
      grid-template-columns: repeat(4,max-content);
    }
  }
</style>