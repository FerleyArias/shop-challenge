<template>
  <div class="comic__container">
    <Loading v-if="loading || !comic"/>
    <div v-else class="comic">
      <h1 class="comic__title comic__title--top">{{comic && comic.title}}</h1>
      <div class="comic__image-container">
        <img class="comic__image" :src="comic && comic.images.length === 0 ? 'https://via.placeholder.com/216x324' : `${comic && comic.images[0].path}.${comic && comic.images[0].extension}`" alt="">
      </div>
      <div class="comic__content">
        <h1 class="comic__title">{{comic && comic.title}}</h1>
        <p class="comic__section">{{comic && comic.description}}</p>
        <div v-if="selectPrice(comic && comic.prices) != 0">
          <p class="comic__section"><b>Precio:</b> ${{selectPrice(comic && comic.prices)}} USD</p>
          <p>Cantidad:</p>
          <div class="comic-quantity">
            <button @click="()=>{count--}" class="comic-quantity__button" :disabled="count === 0">
              <font-awesome-icon icon="minus"/>
            </button>
            <p class="comic-quantity__value">{{count}}</p>
            <button @click="()=>{count++}" class="comic-quantity__button" :disabled="count === 10">
              <font-awesome-icon icon="plus"/>
            </button>
          </div>
          <button @click="addComic" class="comic__buy-button">añadir al carrito</button>
        </div>
        <h4 v-else class="comic__expire">No esta a la venta</h4>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue"
import { mapState, mapActions } from 'vuex'
import { getComicById } from '@/api'

export default {
  metaInfo: {
    title: "Marvel Comics"
  },
  components: {
    Loading
  },
  data() {
    return {
      comic: null,
      error: null,
      loading: false,
      count: 1,
    }
  },
  methods: {
    ...mapActions([
      'addCartItem'
    ]),
    addComic() {
      this.comic.quantity = this.count
      this.addCartItem(this.comic)
      this.$router.push('/')
    },
    async getComic() {
      this.loading = true
      let loaded = this.comics.findIndex(({id})=>{
        return id === this.$route.params.id
      })
      if(loaded != -1) {
        this.comic = this.comics[loaded]
        this.loading = false
        return
      }
      try {
        const data = await getComicById(this.$route.params.id)
        this.comic = data.data.results[0]
        this.loading = false
      } catch (error) {
        if(error.status === 400) {
          this.$router.push('/notFound')
        }
        this.loading = false
        this.error = error
      }
    },
    selectPrice(prices) {
      for(let i = 0; i < prices.length; i++) {
        if(prices[i].price != 0 || i === prices.length -1) {
          return prices[i].price
        }
      }
    }
  },
  watch: {
    $route(preview, next) {
      if(preview.params.id != next.params.id) {
        this.getComic()
      }
    }
  },
  computed: {
    ...mapState([
      'comics',
    ]),
  },
  mounted(){
    this.getComic()
  }

}
</script>

<style lang="scss">
.comic {
  padding: 0 2rem;
  max-width: 55rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  &__image-container {
    max-width: 20rem;
    width: 100%;
    height: min-content;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 1rem rgba($color: #000000, $alpha: .25);
  }
  &__image {
    width: 100%;
  }
  &__content {
    margin: 0 2rem;
    width: 100%;
  }
  &__title {
    text-align: center;
    color: #DC0000;
    display: none;
    &--top {
      display: block;
    }
  }
  &__section {
    margin: 1rem 0;
  }
  &__buy-button {
    border: 1px solid #DC0000;
    color: #DC0000;
    margin: 1rem 0;
    padding: .5rem 1rem;
    max-width: 10rem;
    width: 100%;
    border-radius: .3rem;
    cursor: pointer;
    transition-duration: 300ms;
    transition-property: transform;
    &:hover {
      transform: scale(1.2);
      transition-duration: 300ms;
      transition-property: transform;
    }
  }
  &__expire {
    text-align: center;
    font-size: 2rem;
  }
}
.comic-quantity {
  display: flex;
  &__button {
    cursor: pointer;
    border: 1px solid #CCC;
    margin: 0 .5rem;
    border-radius: .2rem;
  }
  &__value {
    border: 1px solid #CCC;
    width: 1.5rem;
    text-align: center;
    border-radius: .2rem;
  }
}

@media screen and (min-width: 640px) {
  .comic {
    align-items: flex-start;
    flex-direction: row;
    &__title {
      display: block;
      &--top {
        display: none;
      }
    }
  }
}
</style>