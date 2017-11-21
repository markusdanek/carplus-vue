<template>
  <div>
    <hero></hero>
    <intro></intro>
    <press></press>
    <partner></partner>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Hero from '@/components/home/hero';
  import Intro from '@/components/home/intro';
  import Press from '@/components/home/press';
  import Partner from '@/components/home/partner';

  export default {
    name: 'home-layout',
    components: { Hero, Intro, Press, Partner }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .wrapper {
  	background: $color-white;
  }
</style>
