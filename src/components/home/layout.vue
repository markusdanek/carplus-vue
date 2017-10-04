<template>
  <div>
    <home-hero></home-hero>
    <home-intro></home-intro>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Home_Hero from '@/components/home/hero'
  import Home_Intro from '@/components/home/intro'
  Vue.component('home-hero', Home_Hero);
  Vue.component('home-intro', Home_Intro);

  export default {
    name: 'impress'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
