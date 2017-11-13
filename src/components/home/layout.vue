<template>
  <div>
    <home-hero></home-hero>
    <home-intro></home-intro>
    <home-press></home-press>
  </div>
</template>

<script>
  import Vue from 'vue'
  import HomeHero from '@/components/home/hero'
  import HomeIntro from '@/components/home/intro'
  import HomePress from '@/components/home/press'

  export default {
    name: 'home-layout',
    components: { HomeHero, HomeIntro, HomePress }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
