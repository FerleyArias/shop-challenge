<template>
<div class="home__container">
  <div class="home">
    <h1 class="home__title">Marvel Comics</h1>
    <Loading v-if="loading || comics.length < page*20"/>
    <Error v-else-if="error" :error="error"/>
    <comic-list v-else :comics="comics.slice((page-1)*20, page*20)" :page="page" @handleNext="nextPage" @handlePreview="previewPage"/>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Loading from "@/components/Loading.vue"
import Error from "@/components/Error.vue"
import ComicList from "@/components/ComicList.vue"

export default {
  data() {
    return {
      page: 1
    }
  },
  name: 'Home',
  components: {
    Loading,
    Error,
    ComicList
  },
  metaInfo: {
    title: "Marvel Comics"
  },
  methods: {
    ...mapActions([
      'getComics'
    ]),
    nextPage(){
      this.page++
      if(this.page*20 > this.comics.length){
        this.getComics((this.page-1) *20)
      }
    },
    previewPage(){
      this.page--
    }
  },
  computed: {
    ...mapState([
      'comics',
      'total',
      'loading',
      'error',
    ]),
    totalPages(){
      return Math.ceil(this.total/20)
    }
  },
  mounted(){
    if(this.comics.length === 0) {
      this.getComics(0)
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  &__title {
    text-align: center;
    color: #DC0000;
    font-size: 5rem;
    margin-bottom: 3rem;
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
