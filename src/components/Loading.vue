<template>
  <div class="spinner"/>
</template>
<style lang="scss">
.spinner {
  animation-duration: 800ms;
  border: 5px solid #DC0000;
  border-top-color: transparent;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: spinner;
  margin: 0 auto;
}
@keyframes spinner {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>