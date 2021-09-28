<template>
  <div class="error">
    <h1 class="error__code">{{error.status}}</h1>
    <h3 class="error__message">{{error.statusText}}</h3>
  </div>
</template>
<script>
export default {
  props:{
    error:Object
  }
}
</script>
<style lang="scss">
  .error {
    color: #CCC;
    text-align: center;
    &__code {
      font-size: 10rem;
    }
    &__message {
      font-size: 2rem;
    }
  }
</style>