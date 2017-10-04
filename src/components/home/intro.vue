<template>
  <div class="home-intro wrapper">
    <div class="container">
      <div class="col-sm-10 col-sm-offset-2">
        <h1>
          Willkommen in der carplus Vorteilswelt
        </h1>
        <h2>
          carplus ist der perfekte Partner des Kfz-Gewerbes rund um Versicherungsangelegenheiten.
          Die carplus Branchenspezialisten bieten zusammen mit den Experten der
          Wiener Städtischen Versicherung ein einzigartiges Servicenetz für Autohäuser
          und deren Kunden. carplus-Autohauspartner verfügen damit über viele exklusive
          Produkt- und Servicevorteile. So wird Ihr Autohaus zur Vorteilswelt.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-intro'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .home-intro {
    // @include rem((padding: 60px 0));
    background: $color-white;
    h1 {
      @include rem(font-size, 36px);
      // @include rem((padding: 20px 0));
      color: $color-red-carplus;
      font-weight: bold;
    }
    h2 {
      @include rem(font-size, 26px);
    }
  }
</style>
