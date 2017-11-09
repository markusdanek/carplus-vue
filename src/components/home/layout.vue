<template>
  <div>
    <home-hero></home-hero>
    <home-intro></home-intro>
    <press-articles></press-articles>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Home_Hero from '@/components/home/hero'
  import Home_Intro from '@/components/home/intro'
  import Press_Articles from '@/components/home/press'
  Vue.component('home-hero', Home_Hero);
  Vue.component('home-intro', Home_Intro);
  Vue.component('press-articles', Press_Articles);

  export default {
    name: 'home-layout'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
