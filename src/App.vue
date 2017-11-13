<template>
  <div id="app">
    <b-container>
      <app-header></app-header>
      <router-view></router-view>
      <!-- <app-footer></app-footer> -->
    </b-container>
  </div>
</template>

<script>
    import Vue from 'vue'
    import AppHeader from '@/components/app/header'
    import AppFooter from '@/components/app/footer'

    export default {
      name: 'app',
      components: { AppHeader, AppFooter }
    }
</script>

<style lang="scss">
    @import "./styles/util/color.scss";

    body,
    html {
        overflow-x: hidden;
        overflow-y: auto;
    }
    html {
        @include rem(font-size, 18px);
        -webkit-font-smoothing: antialiased;
        position: relative;
        min-height: 100%;
    }
    body {
        // @include rem((padding-top: 80px));
        font-family: $font-regular, "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
        color: $color-black-medium;
        background: $color-background;
    }
    .container {
        @include rem((padding: 0));
    }
    @media (min-width: 1200px) {
        .container {
            max-width: 1600px;
            width: 100%;
        }
    }
    %button {
        @include rem(font-size, 14px);
        @include rem((padding-top: 0 10px));
        background: none;
        text-transform: uppercase;
        font-weight: bold;
        border: none;
        opacity: 0.8;
        color: inherit;
        line-height: 36px;
        display: inline-block;
        height: auto;
        cursor: pointer;
        &:hover {
            opacity: 1;
            text-decoration: inherit;
        }
    }
    span.two {
        color: $color-red-carplus;
    }
    hr {
        @include rem((margin: 20px 0));
        border-top: 1px solid $color-gray-light;
    }
</style>
